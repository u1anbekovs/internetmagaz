import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCards from "./ProductCards";

const Product = () => {
    const data = [
        {
            id:1,
            title: 'КРОССОВКИ NIKE DUNK LOW RETRO PRM VALENTINE\'S DAY (2023) DR9705-100',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '25 900 c',
            countInStock: 2,
            rating: 4,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/d8b/700_700_1/49m7h6xprgz09pneti8irw41i6cui7x7.png'
        },
        {
            id:2,
            title: 'КРОССОВКИ ПОДРОСТКОВЫЕ AIR JORDAN 1 MID GS DQ8423-014\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '10 900 c',
            countInStock: 2,
            rating: 3,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/1c0/700_700_1/2jdmqn116zeqsevbkyak7m4w93cdk41u.png'
        },
        {
            id:3,
            title: 'КРОССОВКИ ЖЕНСКИЕ AIR JORDAN 1 LOW DC0774-050\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '4090 c',
            countInStock: 2,
            rating: 5,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/658/700_700_1/54piudadkmahu17197axll1vb2vxr6e6.png'
        },
        {
            id:4,
            title: 'КРОССОВКИ ЖЕНСКИЕ NIKE BLAZER LOW \'77 JUMBO DQ1470-601\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '8000 c',
            countInStock: 2,
            rating: 2,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/a19/700_700_1/crmp82a5loyymx1nl5ynsbhhwjn3qzww.png'
        },
        {
            id:5,
            title: 'КРОССОВКИ ADIDAS OZELIA TRIPLE GREY H04252\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '6790 c',
            countInStock: 2,
            rating: 1,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/848/700_700_1/0e2savbhkuh8niynjk8xyd90ppg54adq.png'
        },
        {
            id:6,
            title: 'КРОССОВКИ ПОДРОСТКОВЫЕ NIKE DUNK LOW GS HALLOWEEN 2022 DH9765-003\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '11 190 c',
            countInStock: 2,
            rating: 3,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/d8a/700_700_1/gsw9ee5p366yzis3zjvqpadsma00771l.png'
        },
        {
            id:7,
            title: 'КРОССОВКИ NIKE AIR FORCE 1 \'07 LV8 CERTIFIED FRESH DO9801-100\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: "16 900 c",
            countInStock: 2,
            rating: 4,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/9fc/700_700_1/o8eqt11bl5gacotbwq58vqi8yv9bb7fi.png'
        },
        {
            id:8,
            title: 'КРОССОВКИ ADIDAS ДЕТСКИЕ GAZELLE BY9144\n',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: '13 990 c',
            countInStock: 2,
            rating: 3,
            image: 'https://elementshop.ru/upload/resize_cache/iblock/9fa/700_700_1/uswiz9wl5ganx3s5w1jngx6frxjb10nw.png'
        },

    ]

    const {product} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: data})
    },[])

    return (
        <div className="container grid grid-cols-4 pt-20 pb-20">
            {
                product.map(el => <ProductCards product={el}/>)
            }
        </div>
    );
};

export default Product;