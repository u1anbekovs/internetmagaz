import React from 'react';
import BasketTable from "./BasketTable";
import {useSelector} from "react-redux";

const Basket = () => {

    const {basket} = useSelector(state => state)

    return (
        <div className="pt-5">
            <div className="container">
                <thead
                        className="flex justify-around items-center p-3 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th>
                        <h1>Наименование</h1>
                    </th>
                    <th>
                        <h1>Фото</h1>
                    </th>
                    <th>
                        <h1>Количество</h1>
                    </th>
                    <th>
                        <h1>Цена</h1>
                    </th>
                    <th>
                        <h1>Action</h1>
                    </th>
                </thead>
                {
                    basket.map(el => <BasketTable product={el}/>)
                }
            </div>
        </div>
    );
};

export default Basket;