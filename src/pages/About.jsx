import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from "../components/Banner";
import SplitText from "../Animate/Splittext";
import CountUp from '../Animate/CountUp'

const About = () => {
  return (
   <>
    <Nav />

    <div className='text-center'>
         <div className=" pt-20 pl-25 pb-10"  >
      <button className='bg-gray-200 text-sm   text-black py-2 px-4 rounded-full mb-3'>Nearby Shops</button>
      <h1 className="text-5xl pt-8">Your Shop, Online and Growing</h1>
      <p className='text-gray-600 pt-3 text-lg'>Meet the team and learn about our mission.</p>
    </div>
        
    </div>


    {/* Mission Section */}
    <div className="flex items-center justify-center min-h-screen px-30">
      <div className="flex w-full bg-white overflow-hidden">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <p className="text-gray-500 text-lg mb-4">Our Mission</p>
          <h1 className="text-5xl text-gray-800 mb-6">About ShopNstore</h1>
          <p className="text-gray-600 text-lg mb-8">
            ShopNstore is dedicated to transforming how local shops connect with their community. 
            We provide digital business cards and online presence solutions that help neighborhood 
            businesses thrive in the digital age while maintaining their local charm and personal touch.
          </p>
          <div>
            <p className="text-gray-500 text-lg mb-4">Serving shops across:</p>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className=" font-bold">DL</span>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className=" font-bold">MB</span>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className=" font-bold">GG</span>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className=" font-bold">+50</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Delhi, Mumbai, Gurgaon and 50+ more cities</p>
          </div>
        </div>

        <div className="w-1/2 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
          <img
            src="https://picsum.photos/600/500?random=10"
            alt="Local shop owner using digital tools"
            className="w-full h-full object-cover opacity-90 rounded-2xl"
          />
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 font-bold">Local-focused</p>
            <p className="text-gray-800 font-bold">Digital solutions</p>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="flex items-center justify-center min-h-screen px-30">
      <div className="flex w-full bg-white overflow-hidden">
        <div className="w-1/2 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center relative">
          <img
            src="https://picsum.photos/600/500?random=11"
            alt="Digital business card interface"
            className="w-full h-full object-cover opacity-90 rounded-2xl"
          />
          <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 font-bold">Easy to use</p>
            <p className="text-gray-800 font-bold">Modern design</p>
          </div>
        </div>

        <div className="w-1/2 p-12 flex flex-col justify-center">
          <p className="text-gray-500 text-lg mb-4">What we offer</p>
          <h1 className="text-5xl text-gray-800 mb-6">Digital Business Cards</h1>
          <p className="text-gray-600 text-lg mb-8">
            We create beautiful, functional digital business cards for local shops, complete with 
            contact information, location details, services offered, and customer reviews. 
            Our platform makes it easy for customers to discover and connect with neighborhood businesses.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-700">Interactive shop profiles with photos and details</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-700">Location-based discovery for customers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-700">Direct contact and visit planning tools</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Vision Section */}
    <div className="flex items-center justify-center min-h-screen px-30">
      <div className="flex w-full bg-white overflow-hidden">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <p className="text-gray-500 text-lg mb-4">Our Vision</p>
          <h1 className="text-5xl text-gray-800 mb-6">Supporting Local Economy</h1>
          <p className="text-gray-600 text-lg mb-8">
            We believe that local shops are the heart of every community. Our goal is to help these 
            businesses compete in the digital marketplace while preserving the personal relationships 
            and community spirit that make them special. Together, we're building stronger local economies.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold ">500+</h3>
              <p className="text-gray-600">Local Shops Listed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold  mb-2">50+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold  mb-2">24/7</h3>
              <p className="text-gray-600">Platform Access</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center relative">
          <img
            src="https://picsum.photos/600/500?random=12"
            alt="Community of local shops"
            className="w-full h-full object-cover opacity-90 rounded-2xl"
          />
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 font-bold">Community-driven</p>
            <p className="text-gray-800 font-bold">Growth-focused</p>
          </div>
        </div>
      </div>
    </div>



    <div className='flex justify-center gap-40 items-center'>
      <CountUp
        from={0}
        to={180}
        separator=","
        direction="up"
      
  duration={5}
  className="count-up-text text-5xl font-bold text-center my-10"
/>

<CountUp
  from={0}
  to={150}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text text-5xl font-bold text-center my-10"
/>

<CountUp
  from={0}
  to={200}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text text-5xl font-bold text-center my-10"
/>

<CountUp
  from={0}
  to={60}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text text-5xl font-bold text-center my-10"
/>
</div>
        <div className="px-30">
            <Banner />
        </div>
    <Footer />


   </>
  );
};

export default About;