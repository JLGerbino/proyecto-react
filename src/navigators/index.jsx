import React from 'react';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../conteiners/ItemDetailConteiner';
import ItemListContainer from '../conteiners/ItemListConteiner';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Cart from '../conteiners/CartContainer';

const MainNavigators = () => {
  return (    
    <BrowserRouter> 
      <NavBar/>   
      <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/detail/:id' element={<ItemDetailContainer/>}/>      
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='*' element={<h2>Ruta no encontrada</h2>}/>            
      </Routes>     
    </BrowserRouter>   
  )
}

export default MainNavigators;