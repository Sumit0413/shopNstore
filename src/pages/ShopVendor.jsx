import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner from "../components/Banner";
import { shopVendorData } from '../data/shopVendorData'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const ShopVendor = () => {
  const { shopId } = useParams()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showReport, setShowReport] = useState(false)
  const [showAddCustomer, setShowAddCustomer] = useState(false)
  const [showNewOrder, setShowNewOrder] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    initialPurchase: '',
    notes: ''
  })
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    customerPhone: '',
    items: [{ name: '', quantity: 1, price: 0 }],
    discount: 0,
    notes: ''
  })

  // Get shop-specific data
  const shopData = shopVendorData[parseInt(shopId)]
  
  if (!shopData) {
    return (
      <>
        <Nav />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop Not Found</h1>
            <p className="text-gray-600 mb-8">The vendor dashboard for this shop is not available.</p>
            <Link to="/shop-details" className="bg-blue-600  px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Back to Shops
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const { shopInfo, stats, pendingPayments, customers, monthlyData, yearlyData } = shopData

  // Calculate total revenue from monthly data
  const totalRevenue = monthlyData.reduce((sum, amount) => sum + amount, 0)

  // Handler functions
  const handleSendReminders = () => {
    setShowReminders(true)
  }

  const handleSendBulkReminders = () => {
    const totalCustomers = pendingPayments.length
    const totalAmount = pendingPayments.reduce((sum, payment) => sum + payment.pendingAmount, 0)
    
    // Simulate sending reminders to all customers
    pendingPayments.forEach(payment => {
      const message = `Hello ${payment.customerName}, your payment of ₹${payment.pendingAmount} is due. Please visit ${shopInfo.name} for payment. Thank you!`
      // In a real app, you would send WhatsApp messages here
      console.log(`Sending reminder to ${payment.customerName}: ${message}`)
    })
    
    alert(`Payment reminders sent successfully!\n${totalCustomers} customers notified\nTotal pending amount: ₹${totalAmount.toLocaleString()}`)
  }

  const handleSendIndividualReminder = (payment) => {
    const message = `Hello ${payment.customerName}, your payment of ₹${payment.pendingAmount} is due. Please visit ${shopInfo.name} for payment.`
    window.open(`https://wa.me/${payment.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCallCustomerReminder = (phone) => {
    window.open(`tel:${phone}`, '_self')
  }

  const handleGenerateReport = () => {
    setShowReport(true)
  }

  const handleAddCustomer = () => {
    setShowAddCustomer(true)
  }

  const handleSubmitCustomer = (e) => {
    e.preventDefault()
    // Here you would typically save to database
    alert(`Customer ${newCustomer.name} added successfully to ${shopInfo.name}!`)
    setShowAddCustomer(false)
    setNewCustomer({
      name: '',
      phone: '',
      email: '',
      address: '',
      initialPurchase: '',
      notes: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewCustomer(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNewOrder = () => {
    setShowNewOrder(true)
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    const total = calculateOrderTotal()
    alert(`Order created successfully for ${shopInfo.name}!\nCustomer: ${newOrder.customerName}\nTotal: ₹${total.toFixed(2)}`)
    setShowNewOrder(false)
    setNewOrder({
      customerName: '',
      customerPhone: '',
      items: [{ name: '', quantity: 1, price: 0 }],
      discount: 0,
      notes: ''
    })
  }

  const handleOrderInputChange = (e) => {
    const { name, value } = e.target
    setNewOrder(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...newOrder.items]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === 'quantity' || field === 'price' ? parseFloat(value) || 0 : value
    }
    setNewOrder(prev => ({
      ...prev,
      items: updatedItems
    }))
  }

  const addItem = () => {
    setNewOrder(prev => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: 1, price: 0 }]
    }))
  }

  const removeItem = (index) => {
    if (newOrder.items.length > 1) {
      const updatedItems = newOrder.items.filter((_, i) => i !== index)
      setNewOrder(prev => ({
        ...prev,
        items: updatedItems
      }))
    }
  }

  const calculateOrderTotal = () => {
    const subtotal = newOrder.items.reduce((sum, item) => {
      return sum + (item.quantity * item.price)
    }, 0)
    return subtotal - (subtotal * (newOrder.discount / 100))
  }

  const handleCallCustomer = (phone) => {
    window.open(`tel:${phone}`, '_self')
  }

  const handleWhatsAppCustomer = (phone, name) => {
    const message = `Hello ${name}, this is ${shopInfo.name}. Thank you for your business!`
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleMarkAsPaid = (paymentId) => {
    alert(`Payment ${paymentId} marked as paid for ${shopInfo.name}!`)
  }

  const handleSendPaymentReminder = (customer) => {
    const message = `Hello ${customer.customerName}, your payment of ₹${customer.pendingAmount} is due. Please visit ${shopInfo.name} for payment.`
    window.open(`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Filter functions
  const filteredPayments = pendingPayments.filter(payment => 
    payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.phone.includes(searchTerm)
  )

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm)
    if (filterStatus === 'recent') {
      return matchesSearch && new Date(customer.date) >= new Date(Date.now() - 7*24*60*60*1000)
    }
    return matchesSearch
  })

  // Chart data
  const monthlyGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: monthlyData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      }
    ]
  }

  const yearlyGrowthData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Annual Revenue (₹)',
        data: yearlyData,
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
          'rgb(245, 158, 11)',
        ],
        borderWidth: 2,
        borderRadius: 8,
      }
    ]
  }

  const expenseData = [15000, 12000, 8000, 5000, 3000]
  const expenseBreakdown = {
    labels: ['Inventory', 'Rent', 'Utilities', 'Marketing', 'Others'],
    datasets: [
      {
        data: expenseData,
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
          'rgb(245, 158, 11)',
        ],
        borderWidth: 2,
        hoverOffset: 8,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: `${shopInfo.name} - Business Performance`,
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + (value / 1000) + 'K';
          }
        },
      },
    },
  }

  return (
    <>
      <Nav />

       {/* Modern Hero Section */}
       <div className='text-center'>
         <div className=" pt-20 pl-25 pb-10"  >
      <button className='bg-gray-200 text-sm   text-black py-2 px-4 rounded-full mb-3'>Nearby Shops</button>
      <h1 className="text-5xl pt-8">Your Shop, Online and Growing</h1>
      <p className='text-gray-600 pt-3 text-lg'>Meet the team and learn about our mission.</p>
    </div>
        
    </div>


      <div className="min-h-screen ">
        <div className="px-30">
          {/* Modern Header with Glassmorphism */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
            <div className="relative bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{shopInfo.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                      {shopInfo.name}
                    </h1>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {shopInfo.type}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-700 font-medium">Owner: {shopInfo.owner}</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        Online Since Today
                      </div>
                      <div className="text-sm text-gray-600">
                        Last Updated: {new Date().toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
                <Link 
                  to={`/shop-details/${shopId}`}
                  className="group bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="flex items-center">
                    ← Back to Shop
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🏪</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Ultra Modern Navigation Tabs */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
              <nav className="flex">
                {[
                  { id: 'dashboard', name: 'Dashboard', icon: '📊', gradient: 'from-blue-500 to-cyan-500', count: stats.totalCustomers },
                  { id: 'payments', name: 'Payments', icon: '💳', gradient: 'from-green-500 to-emerald-500', count: pendingPayments.length },
                  { id: 'customers', name: 'Customers', icon: '👥', gradient: 'from-purple-500 to-violet-500', count: customers.length },
                  { id: 'analytics', name: 'Analytics', icon: '📈', gradient: 'from-orange-500 to-red-500', count: '24' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-6 px-6 font-semibold transition-all duration-500 transform ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl scale-105 z-10`
                        : 'text-gray-700 hover:bg-white/50 hover:scale-102 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{tab.icon}</span>
                        <span className="text-lg font-bold">{tab.name}</span>
                      </div>
                      <div className={`text-sm px-3 py-1 rounded-full ${
                        activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        {tab.count} items
                      </div>
                    </div>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 rounded-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 📊 Dashboard Overview */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Hero Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br rounded-xl h-64 shadow-lg p-6  transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium pb-5">💰 Total Pending</p>
                      <p className="text-6xl font-bold">₹{stats.totalPending.toLocaleString()}</p>
                      <p className=" text-xl mt-1">{pendingPayments.length} customers pending</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br  rounded-xl bg-gray-100 shadow-lg p-6  transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className=" text-sm font-medium pb-5">📈 Monthly Revenue</p>
                      <p className="text-6xl font-bold">₹{stats.monthlyRevenue.toLocaleString()}</p>
                      <p className=" text-xl mt-1">{stats.monthlyOrders} orders completed</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br  rounded-xl shadow-lg p-6  transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className=" text-sm font-medium pb-5">👥 Total Customers</p>
                      <p className="text-6xl font-bold">{stats.totalCustomers}</p>
                      <p className="text-xl mt-1">Regular customers</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                </div>

                <div className=" rounded-xl shadow-lg p-6  bg-gray-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className=" text-sm font-medium pb-5">📦 Monthly Orders</p>
                      <p className="text-6xl font-bold">{stats.monthlyOrders}</p>
                      <p className=" text-xl mt-1">This month</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">📦</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ultra Modern Quick Actions */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                          Quick Actions
                        </h3>
                        <p className="text-gray-600 text-sm">Streamline your daily operations</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      4 Actions Available
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { 
                        action: handleSendReminders, 
                        gradient: 'from-blue-500 via-blue-600 to-cyan-500', 
                        icon: '📱', 
                        title: 'Send Reminders', 
                        subtitle: `${pendingPayments.length} pending`,
                        shadowColor: 'shadow-blue-500/25'
                      },
                      { 
                        action: handleGenerateReport, 
                        gradient: 'from-green-500 via-green-600 to-emerald-500', 
                        icon: '📊', 
                        title: 'Generate Report', 
                        subtitle: 'Monthly analytics',
                        shadowColor: 'shadow-green-500/25'
                      },
                      { 
                        action: handleAddCustomer, 
                        gradient: 'from-purple-500 via-purple-600 to-violet-500', 
                        icon: '👤', 
                        title: 'Add Customer', 
                        subtitle: 'Expand network',
                        shadowColor: 'shadow-purple-500/25'
                      },
                      { 
                        action: handleNewOrder, 
                        gradient: 'from-orange-500 via-orange-600 to-red-500', 
                        icon: '🛒', 
                        title: 'New Order', 
                        subtitle: 'Create invoice',
                        shadowColor: 'shadow-orange-500/25'
                      }
                    ].map((item, index) => (
                      <button 
                        key={index}
                        onClick={item.action}
                        className={`group relative bg-gradient-to-br ${item.gradient} p-6 rounded-2xl text-white hover:shadow-2xl ${item.shadowColor} transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                          <div className="text-lg font-bold mb-1">{item.title}</div>
                          <div className="text-sm opacity-90">{item.subtitle}</div>
                          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>All systems operational</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 💰 Enhanced Pending Payments Tab */}
          {activeTab === 'payments' && (
            <div className="space-y-8">
              {/* Payment Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm font-medium">Total Outstanding</p>
                      <p className="text-3xl font-bold mt-1">₹{stats.totalPending.toLocaleString()}</p>
                      <p className="text-red-200 text-xs mt-1">{pendingPayments.length} customers</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">💳</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">Overdue Amount</p>
                      <p className="text-3xl font-bold mt-1">₹{Math.round(stats.totalPending * 0.6).toLocaleString()}</p>
                      <p className="text-orange-200 text-xs mt-1">{Math.round(pendingPayments.length * 0.4)} overdue</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">⚠️</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">This Week Collection</p>
                      <p className="text-3xl font-bold mt-1">₹{Math.round(stats.totalPending * 0.2).toLocaleString()}</p>
                      <p className="text-blue-200 text-xs mt-1">+12% from last week</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">📈</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">Recovery Rate</p>
                      <p className="text-3xl font-bold mt-1">78%</p>
                      <p className="text-green-200 text-xs mt-1">Monthly average</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">✅</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Payment Management Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white flex items-center">
                      <span className="mr-4 text-4xl">💰</span>
                      Payment Management Center
                    </h2>
                    <p className="text-slate-300 mt-2 text-lg">Monitor, track, and collect outstanding payments efficiently</p>
                    <div className="flex items-center space-x-6 mt-4">
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                        <span className="text-sm">Overdue: {Math.round(pendingPayments.length * 0.4)} customers</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                        <span className="text-sm">Due Soon: {Math.round(pendingPayments.length * 0.3)} customers</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                        <span className="text-sm">Recent: {Math.round(pendingPayments.length * 0.3)} customers</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-slate-300 text-sm">Last Updated</p>
                      <p className="text-white font-bold text-lg">{new Date().toLocaleTimeString()}</p>
                      <p className="text-slate-400 text-xs">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Payment Management Table */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                {/* Search and Filter Section */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="🔍 Search customers by name, phone, or transaction ID..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-500"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <select className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-700">
                        <option>All Status</option>
                        <option>Overdue</option>
                        <option>Due Soon</option>
                        <option>Recent</option>
                      </select>
                      <button
                        onClick={() => setSearchTerm('')}
                        className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Total Records: </span>
                      <span className="font-bold text-gray-900">{pendingPayments.length}</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Filtered: </span>
                      <span className="font-bold text-blue-600">{filteredPayments.length}</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Amount: </span>
                      <span className="font-bold text-green-600">₹{filteredPayments.reduce((sum, p) => sum + p.pendingAmount, 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                        <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          <div className="flex items-center space-x-2">
                            <span>👤</span>
                            <span>Customer Profile</span>
                          </div>
                        </th>
                        <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          <div className="flex items-center space-x-2">
                            <span>📞</span>
                            <span>Contact Details</span>
                          </div>
                        </th>
                        <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          <div className="flex items-center space-x-2">
                            <span>💳</span>
                            <span>Payment Status</span>
                          </div>
                        </th>
                        <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          <div className="flex items-center space-x-2">
                            <span>🛍️</span>
                            <span>Transaction Info</span>
                          </div>
                        </th>
                        <th className="px-8 py-4 text-left text-sm font-bold uppercase tracking-wider">
                          <div className="flex items-center space-x-2">
                            <span>⚡</span>
                            <span>Quick Actions</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredPayments.map((payment, index) => {
                        const isOverdue = new Date(payment.dueDate) < new Date()
                        const daysPastDue = Math.floor((new Date() - new Date(payment.dueDate)) / (1000 * 60 * 60 * 24))
                        const priorityLevel = isOverdue ? (daysPastDue > 30 ? 'high' : 'medium') : 'low'
                        
                        return (
                          <tr key={payment.id} className={`hover:bg-gray-50 transition-all duration-300 ${
                            priorityLevel === 'high' ? 'bg-red-50 border-l-4 border-red-500' : 
                            priorityLevel === 'medium' ? 'bg-orange-50 border-l-4 border-orange-500' : 
                            'bg-white border-l-4 border-green-500'
                          }`}>
                            {/* Customer Profile */}
                            <td className="px-8 py-6">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                  {payment.customerName.charAt(0)}
                                </div>
                                <div>
                                  <div className="text-lg font-bold text-gray-900">{payment.customerName}</div>
                                  <div className="text-sm text-gray-600">Customer ID: #CUS{payment.id.toString().padStart(4, '0')}</div>
                                  <div className="text-xs text-gray-500 mt-1">Member since: {payment.lastPurchase}</div>
                                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                                    priorityLevel === 'high' ? 'bg-red-100 text-red-800' : 
                                    priorityLevel === 'medium' ? 'bg-orange-100 text-orange-800' : 
                                    'bg-green-100 text-green-800'
                                  }`}>
                                    {priorityLevel === 'high' ? '🔴 High Priority' : 
                                     priorityLevel === 'medium' ? '🟡 Medium Priority' : 
                                     '🟢 Normal'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            
                            {/* Contact Details */}
                            <td className="px-8 py-6">
                              <div className="space-y-2">
                                <div className="flex items-center text-gray-900 font-medium">
                                  <span className="mr-2">📱</span>
                                  <span>{payment.phone}</span>
                                </div>
                                <div className="flex items-start text-sm text-gray-600">
                                  <span className="mr-2 mt-0.5">📍</span>
                                  <span className="leading-relaxed">{payment.address}</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                  <span className="mr-2">🕒</span>
                                  <span>Last contacted: 2 days ago</span>
                                </div>
                              </div>
                            </td>
                            
                            {/* Payment Status */}
                            <td className="px-8 py-6">
                              <div className="space-y-3">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Total Bill</span>
                                    <span className="font-bold text-gray-900">₹{payment.totalAmount.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Amount Paid</span>
                                    <span className="font-medium text-green-600">₹{payment.paidAmount.toLocaleString()}</span>
                                  </div>
                                  <div className="border-t pt-2">
                                    <div className="flex justify-between items-center">
                                      <span className="text-sm font-medium text-gray-900">Outstanding</span>
                                      <span className="font-bold text-red-600 text-lg">₹{payment.pendingAmount.toLocaleString()}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Payment Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${(payment.paidAmount / payment.totalAmount) * 100}%` }}
                                  ></div>
                                </div>
                                <div className="text-xs text-gray-500 text-center">
                                  {Math.round((payment.paidAmount / payment.totalAmount) * 100)}% Completed
                                </div>
                              </div>
                            </td>
                            
                            {/* Transaction Info */}
                            <td className="px-8 py-6">
                              <div className="space-y-3">
                                <div className="bg-blue-50 rounded-lg p-3">
                                  <div className="text-sm font-medium text-gray-900 mb-2">Items Purchased:</div>
                                  <div className="space-y-1">
                                    {payment.items.map((item, idx) => (
                                      <div key={idx} className="text-sm text-gray-700 flex items-center">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Purchase Date:</span>
                                  <span className="font-medium text-gray-900">{payment.lastPurchase}</span>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Due Date:</span>
                                  <span className={`font-medium ${isOverdue ? 'text-red-600' : 'text-gray-900'}`}>
                                    {payment.dueDate}
                                    {isOverdue && (
                                      <span className="ml-1 text-xs">({daysPastDue} days overdue)</span>
                                    )}
                                  </span>
                                </div>
                                
                                <div className="text-xs text-gray-500">
                                  Transaction ID: #TXN{(index + 1).toString().padStart(6, '0')}
                                </div>
                              </div>
                            </td>
                            
                            {/* Enhanced Actions */}
                            <td className="px-8 py-6">
                              <div className="space-y-3">
                                <button 
                                  onClick={() => handleMarkAsPaid(payment.id)}
                                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                                >
                                  <span className="mr-2">✅</span>
                                  Mark as Paid
                                </button>
                                
                                <button 
                                  onClick={() => handleSendPaymentReminder(payment)}
                                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                                >
                                  <span className="mr-2">💬</span>
                                  WhatsApp Reminder
                                </button>
                                
                                <button 
                                  onClick={() => handleCallCustomer(payment.phone)}
                                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                                >
                                  <span className="mr-2">📞</span>
                                  Call Customer
                                </button>
                                
                                <div className="flex space-x-2">
                                  <button className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 py-1 rounded-md hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm font-medium">
                                    📄 Invoice
                                  </button>
                                  <button className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1 rounded-md hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 text-sm font-medium">
                                    📊 History
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 👥 Advanced Customer Management Hub */}
          {activeTab === 'customers' && (
            <div className="space-y-8">
              {/* Customer Analytics Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">Total Customers</p>
                      <p className="text-3xl font-bold mt-1">{stats.totalCustomers}</p>
                      <p className="text-purple-200 text-xs mt-1">Active members</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">👥</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">New This Month</p>
                      <p className="text-3xl font-bold mt-1">{Math.round(customers.length * 0.3)}</p>
                      <p className="text-green-200 text-xs mt-1">+23% growth</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">📈</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Avg Purchase</p>
                      <p className="text-3xl font-bold mt-1">₹{Math.round(customers.reduce((sum, c) => sum + c.purchaseAmount, 0) / customers.length).toLocaleString()}</p>
                      <p className="text-blue-200 text-xs mt-1">Per customer</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">💰</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">Retention Rate</p>
                      <p className="text-3xl font-bold mt-1">92%</p>
                      <p className="text-orange-200 text-xs mt-1">Excellent!</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">🎯</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Management Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white flex items-center">
                      <span className="mr-4 text-4xl">👥</span>
                      Customer Relationship Hub
                    </h2>
                    <p className="text-slate-300 mt-2 text-lg">Comprehensive customer profiles, purchase history, and engagement tools</p>
                    <div className="flex items-center space-x-6 mt-4">
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                        <span className="text-sm">Active: {Math.round(customers.length * 0.8)} customers</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                        <span className="text-sm">Recent: {Math.round(customers.length * 0.6)} customers</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                        <span className="text-sm">VIP: {Math.round(customers.length * 0.2)} customers</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-slate-300 text-sm">Last Updated</p>
                      <p className="text-white font-bold text-lg">{new Date().toLocaleTimeString()}</p>
                      <p className="text-slate-400 text-xs">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Search and Filter Section */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="🔍 Search customers by name, phone, purchase history, or location..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-700 placeholder-gray-500"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 bg-white text-gray-700"
                      >
                        <option value="all">All Customers</option>
                        <option value="recent">Recent (7 days)</option>
                        <option value="vip">VIP Customers</option>
                        <option value="frequent">Frequent Buyers</option>
                      </select>
                      <select className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 bg-white text-gray-700">
                        <option>Sort by Purchase</option>
                        <option>Sort by Date</option>
                        <option>Sort by Name</option>
                      </select>
                      <button
                        onClick={() => setSearchTerm('')}
                        className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  
                  {/* Filter Statistics */}
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Showing: </span>
                      <span className="font-bold text-purple-600">{filteredCustomers.length} customers</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Total Value: </span>
                      <span className="font-bold text-green-600">₹{filteredCustomers.reduce((sum, c) => sum + c.purchaseAmount, 0).toLocaleString()}</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-md">
                      <span className="text-gray-600">Avg Order: </span>
                      <span className="font-bold text-blue-600">₹{filteredCustomers.length > 0 ? Math.round(filteredCustomers.reduce((sum, c) => sum + c.purchaseAmount, 0) / filteredCustomers.length) : 0}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Customer Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredCustomers.map((customer, index) => {
                      const isVIP = customer.purchaseAmount > 2000
                      const isFrequent = index % 3 === 0
                      const customerType = isVIP ? 'VIP' : isFrequent ? 'Frequent' : 'Regular'
                      const daysSincePurchase = Math.floor((new Date() - new Date(customer.date)) / (1000 * 60 * 60 * 24))
                      
                      return (
                        <div key={customer.id} className={`relative bg-gradient-to-br from-white to-gray-50 border-2 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                          isVIP ? 'border-gold-400 bg-gradient-to-br from-yellow-50 to-orange-50' : 
                          isFrequent ? 'border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50' : 
                          'border-gray-200'
                        }`}>
                          {/* Customer Type Badge */}
                          <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                            isVIP ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 
                            isFrequent ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 
                            'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                          }`}>
                            {customerType}
                          </div>
                          
                          {/* Customer Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                                isVIP ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 
                                isFrequent ? 'bg-gradient-to-br from-purple-500 to-blue-600' : 
                                'bg-gradient-to-br from-gray-500 to-gray-600'
                              }`}>
                                {customer.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{customer.name}</h3>
                                <p className="text-sm text-gray-600">Customer ID: #CUS{customer.id.toString().padStart(3, '0')}</p>
                                <div className="flex items-center mt-1">
                                  <span className={`w-2 h-2 rounded-full mr-2 ${
                                    daysSincePurchase <= 7 ? 'bg-green-400' : 
                                    daysSincePurchase <= 30 ? 'bg-yellow-400' : 
                                    'bg-red-400'
                                  }`}></span>
                                  <span className="text-xs text-gray-500">
                                    {daysSincePurchase === 0 ? 'Today' : 
                                     daysSincePurchase === 1 ? 'Yesterday' : 
                                     `${daysSincePurchase} days ago`}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
                                <div className="text-lg font-bold">₹{customer.purchaseAmount.toLocaleString()}</div>
                                <div className="text-xs text-green-100">Last Purchase</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Customer Details */}
                          <div className="space-y-4 mb-6">
                            {/* Contact Information */}
                            <div className="bg-blue-50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Contact Details</span>
                                <span className="text-xs text-gray-500">Verified</span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-700">
                                  <span className="mr-3 text-blue-600">📱</span>
                                  <span className="font-medium">{customer.phone}</span>
                                </div>
                                <div className="flex items-start text-sm text-gray-700">
                                  <span className="mr-3 mt-0.5 text-blue-600">📍</span>
                                  <span>{customer.address || 'Address not provided'}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Purchase History */}
                            <div className="bg-orange-50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Recent Purchases</span>
                                <span className="text-xs text-orange-600">{customer.items.length} items</span>
                              </div>
                              <div className="space-y-1">
                                {customer.items.slice(0, 3).map((item, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-700">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    <span className="font-medium">{item}</span>
                                  </div>
                                ))}
                                {customer.items.length > 3 && (
                                  <div className="text-xs text-orange-600 ml-5">+{customer.items.length - 3} more items...</div>
                                )}
                              </div>
                            </div>
                            
                            {/* Customer Insights */}
                            <div className="bg-purple-50 rounded-xl p-4">
                              <div className="text-sm font-medium text-gray-700 mb-2">Customer Insights</div>
                              <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="text-center bg-white rounded-lg p-2">
                                  <div className="font-bold text-purple-600">{Math.floor(Math.random() * 12) + 1}</div>
                                  <div className="text-gray-500">Total Orders</div>
                                </div>
                                <div className="text-center bg-white rounded-lg p-2">
                                  <div className="font-bold text-green-600">₹{(customer.purchaseAmount * (Math.floor(Math.random() * 3) + 2)).toLocaleString()}</div>
                                  <div className="text-gray-500">Total Spent</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced Action Buttons */}
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <button 
                                onClick={() => handleCallCustomer(customer.phone)} 
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                              >
                                <span className="mr-2">📞</span>
                                Call
                              </button>
                              <button 
                                onClick={() => handleWhatsAppCustomer(customer.phone, customer.name)} 
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                              >
                                <span className="mr-2">💬</span>
                                WhatsApp
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium shadow-lg">
                                📧 Email
                              </button>
                              <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 px-3 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 text-sm font-medium shadow-lg">
                                📊 History
                              </button>
                              <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-3 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm font-medium shadow-lg">
                                ⭐ Favorite
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Load More Section */}
                  {filteredCustomers.length > 0 && (
                    <div className="text-center mt-8">
                      <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                        Load More Customers ({customers.length - filteredCustomers.length} remaining)
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 📈 Advanced Business Analytics Hub */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Analytics Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-bold text-white flex items-center">
                      <span className="mr-4 text-5xl">📊</span>
                      Business Intelligence Center
                    </h2>
                    <p className="text-slate-300 mt-2 text-lg">Comprehensive analytics, insights, and performance metrics for data-driven decisions</p>
                    <div className="flex items-center space-x-6 mt-4">
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm">Real-time Data</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                        <span className="text-sm">Last 30 Days Analysis</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                        <span className="text-sm">Predictive Insights</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-slate-300 text-sm">Data Updated</p>
                      <p className="text-white font-bold text-lg">{new Date().toLocaleTimeString()}</p>
                      <p className="text-slate-400 text-xs">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">💰</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-blue-100">+12.5%</div>
                      <div className="text-xs text-blue-200">vs last month</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
                    <p className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                    <p className="text-blue-200 text-xs mt-1">Monthly Target: ₹{(totalRevenue * 1.2).toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">📈</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-100">+8.3%</div>
                      <div className="text-xs text-green-200">growth rate</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-medium">Net Profit</p>
                    <p className="text-3xl font-bold">₹{Math.round(totalRevenue * 0.25).toLocaleString()}</p>
                    <p className="text-green-200 text-xs mt-1">Profit Margin: 25%</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">🛒</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-purple-100">+15.7%</div>
                      <div className="text-xs text-purple-200">this month</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Total Orders</p>
                    <p className="text-3xl font-bold">{stats.monthlyOrders}</p>
                    <p className="text-purple-200 text-xs mt-1">Avg Order Value: ₹{Math.round(totalRevenue / stats.monthlyOrders)}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <span className="text-3xl">👥</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-orange-100">+6.2%</div>
                      <div className="text-xs text-orange-200">new customers</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-orange-100 text-sm font-medium">Customer Base</p>
                    <p className="text-3xl font-bold">{stats.totalCustomers}</p>
                    <p className="text-orange-200 text-xs mt-1">Retention Rate: 92%</p>
                  </div>
                </div>
              </div>

              {/* Advanced Metrics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Financial Metrics */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="mr-3 text-2xl">💳</span>
                    Financial Health
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Cash Flow</p>
                        <p className="text-xl font-bold text-green-700">₹{Math.round(totalRevenue * 0.8).toLocaleString()}</p>
                      </div>
                      <div className="text-green-600 text-2xl">💹</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Outstanding</p>
                        <p className="text-xl font-bold text-blue-700">₹{stats.totalPending.toLocaleString()}</p>
                      </div>
                      <div className="text-blue-600 text-2xl">⏳</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Expenses</p>
                        <p className="text-xl font-bold text-purple-700">₹{Math.round(totalRevenue * 0.6).toLocaleString()}</p>
                      </div>
                      <div className="text-purple-600 text-2xl">💸</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="text-xl font-bold text-orange-700">42%</p>
                      </div>
                      <div className="text-orange-600 text-2xl">🎯</div>
                    </div>
                  </div>
                </div>

                {/* Customer Analytics */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="mr-3 text-2xl">👥</span>
                    Customer Insights
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Acquisition Cost</p>
                        <p className="text-xl font-bold text-pink-700">₹{Math.round(totalRevenue / stats.totalCustomers / 10)}</p>
                      </div>
                      <div className="text-pink-600 text-2xl">🎯</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Lifetime Value</p>
                        <p className="text-xl font-bold text-indigo-700">₹{Math.round(totalRevenue / stats.totalCustomers * 3).toLocaleString()}</p>
                      </div>
                      <div className="text-indigo-600 text-2xl">💎</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Repeat Rate</p>
                        <p className="text-xl font-bold text-teal-700">68%</p>
                      </div>
                      <div className="text-teal-600 text-2xl">🔄</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Satisfaction</p>
                        <p className="text-xl font-bold text-cyan-700">4.8/5</p>
                      </div>
                      <div className="text-cyan-600 text-2xl">⭐</div>
                    </div>
                  </div>
                </div>

                {/* Operational Metrics */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="mr-3 text-2xl">⚙️</span>
                    Operations
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Inventory Turnover</p>
                        <p className="text-xl font-bold text-yellow-700">8.2x</p>
                      </div>
                      <div className="text-yellow-600 text-2xl">📦</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Avg Response Time</p>
                        <p className="text-xl font-bold text-red-700">2.3 hrs</p>
                      </div>
                      <div className="text-red-600 text-2xl">⏱️</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Order Fulfillment</p>
                        <p className="text-xl font-bold text-emerald-700">95%</p>
                      </div>
                      <div className="text-emerald-600 text-2xl">✅</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-violet-50 to-violet-100 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600">Efficiency Score</p>
                        <p className="text-xl font-bold text-violet-700">87%</p>
                      </div>
                      <div className="text-violet-600 text-2xl">⚡</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Growth Chart */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="mr-3 text-2xl">📈</span>
                        Revenue Growth Trends
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">Monthly performance analysis with growth indicators</p>
                    </div>
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-700"
                    >
                      <option value="monthly">Monthly View</option>
                      <option value="yearly">Yearly View</option>
                      <option value="quarterly">Quarterly View</option>
                    </select>
                  </div>
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                    {selectedPeriod === 'monthly' ? (
                      <Line data={monthlyGrowthData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { 
                            position: 'top',
                            labels: { usePointStyle: true, padding: 20 }
                          },
                          title: { 
                            display: true, 
                            text: 'Monthly Revenue Growth (₹)',
                            font: { size: 16, weight: 'bold' }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0,0,0,0.1)' },
                            ticks: {
                              callback: function(value) {
                                return '₹' + value.toLocaleString();
                              }
                            }
                          },
                          x: {
                            grid: { color: 'rgba(0,0,0,0.1)' }
                          }
                        }
                      }} />
                    ) : (
                      <Bar data={yearlyGrowthData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { 
                            position: 'top',
                            labels: { usePointStyle: true, padding: 20 }
                          },
                          title: { 
                            display: true, 
                            text: 'Annual Revenue Comparison (₹)',
                            font: { size: 16, weight: 'bold' }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0,0,0,0.1)' },
                            ticks: {
                              callback: function(value) {
                                return '₹' + value.toLocaleString();
                              }
                            }
                          }
                        }
                      }} />
                    )}
                  </div>
                  
                  {/* Chart Insights */}
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="text-lg font-bold text-green-700">+12.5%</div>
                      <div className="text-xs text-green-600">Growth Rate</div>
                    </div>
                    <div className="text-center p-3 bg-blue-100 rounded-lg">
                      <div className="text-lg font-bold text-blue-700">₹{Math.max(...monthlyData).toLocaleString()}</div>
                      <div className="text-xs text-blue-600">Peak Month</div>
                    </div>
                    <div className="text-center p-3 bg-purple-100 rounded-lg">
                      <div className="text-lg font-bold text-purple-700">₹{Math.round(totalRevenue / monthlyData.length).toLocaleString()}</div>
                      <div className="text-xs text-purple-600">Monthly Avg</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Expense Analysis */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="mr-3 text-2xl">💸</span>
                        Expense Breakdown
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">Detailed cost analysis and optimization opportunities</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">₹{expenseData.reduce((a, b) => a + b, 0).toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Total Expenses</div>
                    </div>
                  </div>
                  <div className="h-80 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
                    <Doughnut data={expenseBreakdown} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { 
                          position: 'right',
                          labels: { 
                            usePointStyle: true, 
                            padding: 15,
                            generateLabels: function(chart) {
                              const data = chart.data;
                              return data.labels.map((label, i) => ({
                                text: `${label}: ₹${data.datasets[0].data[i].toLocaleString()}`,
                                fillStyle: data.datasets[0].backgroundColor[i],
                                strokeStyle: data.datasets[0].borderColor[i],
                                pointStyle: 'circle'
                              }));
                            }
                          }
                        },
                        title: { 
                          display: true, 
                          text: 'Monthly Expense Distribution',
                          font: { size: 16, weight: 'bold' }
                        }
                      }
                    }} />
                  </div>
                  
                  {/* Expense Insights */}
                  <div className="mt-4 space-y-2">
                    {expenseBreakdown.labels.map((label, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div 
                            className="w-4 h-4 rounded-full mr-3"
                            style={{ backgroundColor: expenseBreakdown.datasets[0].backgroundColor[index] }}
                          ></div>
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-gray-900">₹{expenseData[index].toLocaleString()}</div>
                          <div className="text-xs text-gray-500">{Math.round((expenseData[index] / expenseData.reduce((a, b) => a + b, 0)) * 100)}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Monthly Report Modal/Interface */}
          {showReport && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                {/* Report Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">Monthly Report</h2>
                      <p className="text-blue-100 mt-1">{shopInfo.name} - {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                    <button 
                      onClick={() => setShowReport(false)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Report Content */}
                <div className="p-6 space-y-8">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
                      <div className="text-green-100">Total Revenue</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">{customers.length}</div>
                      <div className="text-blue-100">Total Customers</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">{pendingPayments.length}</div>
                      <div className="text-purple-100">Pending Payments</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">₹{pendingPayments.reduce((sum, payment) => sum + payment.pendingAmount, 0).toLocaleString()}</div>
                      <div className="text-orange-100">Pending Amount</div>
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue Trend */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Trend</h3>
                      <div className="h-64">
                        <Line data={monthlyGrowthData} options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { position: 'top' },
                            title: { display: true, text: 'Monthly Revenue Growth' }
                          }
                        }} />
                      </div>
                    </div>

                    {/* Customer Growth */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Growth</h3>
                      <div className="h-64">
                        <Bar data={{
                          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                          datasets: [{
                            label: 'New Customers',
                            data: [12, 19, 15, 25, 22, 30],
                            backgroundColor: 'rgba(59, 130, 246, 0.8)',
                            borderColor: 'rgba(59, 130, 246, 1)',
                            borderWidth: 1
                          }]
                        }} options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { position: 'top' },
                            title: { display: true, text: 'Monthly Customer Acquisition' }
                          }
                        }} />
                      </div>
                    </div>
                  </div>

                  {/* Detailed Tables */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Customers */}
                    <div className="bg-white border rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Top Customers This Month</h3>
                      <div className="space-y-3">
                        {customers.slice(0, 5).map((customer, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-semibold text-gray-900">{customer.name}</div>
                              <div className="text-sm text-gray-600">{customer.phone}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-green-600">₹{customer.totalPurchases}</div>
                              <div className="text-xs text-gray-500">Total Purchase</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-white border rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h3>
                      <div className="space-y-3">
                        {pendingPayments.slice(0, 5).map((payment, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-semibold text-gray-900">{payment.customerName}</div>
                              <div className="text-sm text-gray-600">{payment.date}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-orange-600">₹{payment.pendingAmount}</div>
                              <div className="text-xs text-gray-500">Pending</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center pt-6 border-t">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      📊 Download PDF Report
                    </button>
                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      📧 Email Report
                    </button>
                    <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      🖨️ Print Report
                    </button>
                    <button 
                      onClick={() => setShowReport(false)}
                      className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ← Back to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add Customer Form Modal */}
          {showAddCustomer && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">Add New Customer</h2>
                      <p className="text-purple-100 mt-1">{shopInfo.name}</p>
                    </div>
                    <button 
                      onClick={() => setShowAddCustomer(false)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmitCustomer} className="p-6 space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={newCustomer.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter customer's full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={newCustomer.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={newCustomer.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter email address (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={newCustomer.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter customer's address (optional)"
                      />
                    </div>
                  </div>

                  {/* Purchase Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Purchase Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Initial Purchase Amount
                      </label>
                      <input
                        type="number"
                        name="initialPurchase"
                        value={newCustomer.initialPurchase}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter initial purchase amount (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={newCustomer.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Add any notes about the customer (optional)"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      👤 Add Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddCustomer(false)}
                      className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      ← Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* New Order Form Modal */}
          {showNewOrder && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">Create New Order</h2>
                      <p className="text-orange-100 mt-1">{shopInfo.name}</p>
                    </div>
                    <button 
                      onClick={() => setShowNewOrder(false)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
                  {/* Customer Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Customer Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Customer Name *
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          value={newOrder.customerName}
                          onChange={handleOrderInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter customer's name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="customerPhone"
                          value={newOrder.customerPhone}
                          onChange={handleOrderInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Order Items</h3>
                      <button
                        type="button"
                        onClick={addItem}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        + Add Item
                      </button>
                    </div>
                    
                    {newOrder.items.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Item Name *
                            </label>
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Enter item name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Quantity *
                            </label>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              min="1"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Price (₹) *
                            </label>
                            <div className="flex">
                              <input
                                type="number"
                                value={item.price}
                                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                min="0"
                                step="0.01"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              />
                              {newOrder.items.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeItem(index)}
                                  className="bg-red-500 text-white px-3 py-2 rounded-r-lg hover:bg-red-600 transition-colors"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-right">
                          <span className="text-sm font-medium text-gray-600">
                            Subtotal: ₹{(item.quantity * item.price).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Order Summary</h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Discount (%)
                          </label>
                          <input
                            type="number"
                            name="discount"
                            value={newOrder.discount}
                            onChange={handleOrderInputChange}
                            min="0"
                            max="100"
                            step="0.01"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter discount percentage"
                          />
                        </div>
                        
                        <div className="flex flex-col justify-end">
                          <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                            <div className="text-right">
                              <div className="text-sm text-gray-600">
                                Subtotal: ₹{newOrder.items.reduce((sum, item) => sum + (item.quantity * item.price), 0).toFixed(2)}
                              </div>
                              <div className="text-sm text-gray-600">
                                Discount: -₹{(newOrder.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) * (newOrder.discount / 100)).toFixed(2)}
                              </div>
                              <div className="text-lg font-bold text-orange-600 border-t pt-2 mt-2">
                                Total: ₹{calculateOrderTotal().toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Order Notes
                      </label>
                      <textarea
                        name="notes"
                        value={newOrder.notes}
                        onChange={handleOrderInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Add any special instructions or notes for this order"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      📝 Create Order (₹{calculateOrderTotal().toFixed(2)})
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowNewOrder(false)}
                      className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      ← Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Payment Reminders Modal */}
          {showReminders && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">Payment Reminders</h2>
                      <p className="text-blue-100 mt-1">{shopInfo.name} - {pendingPayments.length} pending payments</p>
                    </div>
                    <button 
                      onClick={() => setShowReminders(false)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">{pendingPayments.length}</div>
                      <div className="text-red-100">Pending Payments</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">₹{pendingPayments.reduce((sum, payment) => sum + payment.pendingAmount, 0).toLocaleString()}</div>
                      <div className="text-orange-100">Total Amount Due</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                      <div className="text-2xl font-bold">₹{Math.round(pendingPayments.reduce((sum, payment) => sum + payment.pendingAmount, 0) / pendingPayments.length).toLocaleString()}</div>
                      <div className="text-green-100">Average Due</div>
                    </div>
                  </div>

                  {/* Bulk Actions */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Actions</h3>
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={handleSendBulkReminders}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                      >
                        📱 Send All Reminders
                      </button>
                      <button
                        onClick={() => {
                          const message = `Payment reminder from ${shopInfo.name}. Please clear your pending dues. Thank you!`
                          const numbers = pendingPayments.map(p => p.phone.replace(/[^0-9]/g, '')).join(',')
                          window.open(`sms:${numbers}?body=${encodeURIComponent(message)}`, '_self')
                        }}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                      >
                        💬 Send SMS to All
                      </button>
                      <button
                        onClick={() => {
                          const csvContent = "Customer Name,Phone,Pending Amount,Date\n" +
                            pendingPayments.map(p => `${p.customerName},${p.phone},${p.pendingAmount},${p.date}`).join('\n')
                          const blob = new Blob([csvContent], { type: 'text/csv' })
                          const url = window.URL.createObjectURL(blob)
                          const a = document.createElement('a')
                          a.href = url
                          a.download = `pending-payments-${shopInfo.name.replace(/\s+/g, '-')}.csv`
                          a.click()
                        }}
                        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                      >
                        📊 Export CSV
                      </button>
                    </div>
                  </div>

                  {/* Customer List */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Pending Customers ({pendingPayments.length})</h3>
                    
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {pendingPayments.map((payment, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900">{payment.customerName}</h4>
                                  <p className="text-gray-600 text-sm">{payment.phone}</p>
                                  <p className="text-xs text-gray-500 mt-1">Due since: {payment.date}</p>
                                </div>
                                
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600">₹{payment.pendingAmount.toLocaleString()}</div>
                                  <div className="text-xs text-gray-500">Pending</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-2 ml-4">
                              <button
                                onClick={() => handleSendIndividualReminder(payment)}
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                              >
                                💬 WhatsApp
                              </button>
                              <button
                                onClick={() => handleCallCustomerReminder(payment.phone)}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                              >
                                📞 Call
                              </button>
                              <button
                                onClick={() => handleMarkAsPaid(payment.id)}
                                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                              >
                                ✓ Paid
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center pt-6 border-t">
                    <button 
                      onClick={() => setShowReminders(false)}
                      className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      ← Back to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="pt-20">
         <Banner />

</div>     
      <Footer />
    </>
  )
}

export default ShopVendor