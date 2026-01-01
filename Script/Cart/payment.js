import { cart,quantity } from '../../Products data/cart.js'
import { MatchCartAndProId } from '../../Products data/products.js';
import { convert } from '../util/money.js';
import { MatchDeliveryAndcartDid } from '../../Products data/Delivery.js';
export function Payment() {
    let sum = 0;
let ship=0;
    cart.forEach((c) => {
        let match = MatchCartAndProId(c.id)
        sum += match.priceCents * c.quantity;

        let two=MatchDeliveryAndcartDid(c.dId)
        ship+=two.price
    })
    let beforeTax=sum+ship;
let tax=beforeTax*0.1;
let total=beforeTax+tax;

    let PaymentHTML=``;
    PaymentHTML+=`  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${quantity()}):</div>
            <div class="payment-summary-money">$${convert(sum)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${convert(ship)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${convert(beforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${convert(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${convert(total)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`
        //   return PaymentHTML;
        document.querySelector('.payment-summary').innerHTML=PaymentHTML;
        
}