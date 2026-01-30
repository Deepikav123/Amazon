class Cartclass{
  
constructor(){
    this.addCart('77919bbe-0e56-475b-adde-4f24dfed3a04');
}

    cart=JSON.parse(localStorage.getItem('storage-class')) || [

        {
            id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 2,
            dId: 2
        },

        {
            id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            dId: 3
        }


    ]

    store() {
        localStorage.setItem('storage-class', JSON.stringify(this.cart));
    }


    quantity() {
        let q = 0;
        this.cart.forEach((v) => {
            q += v.quantity;

        })
        return q;
    }

    addCart(id) {
        let match;
        // dropdown
        // let xy = document.querySelector(`.pro-id-${id}`)
        // let val = Number(xy.value)

        this.cart.forEach((v) => {
            if (id === v.id) {
                match = v;
            }
        });

        if (match) {
            match.quantity += 1;
        }
        else {
            this.cart.push({
                id,
                quantity: 1,
                dId: this.rand()
            });

        }
        // console.log(typeof(cart.dId))
        // document.querySelector('.n').innerHTML = this.quantity();
        console.log(this.cart)
        // Here store function is called because,addcart() updates string
        this.store()
    }

    added(id) {
        let display = document.querySelector(`.uni-${id}`)
        display.classList.add("green1")
        display.innerHTML = "Added ✓"
        setTimeout(function () {
            document.querySelector(`.uni-${id}`).classList.remove('green1')
        }, 2000)
        console.log(this.cart)
    }



    takeOff(delId) {
        let newCart = []
        this.cart.forEach((e) => {
            if (e.id !== delId) {
                newCart.push(e)
            }

        })
        this.cart = newCart;
        // Here store function is called because,takeOff() updates string
        this.store();
    }

    newQuan(proId, q) {
        this.cart.forEach((e) => {
            if (e.id === proId) {
                e.quantity = q
            }
        })
        this.store()
    }


    rand() {
        let r = Math.random()

        if (r >= 0 && r < 1 / 3) {
            return Number(1)
        }
        else if (r >= 1 / 3 && r < 2 / 3) {
            return Number(2)
        }
        else {
            return Number(3)

        }

    }


    updateDelivery(proId, DelID) {
        let match;
        this.cart.forEach((e) => {
            if (e.id == proId) {
                match = e;
            }
        })
        match.dId = DelID;
        this.store()
    }

}
let a=new Cartclass

console.log(a)



















