import ProductCard from '@/components/shared/ProductCard/ProductCard'
import classes from './Home.module.css'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { userContext } from '@/context/UserContext'

export const temp_data = [
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
  {
    productImage:"https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",
    hoverImage:"https://5.imimg.com/data5/SELLER/Default/2021/3/JF/BR/AX/92787722/electric-bicycle-500x500.jpeg",
    productName : 'CYCLE 2000w ADULT',
    category:'Electronics',
    price:12000,
    rating:3,
  },
]

function Home() {

  return (
    <div className={classes.main}>
      { temp_data.map((product,index)=>{
       return <ProductCard key={index} product={product}/>
      })  
      }
    </div>
  )
}

export default Home
