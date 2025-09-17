import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,

      title: "Mini Product & Service Showcase",
      subtitle: "Flexible Desk Spaces",
      description:
        "The platform allows shops to highlight their best products or services through a lightweight catalog. Customers can browse items and place quick requests without the complexity of a full e-commerce setup, helping businesses showcase what they do best.",
    },
    {
      id: 2,

      title: "Customer Engagement & Communication",
      subtitle: "Exclusive Workspaces",
      description:
        "Shops can connect with their community directly using WhatsApp integration, quick inquiry templates, and customer feedback forms. Owners can also post daily updates, offers, or announcements, creating a space for ongoing communication and stronger customer relationships.",
    },
    {
      id: 3,

      title: "Marketing & Growth Tools",
      subtitle: "Join the Best",
      description:
        "To help shops grow, the platform includes tools like shareable business links, QR code generators, and promotional posters that can be circulated online or printed for offline use. An analytics dashboard provides insights into visits, customer interactions, and payment history, enabling shop owners to make smarter decisions for their growth.",
    },
    {
      id: 4,

      title: "Digital Business Identity",
      subtitle: "Accessible Meeting Spaces",
      description:
        "Our platform creates a professional one-page business card for every local shop. It includes essential details like the shop name, logo, contact information, Google Maps location, opening hours, and a small photo gallery. This gives even the smallest businesses a simple yet effective online presence that customers can easily share.",
    },
  ];
  return (
    <>
      <div className="bg-white px-20 mt-20">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-7xl font-bold mb-4">Services</h1>
          <div className="bg-black h-0.5 w-full"></div>
          <p className="text-2xl ">What We Offer</p>
          <div className="bg-black h-0.5 w-full"></div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-xl max-w-2xl mx-auto">
            We make it easy for local businesses to connect with their community
            and for customers to discover amazing neighborhood shops. We're
            building a vibrant ecosystem where shop owners gain loyal fans
            instead than just one-time customers, and where every purchase helps
            the local economy thrive. Discover the unique, the authentic, and
            the heart of your city, right around the corner.
          </p>
        </div>
      </div>

      {/* Services Grid using map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center p-4">
            <div className="text-2xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-500 mb-1">{service.subtitle}</p>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Discover Services Button */}
      <div className="text-center mt-12">
        <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition">
          Discover Services
        </button>
      </div>
    </>
  );
};

export default Service;
