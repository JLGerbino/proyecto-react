import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './conteiners/ItemDetailConteiner';
import ItemListContainer from './conteiners/ItemListConteiner';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Cart from './conteiners/CartContainer';
import ShopProvider from './context/ShopProvider';



function App() {
  return (
    <ShopProvider>
     <BrowserRouter> 
     <NavBar/>   
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>      
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='*' element={<h2>ruta no encontrada</h2>}/>            
     </Routes>
     {/*<ItemListContainer greeting={"Bienvenido a Total eSports"}/>*/}     
     {/*<ItemDetailContainer/>*/}
     </BrowserRouter>
    </ShopProvider>
    );
}

export default App;
