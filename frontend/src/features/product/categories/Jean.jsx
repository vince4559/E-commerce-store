import ProductList from "../../../components/ProductList";
import { useGetJeanQuery } from "../productApiSlice"

const Jean = () => {
    const {data, isLoading, isSuccess, isError} = useGetJeanQuery();
    const products = data
    // console.log(products)

    let content;
    if(isLoading){
        content = <p>Loading...</p>
    }else if(isError){
        return <h3>Data Not Found!</h3>
    } else if(isSuccess){
        content = (
            <section className="container">
                <h2 className="m-4 text-center">Jean Category</h2>
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

export default Jean

