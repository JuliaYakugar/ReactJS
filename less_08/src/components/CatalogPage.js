import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import InfoBox from './InfoBoxComponent';
import { products } from '../data/products';

export default function CatalogPage() {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedSizes([...selectedSizes, value]);
        } else {
            setSelectedSizes(selectedSizes.filter(size => size !== value));
        }
    };

    const filteredProducts = selectedSizes.length === 0 ? products : products.filter(product => {
        return selectedSizes.includes(product.size);
    });

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

            <section class="catalog">
                <div class="container catalog__wrap">

                    <div class="catalog__filter">
                        <div class="catalog__filter-left">
                            <details>
                                <summary><span>FILTER</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                    <path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" fill="black"/>
                                </svg></summary>
                                <div class="catalog__filter-left-content">
                                    <details open>
                                        <summary class="catalog__filter-left-category">CATEGORY</summary>
                                        <ul>
                                            <li>Accessories</li>
                                            <li>Bags</li>
                                            <li>Denim</li>
                                            <li>Hoodies & Sweatshirts</li>
                                            <li>Jackets & Coats</li>
                                            <li>Polos</li>
                                            <li>Shirts</li>
                                            <li>Shoes</li>
                                            <li>Sweaters & Knits</li>
                                            <li>T-Shirts</li>
                                            <li>Tanks</li>
                                        </ul>
                                    </details>
                                    <details open>
                                        <summary class="catalog__filter-left-category">BRAND</summary>
                                    </details>
                                    <details open>
                                        <summary class="catalog__filter-left-category">DESIGNER</summary>
                                    </details>
                                </div>
                            </details>
                        </div>

                        <div class="catalog__filter-center">
                            <details>
                                <summary>TRENDING NOW</summary>
                            </details>
                            <details>
                                <summary>SIZE</summary>
                                <div>
                                    <label for="sizeXS">
                                        <input 
                                            type="checkbox" 
                                            id="sizeXS"
                                            value='XS'
                                            onChange={handleCheckboxChange} 
                                        />XS
                                    </label>
                                    <label for="sizeS">
                                        <input 
                                            type="checkbox" 
                                            id="sizeS" 
                                            value='S'
                                            onChange={handleCheckboxChange}
                                        />S
                                    </label>
                                    <label for="sizeM">
                                        <input 
                                            type="checkbox" 
                                            id="sizeM"
                                            value='M'
                                            onChange={handleCheckboxChange} 
                                        />M
                                    </label>
                                    <label for="sizeL">
                                        <input 
                                            type="checkbox" 
                                            id="sizeL"
                                            value='L'
                                            onChange={handleCheckboxChange} 
                                        />L
                                    </label>                    
                                </div>
                            </details>
                            <details>
                                <summary>PRICE</summary>
                            </details>
                        </div>

                    </div>

                    <div class="items__cards">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div class="catalog__pagination">
                        <ul>
                            <li>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                    <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" fill="black"/>
                                </svg></a>
                            </li>
                            <li>
                                <a class="catalog__pagination-active" href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li>
                                <a href="#">6</a>
                            </li>
                            <li>
                                <a href="#">...</a>
                            </li>
                            <li>
                                <a href="">20</a>
                            </li>
                            <li>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                    <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" fill="black"/>
                                </svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <InfoBox />
        </main>
    )

}