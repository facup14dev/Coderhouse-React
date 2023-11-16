import React from 'react'
import '../Breadcrumb/Breadcrumb.css'

const Breadcrumb = () => {
    return (
        <div id="crumbs">
            <h1>Breadcrumbs</h1>
            <ul>
                <li><a href="#1"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                <li><a href="#2"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Tienda</a></li>
                <li><a href="#3"><i class="fa fa-cart-plus" aria-hidden="true"></i> Carrito</a></li>
                <li><a href="#4"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Checkout</a></li>

            </ul>
        </div>
    )
}

export default Breadcrumb