

import NavBar from './componestes NavBar';
import './App.css';
import ItemDetailContainer from './componestes NavBar/ItemDetailContainer';
import ItemListContainer from'./componestes NavBar/ItemListContainer'
// import Ad from './componestes NavBar/ItemListContainer';
import Cart from './componestes NavBar/CartContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import NotFound from './componestes NavBar/NotFound';
import ShopProvider from './componestes NavBar/context/ShopProvider';





function App() {
  return (
    <ShopProvider>
<BrowserRouter>
        <NavBar/>
        
        {/* <Ad/> */}
    <ItemDetailContainer/>
    <Routes>
      <Route path="/" element ={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path="/detail/:productoId" element ={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

</BrowserRouter>
</ShopProvider>
  );
}

export default App;
