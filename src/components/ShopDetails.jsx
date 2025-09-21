import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "../components/Banner";

const shops = [
  {
    id: 1,
    name: "Gupta Grocery",
    sells: "Fresh vegetables & daily needs",
  address: "A-12, Lajpat Nagar II, New Delhi, Delhi 110024",
    phone: "+91 98765 43210",
  img: "blob:https://web.whatsapp.com/527aa849-e35d-43ff-bbaf-827dadd85b11",
    description: "Gupta Grocery is your go-to destination for fresh produce and daily essentials in Lajpat Nagar. Known for quality and friendly service, we offer a wide range of groceries to meet your everyday needs."
  },
  {
    id: 2,
    name: "Sharma Electronics",
    sells: "Mobiles, accessories & gadgets",
  address: "Nehru Place Metro Station, New Delhi, Delhi 110019",
    phone: "+91 99876 54321",
  img: "https://source.unsplash.com/400x400/?electronics,store",
    description: "Sharma Electronics in Nehru Place is a trusted shop for the latest mobile phones, accessories, and gadgets. We pride ourselves on expert advice and after-sales support."
  },
  {
    id: 3,
    name: "Mishra Sweets",
    sells: "Traditional Indian sweets & snacks",
  address: "Jama Masjid, Chandni Chowk, New Delhi, Delhi 110006",
    phone: "+91 91234 56789",
  img: "https://source.unsplash.com/400x400/?sweets,shop",
    description: "Mishra Sweets is a beloved spot in Chandni Chowk for authentic Indian sweets and snacks. Our recipes are passed down generations, ensuring every bite is a taste of tradition."
  },
  {
    id: 4,
    name: "Raj Stationery",
    sells: "Books, pens & office items",
  address: "Rajiv Chowk Metro Station, Connaught Place, New Delhi, Delhi 110001",
    phone: "+91 93456 78901",
  img: "https://source.unsplash.com/400x400/?stationery,shop",
    description: "Raj Stationery in Connaught Place offers a wide selection of books, pens, and office supplies. We are known for our variety and helpful staff."
  },
  {
    id: 5,
    name: "Patel Footwear",
    sells: "Shoes, sandals & slippers",
  address: "Karol Bagh Metro Station, New Delhi, Delhi 110005",
    phone: "+91 97654 32109",
  img: "https://source.unsplash.com/400x400/?footwear,shop",
    description: "Patel Footwear in Karol Bagh is the place for stylish and comfortable shoes, sandals, and slippers. We stock the latest trends for all ages."
  }
];

export default function ShopDetails() {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === parseInt(id));

  if (!shop) return <h2 className="text-center text-2xl">Shop Not Found</h2>;

  return (
    <>
      <Nav />
      <div className=" flex flex-col items-center justify-center bg-gradient-to-br py-16 px-0">
        <div className="w-full px-30    flex flex-col md:flex-row gap-0">
          {/* Left: Large Shop Image */}
          <div className="flex flex-col items-center md:w-1/2 p-16 justify-center ">
            <img
              src={shop.img}
              alt={shops.name}
              className="w-[420px] h-[420px] object-cover rounded-3xl shadow-2xl border-2  mb-8"
            />
            {/* Second Map for Asset Locations */}
            <div className="mt-8 w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Asset Location</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Asset Map"
                  src={`https://www.google.com/maps?&q=${encodeURIComponent(shop.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Google Map Embed below image */}
          </div>
          {/* Right: Info Card */}
          <div className="flex-1 p-10 flex flex-col justify-center ">
            <span className="uppercase text-xs tracking-widest text-blue-400 font-semibold mb-6 block">FEATURED</span>
            <h1 className="text-6xl font-poppins  mb-6 leading-tight">{shop.name}</h1>
            <span className="inline-block bg-gray-100 px-6 py-2 rounded-full text-2xl mb-8 ">{shop.sells}</span>
            
            <div className="mb-8">
              <h2 className="text-3xl  text-gray-800 mb-2">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-gray-800 font-medium text-lg"> Phone: +91 98765 43211</p>
                <div className="flex items-center gap-2">
                  <span className="text-green-700 font-medium text-lg"> WhatsApp: +91 98765 43211</span>
                  <a
                    href="https://wa.me/919876543211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition"
                  >
                    Chat
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-blue-700 font-medium text-lg"> Email: priyatextiles@gmail.com</span>
                  <button
                    onClick={() => window.location.href = 'mailto:priyatextiles@gmail.com'}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition"
                  >
                    Mail
                  </button>
                </div>

                {/* Shop Open/Closed Status */}
                <div className="mt-4 flex items-center gap-2">
                  {(() => {
                    const now = new Date();
                    const hour = now.getHours();
                    const isOpen = hour >= 9 && hour < 21;
                    return (
                      <>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {isOpen ? 'Open' : 'Closed'}
                        </span>
                        <span className="text-gray-500 text-sm">(Today: 9:00 AM - 9:00 PM)</span>
                      </>
                    );
                  })()}
                </div>
                <p className="text-gray-700 font-medium text-lg"> Address: Shop 8, Commercial Street, Bandra</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl text-gray-800 mb-2">Description</h2>
                <p className="text-gray-700 text-lg leading-relaxed font-poppins">
                  {shop.description}
                </p>
            </div>
            {/* Gallery Section below description */}
            <div className="mt-8 w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h2>
              <div className="flex gap-4 flex-wrap justify-center">
                <img src={shop.img} alt="Shop view 1" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
                <img src={`https://source.unsplash.com/400x400/?${shop.name.split(' ')[0]},shop`} alt="Shop view 2" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
                <img src={`https://source.unsplash.com/400x400/?market,delhi`} alt="Shop view 3" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
}
