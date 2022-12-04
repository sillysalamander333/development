export default function CartItem({item, quantity}){
    if (quantity != null && quantity > 0){
        return (
            <div className="cart-item">
            <p>{quantity}x {item.name}</p>
            </div>
        );
    }
    return <div classname="cart-item"></div>;
}