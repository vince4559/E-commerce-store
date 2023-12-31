import ProductList from "../../../components/ProductList";
import { useGetPerfumeQuery } from "../productApiSlice"

const Perfumes = () => {
    const {data, isLoading, isSuccess, isError} = useGetPerfumeQuery();
    const products = data
    console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    }else if(isError){
        return <h3>Data Not Found!</h3>
    } else if(isSuccess){
        content = (
            <section className="w-full p-3 bg-slate-900">
                <h2 className="m-4 text-center">Perfumes Category</h2>
                <ul className="item" >
                    {
                        products.map((prod) => {
                            return <ProductList prod={prod} key={prod._id}  />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default Perfumes


// <CartProductList prod={prod} key={prod._id}  />