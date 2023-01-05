import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './conteiners/ItemDetailConteiner';
import ItemListContainer from './conteiners/ItemListConteiner';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>      
      <Route path='*' element={<h2>ruta no encontrada</h2>}/>      
     </Routes>
     {/*<ItemListContainer greeting={"Bienvenido a Total eSports"}/>*/}     
     {/*<ItemDetailContainer/>*/}
     </BrowserRouter>
    );
}

export default App;
