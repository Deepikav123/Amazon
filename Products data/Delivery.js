export function MatchDeliveryAndcartDid(Id){
  let deliver;
  Delivery.forEach((d) => {
    if (Id ==d.id) {
      deliver = d;
    }
  })
  return deliver

}

export const Delivery=[{
    id:1,
    d:7,
    price:0
},
{
    id:2,
    d:3,
    price:499
},{
    id:3,
    d:1,
    price:999
}
]