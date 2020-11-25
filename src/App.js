import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ProductsList from './Components/ProductsList';
import { useState } from 'react';


function App() {
  const productsList = [{name: 'apple', status: 'ran out', priority: 1, id: '0'}, {name: 'bread', status: 'have', priority: 2, id: '1'}, {name: 'eggs', status: 'have', priority: 1, id: '2'}]
  const [products,  setProducts] = useState(productsList)
  const [tab, setTab] = useState('All')
  const [render, setRender] = useState(false)
  const [idCounter, setIdCounter] = useState(5)

  const handlDeletProduct = (element) => {
    setProducts(products.filter((product) => product.id !== element.id))
  }

  const handlAddProduct = () => {
    const nameInput = document.querySelector('.add-product-input-name')
    const prioritySelector = document.querySelector('.priority-list')
    if (nameInput.value === '') {
      return
    }
    setProducts([...products, {name: nameInput.value, priority: prioritySelector.value, status: 'ran out', id: idCounter + 1}])
    setTab('All')
    setIdCounter(idCounter + 1)
  }

  const handlSortProducts = (event) => {
    setTab(event.target.innerText)
  }

  const handlSortByPriority = () => {
    products.sort((a, b) => a.priority - b.priority)
    setRender(!render)
  }

  const handlChangeStatus = (element) => {
    element.status === 'ran out' ? element.status = 'have' : element.status = 'ran out'
    setRender(!render)
  }

  const addProduct = (event) => {
    setTab(event.target.innerText)
  }

  const handlBackBtn = () => {
    setTab('All')
  } 

  return (
    <div className="App">
        <div>
          <button onClick={addProduct} className="add-new-product-btn">Add new item</button>
          <button onClick={handlSortByPriority} className="add-new-product-btn">Sort By priority</button>
        </div>
      <ul className = 'list-conteiner'>
          <ProductsList products={products} handlDeletProduct={handlDeletProduct} handlChangeStatus={handlChangeStatus} handlBackBtn={handlBackBtn} handlAddProduct={handlAddProduct} tab={tab}/>
      </ul>
      <div className='sort-btn-conteiner'>
        <button onClick={handlSortProducts} className='sort-btn'>Have</button>
        <button onClick={handlSortProducts} className='sort-btn'>Ran out</button>
        <button onClick={handlSortProducts} className='sort-btn'>All</button>
      </div>
    </div>
    
  );
}

export default App;
