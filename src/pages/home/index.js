import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Layout from "../../components/layout";
import Import from "./Import";
import "./style.scss";
import { NavLink } from "react-router-dom";
import IconDelete from '../../images/icon-delete.png'
function Home() {
    const [openimport,setOpenImport] = useState(false)
    const [song,setSong] = useState([{name:"",link:""}])
    const [songCurrent,setSongCurrent] = useState(song[0])
    const [index,setIndex] = useState(0);
    const [load,setLoad] = useState(false)
    const OpenImport = () => {
        setOpenImport(true)
    }
    const CloseImport = () => {
        setOpenImport(false)
    }
    useEffect(()=>{
        const fetchSong = async () => {
            const response = await fetch("/api/song")
            const json = await response.json()
            if(response.ok)
            {
                setSong(json)
                setSongCurrent(json[0])
            }
        }
        fetchSong();
    },[load])
    const AutoNextSong = () =>{
        if(index !== song.length-1)
        {
            setSongCurrent(song[Number(index)+1])
            setIndex(Number(index)+1)
        }
        else
        {
            setSongCurrent(song[0])
            setIndex(0)
        }
    }
    const handleDelete = async() => {
        const response = await fetch('/api/song/' + song[index]._id,{
            method:'DELETE'
        })
        if(response.ok)
        {
            setLoad(!load)
            setIndex(index > 0 ? Number(index)-1 :index)
            alert('Delete success');
        }
    }
    return ( 
        <Layout>
            <Import status = {openimport} close = {CloseImport}/>
            <div className="box-music">
                <div className = "content-music">
                <ReactPlayer url={songCurrent.link} height={'100%'} controls = {true} playing={true} style = {{borderRadius:10}} onEnded = {AutoNextSong}/>
                </div>
            </div>
            <div className="list-music">
                <div className="list-music-title">
                    <p>Danh sách bài hát</p>
                    <button onClick={OpenImport}>Thêm bài</button>
                </div>
                <div className="list-music-content">
                {song.map((music,indexx) => (
                <NavLink to = {`/song/${music._id}`} className={`list-music-items ${index === indexx ? 'active' : ''}`} onClick={()=>{setSongCurrent({
                    name:music.name,
                    link:music.link
                })
                setIndex(indexx)
                }}>
                    <img src={`https://img.youtube.com/vi/${music.link !== "" && music.link.split("=")[1]}/3.jpg`} alt="preview" style = {{borderTopLeftRadius: 10, borderBottomLeftRadius:10}} height={100} width = {120}/>
                    <div className="list-music-items-title">
                        <p>{music.name}</p>
                    </div>
                    {index === indexx && <img src={IconDelete} className="list-music-content-btn-delete" alt="icon-delete" onClick={handleDelete}/>}
                </NavLink>
                ))}
                </div>    
            </div>
        </Layout>
     );
}
export default Home