import './Products.css'

import {products} from './ProductData'
import PlusMinus from '../Lab2/PlusMinus'





function ProductsHooks() {

    const products_mapped=products.map((product)=>{
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
    
        return(
            <div>
                <h2>Products</h2>
                <div className='products'>
                    {products_mapped}
                </div>
            </div>
        )
    }



export default ProductsHooks