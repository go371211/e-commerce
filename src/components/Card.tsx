import React from 'react'

export interface CardProps {
  title: string;
  image: string;
  price: number;
}

const Card = ({title, image, price}: CardProps) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={image} alt={`product picture for ${title}`} />
      <span>{price}元</span>
    </article>
  )
}

export default Card
