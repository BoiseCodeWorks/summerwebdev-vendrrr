function VenderService(){
  //private parts
  let money = 0

  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(A1, D4, etc)
  let items = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    }
  ]


  //public parts

  this.getItems = function(){
    let itemsCopy = []

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      let itemCopy = {
        name: item.name,
        description: item.description,
        price: item.price,
        amount: item.amount
      }
      itemsCopy.push(itemCopy)
    }
    return itemsCopy
  }

  this.purchase = function(index){
    //decrement the qty
    //decrement money
    let item = items[index]
    if(money >= item.price && item.amount >=1){
      item.amount--
      money -= item.price
      console.log("purchased ", item.name)
      return {
        name: item.name,
        description: item.description,
        price: item.price,
        amount: item.amount
      }
    }
  }

  this.getMoney = function(){
    return money
  }
  
  this.addMoney = function(){
    money += .25
  }



}