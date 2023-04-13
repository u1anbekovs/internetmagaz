import React, {useState} from 'react';

const BasketTable = ({product}) => {
    const [click, setClick] = useState(-1)

    return (
        <div>
            <div className="container">

                <div className="shadow-md sm:rounded-lg">
                    <table className="w-full">
                        <tr className="flex justify-around items-center">
                            <td>
                                <h1 className="w-36">{product.title}</h1>
                            </td>
                            <img className="w-20" src={product.image} alt=""/>

                            <td  className="flex items-center">
                               <h1 onClick={() => setClick(click.quantity + 1)} className="text-3xl pr-4 cursor-pointer">-</h1> <h1>{product.quantity}</h1> <h1 className="text-3xl pl-4 cursor-pointer">+</h1>
                            </td>
                            <td>
                                <h1>{product.price}</h1>
                            </td>
                            <button>Купить</button>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BasketTable;