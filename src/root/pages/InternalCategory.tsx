
import ProductCard from '@/components/shared/ProductCard/ProductCard'
import { temp_data } from './Home'
import classes from "./Home.module.css"

function InternalCategory() {
  return (
    <div className={classes.main}>
    { temp_data.map((product,index)=>{
     return <ProductCard key={index} product={product}/>
    })  
    }
  </div>
  )
}

export default InternalCategory
