

import NavBar from './componestes NavBar';
import './App.css';
import ItemDetailContainer from './componestes NavBar/ItemDetailContainer';
import ItemListContainer from'./componestes NavBar/ItemListContainer'
// import Ad from './componestes NavBar/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import NotFound from './componestes NavBar/NotFound';




function App() {
  return (
<BrowserRouter>
        <NavBar/>
        
        {/* <Ad/> */}
    <ItemDetailContainer/>
    <Routes>
      <Route path="/" element ={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path="/detail" element ={<ItemDetailContainer/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

</BrowserRouter>
  );
}

export default App;
