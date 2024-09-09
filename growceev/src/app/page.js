import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import GoogleAds from "@/components/GoogleAds";
import MetaAds from "@/components/MetaAds";
import Navbarr from "@/components/Navbarr";
import PageOne from "@/components/PageOne";
import PageThree from "@/components/PageThree";
import PageTwo from "@/components/PageTwo";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
   <div className='py-4 px-6 relative'>
    <Navbarr/>
    <PageOne/>
    <PageTwo/>
    <PageThree/>
    {/* <Blog/> */}
    <SEO/>
    <WhyUs/>
    <GoogleAds/>
    <MetaAds/>
    <Services/>
    <Footer/>
   </div>
  );
}