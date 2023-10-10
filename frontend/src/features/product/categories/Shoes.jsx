import ProductList from "../../../components/ProductList";
import { useGetShoesQuery } from "../productApiSlice"

const Shoes = () => {
    const {data, isLoading, isSuccess} = useGetShoesQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = (
            <section className="container">
                <h2 className="m-4 text-center">Shoes Category</h2>
                <ul className="item" >
                    {
                        products.map((prod) => {
                            return <ProductList prod={prod} key={prod._id} />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default Shoes

