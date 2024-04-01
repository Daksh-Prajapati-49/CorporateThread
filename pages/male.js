import React from 'react'
import { client } from '../lib/client'
import { AllProducts } from '../components'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const male = ({ AllMaleProducts }) => {
    return (
        <div className='Allproducts-container'>
            {/* {AllMaleProducts?.map(prod => (
                <AllProducts key={prod._id} allproducts={prod} />
            ))} */}
            <div>
                <Link href={`/product/1`}>
                    <div className='Allproduct-card'>
                        <img src={AllMaleProducts[0]} width={250} height={270} />
                        <p className='Allproduct-name'>Bottle Green</p>
                        <p className='Allproduct-tags'>Casual Shirts</p>
                        <p className='Allproduct-price'>₹695</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link href={`/product/2`}>
                    <div className='Allproduct-card'>
                        <img src={AllMaleProducts[1]} width={250} height={270} />
                        <p className='Allproduct-name'>Dark Grey</p>
                        <p className='Allproduct-tags'>Casual Shirts</p>
                        <p className='Allproduct-price'>₹795</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link href={`/product/3`}>
                    <div className='Allproduct-card'>
                        <img src={AllMaleProducts[2]} width={250} height={270} />
                        <p className='Allproduct-name'>Yellow</p>
                        <p className='Allproduct-tags'>Casual Shirts</p>
                        <p className='Allproduct-price'>₹695</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = '*[category == "Male"]';
    // const AllMaleProducts = await client.fetch(query);
    const AllMaleProducts = [
        "https://lh3.google.com/u/0/d/1WKxhOAOmZJrP1Raxyro53J6HHU_NBHrP=w2000-h1362-iv1",
        "https://lh3.google.com/u/0/d/1uU4l8vmtggyX6kY07RJ8DhnVZdI9K3tF=w2000-h1362-iv1",
        "https://lh3.google.com/u/0/d/1tOguhcO04gjV9jEMyp96WESB5igybSy6=w2000-h1362-iv1"
    ];

    return {
        props: { AllMaleProducts }
    }
}

export default male
