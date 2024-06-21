import { productType } from '@/types'
import classes from './ProductCard.module.css'
import { Link } from 'react-router-dom'

function ProductCard({product}:{product:productType}) {

  return (
    <Link to={`/product/${product.productName}`} className={classes.card}>
            <div className={classes.Image}>
                <img  src={product.productImage} alt="productImage" />
            </div>
            <div className={classes.content}>
                <p>{product.productName}</p>
                <p>{product.price}</p>
            </div>
    </Link>
  )
}

export default ProductCard
