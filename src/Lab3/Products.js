import './Products.css'

import {products} from './ProductData'
import PlusMinus from '../Lab2/PlusMinus'

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
                <PlusMinus/>
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