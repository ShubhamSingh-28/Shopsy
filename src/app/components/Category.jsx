import React from 'react'

const category=[
  'smartphones',    'laptops',
  'fragrances',     'skincare',
  'groceries',      'home-decoration',
  'furniture',      'tops',
  'womens-dresses', 'womens-shoes',
  'mens-shirts',    'mens-shoes',
  'mens-watches',   'womens-watches',
  'womens-bags',    'womens-jewellery',
  'sunglasses',     'automotive',
  'motorcycle',     'lighting'
]

export default function Category() {
const cat = category.map((item)=> item )
console.log(cat);
  return (
    <div>
      
    </div>
  )
}
