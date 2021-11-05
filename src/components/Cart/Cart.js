import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title.js'
import CartColumns from './CartColumns.js'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import PayPalButton from './PayPalButton'

export default class Cart extends Component {
    render() {
        return (
            <section className="mt-5">
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if (cart.length > 0)
                        {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value}/>
                                    
                                </React.Fragment>
                            );
                        } else
                        {
                            return (
                                <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>
            </section>

        )
    }
}
