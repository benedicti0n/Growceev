import React from 'react'

function PageThree() {

    const cards = [
        {
            id:1,
            title: 'SEO',
            description: 'Enhance visibility and rankings with our expert SEO strategies, designed to boost your sites performance and attract more traffic, increase site traffic and ROI.',
            imgUrl: '/seo.png'
        },
        {
            id:2,
            title: 'Google Ads',
            description: 'Drive targeted traffic and maximize ROI with our expertly managed Google Ads campaigns, crafted to deliver measurable results and increase conversions.',
            imgUrl: '/googleAds.png'
        },
        {
            id:3,
            title: 'Facebook Ads',
            description: 'Reach your ideal audience on the worlds largest social media platform through strategic Facebook Ads that boost brand awareness and drive engagement.',
            imgUrl: '/fbAds.png'
        },
        {
            id:4,
            title: 'Funnel',
            description: 'Optimize your sales funnel from awareness to conversion with our proven funnel services, designed to streamline customer acquisition and improve retention rates.',
            imgUrl: '/sales.png'
        },
        {
            id:5,
            title: 'Website Design',
            description: 'Create a stunning online presence that captivates visitors and enhances user experience with our bespoke website design solutions tailored to your brand identity.',
            imgUrl: '/uiux.png'
        },
        {
            id:6,
            title: 'Website Development',
            description: 'Transform your vision into a functional and scalable website with our expert website development services, ensuring seamless navigation and robust performance.',
            imgUrl: '/coding.png'
        }
    ]
  return (
    <div id="services" className="min-h-screen w-full flex justify-center py-6 mt-10 items-center md:px-12 px-5">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {cards.map((card) => (
                <div key={card.id} className='p-6 border border-gray-300 rounded-[20px] flex flex-col justify-center items-center text-center space-y-3 hover:shadow-2xl cursor-pointer'>
                    <img src={card.imgUrl} alt={card.title} className='w-[90px] h-[90px]'/>
                    <div className='py-7'>
                    <h2 className='font-semibold text-[20px]'>{card.title}</h2>
                    {/* {card.bio && <h2 className='font-semibold text-[17px]'>{card.bio}</h2>} */}
                    <p className='text-gray-800 text-[14px] mt-4'>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PageThree