import React,{Component, Fragment} from "react";
import "./header.css";

class Header extends Component {

    constructor() {
        super()
        
        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    handleChange = (event) => {
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render() {
        return (
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <center>
                        <div>
                            <select id="dropdown">
                                <option value="name">Name</option>
                                <option value="description">Description</option>
                                <option value="uses">Uses</option>
                            </select>
                            <input id="input" onChange={this.handleChange}/>
                        </div>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                    <br/>
                </header>
            </Fragment>
        )
    }
}

export default Header;