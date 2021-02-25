const items = [
    { name: 'Bike', price: 50 }, 
    { name: 'TV', price: 500 }, 
    { name: 'Fridge', price: 1020 }, 
    { name: 'Skateboard', price: 80 }, 
    { name: 'House', price: 112100 }, 
    { name: 'Rake', price: 5 }, 
]


const totalCost = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)