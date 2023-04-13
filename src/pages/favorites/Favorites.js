import React from 'react';
import {useSelector} from "react-redux";
import ProductCards from "../product/ProductCards";

const Favorites = () => {

    const {favorites} = useSelector(state => state)


    return (
        <div className="pt-32">
            <div className="container">
                {
                    favorites.map(el => <ProductCards product={el}/>)
                }
            </div>
        </div>
    );
};

export default Favorites;