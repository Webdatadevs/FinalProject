import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    IconButton,
    Img,
    Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortObjToKey from "./sortedArray";
import { setSave, setSortProducts } from "../../slice/Product.Slice";
import { AiOutlineHeart } from "react-icons/ai";
import CardComponent from "./CardComponent";

const TheCheapestComponent = () => {
    const { products, toSortedProducts, save } = useSelector(
        (state) => state.products
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSortProducts(sortObjToKey([...products], "price").slice(0, 4)));
    }, [products, dispatch]);
    // console.log(toSortedProducts);
    return (
        <>
            <Box
                width={"90%"}
                marginX={"auto"}
                display={"flex"}
                marginTop={"40px"}
                // // justifyContent={"start"}
                // alignItems={"start"}
                flexDirection={"column"}
            >
                <Heading textAlign={"center"}>THE CHEAPEST</Heading>
                <Box
                    display={"grid"}
                    // display={'flex'}
                    width={"100%"}
                    // overflowX={'auto'}
                    gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
                    // alignItems={'center'}
                    gap={"10px"}
                    marginTop={"20px"}
                >
                    {toSortedProducts?.map((element) => (
                       <CardComponent key={element.id} element={element}/>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default TheCheapestComponent;
