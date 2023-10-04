 import Product from "../../components/Product";
import { useGetNewestProductsQuery } from "./productApiSlice"

const NewestProducts = () => {
    const {data, isLoading, isSuccess} = useGetNewestProductsQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = (
            <section>
                <h2 className="m-4 text-center">Newest Products</h2>
                <ul className="item" >
                    {
                        products.map(prod => {
                            return <Product prod={prod} key={prod._id} />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default NewestProducts

