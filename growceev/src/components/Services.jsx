export default function Services() {
    return (
      <section className="py-16 px-8 bg-gradient-to-r from-purple-100 via-white to-purple-100">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex gap-4">
                <div className="text-2xl mb-4">
                    <InfoIcon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const services = [
    {
      title: "E-Commerce SEO",
      description: "Leverage our Ecommerce SEO services to boost your organic sales.",
    },
    {
      title: "Local SEO",
      description: "Grow Your Online Visibility Within Your Target Locations.",
    },
    {
      title: "Enterprise SEO",
      description: "Boost website traffic, increase revenue with our enterprise SEO services.",
    },
    {
      title: "National SEO",
      description: "Get in front of people who are already looking for your service (nationally).",
    },
    {
      title: "Managed SEO Service",
      description: "Sit back and relax, knowing experts are managing everything for you.",
    },
    {
      title: "SEO Consulting",
      description: "When it comes to SEO, knowledge truly is power. Ask us what you want.",
    },
    {
        title: "Lead Generation Services B2C",
        description: "Get in touch with our Lead Generation services. Our main priority is to get maximum quality leads at less cost.",
    },
    {
        title: "Lead Generation B2B",
        description: "Let our experts take charge of your PPC campaign. Don't Settle For LESS, Achieve BIG With Our Performance Marketing Strategies",
    },
    {
        title: "Ecommerce Ads Management",
        description: "We know how to scale a D2C brand. We are focused on getting Best ROAS. Hardcore Strategies to grow D2C businesses and Ecommerce Websites",
    },
    {
        title: "Lead Generation Services B2C",
        description: "Get in touch with our Lead Generation services. Our main priority is to get maximum quality leads at less cost.",
    },
    {
        title: "Lead Generation B2B",
        description: "Let our experts take charge of your PPC campaign.Don't Settle For LESS, Achieve BIG With Our Performance Marketing Strategies",
    },
    {
        title: "Ecommerce Ads Management",
        description: "We know how to scale a D2C brand. We are focused on getting Best ROAS. Hardcore Strategies to grow D2C businesses and Ecommerce Websites",
    },
  ];
  
  function InfoIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    );
  }
  