"use client"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart";
import ProductList from "../../components/Product"
import { ProductsProvider } from "../../context/ProductsProvider";
import { useState } from "react"

function Home() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return content
  
}
export default Home
