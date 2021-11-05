import React from 'react'
import { Link } from 'react-router-dom';
import {ButtonContainer} from '../Button'
import PayPalButton from './PayPalButton'

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container-fluid my-5">
                <div className="row text-capitalize">
                    <div className="col-10 d-flex flex-column mx-auto align-items-end">
                        <Link to="/">
                            <ButtonContainer cart onClick={() => clearCart()}>
                                    Clear Cart
                            </ButtonContainer>
                        </Link>
                        <div >
                            <div>
                                <span className="text-title">SubTotal:</span>
                                ${cartSubTotal}
                            </div>
                            <div>
                                <span className="text-title">Tax:</span>
                                ${cartTax}
                            </div>
                            <div>
                                <span className="text-title">Total: </span>
                                ${cartTotal}
                            </div>
                            <PayPalButton />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
