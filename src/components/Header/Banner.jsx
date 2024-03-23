import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Banner = () => {
    const {products} = useSelector((state) => state.products)

    return (
        <>
            <Box background={"#F2F0F1"}>
                <Box
                    display={"flex"}
                    flexDirection={{base: 'column', lg:'row'}}
                    width={"90%"}
                    alignItems={"center"}
                    marginX={"auto"}
                    padding={'30px 10px'}
                >
                    <Box
                        width={{md:'100%', lg:'60%'}}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        padding={'30px 0px'}
                    >
                        <Text
                            textColor={"#222"}
                            fontSize={{base:"34px", md:'64px'}}
                            lineHeight={{base:'54px', md:"64px"}}
                            fontWeight={"700"}
                        >
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </Text>
                        <Text textColor={"#00000099"} marginTop={"10px"}>
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </Text>
                        <Button
                            display={"flex"}
                            width={{sm:'auto', base:'100%'}}
                            justifyContent={"center"}
                            alignItems={"center"}
                            background={"#000000"}
                            textColor={"#fff"}
                            padding={"16px 54px"}
                            borderRadius={"62px"}
                            _hover={{ background: "#000000" }}
                            marginTop={"25px"}
                        >
                            Shop Now
                        </Button>
                        <Box marginTop={'25px'}>
                            <ul className="flex items-center justify-center gap-[10px] flex-wrap">
                                <li className=" list flex justify-center flex-col">
                                    <Text textColor={'#000000'} fontWeight={'700'} fontSize={{base:'30px', md:'40px'}}>{products.length}</Text>
                                    <Text textColor={'#00000099'} fontSize={{base:'14px', md:'16px'}} fontWeight={'400'}>International Brands</Text>
                                </li>
                                <li className=" list flex justify-center flex-col">
                                    <Text textColor={'#000000'} fontWeight={'700'} fontSize={{base:'30px', md:'40px'}}>{products.length}</Text>
                                    <Text textColor={'#00000099'} fontSize={{base:'14px', md:'16px'}} fontWeight={'400'}>High-Quality Products</Text>
                                </li>
                                <li className=" list flex justify-center flex-col">
                                    <Text textColor={'#000000'} fontWeight={'700'} fontSize={{base:'30px', md:'40px'}}>10</Text>
                                    <Text textColor={'#00000099'} fontSize={{base:'14px', md:'16px'}} fontWeight={'400'}>Happy Customers</Text>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box width={{base:'100%', md:'40%'}}>
                        <Img width={"100%"} height={"100%"} src="banner.png" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Banner;
