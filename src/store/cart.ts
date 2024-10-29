import {create} from 'zustand'

interface CartItem {
  id: number;
  name: string;
  image?: any;
  price: number;
  quantity: number;
}

interface CartData {
  cart: CartItem[];
}

const CartStore = create<CartData>(() => ({
  cart: [],
}));

export default CartStore;
