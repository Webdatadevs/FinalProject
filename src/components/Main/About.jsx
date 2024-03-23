import { Box, Button, Heading, IconButton, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { decrementQuantity, incrementQuantity, setBasket, setSelectProducts } from "../../slice/Product.Slice";

const About = () => {
    const { products, selectProducts, basket } = useSelector((state) => state.products);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [click, setClick] = useState(false)
    console.log(productId);

    useEffect(() => {
        // const selectedProduct = products.find(item => +item.id === +productId);
        dispatch(setSelectProducts(products.find(item => +item.id === +productId)));
        // if(products.find(item => +item.id === +productId)){
        // }
    }, [dispatch, products, productId]);

    console.log(selectProducts);
    return (
        <>
            <Box
                display={"grid"}
                gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} 
                width={"90%"}
                marginX={"auto"}
                marginTop={"40px"}
                gap={"15px"}
                marginBottom={'20px'}
            >
               {
                selectProducts ? 
                <>
                        <Box>
                            <Img src={selectProducts.image} width={"100%"} />
                        </Box>

                        <Box
                            // width={"60%"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={'space-around'}
                        >
                            <Box>
                                <Heading fontSize={"30px"}>
                                    {selectProducts.title}
                                </Heading>
                                <Text fontSize={"34px"} marginTop={'30px'}>{selectProducts.price} so'm</Text>
                                <Text textColor={"#00000099"} marginTop={'20px'}>
                                    {selectProducts.description}
                                </Text>
                            </Box>

                            <Box display={"flex"} alignItems={"center"} gap={'20px'}>
                                {/* <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={"5px"}
                                    background={"#F0F0F0"}
                                    borderRadius={"10px"}
                                >
                                    <IconButton  icon={<AiFillPlusCircle />} onClick={() =>{
                                         dispatch(setBasket({
                                            ...products?.find((item) => +item.id === +selectProducts.id),
                                            quantyti: 1,
                                        }));
                                         dispatch(incrementQuantity(selectProducts.id))
                                    }}/>
                                    <Text>{basket?.find((item) => +item.id === +selectProducts.id)?.quantyti}</Text>
                                    <IconButton  icon={<AiFillMinusCircle />} onClick={() => dispatch(decrementQuantity(selectProducts.id))}/>
                                </Box> */}
                                <Button
                                marginTop={'20px'}
                                    background={"#000000"}
                                    textColor={"#fff"}
                                    _hover={{ background: "#000000" }}
                                    _active={{ opacity: "0.5" }}
                                    onClick={() => {
                                        dispatch(
                                            setBasket({
                                                ...products?.find(
                                                    (item) =>
                                                        +item.id === + selectProducts.id
                                                ),
                                                quantyti: 1,
                                            })
                                        );
                                        setClick(value => !value)
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </Box>
                        </Box>
                </>
                : 
                <Heading>Not found :)</Heading>
               }
            </Box>
        </>
    );
};

export default About;
