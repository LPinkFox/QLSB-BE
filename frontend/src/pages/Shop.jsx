import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../Products';
import Product from './Product'
import "./shop.css"
const Shop = () => {
    console.log(Products);
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