
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react" 

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState('');
    const [payment, serPayment] = useState('Select an option');
    const [shipping, setShipping] = useState('');

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handlePaymentChange(event) {
        serPayment(event.target.value);
    }

    function handleShippingChange(value) {
        setShipping(value.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio"  value='Pick up' checked={shipping === 'Pick up'} onChange={handleShippingChange}/>
                Pick up
            </label>
            <br />
            <label htmlFor="">
                <input type="radio"  value='Delivery' checked={shipping ===  'Delivery'} onChange={handleShippingChange}/>
                Delivery
                </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent