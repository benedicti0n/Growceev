import Blog from "@/components/Blog";
import Navbarr from "@/components/Navbarr";
import PageOne from "@/components/PageOne";
import PageThree from "@/components/PageThree";
import PageTwo from "@/components/PageTwo";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
   <div className='py-4 px-6 relative'>
    <Navbarr/>
    <PageOne/>
    <PageTwo/>
    <PageThree/>
    <Blog/>
    <WhyUs/>
   </div>
  );
}