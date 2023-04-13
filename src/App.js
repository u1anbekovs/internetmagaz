import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/product";
import DetailCards from "./pages/product/detail/DetailCards";
import Accessories from "./pages/accessories/Accessories";
import Brands from "./pages/brands/Brands";
import Cloth from "./pages/cloth/Сloth";
import Basket from "./pages/basket/Basket";
import Favorites from "./pages/favorites/Favorites";



function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={`/`} element={<Product/>}/>
                <Route path={`/accessories`} element={<Accessories/>}/>
                <Route path={`/brands`} element={<Brands/>}/>
                <Route path={`/cloth`} element={<Cloth/>}/>
                <Route path={`/basket`} element={<Basket/>}/>
                <Route path={`/favorites`} element={<Favorites/>}/>
                <Route path={`/detail`} element={<DetailCards/>}/>
            </Routes>
        </div>
    );
}

export default App;
