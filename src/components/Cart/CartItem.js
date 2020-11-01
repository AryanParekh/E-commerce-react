import React from 'react';

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return(
        <div className="row my-1 text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{height:"5rem",width:"5rem"}} className="img-fluid" alt="product"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h5><span className="d-lg-none text-blue">Product: </span>{title}</h5>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h5><span className="d-lg-none text-blue">Price: </span>${price}</h5>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>
                <span className="d-lg-none text-blue">Quantity: </span>
                    <button className="btn-black" onClick={()=>decrement(id)}>-</button>
                    &nbsp;
                    <span style={{padding:"4px",border:"0.15rem solid var(--mainDark)"}}>{count}</span>
                    &nbsp;
                    <button className="btn-black" onClick={()=>increment(id)}>+</button>
                </p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>
                <span className="d-lg-none text-blue">Remove: </span>
                    <button className="btn-black" onClick={()=>removeItem(id)}><i class="far fa-trash-alt"></i></button>
                </p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h5><strong><span className="d-lg-none text-blue">Total: </span>${total}</strong></h5>
            </div>
        </div>
    )
}
