import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=""
                />

                <div className='home__row'>
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg" rating={5} />
                    <Product id="1231434" title="kenwood kmix stand mixer" price={239.75} rating={4} image="https://www.noelleeming.co.nz/shop/content/images/products/192/192330.jpg"/>
                </div>

                <div className='home__row'>
                    <Product id="5467548698" title="apple smartwatch" price={436.26} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51pKavhJ-EL._AC_SX679_.jpg"/>
                    
                    <Product id="907867657" title="Amazon echo smart speaker with alexa - charcoal" price={98.43} rating={5} image="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/552/5828/100/3/740778400/740778400_1_720x928.jpg"/>
                    <Product id="976586565" title="New apple ipad pro silver" price={590.97} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81lqq8UF5ML._AC_SL1500_.jpg"/>
                </div>

                <div className='home__row'>
                    <Product id="87686586" title="Samsung gaming monitor" price={98.99} rating={5} image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425569_sd.jpg"/>
                    
                </div>
               

            </div>
        </div>
    )
}

export default Home
