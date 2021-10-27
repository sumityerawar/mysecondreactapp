import React,{Component,Fragment} from "react";
import Header  from "./header";
import Footer from "./footer";
import ProductDisplay from "./productDisplay";
import JSON from "./db.json";


class Home extends React.Component {

    constructor(){
        super()

        this.state = {
            products : JSON
        }
    }

    render(){

        return(
            <React.Fragment>
                <Header/>
                <ProductDisplay productData={this.state.products}/>
                <Footer month='Oct' year='2021'/>
            </React.Fragment>
        )

    }

}

// const Home = () => {
//     return(
//         <React.Fragment>
//             <Header/>
//             <ProductDisplay/>
//             <Footer/>
//         </React.Fragment>
//     )
// }

export default Home;