import React from 'react'

export default function CartItem({ item, value }) {

    const { id, img, price, title, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row my-3 d-flex justify-content-center align-items-center text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto text-center">
                <img src={img} className="img-fluid" alt="product" style={{width: "5rem", heigth: "5rem"}}></img>
            </div>
            <div className="col-10 col-lg-2 mx-auto text-center">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>
            <div className="col-10 col-lg-2 mx-auto text-center">
                Price: <span className="me-1">$</span>
                {price}
            </div>
            <div className="col-10 col-lg-2 mx-auto text-center">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <span className="btn btn-black" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black">
                            {count}
                        </span>
                        <span className="btn btn-black" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto text-center">
                <div className="btn trash-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto text-center">
                <strong> item total : $ {total}</strong>
            </div>
        </div>
    );
}
