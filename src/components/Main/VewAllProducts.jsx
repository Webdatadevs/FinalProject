import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { setSelectCategories } from "../../slice/Product.Slice";

const VewAllProducts = () => {
    const { products, selectCategories } = useSelector((state) => state.products);
    const {categories} = useSelector(state => state.categories)
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();


    return (
        <>
            <Box
                width={"90%"}
                marginX={"auto"}
                display={"flex"}
                marginTop={"40px"}
                flexDirection={"column"}
                // justifyContent={"center"}
                alignItems={"center"}
            >
                <Button
                    display={"flex"}
                    fontSize={"24px"}
                    textColor={"#222"}
                    background={"#F0EEED"}
                    _hover={{ background: "#F0EEED" }}
                    _active={{ transform: "scale(0.8)" }}
                    marginTop={"20px"}
                    marginBottom={"10px"}
                    padding={"15px"}
                    onClick={() => 
                    {
                        setClick((value) => !value)
                        dispatch(setSelectCategories(products))
                    }}
                >
                    Vew All goods
                </Button>
                <Heading
                    display={click ? "block" : "none"}
                    textAlign={"center"}
                    marginTop={"25px"}
                >
                    All goods
                </Heading>
                <Box display={click ? "flex" : 'none'} marginTop={'30px'} width={'100%'}>
                    <ul className="flex items-center px-[10px] gap-[30px] w-[100%] overflow-x-auto">
                        <li className="bg-[#000000] flex items-center flex-nowrap text-[dodgerblue] p-[5px] rounded-[5px] cursor-pointer" 
                            onClick={() => {
                                console.log(selectCategories)
                                dispatch(setSelectCategories(products))
                            }}
                        >
                            All products
                        </li>
                        {
                            categories?.map(item => (
                                <li key={item.id} className="bg-[#000000] text-[dodgerblue] p-[5px] rounded-[5px] cursor-pointer"
                                    onClick={() => {
                                        console.log(selectCategories)
                                        dispatch(setSelectCategories(products.filter(element => +element.categoryId === +item.id)))
                                    }}

                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </Box>
                <Box
                    display={click ? "grid" : "none"}
                    // display={'flex'}
                    width={"100%"}
                    // overflowX={'auto'}
                    gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
                    // alignItems={'center'}
                    gap={"10px"}
                    marginTop={"20px"}
                >
                    {selectCategories?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default VewAllProducts;
