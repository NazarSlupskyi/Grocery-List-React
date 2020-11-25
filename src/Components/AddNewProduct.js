import React from 'react'

const AddNewProduct = ({handlAddProduct, handlBackBtn}) => {
    return (
        
        <div className="add-product-conteiner">
            <div className="add-product-form">
                <div className="add-product-form-header">Fill out the form</div>
                <input className="add-product-input-name" placeholder="Enter name"/>
                <p className="priority-text">Choos priority :</p>
                <select className='priority-list'>
                    <option> 1 </option>
                    <option> 2 </option>
                    <option> 3 </option>
                    <option> 4 </option>
                    <option> 5 </option>
                </select>
                <div className="button-conteiner">
                    <button onClick={handlAddProduct} className = 'form-button'>Add Product</button>
                    <button onClick={handlBackBtn} className = 'form-button'>Back</button>
                </div>
                
            </div>
         </div>
    
    )
}

export default AddNewProduct;

