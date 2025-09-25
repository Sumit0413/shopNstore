import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FAQSection from "../components/Faqs";
import Banner from "../components/Banner";

const Shops = () => {
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

  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-6 px-30">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white pb-8 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={shop.img}
              alt={shop.name}
              className="w-full h-64 rounded-3xl object-cover"
            />
            <div className="p-5">
              <h2 className="text-3xl">{shop.name}</h2>
              <p className="text-gray-600 mb-2">{shop.sells}</p>
              <p className="text-gray-500">{shop.address}</p>
              <p className="text-gray-800 font-medium mt-2">📞 {shop.phone}</p>
            </div>
            <Link to={`/localshops/${shop.id}`}>
              <button className="mt-4 bg-black text-white text-xl py-2 px-4 w-full h-12 rounded-full hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="px-30">
        <FAQSection />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Shops;
