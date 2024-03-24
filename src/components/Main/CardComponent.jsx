import { AiFillHeart } from "react-icons/ai";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Img,
    Skeleton,
    Stack,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setLike, setSave, setSelectProducts } from "../../slice/Product.Slice";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import sceletonFaceData from "./sceletonData";

const CardComponent = ({ element }) => {
    const { products, isLike, save, basket, isLoading } = useSelector(
        (state) => state.products
    );
    const { categories} = useSelector(state => state.categories)

    const [likes, setLikes] = useState(
        save.find((item) => +item.id === +element.id) ? true : false
    );
    const dispatch = useDispatch();

    

    return (
        <>
            {isLoading && (!products) ? (
                <Box
                display={"grid"}
                width={"100%"}
                gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
                gap={"10px"}
                marginTop={"20px"}
            >
                <Stack>
                    {
                        sceletonFaceData.map((item, index )=> (
                                <Skeleton key={item} height="20px" />
                        ))
                    }
                </Stack>
                </Box>
            ) : (
                <>
                    <Box display={"inline-flex"} key={element.id}>
                        <Card
                            boxShadow={"5px 5px 9px #F0EEED"}
                            border={"1px solid #F0EEED"}

                        >

                            <CardHeader>
                                <Box
                                    display={"inline-flex"}
                                    background={"#F0EEED"}
                                    padding={"10px"}
                                    position={"relative"}
                                >
                                    <Img
                                        src={element.image}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                    <IconButton
                                        _hover={{ background: "#000000" }}
                                        _active={{ transform: "scale(0.8)" }}
                                        position={"absolute"}
                                        top={"5px"}
                                        right={"5px"}
                                        textColor={"#fff"}
                                        background={"#000000"}
                                        opacity={"0.5"}
                                        icon={
                                            likes ? (
                                                <AiFillHeart className="text-[crimson]" />
                                            ) : (
                                                <AiOutlineHeart />
                                            )
                                        }
                                        onClick={() => {
                                            dispatch(
                                                setSave(
                                                    products?.find(
                                                        (item) =>
                                                            +item.id ===
                                                            +element.id
                                                    )
                                                )
                                            );

                                            setLikes((prevLikes) => !prevLikes);
                                        }}
                                    />
                                    <Text position={'absolute'} padding={'5px'} top={'5px'} left={'5px'} background={'#000000'} opacity={'0.5'} textColor={'#fff'} borderRadius={'5px'}>
                                        {categories?.find(item => +item.id === +element.categoryId)?.title}
                                    </Text>
                                </Box>
                            </CardHeader>

                            <CardBody>
                            <NavLink 
                                to={`/about/${element.id}`}>
                                <Text>{element.title}</Text>
                            </NavLink>
                            </CardBody>
                            <CardFooter
                                display={"flex"}
                                flexDirection={"column"}
                            >
                                <Text textColor={"#000000"} marginTop={'15px'} fontSize={"24px"}>

                                    {element.price} so'm
                                </Text>
                                <Button
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    width={"100%"}
                                    padding={"20px"}
                                    textColor={"#fff"}
                                    background={"#000000"}
                                    marginTop={"20px"}
                                    _hover={{ background: "#000000" }}
                                    _active={{ transform: "scale(0.8)" }}
                                    onClick={() => {
                                        dispatch(
                                            setBasket({
                                                ...products?.find(
                                                    (item) =>
                                                        +item.id === +element.id
                                                ),
                                                quantyti: 1,
                                            })
                                        );
                                    }}
                                >
                                    BUY
                                </Button>
                            </CardFooter>
                        </Card>
                    </Box>
                </>
            )}
        </>
    );
};

export default CardComponent;
