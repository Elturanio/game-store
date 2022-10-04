import React from 'react'
import { Button } from '../button'
import { CartItem } from '../cart-item'
import "./cart-menu.css"

export const CartMenu = ({ items, totalPrice, onClick }) => {
   return (
      <div className='cart-menu'>
         <div className="cart-menu__games-list">
            {
               items.length > 0 ? items.map(game => <CartItem key={game.title} title={game.title} id={game.id} price={game.price} />) : "Корзина пуста."
            }
         </div>
         {
            items.length > 0 ?
               <div className="cart-menu__arrange">
                  <div className="cart-menu__total-price">
                     <span>Итого:</span>
                     <span>{totalPrice} руб.</span>
                  </div>
                  <Button type={"primary"} size="s" onClick={onClick}>Оформить покупку</Button>
               </div> : null
         }
      </div>
   )
}
