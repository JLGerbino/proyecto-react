import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './conteiners/ItemListConteiner';


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"Bienvenido a Total eSports"}/>     
    </div>
  );
}

export default App;
