import { ProductStore } from "../store/product";
import Container from "./productDetailsCard";
import Products from "./productsCard";

function ProductPage(){
    const {product} =ProductStore();
    interface Data {
        id: number;
        title: string;
        price: number;
        Detail: string;
        Description: string;
        image?: string; 
      }

    return(
        <>
            <h1 className="text-orange-600 text-center text-2xl p-2 font-bold">Travel packages</h1>
            <div className="flex flex-col w-full">
           
                <Products data={product} />

            </div>
        </>
        
        
    )
}

export default ProductPage;