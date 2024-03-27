import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({product}) {

    return (
        <div class="items__card">
            <div class="items__picture">
                <Link to='/product'>
                    <img src={require(`../img/products/${product.picture}`)} alt={product.picture} />
                </Link>
            </div>
            <Link to='/product' class="items__info">
                <div class="items__name">
                    <h3>{product.title} ({product.size})</h3>
                </div>
                <div class="items__description">
                    {product.description}
                </div>
                <div class="items__price">
                    ${product.price}
                </div>
            </Link>
        </div>
    )

}
