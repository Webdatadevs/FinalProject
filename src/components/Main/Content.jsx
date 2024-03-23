import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../axios/getProducts";
import { Box } from "@chakra-ui/react";
import TheMostExpensiveComponent from "./TheMostExpensiveComponent";
import TheCheapestComponent from "./TheCheapest";
import VewAllProducts from "./VewAllProducts";
import getCategories from "../../axios/getCategories";

const Content = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts(dispatch);
        getCategories(dispatch)
    }, []);
    return (
        <>
            <Box>
                <TheCheapestComponent />
                <TheMostExpensiveComponent />
                <VewAllProducts />
            </Box>
        </>
    );
};

export default Content;
