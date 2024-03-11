import '../styles/Activity52.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Activity51 = function () {
  const dummyProducts = [
    {
      name: 'React - The Complete Guide',
      link: 'https://www.google.com',
      price: 19.99,
    },
    { name: 'Sylish Chair', link: 'https://www.google.com', price: 39.99 },
    { name: 'Video Game', link: 'https://www.google.com', price: 49.99 },
  ]

  const [addedProducts, setAddedProducts] = useState(dummyProducts)

  const addProduct = function () {
    const newProduct = {
      name: 'Mario Kart',
      link: 'https://mario.nintendo.com/',
      price: 100.0,
    }

    setAddedProducts((oldProducts) => {
      return [...oldProducts, newProduct]
    })
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 5.2</h1>
      <p>Outputting a list of Products</p>
      <div className="complete-block">
        {/* button and list */}
        <input type="button" value="Add Product" onClick={addProduct} />
        <ul className="list">
          {addedProducts.map((obj) => {
            return (
              <li>
                <Link to={obj.link}>
                  {obj.name} {obj.price}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Activity51
