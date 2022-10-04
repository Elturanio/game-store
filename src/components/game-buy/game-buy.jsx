import React from 'react'
import "./game-buy.css"
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'

export const GameBuy = ({ game }) => {
   const items = useSelector(state => state.cart.itemsInCart)
   const isItemInCart = items.some((item) => item.id === game.id)
   const dispatch = useDispatch()

   const handleClick = (e) => {
      e.stopPropagation()
      if (isItemInCart) {
         dispatch(deleteItemFromCart(game.id))
      } else { dispatch(setItemInCart(game)) }
   }
   return (
      <div className='game-buy'>
         <span className="game-buy__price">{game.price} руб.</span>
         <Button type={isItemInCart ? "secondary" : "primary"} onClick={handleClick}>{isItemInCart ? "Убрать из корзины" : 'В Корзину'}</Button>
      </div>
   )
}
