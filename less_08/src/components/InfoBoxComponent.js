import React from 'react';

export default function FooterComponent() {

    const infoItems = [
        {
            imageSrc: require('../img/info_pict_01.svg').default,
            name: 'Free Delivery',
            text: 'Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.'
        },
        {
            imageSrc: require('../img/info_pict_02.svg').default,
            name: 'Sales & discounts',
            text: 'Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.'
        },
        {
            imageSrc: require('../img/info_pict_03.svg').default,
            name: 'Quality assurance',
            text: 'Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.'
        }
    ];
    
    return (
        <section className="infoBox">
            <div className="container infoBox__wrap">
                {infoItems.map((item) => (
                    <div className="infoBox__info">
                        <img className="infoBox__pict" src={item.imageSrc} alt="" />
                        <div className="infoBox__name">{item.name}</div>
                        <div className="infoBox__text">{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}