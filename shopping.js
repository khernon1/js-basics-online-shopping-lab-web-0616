var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({ [item]: price })  
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  var str = ""
    for (var item in cart) {
      str += (` ${Object.keys(cart[item])} at $${(cart[item])[Object.keys(cart[item])]},`)
  }
      str = str.slice(0, -1)
      str = "In your cart, you have" + str + "."
      console.log(str)
}


function removeFromCart(item) {
  var itemExists = false
    for (var i = 0, l = cart.length; i < l; i++) {
        var pair = cart[i]
        var itemName = Object.keys(pair)[0]        
          if (item === itemName) {
           itemExists = true           
           removed = cart.splice(i, 1)
           return cart
      } 
    }

    if (itemExists === false) {
      console.log("That item is not in your cart.")
    } else {
      
      return cart
    }
}

function placeOrder(credit) {
  if (credit == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credit}.`)
  }
  cart = []
}

