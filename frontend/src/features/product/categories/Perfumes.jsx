import Product from "../../../components/Product";
import { useGetPerfumeQuery } from "../productApiSlice"

const Perfumes = () => {
    const {data, isLoading, isSuccess} = useGetPerfumeQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = (
            <section className="w-full p-3 bg-slate-900">
                <h2 className="m-4 text-center">Perfumes Category</h2>
                <ul className="item" >
                    {
                        products.map((prod) => {
                            return <Product prod={prod} key={prod._id} />
                        })
                    }
                </ul>
            </section>
        )
    }

  return content
}

export default Perfumes

