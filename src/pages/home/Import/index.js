import { useState } from 'react';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Import({status,close}) {
    const [valueInput,setValueInput] = useState({
        name:"",
        link:"",
    })
    const ImportSong = () => {
        const fetchSong = async () => {
            const response = await fetch("/api/song",{
                method:"POST",
                body:JSON.stringify(valueInput),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.ok)
            {
                setValueInput({
                    name:"",
                    link:"",
                })
                toast.success('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else
            {
                toast.error('🦄 Import Failed !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }
        fetchSong();
    }
    return (
        <><ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        /> 
        <div className={`box-gray ${status === true && 'show-import'}`}>
            <div className={`Form-Import`}>
                <div className = "Form-Import-Title">
                    <p>Import Music</p>
                    <button onClick={close}>Close</button>
                </div>
                <div className="Form-Import-Content">
                    <input type="text" value={valueInput["name"]} placeholder='Please insert your song...' onInput={(e)=>{
                           setValueInput({
                            ...valueInput,
                            name:e.target.value
                        })
                    }}/>
                    <input type="text" value={valueInput["link"]} placeholder='Please insert your link...' onInput={(e)=>{
                        setValueInput({
                            ...valueInput,
                            link:e.target.value
                        })
                    }}/>
                </div>
                <div className="Form-Import-Button">
                    <button onClick={ImportSong}>Import</button>
                </div>
            </div>
            </div></>
     );
}

export default Import;