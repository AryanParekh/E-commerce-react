import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';

const ProductContext=React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts};
        })
    }
    getItem=id=>{
        const product=this.state.products.find(item=>item.id===id);
        return product;
    }
    handleDetail=id=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart=id=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        });
        let subTotal=product.total;
        this.state.cart.filter((item)=>{
            subTotal=subTotal+item.total;
            return null;
        })
        const tax=0.18*subTotal;
        const total=tax+subTotal;
        this.setState(()=>{
            return {cartSubTotal:subTotal,cartTax:tax,cartTotal:total};
        })
    }
    increment=(id)=>{
        const product=this.getItem(id);
        if(product.count>=1 && product.count<10){
            product.count=product.count+1;
            product.total=product.count*product.price;
            this.setState(()=>{
                return {cart:[...this.state.cart]};
            });
            let subTotal=0;
            this.state.cart.filter((item)=>{
                subTotal=subTotal+item.total;
                return null;
            })
            const tax=0.18*subTotal;
            const total=tax+subTotal;
            this.setState(()=>{
                return {cartSubTotal:subTotal,cartTax:tax,cartTotal:total};
            })
        }
    }
    decrement=(id)=>{
        const product=this.getItem(id);
        if(product.count>1 && product.count<=10){
            product.count=product.count-1;
            product.total=product.count*product.price;
            this.setState(()=>{
                return {cart:[...this.state.cart]};
            });
            let subTotal=0;
            this.state.cart.filter((item)=>{
                subTotal=subTotal+item.total;
                return null;
            })
            const tax=0.18*subTotal;
            const total=tax+subTotal;
            this.setState(()=>{
                return {cartSubTotal:subTotal,cartTax:tax,cartTotal:total};
            })
        }
    }
    removeItem=(id)=>{
        const updatedCart=this.state.cart.filter((item)=>item.id!==id);
        const product=this.getItem(id);
        let subTotal=this.state.cartSubTotal;
        subTotal=subTotal-product.total;
        product.inCart=false;
        product.count=0;
        product.total=0;
        this.setState(()=>{
            return {cart:updatedCart,cartSubTotal:subTotal,cartTax:0.18*subTotal,cartTotal:1.18*subTotal};
        });
    }
    clearCart=()=>{
        this.state.cart.map((item)=>{
            const product=this.getItem(item.id);
            product.inCart=false;
            product.count=0;
            product.total=0;
            return product;
        })
        this.setState(()=>{
            return {cart:[],cartSubTotal:0,cartTax:0,cartTotal:0};
        });
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};