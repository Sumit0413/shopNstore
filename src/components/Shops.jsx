import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FAQSection from "../components/Faqs"
import Banner from "../components/Banner"

const Shops = () => {
    const shops = [
  {
    id: 1,
    name: "Gupta Grocery",
    sells: "Fresh vegetables & daily needs",
    address: "Main Market, Ranchi, Jharkhand",
    phone: "+91 98765 43210",
    img: "https://images.unsplash.com/photo-1758274406801-53151bcb4af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Sharma Electronics",
    sells: "Mobiles, accessories & gadgets",
    address: "Bistupur, Jamshedpur, Jharkhand",
    phone: "+91 99876 54321",
    img: "https://source.unsplash.com/400x300/?electronics,store",
  },
  {
    id: 3,
    name: "Mishra Sweets",
    sells: "Traditional Indian sweets & snacks",
    address: "Lalpur, Ranchi, Jharkhand",
    phone: "+91 91234 56789",
    img: "https://source.unsplash.com/400x300/?sweets,shop",
  },
  {
    id: 4,
    name: "Raj Stationery",
    sells: "Books, pens & office items",
    address: "Kutchery Road, Ranchi, Jharkhand",
    phone: "+91 93456 78901",
    img: "https://source.unsplash.com/400x300/?stationery,shop",
  },
  {
    id: 5,
    name: "Patel Footwear",
    sells: "Shoes, sandals & slippers",
    address: "Market Road, Dhanbad, Jharkhand",
    phone: "+91 97654 32109",
    img: "https://source.unsplash.com/400x300/?footwear,shop",
  },
  {
    id: 6,
    name: "Ravi Clothing",
    sells: "Men’s & women’s apparel",
    address: "Hazaribagh Chowk, Jharkhand",
    phone: "+91 98712 34567",
    img: "https://source.unsplash.com/400x300/?clothes,shop",
  },
  {
    id: 7,
    name: "Nisha Beauty Parlour",
    sells: "Salon & beauty services",
    address: "Sakchi, Jamshedpur, Jharkhand",
    phone: "+91 95432 17890",
    img: "https://source.unsplash.com/400x300/?beauty,salon",
  },
  {
    id: 8,
    name: "Kumar Medicals",
    sells: "Pharmacy & healthcare products",
    address: "Station Road, Ranchi, Jharkhand",
    phone: "+91 99812 37654",
    img: "https://source.unsplash.com/400x300/?pharmacy,shop",
  },
  {
    id: 9,
    name: "Sanjay Dairy",
    sells: "Milk, paneer & dairy products",
    address: "Adityapur, Jamshedpur, Jharkhand",
    phone: "+91 90213 46789",
    img: "https://source.unsplash.com/400x300/?dairy,shop",
  },
  {
    id: 10,
    name: "Raja Hardware",
    sells: "Tools, paints & building supplies",
    address: "Hatia, Ranchi, Jharkhand",
    phone: "+91 98654 12789",
    img: "https://source.unsplash.com/400x300/?hardware,shop",
  },
  {
    id: 11,
    name: "Anand Cafe",
    sells: "Snacks, coffee & fast food",
    address: "Main Road, Bokaro, Jharkhand",
    phone: "+91 98123 45670",
    img: "https://source.unsplash.com/400x300/?cafe,shop",
  },
  {
    id: 12,
    name: "Suman Tailors",
    sells: "Tailoring & custom stitching",
    address: "Doranda, Ranchi, Jharkhand",
    phone: "+91 99876 11223",
    img: "https://source.unsplash.com/400x300/?tailor,shop",
  },
  {
    id: 13,
    name: "Laxmi Jewellers",
    sells: "Gold, silver & ornaments",
    address: "Upper Bazaar, Ranchi, Jharkhand",
    phone: "+91 99123 76543",
    img: "https://source.unsplash.com/400x300/?jewellery,shop",
  },
  {
    id: 14,
    name: "Arjun Sports",
    sells: "Cricket, football & gym gear",
    address: "Golmuri, Jamshedpur, Jharkhand",
    phone: "+91 93210 98765",
    img: "https://source.unsplash.com/400x300/?sports,shop",
  },
  {
    id: 15,
    name: "Neha Florist",
    sells: "Fresh flowers & decorations",
    address: "Hindpiri, Ranchi, Jharkhand",
    phone: "+91 97612 34567",
    img: "https://source.unsplash.com/400x300/?flowers,shop",
  },
  {
  id: 16,
  name: "Verma Book House",
  sells: "School & college textbooks",
  address: "Circular Road, Ranchi, Jharkhand",
  phone: "+91 98123 65478",
  img: "https://source.unsplash.com/400x300/?books,shop",
},
{
  id: 17,
  name: "Suresh Furniture",
  sells: "Home & office furniture",
  address: "Main Road, Hazaribagh, Jharkhand",
  phone: "+91 98234 76541",
  img: "https://source.unsplash.com/400x300/?furniture,store",
},
{
  id: 18,
  name: "Meera Boutique",
  sells: "Ethnic wear & tailoring",
  address: "Sakchi Market, Jamshedpur, Jharkhand",
  phone: "+91 98321 54672",
  img: "https://source.unsplash.com/400x300/?boutique,clothes",
},
{
  id: 19,
  name: "Anand Cafe",
  sells: "Coffee, snacks & fast food",
  address: "Bokaro Main Road, Jharkhand",
  phone: "+91 98765 12345",
  img: "https://source.unsplash.com/400x300/?cafe,shop",
},
{
  id: 20,
  name: "Kumar Mobile Store",
  sells: "Mobile phones & accessories",
  address: "Adityapur, Jamshedpur, Jharkhand",
  phone: "+91 99876 54321",
  img: "https://source.unsplash.com/400x300/?mobile,shop",
},
{
  id: 21,
  name: "Rina Florist",
  sells: "Fresh flowers & bouquets",
  address: "Hindpiri, Ranchi, Jharkhand",
  phone: "+91 97654 32109",
  img: "https://source.unsplash.com/400x300/?flowers,shop",
},
];
  return (
    <>
     <div className="grid grid-cols-3 gap-6 p-6 px-30 ">
      {shops.map((shop) => (
        <div
          key={shop.id}

          className="bg-white pb-8  shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <img src={shop.img} alt={shop.name} className="w-full  h-64 rounded-3xl object-cover" />

          <div className="p-5">
            <h2 className="text-3xl ">{shop.name}</h2>
            <p className="text-gray-600  mb-2">{shop.sells}</p>
            <p className="text-gray-500 ">{shop.address}</p>
            <p className="text-gray-800 font-medium mt-2">📞 {shop.phone}</p>
          </div>
           <Link to={`/localshops/${shop.id}`}>
          <button className="mt-4 bg-black text-white text-3xl py-2 px-4 w-full h-20 rounded-full hover:bg-blue-700 transition-colors">
            View Details
          </button>
          </Link>
        </div>
        
      ))}


    </div>

    <div className='px-30'>
    <FAQSection />
    <Banner />
     </div>
     <Footer />
    </>
  )
}

export default Shops