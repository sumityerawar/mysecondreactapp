import React,{Component, Fragment} from "react";
// import "./header.css";

class Header extends React.Component {
    render() {
        const myStyle = {

            header: {
                backgroundColor: "teal"
            },

            logo: {
                textAlign: "center",
                fontSize: "30px",
                color: "white"
            }
        }
        return (
            <Fragment>
                <header style={myStyle.header}>
                    <div className="logo" style={myStyle.logo}>React App</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>User Text Here</div>
                    </center>
                    <br/>
                </header>

            </Fragment>
        )

    }

}

export default Header;