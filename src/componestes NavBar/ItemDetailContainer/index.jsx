
import { useEffect, useState} from 'react'

import ItemDetail from '../itemDetail'
import {useParams} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    console.log(productId);

    
    useEffect(()=> {


        const getProducts = async () => {
            try {


                
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                
            if (docSnap.exists()) {console.log("Document data:", docSnap.data());} 
            else {// doc.data() will be undefined in this case
                console.log("No such document!");}










                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;
}

export default ItemDetailContainer