import React from 'react';
import ProductsSlider from '../../Home/productSlider';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OrderDetails = ({ ordersData, reversedOrders, handleCancelOrder, handleReturnOrder }) => {
    return (
        ordersData.length > 0 ?
            <div className='ml-[8%] mdl:ml-[15%]'>
                {
                    ordersData.map((order, index) => (
                        <motion.div initial={{ y: 1000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} key={index} className='w-[90%] mdl:w-[80%] border h-[50%] rounded-md my-5 flex flex-col'>
                            <div className='w-full flex flex-row flex-wrap gap-4 mdl:gap-5 mdl:justify-between py-3 bg-gray-100 border-b-[1px]'>
                                <div className='flex flex-wrap h-9 gap-5 px-5'>
                                    <div className='w-auto text-xs'>
                                        <p>ORDER PLACED</p>
                                        <p className='font-semibold'>
                                            {new Date(order.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                weekday: 'long',
                                            })}
                                        </p>
                                    </div>
                                    <div className='w-auto text-xs h-auto'>
                                        <p>TOTAL</p>
                                        <p className='font-semibold'>
                                            EGP{order.price}
                                        </p>

                                    </div>
                                    <div className='w-auto text-xs h-auto'>
                                        <p>SHIP TO</p>
                                        <p className='font-semibold text-blue-400'>
                                            {order.address.name}
                                        </p>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='w-full text-xs'>
                                        <p>ORDER ID : <span className='font-semibold text-blue-600'>{order.uniqueNumber}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto my-4 '>
                                <div className='w-auto h-auto flex justify-between items-center gap-5 flex-wrap'>
                                    <div className='w-auto h-auto flex flex-col mdl:flex-row gap-7'>
                                        <div>
                                            <img className='w-full mdl:w-52 h-52' src={order.thumbnail} alt='order' />
                                        </div>

                                        <div className='w-[95%] mdl:w-[70%] mx-auto flex flex-col gap-4 mt-3 justify-between'>
                                            <div className='flex flex-col gap-5'>
                                                <div>
                                                    <Link to={`/${order.category}/${order.title}`}>
                                                        <p className='text-lg font-semibold'>{order.title}</p>
                                                    </Link>
                                                </div>
                                                <div className=" capitalize -mt-1 text-sm mdl:text-base">
                                                    <span className='font-semibold'>{order.address.name}</span>
                                                    <span> {order.address.address}</span>
                                                    <span>, {order.address.area}</span>
                                                    <span>, {order.address.landmark}</span>
                                                    <span>, {order.address.city} </span>
                                                    <span>, {order.address.pincode}</span>
                                                    <span>, State : {order.address.state}</span>
                                                    <span>, Country : {order.address.country}</span>
                                                    <span className='font-semibold'>, Mobile Number : {order.address.mobile} &nbsp;</span>
                                                </div>
                                                <div className='flex items-center font-semibold '>
                                                    Qty : {order.quantity}
                                                </div>
                                                <div className='flex items-center font-semibold'>
                                                    Payment Method : <span className='capitalize  text-blue-600'>&nbsp;{order.paymentMethod}</span>
                                                </div>
                                            </div>
                                            {
                                                ordersData === reversedOrders &&
                                                <div className='flex'>
                                                    <button onClick={() => { handleCancelOrder(order) }} className='pr-3 border-r-2 text-blue-600 '>Cancel</button>
                                                    <button onClick={() => { handleReturnOrder(order) }} className='px-3 text-blue-600'>Return</button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>

            : <div>
                <div className='flex items-center mx-[10%] mdl:mx-[30%]'>
                    Looks like you haven't placed an order yet.
                </div>
                <div>
                    <ProductsSlider />
                </div>
            </div>
    )
}
export default OrderDetails;