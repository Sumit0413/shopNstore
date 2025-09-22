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
    img: "https://source.unsplash.com/400x400/?grocery,store",
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
  },
  {
    id: 6,
    name: "Verma Opticals",
    sells: "Spectacles & sunglasses",
    address: "D-5, Kamla Nagar, New Delhi, Delhi 110007",
    phone: "+91 98123 45678",
    img: "https://source.unsplash.com/400x400/?optical,shop",
    description: "Verma Opticals offers a wide range of stylish spectacles and sunglasses in Kamla Nagar. Expert eye testing and quality frames available."
  },
  {
    id: 7,
    name: "Singh Bakery",
    sells: "Cakes, pastries & snacks",
    address: "B-22, Rajouri Garden, New Delhi, Delhi 110027",
    phone: "+91 98234 56781",
    img: "https://source.unsplash.com/400x400/?bakery,shop",
    description: "Singh Bakery is famous for fresh cakes, pastries, and snacks. Visit us in Rajouri Garden for delicious treats."
  },
  {
    id: 8,
    name: "Jain Jewellers",
    sells: "Gold, silver & diamond jewellery",
    address: "Shop 14, South Extension I, New Delhi, Delhi 110049",
    phone: "+91 98345 67812",
    img: "https://source.unsplash.com/400x400/?jewellery,shop",
    description: "Jain Jewellers offers exquisite gold, silver, and diamond jewellery in South Extension. Trusted for quality and craftsmanship."
  },
  {
    id: 9,
    name: "Kumar Sports",
    sells: "Sports goods & accessories",
    address: "Shop 7, Model Town, New Delhi, Delhi 110009",
    phone: "+91 98456 78123",
    img: "https://source.unsplash.com/400x400/?sports,shop",
    description: "Kumar Sports stocks all major sports goods and accessories. Visit us in Model Town for the best deals."
  },
  {
    id: 10,
    name: "Mehra Books",
    sells: "Novels, textbooks & magazines",
    address: "Shop 3, Daryaganj, New Delhi, Delhi 110002",
    phone: "+91 98567 81234",
    img: "https://source.unsplash.com/400x400/?books,shop",
    description: "Mehra Books in Daryaganj is a paradise for book lovers. Find novels, textbooks, and magazines at great prices."
  },
  {
    id: 11,
    name: "Chopra Garments",
    sells: "Men's & women's clothing",
    address: "Shop 9, Sarojini Nagar Market, New Delhi, Delhi 110023",
    phone: "+91 98678 12345",
    img: "https://source.unsplash.com/400x400/?clothing,shop",
    description: "Chopra Garments offers trendy men's and women's clothing in Sarojini Nagar Market. Latest fashion at affordable prices."
  },
  {
    id: 12,
    name: "Rana Furniture",
    sells: "Home & office furniture",
    address: "Shop 2, Kirti Nagar, New Delhi, Delhi 110015",
    phone: "+91 98789 23456",
    img: "https://source.unsplash.com/400x400/?furniture,shop",
    description: "Rana Furniture provides stylish home and office furniture in Kirti Nagar. Quality products and great service."
  },
  {
    id: 13,
    name: "Joshi Toys",
    sells: "Toys & games",
    address: "Shop 6, Kamla Market, New Delhi, Delhi 110002",
    phone: "+91 98890 34567",
    img: "https://source.unsplash.com/400x400/?toys,shop",
    description: "Joshi Toys is the best place for toys and games in Kamla Market. Wide variety for all age groups."
  },
  {
    id: 14,
    name: "Malhotra Watches",
    sells: "Watches & clocks",
    address: "Shop 11, Connaught Place, New Delhi, Delhi 110001",
    phone: "+91 98901 45678",
    img: "https://source.unsplash.com/400x400/?watches,shop",
    description: "Malhotra Watches offers branded watches and clocks in Connaught Place. Latest designs and expert repairs."
  },
  {
    id: 15,
    name: "Kapoor Cosmetics",
    sells: "Beauty & skincare products",
    address: "Shop 8, Greater Kailash I, New Delhi, Delhi 110048",
    phone: "+91 99012 56789",
    img: "https://source.unsplash.com/400x400/?cosmetics,shop",
    description: "Kapoor Cosmetics stocks premium beauty and skincare products in Greater Kailash. Expert advice and genuine brands."
  },
  {
    id: 16,
    name: "Bansal Mobile Store",
    sells: "Smartphones & accessories",
    address: "Shop 5, Rohini Sector 7, New Delhi, Delhi 110085",
    phone: "+91 99123 67890",
    img: "https://source.unsplash.com/400x400/?mobile,shop",
    description: "Bansal Mobile Store in Rohini offers the latest smartphones and accessories. Best prices and after-sales support."
  },
  {
    id: 17,
    name: "Tiwari Dairy",
    sells: "Milk & dairy products",
    address: "Shop 10, Uttam Nagar, New Delhi, Delhi 110059",
    phone: "+91 99234 78901",
    img: "https://source.unsplash.com/400x400/?dairy,shop",
    description: "Tiwari Dairy provides fresh milk and dairy products in Uttam Nagar. Quality assured and hygienic."
  },
  {
    id: 18,
    name: "Pandey Florist",
    sells: "Flowers & bouquets",
    address: "Shop 13, Defence Colony, New Delhi, Delhi 110024",
    phone: "+91 99345 89012",
    img: "https://source.unsplash.com/400x400/?florist,shop",
    description: "Pandey Florist offers beautiful flowers and bouquets in Defence Colony. Fresh stock daily and custom arrangements."
  },
  {
    id: 19,
    name: "Agarwal Sweet House",
    sells: "Indian sweets & snacks",
    address: "Shop 4, Chandni Chowk, New Delhi, Delhi 110006",
    phone: "+91 99456 90123",
    img: "https://source.unsplash.com/400x400/?sweets,shop",
    description: "Agarwal Sweet House in Chandni Chowk is famous for authentic Indian sweets and snacks. Taste the tradition!"
  },
  {
    id: 20,
    name: "Goel Hardware",
    sells: "Tools & hardware",
    address: "Shop 15, Bhogal Market, New Delhi, Delhi 110014",
    phone: "+91 99567 01234",
    img: "https://source.unsplash.com/400x400/?hardware,shop",
    description: "Goel Hardware stocks all kinds of tools and hardware in Bhogal Market. Reliable products and expert advice."
  },
  {
    id: 21,
    name: "Saxena Pet Store",
    sells: "Pet food & accessories",
    address: "Shop 12, Vasant Kunj, New Delhi, Delhi 110070",
    phone: "+91 99678 12345",
    img: "https://source.unsplash.com/400x400/?pet,shop",
    description: "Saxena Pet Store in Vasant Kunj offers pet food and accessories for all pets. Friendly service and quality products."
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
