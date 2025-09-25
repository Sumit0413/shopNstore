import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "../components/Banner";
 const shops = [
    {
      id: 1,
      name: "Bhatia Pustak Bhandar",
      sells: "Authentic Books",
      address: "No. 9 Main Road (BESIDE NEW FURNITURE WORLD, AND OPPOSITE GOLMURI FOOD PLAZA), Golmuri, Jamshedpur, Jharkhand, 831003",
      phone: "8345229780",
      img: "https://lh3.googleusercontent.com/p/AF1QipMiF5tAXa9V0s5Hnnz-W3WJ3a1M28j6hbElzJB1=s1986-w1372-h1986-rw",
    },
    {
      id: 2,
      name: "Grocera",
      sells: "Fresh vegetables and daily essentials at the lowest price",
      address: "E/532 A Block, West Layout, Sonari, Jamshedpur, Jharkhand 831011",
      phone: "9608019198",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npxyrNeBjAiGHsuB5Fuk0P6lGMOiMAZSDMIl6t7Qt8DDjguZVDybqP3cipt8Tci-rggVuLKJe-tcPBEsoKkU62z_S1quP5jF9esNFy63AwID3llMttpOaat_TBM7YSNF5P9jTifRQ=s364-w291-h364-n-k-no",
    },
    {
      id: 3,
      name: "Shri Bajrang Store",
      sells: "Complete kitchen at your store",
      address: "SBI, Kagal Nagar Park, Main Market, West Layout, Sonari, Jamshedpur, Jharkhand, 831011",
      phone: "9955823467",
      img: "https://lh3.googleusercontent.com/p/AF1QipMdgMbeyMGm40NshxPmUhBtBirIBC-HRPNu-BTw=s455-w455-h364-n-k-no",
    },
    {
      id: 4,
      name: "Reliance Smart",
      sells: "Books, pens & office items",
      address: "Reliance Smart Superstore Seagull Apartment SN G/01, SNP Area, Abaan, Jamshedpur, Jharkhand 831001",
      phone: "18008910001",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl9Va6vCQswxSi04CZWyie521ta76J0mBgt82_z9cGMNpOKbYVhEhBlE&s=10",
    },
    {
      id: 5,
      name: "Patel Footwear",
      sells: "Shoes, sandals & slippers",
      address: "Market Road, Bistupur, Jamshedpur, Jharkhand, 831004",
      phone: "+91 97654 32109",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cgEbFmJEpQj1Bnn-lMPpTgF5PQyh_Cgz4RnNbL2V_N7HgTWCGJWVIg15&s=10",
    },
    {
      id: 6,
      name: "Electrokraft",
      sells: "Home appliances",
      address: "Super Centre Mall, Sakchi, Jamshedpur, Jharkhand, 831011",
      phone: "6207896543",
      img: "https://lh3.googleusercontent.com/p/AF1QipM1w8Pm74eIJMqQwVNjeAoMfPDFerMIY5ySMmgP=s1986-w1372-h1986-rw",
    },
    {
      id: 7,
      name: "Khosla Electronics",
      sells: "Electronics at cheaper rates",
      address: "Sakchi, Sara Tower, 16, New Kalimati Road, Hira Singh Bagan, Kasidih, Jamshedpur, Jharkhand 831001",
      phone: "7283005540",
      img: "blob:https://web.whatsapp.com/e3dc868d-66b4-41e7-9087-063777dbb7e5",
    },
    {
      id: 8,
      name: "Shree Electronics",
      sells: "Electrical products",
      address: "Radhe Complex Chowk Bazar, Jugsalai, Jamshedpur, Jharkhand, 831006",
      phone: "9939995000",
      img: "https://lh3.googleusercontent.com/p/AF1QipOq_rMl1rc3zG8N6J6wNX7TZbkg0L2swdmPv0wi=s1986-w1372-h1986-rw",
    },
    {
      id: 9,
      name: "Amul Dairy",
      sells: "Milk, paneer & dairy products",
      address: "Adityapur, Jamshedpur, Jharkhand",
      phone: "+91 90213 46789",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiKEcnnAbpQW7yvKr1LiN5fu3l7406mn2s4CPcfGQLp-iX6hfuIPVZVw&s=10",
    },
    {
      id: 10,
      name: "Anima Sports",
      sells: "Cricket, football & gym gear",
      address: "Golmuri, Jamshedpur, Jharkhand",
      phone: "+91 93210 98765",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npv7iAauRItJQdTcua0E9wTKetAeogSADRcChWJcuHYmx0MgjIfq0OgWsmMJAmY9Lpdij_MHoPX9WANxRI_QQxjAyQDyZefiqpomGkxju9pwhcdMAUj2z84Lli5bbmw_om6gA90=s294-w294-h220-n-k-no",
    },
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
              alt={shop.name}
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
                <p className="text-gray-800 font-medium text-lg"> Phone: {shop.phone}</p>
                <div className="flex items-center gap-2">
                  <span className="text-green-700 font-medium text-lg"> WhatsApp: {shop.phone}</span>
                  <a
                    href={`https://wa.me/${shop.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition"
                  >
                    Chat
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-blue-700 font-medium text-lg"> Email: {shop.name.toLowerCase().replace(' ', '')}@shopnstore.com</span>
                  <button
                    onClick={() => window.location.href = `mailto:${shop.name.toLowerCase().replace(' ', '')}@shopnstore.com`}
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
                <p className="text-gray-700 font-medium text-lg"> Address: {shop.address}</p>
              </div>

              {/* Vendor Access Button */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-bold">Shop Owner Access</h3>
                    <p className="text-blue-100 text-sm">Manage your shop, track payments, and view analytics</p>
                  </div>
                  <Link
                    to={`/shop-vendor/${shop.id}`}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🏪 Vendor Dashboard
                  </Link>
                </div>
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
                <img src={shop.img} alt="Shop exterior" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
                <img src={`https://picsum.photos/400/400?random=${shop.id + 200}`} alt="Shop interior" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
                <img src={`https://picsum.photos/400/400?random=${shop.id + 300}`} alt="Shop products" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
                <img src={`https://picsum.photos/400/400?random=${shop.id + 400}`} alt="Shop area" className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow" />
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
