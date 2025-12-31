import { cart,addCart,added,quantity} from '../Products data/cart.js'
import { products } from '../Products data/products.js'
import {convert} from '../Script/money.js'
let htmlcode = ' ';
products.forEach((items) => {
    htmlcode += `
    <div class="p">
    <div class="data">
    <div class="im">
<img src=${items.image} class="i socks">
</div>
<div class="info">
<div class="nm">
<div class="name">${items.name}</div>
</div>
<div class="rate">
    <img src="ratings/rating-${items.rating.stars * 10}.png" class="ratings">
    <div class="num">${items.rating.count}</div>

</div>
<div class="price">${convert(items.priceCents)}</div>
<div class="select">
    <select name="sel" class="s pro-id-${items.id}" >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
    </select>
</div>
</div>
</div>
<div class="green uni-${items.id}"></div>
<div class="yel">
 <button class="add" data-p-id=${items.id}>Add to Cart</button>
 </div>
    </div>
    
`
})

document.querySelector('.products').innerHTML = htmlcode;
document.querySelectorAll('.add').forEach((but) => {
    but.addEventListener('click', () => {

        let id = but.dataset.pId;

        addCart(id);
        added(id)
        quantity()
        // m();
console.log(cart)
    })
})
document.querySelector('.n').innerHTML=quantity()
