import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

export function MatchDeliveryAndcartDid(Id) {
  let deliver;
  Delivery.forEach((d) => {
    if (Id == d.id) {
      deliver = d;
    }
  })
  console.log(deliver)
  return deliver

}



export const Delivery = [{
  id: 1,
  d: 7,
  price: 0
},
{
  id: 2,
  d: 3,
  price: 499
}, {
  id: 3,
  d: 1,
  price: 999
}
]
export function AddDate(deliver) {
  let today = dayjs();
  let date = today.add(deliver.d, 'days')
  return date;
}
