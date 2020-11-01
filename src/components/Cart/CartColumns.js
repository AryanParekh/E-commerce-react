import React from 'react'

export default function CartColumns() {
    return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Product</strong></p>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Name</strong></p>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Price</strong></p>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Quantity</strong></p>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Remove</strong></p>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <p><strong>Total</strong></p>
                    </div>
                </div>
            </div>
    )
}
