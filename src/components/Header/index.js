import React, {useState} from 'react';
import logo from "../../img/Cross-Logo.png"
import {MdPersonAddAlt1} from "react-icons/md"
import {MdFavorite} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {


    const [start, setStart] = useState(true)
    const navigate = useNavigate()


    return (

       <div>

           <div className={start ? "modal" : "modal active"} onClick={() => setStart(true)}>
               <div className="modal-content" onClick={e => e.stopPropagation()}>
                   <h1>ВХОД</h1>
                   <div className="flex flex-col">
                       <input type="email" placeholder="Email"/>
                       <input type="password" placeholder="Пароль"/>
                   </div>
                   <input type="checkbox"/>
                   <button>ВОЙТИ</button>
               </div>
           </div>

           <nav className="bg-white">
               <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1">
                   <div className="flex items-center">
                       <img className="rounded-full w-20" src={logo} alt=""/>
                   </div>
                   <a href="tel:+996704513234" className="flex items-center"><FiPhoneCall className="mr-2"/>+996 704 (513) (234)</a>

                   <div className="flex md:order-2">
                       <button onClick={() => navigate(`/basket`)} type="button" className="bg-transparent text-gray-700 ml-5 text-2xl">
                           <AiOutlineShoppingCart/>
                       </button>
                       <button onClick={() => navigate(`/favorites`)} type="button" className="bg-transparent text-gray-700 ml-5 text-2xl">
                           <MdFavorite/>
                       </button>
                       <button onClick={() => setStart(false)} type="button" className="bg-transparent text-gray-700 ml-5 text-2xl">
                           <MdPersonAddAlt1/>
                       </button>
                   </div>

               </div>
           </nav>

           <nav className="bg-gray-500">
               <div className="max-w-screen-xl px-4 py-3 mx-auto">
                   <div className="flex items-center">
                       <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                           <li>
                               <NavLink to={`/`}>ОБУВЬ</NavLink>
                           </li>
                           <li>
                               <NavLink to={`/accessories`}>АКСЕССУАРЫ</NavLink>
                           </li>
                           <li>
                               <NavLink to={`/cloth`}>ОДЕЖДА</NavLink>
                           </li>
                           <li>
                               <NavLink to={`/brands`}>БРЕНДЫ</NavLink>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
    );
};

export default Header;