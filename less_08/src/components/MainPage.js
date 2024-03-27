import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import InfoBox from './InfoBoxComponent';
import { products } from '../data/products';

export default function MainPage() {

    return (
        <main>
        <section class="intro">
            <div class="container intro__wrap">
                <div class="intro__text">
                    <h1><span class="thebrand">THE BRAND</span><br /><span class="ofluxerious">OF LUXERIOUS </span><span
                            class="fashion">FASHION</span></h1>
                </div>
            </div>
        </section>

        <section class="category">
            <div class="container category__wrap">
                <div class="category__item forWomen">
                    <div class="shadow"></div>
                    <h1 class="category__text"><span class="category__text-small">30% OFF </span><br /><span
                            class="category__text-red">FOR WOMEN</span></h1>
                </div>
                <div class="category__item forMen">
                    <div class="shadow"></div>
                    <h1 class="category__text"><span class="category__text-small">HOT DEAL </span><br /><span
                            class="category__text-red">FOR MEN</span></h1>
                </div>
                <div class="category__item forKids">
                    <div class="shadow"></div>
                    <h1 class="category__text"><span class="category__text-small">NEW ARRIVALS </span><br /><span
                            class="category__text-red">FOR KIDS</span></h1>
                </div>
                <div class="category__item accesories">
                    <div class="shadow"></div>
                    <h1 class="category__text"><span class="category__text-small">LUXIROUS & TRENDY </span><br /><span
                            class="category__text-red">ACCESORIES</span></h1>
                </div>
            </div>
        </section>

        <section class="items">
            <div class="container items__wrap">

                <div class="items__text">
                    <h1 class="items__text-h1">Fetured Items</h1>
                    <span class="items__text-small">Shop for items based on what we featured in this week</span>
                </div>

                <div class="items__cards">
                    {products.slice(0, 6).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div class="items__button">
                    <Link class="buttonAllProducts" to='/catalog'>Browse All Product</Link>
                </div>

            </div>
        </section>

        <InfoBox />

    </main>
    )

}
