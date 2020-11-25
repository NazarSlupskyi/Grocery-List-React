
import React from 'react'
import AddNewProduct from './AddNewProduct'
import Product from './Product'
const ProductsList = ({products, handlChangeStatus, handlAddProduct, handlDeletProduct, tab, handlBackBtn}) => {
    switch (tab) {
        case 'All' :
            return (
               products.map((product) => <Product key={product.id} product={product} handlChangeStatus={() => handlChangeStatus(product)}  handlDeletProduct={() => handlDeletProduct(product)} />) 
            )
        case 'Have' : 
            return (
                products.filter((product) => product.status === 'have').map((product) => <Product key={product.id} product={product} handlChangeStatus={() => handlChangeStatus(product)} handlDeletProduct={() => handlDeletProduct(product)} />)
            )
        case 'Ran out' : 
            return (
                products.filter((product) => product.status === 'ran out').map((product) => <Product key={product.id} product={product} handlChangeStatus={() => handlChangeStatus(product)} handlDeletProduct={() => handlDeletProduct(product)} />)
        )
        case 'Add new item' :
            return (
                <AddNewProduct handlBackBtn={handlBackBtn} handlAddProduct={handlAddProduct}/>
            )
        default:
            return
    }
}

export default ProductsList
