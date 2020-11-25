import React from 'react'

const Product = ({product, handlDeletProduct, handlChangeStatus}) => {
    
    return (
        <li className='product-item'>
            <div className='product-name' className='column'>{product.name}</div>
            <div onClick={handlChangeStatus} className='product-status' className='column'>{product.status}</div>
            <div className='product-priority' className='column'>{product.priority}</div>
            <buttonn className='delet-product-btn' onClick={handlDeletProduct}>x</buttonn>
        </li>
    )
}

export default Product;