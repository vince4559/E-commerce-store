import ProductList from "../../../components/ProductList";
import { useGetTshirtQuery } from "../productApiSlice"

const Tshirts = () => {
    const {data, isLoading, isSuccess} = useGetTshirtQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = (
            <section className="w-full p-3 bg-slate-900">
                <h2 className="m-4 text-center">Tshirts Category</h2>
                <ul className="item" >
                    {
                        products.map((prod) => {
                            return <ProductList key={prod._id} prod={prod} />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default Tshirts

