import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GiCheckMark} from "react-icons/gi"
import {useDispatch} from "react-redux";
import {GrFavorite} from "react-icons/gr";
import {AiOutlineShoppingCart} from "react-icons/ai";

const ProductCards = ({product}) => {

    const navigate = useNavigate()
    const [cor, setCor] = useState(true)
    const [fav, setFav] = useState(true)
    const dispatch = useDispatch()

    const AddToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: product})
    }
    const AddToFavorites = () => {
        dispatch({type: "TO_ADD_FAVORITES", payload: product})
    }

    return (
        <div>
            <div

                className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow-amber-400 m-4">
                <img onClick={() => navigate(`/detail`)} className="cursor-pointer p-11" src={product.image}
                     alt=""/>

                <div className="px-5 pb-5">

                    <span className="text-3xl text-gray-700">{product.price}</span>
                    <p className="text-gray-700 pb-3">{product.title}</p>

                    <div className="flex items-center justify-between">
                        <button onClick={() => setFav(!fav)}><GrFavorite/>
                        </button>

                        <button onClick={() => setCor(!cor)}><AiOutlineShoppingCart/>
                        </button>
                    </div>

                </div>


                <div className={cor ? "modal" : "modal active"} onClick={() => setCor(true)}>
                    <div className="modal-content text-center" onClick={e => e.stopPropagation()}>

                        <h1 className="mb-8 flex items-center text-center justify-center text-2xl">ДОБАВИТЬ<GiCheckMark
                            className="text-4xl ml-5 text-green-600"/></h1>

                        <button onClick={() => setCor(true)} type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            отменить
                        </button>
                        <button onClick={() => AddToBasket(product) || navigate(`/basket`)} type="button"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            в корзину
                        </button>

                    </div>
                </div>

                <div className={fav ? "modal" : "modal active"} onClick={() => setFav(true)}>
                    <div className="modal-content text-center" onClick={e => e.stopPropagation()}>

                        <h1 className="mb-8 flex items-center text-center justify-center text-2xl">ДОБАВИТЬ<GiCheckMark
                            className="text-4xl ml-5 text-green-600"/></h1>

                        <button onClick={() => setFav(true)} type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            отменить
                        </button>
                        <button onClick={() => AddToFavorites(product) || navigate(`/favorites`)} type="button"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            в избранные
                        </button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductCards;
// function view(){
//     const j = JSON.parse(localStorage.getItem('tasks')) || [];
//     let addList = ''
//     j.map(el => {
//         addList += `
//         <li class="list-group-item d-flex justify-content-between">${el.title}</li>
//         `
//     })
// }
// view()
// function addHover() {
//         let j = JSON.parse(localStorage.getItem('tasks')) || [];
//         const addNews = {
//             id: Date.now(),
//             title: value
//         }
//         j = [...j, addNews]
//         localStorage.setItem('tasks', JSON.stringify(j))
//         view()
// }