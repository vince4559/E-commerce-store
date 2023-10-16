import ProductList from "../../components/ProductList";
import { useGetNewestProductsQuery } from "./productApiSlice"

const NewestProducts = () => {
    const {data, isLoading, isSuccess, isError} = useGetNewestProductsQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isError){
        return <h3>Data Not Found!</h3>
    }else if(isSuccess){
        content = (
            <section>
                <h2 className="m-4 text-center">Newest Products</h2>
                <ul className="item" >
                    {
                        products.map(prod => {
                            return <ProductList prod={prod} key={prod._id} />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default NewestProducts

