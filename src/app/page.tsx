import Hero from '@/components/Hero'
import Image from 'next/image'
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
//import AddToCartButton from '@/components/AddToCartButton';
export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProducts />
      <Testimonial />
    </main> 
    
    
  )
}


