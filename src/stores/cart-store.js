import { observable, action } from 'mobx'

class CartStore {
  @observable isShowCart = false

  @observable isShowCheck = false

  @observable productCart = []

  @action('Cart is show')
  showCart() {
    this.isShowCart = true
  }

  @action('Cart is hide')
  hideCart() {
    this.isShowCart = false
  }

  @action('Check is show')
  showCheck() {
    this.isShowCheck = true
    window.localStorage.setItem('productCart', JSON.stringify(this.productCart))
  }

  @action('Check is hide')
  hideCheck = () => {
    this.isShowCheck = false
    this.productCart = []
  }

  @action('Add todo Cart')
  addTodoCart(payload) {
    // console.log('tut:', payload.price)
    if (this.productCart.find(x => x.id === payload.id)) {
      return
    }
    this.productCart.push(payload)

    // const productPrice = payload.price;
    // if(productPrice !== ''){
    //   find(x => x.price += productPrice){
    //     console.log(price);
    //   }
    // }
  }

  @action('Remove todo Cart')
  removeTodoCart(id) {
    this.productCart = this.productCart.filter(item => item.id !== id)
  }
}

export default CartStore
