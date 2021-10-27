import React from 'react';

const ProductDisplay = (props) => {

    const products = props.productData.map(product => {
        
        return (
            <div class='col'>
                <div class='card' style={{height: '400px', boxShadow: '10px 20px 10px gray'}}>
                    <img src={product.image} class='card-img-top' style={{height: '180px', width: '70%', margin: '5%'}}/>
                    <div class='card-body'>
                        <h5 class='card-title'>{product.name}</h5>
                        <p class='card-text'>{product.description}</p>
                        <p class='card-text'>Rs. {product.cost}</p>
                        <p class='card-text'>Use - {product.uses}</p>
                    </div>
                </div>    
            </div>
            )
        })

    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {products}
        </div>
    )
}

export default ProductDisplay;