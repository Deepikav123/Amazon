export let cart=JSON.parse(localStorage.getItem('storage'))||
[ ];

function store(){
localStorage.setItem('storage',JSON.stringify(cart));
}

export function addCart(id) {
    let match;
    // dropdown
    let xy = document.querySelector(`.pro-id-${id}`)
    let val = Number(xy.value)

    cart.forEach((v) => {
        if (id === v.id) {
            match = v;
        }
    });

    if (match) {
        match.quantity += val;
    }
    else {
        cart.push({
            id,
            quantity: val,
            dId:rand()
        });

    }
    // console.log(typeof(cart.dId))
    document.querySelector('.n').innerHTML = quantity();
// console.log(cart)
    // Here store function is called because,addcart() updates string
    store()
}


 export function added(id) {
    let display = document.querySelector(`.uni-${id}`)
    display.classList.add("green1")
    display.innerHTML = "Added ✓"
    setTimeout(function () {
        document.querySelector(`.uni-${id}`).classList.remove('green1')
    }, 2000)
}

export function quantity() {
    let q = 0;
    cart.forEach((v) => {
        q += v.quantity;

    })
    return q;
}
// let quan=quantity();



export function takeOff(delId){
    let newCart=[]
    cart.forEach((e)=>{
        if(e.id!==delId){
            newCart.push(e)
        }

})
cart=newCart;
// Here store function is called because,takeOff() updates string
    store();
}
export function newQuan(proId,q){
    cart.forEach((e)=>{
        if(e.id===proId){
            e.quantity=q
        }
    })
    store()
}

function rand(){
    let r=Math.random()
   
 if(r>=0 && r<1/3){
   return Number(1)
 }
 else if(r>=1/3 && r < 2/3){
   return Number(2)
 }
 else {
      return Number(3)

 }

}

export function updateDelivery(proId,DelID){
    let match;
    cart.forEach((e)=>{
       if(e.id==proId){
        match=e;
       }
    })
    match.dId=DelID;
    store()
}