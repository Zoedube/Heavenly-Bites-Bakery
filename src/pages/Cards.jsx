import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// Card Item Component Code
function Cards() {
  return (
    <div className='cards'>
      <h1>Recipe Details</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem 
            src='https://i.pinimg.com/736x/6e/91/02/6e91020d810ea213cde0898a9ff9a0f9.jpg'
            text='Indulge in our timeless Classic Vanilla Delight, a moist and fluffy cake layered with rich vanilla bean buttercream, perfect for any occasion.'
            label='Classic Vanilla Delight'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/11/1b/a0/111ba08583add9caf476d6cae573f43c.jpg'
            text='Experience pure bliss with our Decadent Chocolate Dream, featuring layers of luscious chocolate cake and creamy ganache, a true treat for chocolate lovers.'
            label='Decadent Chocolate'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/b3/3f/c1/b33fc1941d036d03a6fda2eec79dc834.jpg'
            text='Refresh your senses with our Luscious Lemon Zest, a light and airy cake infused with zesty lemon curd and topped with a tangy lemon glaze.'
            label='Luscious Lemon Zest'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/3e/54/cd/3e54cdf4b7e03762c6ccced98dc4580d.jpg'
            text='Savor the elegance of our Velvety Red Velvet, a classic favorite with a hint of cocoa, layered with smooth cream cheese frosting.'
            label='Velvety Red Velvet'
            path='/services'/>
          </ul>
          
          <ul className='cards__items'>
            <CardItem 
            src='https://i.pinimg.com/564x/01/d1/25/01d125d645ad7af91863cc4ecc95f804.jpg'
            text='Delight in our Sumptuous Strawberry Shortcake, made with layers of fluffy sponge cake, fresh strawberries, and sweet whipped cream.'
            label='Strawberry Shortcake'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/41/c2/1e/41c21e59b46b38fd625ba3cfafc3fea6.jpg'
            text='Indulge in our Heavenly Hazelnut Praline, a rich and nutty creation with layers of hazelnut sponge cake and velvety praline buttercream.
            '
            label='Hazelnut Praline'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/87/8d/1c/878d1c7ede9711dba2db951c8d103c6b.jpg'
            text='Embark on a tropical adventure with our Exotic Mango Passion, combining moist mango-flavored cake with a tangy passion fruit filling.'
            label='Exotic Mango Passion'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/c5/df/89/c5df898c3afaad563edbbf0c82bb8898.jpg'
            text='Satisfy your sweet tooth with our Caramel Toffee Temptation, featuring layers of buttery toffee cake and decadent caramel frosting.'
            label='Caramel Toffee'
            path='/services'/>
          </ul>

          <ul className='cards__items'>
            <CardItem 
            src='https://i.pinimg.com/564x/58/dd/71/58dd718b410d459d23539d51171fb82d.jpg'
            text='Transport yourself to a tropical paradise with our Coconut Cream Paradise, a light and fluffy coconut cake filled with coconut cream and topped with shredded coconut.'
            label='Coconut Cream'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/7a/64/e9/7a64e96f2f367e0d9421c8d445c0a4ce.jpg'
            text='Awaken your senses with our Rich Coffee Mocha, a delightful blend of rich coffee-infused cake and smooth mocha buttercream.'
            label='Rich Coffee Mocha'
            path='/services'/>

            <CardItem 
            src='https://i.pinimg.com/564x/33/8a/41/338a41d91065b4d3eb727e72b98431fe.jpg'
            text='Experience sophistication with our Elegant Earl Grey Lavender, a unique fusion of aromatic Earl Grey tea and delicate lavender buttercream.'
            label='Earl Grey Lavender'
            path='/services'/>
            
            <CardItem 
            src='https://i.pinimg.com/564x/5f/10/70/5f1070d5e64d9070e22ec37b93692686.jpg'
            text='Indulge in our Pistachio Rose Delight, a delicate combination of moist pistachio cake and fragrant rosewater frosting, perfect for a touch of elegance.'
            label='Pistachio Rose Delight'
            path='/services'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;