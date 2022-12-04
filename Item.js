// TODO: create a component that displays a single bakery item
function gender(item_text){
    if (item_text === true){
        return "Womens"
    } return "Mens"
}

export default function Item({item, index, onClickAdd, onClickRemove, cart}){
    return (
        <div className="bakery-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p> Type: {item.type} </p>
        <p> Gender: {gender(item.v_friendly)}</p>
        <p> Quantity: {cart[item.id]} </p> 
        <button onClick={() => onClickAdd(item.id, item.price)}> Add to cart</button>
        <button onClick={() => onClickRemove(item.id, item.price)}> Remove from Cart</button>
        </div>
    );
}