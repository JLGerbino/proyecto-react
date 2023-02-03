import './App.css';
import ShopProvider from './context/ShopProvider';
import MainNavigators from './navigators';

function App() {
  return (
    <ShopProvider>
     <MainNavigators/>
    </ShopProvider>
    );
}

export default App;
