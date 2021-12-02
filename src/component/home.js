import React,{Component,Fragment} from "react";
import Header  from "./header";
import Footer from "./footer";
import ProductDisplay from "./productDisplay";
import JSON from "./db.json";

class Home extends Component {

    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON
        }
    }

    filterProduct = (keyword) =>{
        var output = this.state.products.filter((item) => {
            return (item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1 || item.description.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        console.log("Data after filter ",output)
        this.setState({filtered:output})
    }

    render(){

        return(
            <React.Fragment>
                <Header userText={ (data) => { this.filterProduct(data) } }/>
                <ProductDisplay productData={this.state.filtered}/>
                <Footer month='Oct' year='2021'/>
            </React.Fragment>
        )

    }

}
//<Header userText={(data) => {console.log("In Home", data)}}/>
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