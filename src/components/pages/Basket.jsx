import { AiFillGift } from "react-icons/ai"; 
import { AiFillMinusCircle } from "react-icons/ai"; 
import { AiFillPlusCircle } from "react-icons/ai"; 
import { BsTrashFill } from "react-icons/bs"; 
import { Box, Button, Heading, IconButton, Img, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeBasket, setBasket, setTotal } from "../../slice/Product.Slice";

const Basket = () => {
    const { products, save, basket, totalPrice } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    useEffect(() =>{
        function totalPriceFunction(){
          let total = 0;
          basket.forEach(element => {
            total += element.price * element.quantyti
          });
          return total
        }
        let newTotalPrice = totalPriceFunction();
        dispatch(setTotal(newTotalPrice))
    } ,[products, dispatch])
      function removeBasketFunction(id){
        let data = basket.find((item) => +item.id === +id)
        let newTotalPrice = totalPrice - data.price * data.quantyti;
        dispatch(setTotal(newTotalPrice))
        dispatch(removeBasket(basket.filter(item => item.id !== id)))
      }
    return (
        <>
            <Box width={'90%'} marginX={'auto'}>
            <Heading fontSize={'24px'} marginTop={'20px'}>Your cart</Heading>
            <Box display={'flex'} marginTop={'20px'} width={'100%'} gap={'10px'} flexDirection={{base:'column', md:'row'}}>
                <Box width={{base:'100%', md:'50%'}} height={'50vh'} overflowY={'auto'} overflowX={'auto'} display={'flex'} flexDirection={'column'} gap={'15px'} border={'1px solid #0000001A'} padding={'20px 24px'}>
                   {
                    basket.length>0 ? 
                    basket?.map(element => (
                      <Box key={element.id} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                          <Box display={'flex'} alignItems={'center'}>
                              <Box border={'1px solid #000000'} padding={'5px'} borderRadius={'10px'}>
                                  <Img src={element.image} width={'80px'} height={'80px'}/>
                              </Box>
                              <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems={'start'} marginLeft={'5px'}>
                                  <Text fontSize={{base:'12px', md:'16px'}}>{element.title}</Text>
                                  <Text fontSize={{base:'12px', md:'16px'}}>{(element.price)} so'm</Text>
                              </Box>
                          </Box>
                          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'15px'} >
                              <button onClick={() => removeBasketFunction(element.id)}>
                              <BsTrashFill />
                              </button>
                              <Box display={'flex'} alignItems={'center'} gap={'5px'} background={'#F0F0F0'} borderRadius={'10px'}>
                                  <IconButton  icon={<AiFillPlusCircle />} onClick={() => dispatch(incrementQuantity(element.id))}/>
                                  <Text>{element.quantyti}</Text>
                                  <IconButton isDisabled={element.quantyti === 1 ? true : false} icon={<AiFillMinusCircle />} onClick={() => dispatch(decrementQuantity(element.id))}/>
                              </Box>
                          </Box>
                  </Box>
                      ))
                      : <Heading>Not found :)</Heading>
                   }

                </Box>
                <Box width={{base:'100%', md:'50%'}} border={'1px solid #0000001A'} padding={'20px 24px'} 
                    display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Heading fontSize={'16px'}>Order Summary</Heading>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Subtotal</Text>
                            <Text>{totalPrice}</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Discount (-20%)</Text>
                            <Text textColor={'crimson'}>0</Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'} textColor={'#00000099'}>
                            <Text>Delivery Fee</Text>
                            <Text>0</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} padding={'10px'} alignItems={'center'}>
                        <Text>Total</Text>
                        <Text>{totalPrice}</Text>
                    </Box>
                    <Box marginTop={'10px'} display={'flex'} alignItems={'center'} gap={'10px'}>
                        <InputGroup>
                            <InputLeftElement>
                                <AiFillGift />
                            </InputLeftElement>
                            <Input type="text" background={'#F0F0F0'} placeholder="Add promo code" borderRadius={'20px'}/>
                        </InputGroup>
                        <Button size={'md'} borderRadius={'62px'}  padding={'10px 20px'}  background={'#000000'}  textColor={'#fff'} _hover={{background:'#000000'}} _active={{opacity:'0.5'}}>
                            Apply
                        </Button>
                    </Box>
                    <Button padding={'24px'} textColor={'#fff'} marginTop={'15px'} _hover={{background:'#000000'}} _active={{opacity:'0.5'}} background={'#000000'} borderRadius={'62px'}>Go to Checkout</Button>
                </Box>
            </Box>
            </Box>
        </>
    );
};

export default Basket;
