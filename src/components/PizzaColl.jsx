import React from 'react'
import CardPizza from './CardPizza';

export default function PizzaColl() {
  return (
    <div className='container'><br></br>
        <h2 className='text-center'>All Your Fav🖤 pizza here 😋</h2>
        <div className='grids'>
        <CardPizza name1="Pepperoni" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download.png"/>
        
        <CardPizza name1="Panner Cheese" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-File.png"/>
        <CardPizza name1="Manturian Pizza" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza.png"/>
        <CardPizza name1="Pizza Burst" img="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-PNG.png"/>
        {/* <CardPizza name1="Mexican Green Wave-S" img="https://www.pngall.com/wp-content/uploads/4/Dominos-Pizza-PNG-Photo.png"/> */}
        <CardPizza name1="Panner Cheese" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-File.png"/>
        <CardPizza name1="Pizza Burst" img="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-PNG.png"/>
        <CardPizza name1="Pepperoni" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download.png"/>
        <CardPizza name1="Manturian Pizza" img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza.png"/>

        </div>
    </div>
  )
}
