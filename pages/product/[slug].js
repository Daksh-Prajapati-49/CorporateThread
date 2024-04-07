import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import { useStateContext } from '../../context/StateContext';
import data from "./data.json";

const ProductDetails = ({products, product}) => {
    const { image, name, details, price, tags, care } = product;
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext();

    const careList = [];

    {for (let i = 0; i < care.length; i++) {
        careList.push(care[i].children[0].text)
    }}

    return (
        <div className='products'>
            <div className='product-detail-container'>
                <div className='product-images'>
                    <div className='small-images-container'>
                        {/* {image?.map((item, ind) => (
                            <img 
                            key={ind}
                            src={urlFor(item)} 
                            className='small-image' 
                            onMouseEnter={() => setIndex(ind)} />
                        ))} */}
                        <img 
                            // src={image[0].asset._ref}
                            src={image[0].asset._ref} 
                            className='small-image' 
                            onMouseEnter={() => setIndex(ind)} />
                    </div>
                    <div className='big-image-container'>
                        {/* <img src={urlFor(image && image[index])} /> */}
                        <img src={image[0].asset._ref}  />
                    </div>
                </div>
                <div className='product-details'>
                    <div className='name-and-category'>
                        <h3>{name}</h3>
                        <span>{tags}</span>   
                    </div>
                    <div className='size'>
                        <p>SELECT SIZE</p>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <div className='quantity-desc'>
                        <h4>Quantity: </h4>
                        <div>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num' onClick=''>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </div>
                    </div>
                    <div className='add-to-cart'>
                        <button className='btn' type='button' onClick={() => onAdd(product, qty)}><CgShoppingCart size={20} />Add to Cart</button>
                        <p className='price'>₹{price}.00</p>  
                    </div>
                </div>
            </div>

            <div className='product-desc-container'>
                <div className='desc-title'>
                    <div className="desc-background">
                        Overview
                    </div>
                    <h2>Product Information</h2>  
                </div>
                <div className='desc-details'>
                    <h4>PRODUCT DETAILS</h4>
                    <p>{details[0].children[0].text}</p>  
                </div>
                <div className='desc-care'>
                    <h4>PRODUCT CARE</h4>
                    <ul>
                    {careList.map(list => (
                        <li>{list}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails

export const getStaticProps = async ({params: {slug}}) => {
    console.log(slug);
    // const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    // const productsQuery = '*[_type == "product"]';
    // console.log(query);
    const product = {};
    // const product = await client.fetch(query);
    // console.log(JSON.stringify(product));
    // const products = await client.fetch(productsQuery)
    const products = {};
    // console.log(products);
    console.log(JSON.stringify(data[0]));

    if(slug == "raglan-sweatshirt"){
        return {
            props: {products, product : data[0]}
        }
    }
    if(slug == "1"){
        return {
            props: {products, product : data[0]}
        }
    }
    if(slug == "2"){
        return {
            props: {products, product : data[1]}
        }
    }
    // if(slug == "3"){
        return {
            props: {products, product : data[2]}
        }
    // }
  
    // return {
    //   props: { products, product }
    // }
}

// Generates `/product/1` and `/product/2`
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
      paths,
      fallback: 'blocking'
    }
}
