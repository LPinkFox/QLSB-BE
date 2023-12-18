import React from 'react'
import Navbar from '../components/Navbar'
import Product from './Product';
import { Products } from '../Products';
import "./shop.css"
const Shop = () => {
    return (
        <>
            <Navbar />
            <div className='shop'>
                <div className="products">
                    {Products.map((product) => {
                        return <Product data={product} />
                    })}
                </div>
            </div>
        </>

    )
}

export default Shop