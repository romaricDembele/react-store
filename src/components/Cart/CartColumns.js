import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Product
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Name of Product
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Price
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Quantity
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Remove
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block mx-auto text-center text-uppercase">
                    Total
                </div>
            </div>
        </div>
    )
}
