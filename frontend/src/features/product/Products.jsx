import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import { useGetProductsQuery } from "./productApiSlice"

const Products = ({filters, sort}) => {
    const {data, isLoading, isSuccess} = useGetProductsQuery();
    const products = data
    const [filterProducts, setFilterProducts] = useState([])
   console.log(filterProducts)
    
    useEffect(() => {
        setFilterProducts(
            products?.filter(item => Object.entries(filters).every(([key,value]) =>
            item[key].includes(value)
            ))
        )
    },[products, filters]);

    useEffect(() => {
        if((sort === 'newest')){
            setFilterProducts(prev => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            );
        }else if((sort === 'asc')){
            setFilterProducts(prev => 
                [...prev].sort((a,b) => a.price - b.price)
            );
        } else if((sort === 'desc')){
            setFilterProducts(prev => 
                [...prev].sort((a,b) => b.price - a.price)
            );
        }
    },[sort])

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = (
            <section>
                <h2 className="m-4 text-center">All Products</h2>
                {/* <FilterProducts /> */}
                <ul className="item" >
                    {
                        filterProducts?.map(prod => {
                            return <ProductList prod={prod} key={prod._id}  />
                        })
                    }
                </ul>
            </section>
        )
    }

  return <section className="p-3 bg-black">
    {content}
  </section>
}

export default Products

