import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/cart-block'
import { OrderItem } from '../../components/order-item'
import "./order-page.css"

export const OrderPage = () => {
   const items = useSelector(state => state.cart.itemsInCart)

   if (!items.length) return <h1>Ваша корзина пуста.</h1>

   return (
      <div className='order-page'>
         <div className="order-page__left">
            {items.map((game) => <OrderItem key={game.title} game={game} />)}
         </div>
         <div className="order-page__right">
            <div className="order-page__total-price">
               <span>
                  {items.length} товаров на сумму {calcTotalPrice(items)} руб.
               </span>
            </div>
         </div>
      </div>
   )
}
