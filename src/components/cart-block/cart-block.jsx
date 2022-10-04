import React, { useCallback, useState } from 'react'
import "./cart-block.css"
import { BsCart4 } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { CartMenu } from '../cart-menu'
import { ItemsInCart } from '../items-in-cart'
import { useNavigate } from 'react-router-dom'

export const calcTotalPrice = (items) => items.reduce((acc, game) => acc += game.price, 0)

export const CartBlock = () => {
   const navigate = useNavigate()
   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
   const items = useSelector(state => state.cart.itemsInCart)
   const totalPrice = calcTotalPrice(items)

   const handleClick = useCallback(() => {
      setIsCartMenuVisible(false)
      navigate("/order")
   }, [navigate])

   return (
      <div className='cart-block'>
         <ItemsInCart quantity={items.length} />
         <BsCart4 size={25} className="card-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
         {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} руб.</span> : null}
         {isCartMenuVisible && <CartMenu items={items} totalPrice={totalPrice} onClick={handleClick} />}
      </div>
   )
}
