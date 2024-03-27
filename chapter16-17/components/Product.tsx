import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction, CartProvider } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement =>{

    return (
        <div>Product</div>

    )
}

export default Product