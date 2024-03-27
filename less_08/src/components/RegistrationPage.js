import React from 'react';

export default function RegistrationPage() {

    return (
        <main>
            <section class="product__intro">
                <div class="container product__intro__wrap">
                    <div class="product__intro__text">
                        <h1>REGISTRATION</h1>
                    </div>
                </div>
            </section>

            <section class="registration">
                <div class="container registration__wrap">

                    <div class="formdata">

                        <form>
                            <p>Your Name</p>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <div>
                                <input type="radio" id="male" name="male" value="male" />
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="male" value="female" />
                                <label for="female">Female</label>
                            </div>
                            <p>Login details</p>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <p class="text">Please use 8 or more characters, with at least 1 number
                                and a mixture of uppercase and
                                lowercase letters</p>
                            <input type="submit" value="JOIN NOW    &#8594;" />
                            
                        </form>

                    </div>

                    <div class="info">
                        <p>LOYALTY HAS ITS PERKS</p>
                        <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with
                            these as soon as you join:</p>
                        <ul>
                            <li>15% off welcome offer</li>
                            <li>Free shipping, returns and exchanges on all orders</li>
                            <li>$10 off a purchase on your birthday</li>
                            <li>Early access to products</li>
                            <li>Exclusive offers & rewards</li>
                        </ul>
                    </div>
                </div>

            </section>
        </main>
    )

}