import CartItem from "./CartItem"
import './Aggregator.css';

export default function Aggregator({tf, cart, cartTotal, onClick}){
    console.log(tf)
    return(
        <div className="aggregator">
            <h3> cart: ${(Math.round(cartTotal* 100) / 100).toFixed(2)} </h3>
            {tf.map((item, index) => ( 
            <CartItem item={item} quantity={cart[item.id]}/>
            ))}
            <button onClick={onClick}> clear </button>
        </div>
    )
}