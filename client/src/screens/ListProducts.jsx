import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListProduct = () => {
  const [products, setProducts]= useState([])
  useEffect(()=>{
      const getProductsData = async() => {
 

      }
      getProductsData()
  }, [])
  return (
    <>
      <h1>List product</h1>
    </>
  )
}

export default ListProduct
