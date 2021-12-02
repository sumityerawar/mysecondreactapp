import React from 'react';

const ProductDisplay = (props) => {

    const products = props.productData.map(product => {
        
        return (
            <div className='col' key={product.id}>
                <div className='card' style={{height: '400px', boxShadow: '10px 20px 10px gray'}}>
                    <img src={product.image} className='card-img-top' style={{height: '180px', width: '70%', margin: '5%'}}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <p className='card-text'>{product.description}</p>
                        <p className='card-text'>Rs. {product.cost}</p>
                        <p className='card-text'>Use - {product.uses}</p>
                    </div>
                </div>    
            </div>
            )
        })

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products}
        </div>
    )
}

export default ProductDisplay;