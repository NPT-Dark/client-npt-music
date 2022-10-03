import { Component } from "react";
import "./layout.scss"
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div className="layout">
                <header>npt music</header>
                <div className = "content">
                {this.props.children}
                </div>
                <footer>made by dark</footer>
            </div>
        );
    }
}
 
export default Layout;