import { cart, takeOff, quantity, newQuan,updateDelivery } from '../../Products data/cart.js'
import { products } from '../../Products data/products.js'
import { convert } from '../util/money.js'
import { Delivery } from '../../Products data/Delivery.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
// console.log(cart)

export function all(){
let html = ``;

cart.forEach((ele) => {
  let matching;
  // let id=ele.id;
  products.forEach((pro) => {
    if (pro.id === ele.id) {
      matching = pro
    }
  })
  
  // For delivery date


  let deliver;
  Delivery.forEach((d) => {
    if (ele.dId ==d.id) {
      deliver = d;
    }
  })

// console.log(deliver)


// Display
  let today = dayjs();
  let date = today.add(deliver.d, 'days')
  let display = date.format(`dddd, MMMM D`);
 

  html += `
    <div class="cart-item-container  id-${matching.id}">
            <div class="delivery-date">
              Delivery date:${display}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matching.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matching.name}
                </div>
                <div class="product-price">
                  ${convert(matching.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label q-${matching.id}">${ele.quantity}</span>
                  </span>




                  <span class="update-quantity-link link-primary" data-up-id="${matching.id}">
                  <span class="u">
                    Update
                    </span>
                    </span>
                    
                    <span class="quantity-container">
                    <input class="input-quantity inp-${matching.id}">
                    <span class="save-quantity link-primary " data-save-id="${matching.id}">Save</span>
                    </span>



                  <span class="delete-quantity-link link-primary " data-p-id="${matching.id}">
                    Delete
                  </span>
                </div>
              </div>


              
              <div class="delivery-options ">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deli(matching.id, ele)}
                
                
                  
                  
              </div>
            </div>
          </div>
          `



}

)


// delivery Options

function deli(proId, cartEle) {
  // console.log(proId)
  let delHtml = ``;

  Delivery.forEach((e) => {

    let today = dayjs();
    let date = today.add(e.d, 'days')
    let display = date.format(`dddd, MMMM D`);
    let p = e.price === 0 ? 'Free' : `${convert(e.price)}-`

    let find = cartEle.dId ==e.id
    // console.log(`1:${typeof(e.id)}`)
    delHtml +=
      `
      
                    <div class="delivery-option " data-proid=${proId} data-delid=${e.id}>
                      <input type="radio" ${find ? 'checked' : ''}
                        class="delivery-option-input"
                        name="delivery-option-${proId}">
                      <div>
                        <div class="delivery-option-date">
                         ${display}
                        </div>
                        <div class="delivery-option-price">
                          ${p} Shipping
                        </div>
                      </div>
                    </div>`
  }
  )
  return delHtml;
  // all()
}






document.querySelector('.order-summary').innerHTML = html
updatequantity()


document.querySelectorAll('.delete-quantity-link').forEach((link) => {
  let trash;
  link.addEventListener('click', () => {
    let del = link.dataset.pId;
    cart.forEach((e) => {
      if (e.id === del) {
        trash = e.id
      }
    })
    // console.log(trash)
    takeOff(trash)

    let rem = document.querySelector(`.id-${del}`);
    rem.remove()
    updatequantity()
  })
})

document.querySelectorAll('.update-quantity-link').forEach((e) => {
  let data = e.dataset.upId;
  e.addEventListener('click', (() => {
    document.querySelector(`.id-${data}`).classList.add('cont');


  }))

})


// Save
document.querySelectorAll('.save-quantity').forEach((ele) => {
  let save = ele.dataset.saveId;
  let v = document.querySelector(`.inp-${save}`);

  function saving() {

    let val = Number(v.value);
    document.querySelector(`.q-${save}`).innerHTML = val;
    newQuan(save, val)
    updatequantity()
    // To remove class
    document.querySelector(`.id-${save}`).classList.remove('cont')
  }
  ele.addEventListener('click', (() => {
    saving()
  }))

  let box = document.querySelector(`.inp-${save}`);
  box.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      saving()
    }
  })
})


function updatequantity() {
  document.querySelector('.c').innerHTML = quantity();

}

// document.querySelectorAll('.delivery-option').forEach((v)=>{
//   v.addEventListener('click',()=>{
//    let p=Number(v.dataset.pid);
//    let d=Number(v.dataset.eid);
//    updateDelivery(p,d);
//   })
// })
document.querySelectorAll('.delivery-option').forEach((ele)=>{
  ele.addEventListener('click',()=>{
    let p=ele.dataset.proid;
    let d=ele.dataset.delid;
   updateDelivery(p,d);
  //  This will reload page[Recursion]
   all()
  })
})

}
