const localStorageData = ()=>{
    const cart = getCart()
        for (const product in cart){
            displayShow(product)
        }
}

const addItem = ()=>{
    const inputFeld = document.getElementById('inputFeld')
    const inputValue = inputFeld.value
        if(!inputValue){
            return inputValue
        }
    displayShow(inputValue)
    addProductToCart(inputValue)


    inputFeld.value ='';
}

const displayShow = inputValue =>{
    const displayContainer = document.getElementById('products')
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = inputValue
    displayContainer.appendChild(li)
}
// Local storage checking 

const getCart = ()=>{
    const cart = localStorage.getItem('cart')
        let cartObject;
            if(cart){
                cartObject = JSON.parse(cart) 
            }else{
                cartObject = {}
            }
        return cartObject
}
const addProductToCart = inputValue =>{
    const cart = getCart()
        if(cart [inputValue]){
            cart[inputValue] = cart[inputValue] +1;
        }else{
            cart[inputValue] = 1
        }
    const cartstringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartstringfy)
}

const placeOrder = ()=>{
    document.getElementById('products').textContent ='';
    localStorage.removeItem('cart')

}

// fast function check load data 
localStorageData()