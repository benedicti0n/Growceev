import Navbarr from "@/components/Navbarr";
import PageOne from "@/components/PageOne";
import PageTwo from "@/components/PageTwo";


export default function Home() {
  return (
   <div className='py-4 px-6 relative'>
    <Navbarr/>
    <PageOne/>
    <PageTwo/>
   </div>
  );
}
