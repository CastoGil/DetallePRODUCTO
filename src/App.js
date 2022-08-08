import './App.css';
import NavBarElectro from './components/navBarElectro/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarElectro/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:detailid' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
