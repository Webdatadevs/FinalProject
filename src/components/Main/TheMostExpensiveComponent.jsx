import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortObjToKey from "./sortedArray";
import { setSave, setTheMostExpensive } from "../../slice/Product.Slice";
import CardComponent from "./CardComponent";

const TheMostExpensiveComponent = () => {
    const { products, theMostExpensive } = useSelector(
        (state) => state.products
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            setTheMostExpensive(
                sortObjToKey([...products], "price").slice(
                    -4,
                    sortObjToKey([...products], "price").length
                )
            )
        );
    }, [products, dispatch]);
    return (
        <>
            <Box
                width={"90%"}
                marginX={"auto"}
                display={"flex"}
                marginTop={"40px"}
                flexDirection={"column"}
            >
                <Heading textAlign={"center"}>The Most Expensive</Heading>
                <Box
                    display={"grid"}
                    width={"100%"}
                    gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
                    gap={"10px"}
                    marginTop={"20px"}
                >
                    {theMostExpensive?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default TheMostExpensiveComponent;
