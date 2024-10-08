import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

const dataService = new DataService("http://localhost:8080/");

export default function Product() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dataService.getProducts()
            .then(productListData => {
                setProducts(productListData)
            })
            // .catch(error => {
            //     setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.")
            // })
    }, []);

    // Display Products
    let productListJsx = products.map(product => {
        return(
            <>
                <div>{product.name}</div>
            </>
        )
    })

    return (
        <>
        <div>
            {productListJsx}
            hello
        </div>
        </>
    )
}