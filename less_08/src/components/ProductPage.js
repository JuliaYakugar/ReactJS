import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductPage() {

    return (
        <main>
            <section class="product__intro">
                <div class="container product__intro__wrap">
                    <div class="product__intro__text">
                        <h1>NEW ARRIVALS</h1>
                    </div>
                    <ul class="product__intro__bread">
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link to='/'>MEN</Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link to='/catalog'>NEW ARRIVALS</Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="product__foto">
                <div class="product__foto-slider">
                    <div class="product__foto-slider-item">
                        <div class="product__foto-slider-item--img">
                            <img src={require('../img/products/item_00.jpg')} alt="slide" />
                        </div>
                        <button class="product__foto-slider-item-btn product__foto-slider-item-btnleft" onclick="previousSlide()">
                            <img src={require('../img/slider-back.svg').default} alt="arrow-left" />
                        </button>
                        <button class="product__foto-slider-item-btn product__foto-slider-item-btnright" onclick="nextSlide()">
                            <img src={require('../img/slider-next.svg').default} alt="arrow-right" />
                        </button>
                    </div>

                </div>
                
            </section>

            <section class="product__info">
                <div class="container product__info__wrap">
                    <p class="product__info__wrap-collection">WOMEN COLLECTION</p>
                    <hr class="product__info__wrap-pinkhr" />
                    <p class="product__info__wrap-name">MOSCHINO CHEAP AND CHIC</p>
                    <p class="product__info__wrap-text">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>
                    <p class="product__info__wrap-price">$561</p>
                    <hr class="product__info__wrap-darkhr" />

                    <div class="product__info__wrap-filter">
                        <a href="#">CHOOSE COLOR</a>
                        <a href="#">CHOOSE SIZE</a>
                        <a href="#">QUANTITY</a>
                    </div>

                    <div class="product__info__wrap-button">
                        <img src={require('../img/basket_red.svg').default}  alt="ico-basket-red" />
                        <a href="#">Add to Cart</a>
                    </div>
                </div>
            </section>

            <section class="items product__items">
                <div class="container">

                <div class="items__cards">
                    {products.slice(0, 3).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                </div>
            </section>
        </main>
    )

}