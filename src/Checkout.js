import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
           <div className="checkout__left">
               <img
                    className="checkout__ad"

                    src="https://www.bergerpaints.com/colour-magazine/Upload/Posting/Image/colours-fashion-banner-feb15.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    
                        
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                   
                     
                </div>

               
            </div> 
                <div className="checkout__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout
