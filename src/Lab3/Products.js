import './Products.css'

import {products} from './ProductData'
import Plus_Minus from '../Lab2/Plus_Minus'

import { Component } from 'react'




class Products extends Component {

    products_mapped=products.map((product)=>{
        return(
            <div key={product.id} className="product">
                <div>{product.name}</div>
                <img src={product.img}></img>
                <div>Category: {product.category}</div>
                <div>Price: {product.price} LE</div>
                <div className="description">{product.description}</div>
                <Plus_Minus/>
            </div>
        )
    })
    

    render(){
        return(
            <div>
                <h2>Products</h2>
                <div className='products'>
                    {this.products_mapped}
                </div>
            </div>
        )
    }

}

export default Products