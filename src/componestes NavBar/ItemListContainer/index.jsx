
import React, { useEffect, useState } from 'react';
// import { products } from '../data/productos';
import { useParams } from 'react-router-dom';

import ItemList from '../itemList'


const Ad = ({ children }) => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams();


    useEffect(() => {

        (async () => {
            // const obtenerProductos = new Promise((accept, reject) => {
            //     setTimeout(() => {
            //         accept(products)
            //     }, 3000);
            // })

            try {
                if(categoryId){
                    const response = await fetch("https://fakestoreapi.com/products/category/"+ categoryId);
                    const productos = await response.json();
                    setProductos(productos);

                }else{
                    const response = await fetch("https://fakestoreapi.com/products");
                    const productos = await response.json();
                    setProductos(productos);
                }
            
            } catch (error) {
                console.log(error);
            }

        })()

    }, [categoryId])

    console.log(productos)

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default Ad