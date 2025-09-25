import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
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

const Vendor = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false)
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [pendingPaymentsList, setPendingPaymentsList] = useState([])
  const [customersList, setCustomersList] = useState([])
  const [showReportModal, setShowReportModal] = useState(false)

  // Handler functions
  const handleSendReminders = () => {
    alert('Sending payment reminders to all pending customers...')
    // In real app, this would send SMS/WhatsApp reminders
  }

  const handleGenerateReport = () => {
    setShowReportModal(true)
  }

  const handleAddCustomer = () => {
    setShowAddCustomerModal(true)
  }

  const handleNewOrder = () => {
    setShowNewOrderModal(true)
  }

  const handleCallCustomer = (phone) => {
    window.open(`tel:${phone}`, '_self')
  }

  const handleWhatsAppCustomer = (phone, name) => {
    const message = `Hello ${name}, this is a reminder about your pending payment. Please contact us for more details.`
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleMarkAsPaid = (paymentId) => {
    setPendingPaymentsList(prev => prev.filter(payment => payment.id !== paymentId))
    alert('Payment marked as paid!')
  }

  const handleSendPaymentReminder = (customer) => {
    const message = `Hello ${customer.customerName}, your payment of ₹${customer.pendingAmount} is due on ${customer.dueDate}. Please make the payment at your earliest convenience.`
    window.open(`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleAddNewCustomer = (customerData) => {
    const newCustomer = {
      id: Date.now(),
      ...customerData,
      date: new Date().toLocaleDateString('en-IN')
    }
    setCustomersList(prev => [newCustomer, ...prev])
    setShowAddCustomerModal(false)
  }

  const handleCreateNewOrder = (orderData) => {
    alert(`New order created for ${orderData.customerName}!`)
    setShowNewOrderModal(false)
  }

  // Filter functions
  const filteredPayments = pendingPaymentsList.filter(payment => {
    const matchesSearch = payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.phone.includes(searchTerm)
    return matchesSearch
  })

  const filteredCustomers = customersList.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm)
    if (filterStatus === 'all') return matchesSearch
    if (filterStatus === 'recent') return matchesSearch && new Date(customer.date) >= new Date(Date.now() - 7*24*60*60*1000)
    return matchesSearch
  })

  // Sample data for pending payments
  const samplePendingPayments = [
    {
      id: 1,
      customerName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      address: 'A-12, Lajpat Nagar II, New Delhi 110024',
      totalAmount: 15500,
      paidAmount: 8000,
      pendingAmount: 7500,
      lastPurchase: '2024-09-15',
      items: ['Rice 25kg', 'Dal 5kg', 'Oil 2L'],
      dueDate: '2024-10-15'
    },
    {
      id: 2,
      customerName: 'Priya Sharma',
      phone: '+91 99876 54321',
      address: 'B-45, Karol Bagh, New Delhi 110005',
      totalAmount: 8200,
      paidAmount: 3000,
      pendingAmount: 5200,
      lastPurchase: '2024-09-20',
      items: ['Wheat 20kg', 'Sugar 5kg'],
      dueDate: '2024-10-20'
    },
    {
      id: 3,
      customerName: 'Amit Singh',
      phone: '+91 91234 56789',
      address: 'C-78, Rohini Sector 7, New Delhi 110085',
      totalAmount: 12300,
      paidAmount: 12300,
      pendingAmount: 0,
      lastPurchase: '2024-09-18',
      items: ['Onions 10kg', 'Potatoes 15kg'],
      dueDate: 'Paid'
    },
    {
      id: 4,
      customerName: 'Sunita Devi',
      phone: '+91 93456 78901',
      address: 'D-23, Uttam Nagar, New Delhi 110059',
      totalAmount: 6800,
      paidAmount: 2000,
      pendingAmount: 4800,
      lastPurchase: '2024-09-12',
      items: ['Milk 10L', 'Bread 5 packets'],
      dueDate: '2024-10-12'
    }
  ]

  // Recent customers data
  const sampleRecentCustomers = [
    {
      id: 1,
      name: 'Vikash Gupta',
      phone: '+91 97654 32109',
      address: 'E-56, Model Town, New Delhi 110009',
      purchaseAmount: 2500,
      items: ['Tomatoes 5kg', 'Onions 3kg'],
      date: '2024-09-24'
    },
    {
      id: 2,
      name: 'Meera Jain',
      phone: '+91 98123 45678',
      address: 'F-89, Greater Kailash I, New Delhi 110048',
      purchaseAmount: 1800,
      items: ['Rice 10kg'],
      date: '2024-09-24'
    },
    {
      id: 3,
      name: 'Ravi Chopra',
      phone: '+91 98234 56781',
      address: 'G-34, Sarojini Nagar, New Delhi 110023',
      purchaseAmount: 3200,
      items: ['Dal 5kg', 'Oil 3L', 'Sugar 2kg'],
      date: '2024-09-23'
    }
  ]

  // Initialize data on component mount
  React.useEffect(() => {
    setPendingPaymentsList(samplePendingPayments)
    setCustomersList(sampleRecentCustomers)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Chart click handlers
  const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const dataIndex = elements[0].index
      const label = monthlyGrowthData.labels[dataIndex]
      const value = monthlyGrowthData.datasets[0].data[dataIndex]
      alert(`${label}: Revenue ₹${value.toLocaleString()}`)
    }
  }

  const handleBarClick = (event, elements) => {
    if (elements.length > 0) {
      const dataIndex = elements[0].index
      const label = yearlyGrowthData.labels[dataIndex]
      const value = yearlyGrowthData.datasets[0].data[dataIndex]
      alert(`${label}: Revenue ₹${value.toLocaleString()}`)
    }
  }

  const handleDoughnutClick = (event, elements) => {
    if (elements.length > 0) {
      const dataIndex = elements[0].index
      const label = expenseBreakdown.labels[dataIndex]
      const value = expenseBreakdown.datasets[0].data[dataIndex]
      alert(`${label}: ₹${value.toLocaleString()}`)
    }
  }

  // Growth data for charts with enhanced styling
  const monthlyGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: [45000, 52000, 48000, 61000, 55000, 67000, 73000, 69000, 78000],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#1d4ed8',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 3,
      },
      {
        label: 'Profit (₹)',
        data: [12000, 15000, 11000, 18000, 16000, 21000, 25000, 22000, 28000],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#059669',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 3,
      }
    ],
  }

  const yearlyGrowthData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: [540000, 620000, 580000, 720000, 850000],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 197, 253, 0.8)',
          'rgba(96, 165, 250, 0.8)',
          'rgba(37, 99, 235, 0.8)',
        ],
        borderColor: [
          'rgb(99, 102, 241)',
          'rgb(59, 130, 246)',
          'rgb(147, 197, 253)',
          'rgb(96, 165, 250)',
          'rgb(37, 99, 235)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Profit (₹)',
        data: [150000, 180000, 160000, 210000, 280000],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(52, 211, 153, 0.8)',
          'rgba(110, 231, 183, 0.8)',
          'rgba(5, 150, 105, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(16, 185, 129)',
          'rgb(52, 211, 153)',
          'rgb(110, 231, 183)',
          'rgb(5, 150, 105)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }
    ],
  }

  const expenseBreakdown = {
    labels: ['Inventory (₹4.5L)', 'Rent (₹1.2L)', 'Utilities (₹35K)', 'Staff (₹80K)', 'Marketing (₹25K)', 'Others (₹40K)'],
    datasets: [
      {
        data: [450000, 120000, 35000, 80000, 25000, 40000],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(249, 115, 22)',
          'rgb(234, 179, 8)',
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 3,
        hoverBackgroundColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        hoverBorderColor: '#ffffff',
        hoverBorderWidth: 4,
        hoverOffset: 15,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            weight: '600',
          },
        },
      },
      title: {
        display: true,
        text: selectedPeriod === 'monthly' ? 'Monthly Business Performance (2024)' : 'Yearly Business Performance',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ₹' + context.parsed.y.toLocaleString('en-IN');
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: '600',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: '600',
          },
          callback: function(value) {
            return '₹' + (value / 1000) + 'K';
          }
        },
      },
    },
    onClick: handleChartClick,
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            weight: '600',
          },
        },
      },
      title: {
        display: true,
        text: 'Yearly Business Performance Comparison',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ₹' + (context.parsed.y / 1000) + 'K';
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: '600',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: '600',
          },
          callback: function(value) {
            return '₹' + (value / 1000) + 'K';
          }
        },
      },
    },
    onClick: handleBarClick,
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 11,
            weight: '600',
          },
          generateLabels: function(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].borderColor[i],
                  lineWidth: data.datasets[0].borderWidth,
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
          }
        },
      },
      title: {
        display: true,
        text: 'Monthly Expense Distribution',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `₹${value.toLocaleString('en-IN')} (${percentage}%)`;
          }
        }
      },
    },
    onClick: handleDoughnutClick,
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
                <p className="text-gray-500 mt-1">Fresh Valley Grocery - Business Management</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Today's Sales</p>
                  <p className="text-2xl font-bold text-green-600">₹12,450</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FV</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Tabs */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg mb-8 overflow-hidden">
            <div className="bg-white/70 backdrop-blur-sm">
              <nav className="flex space-x-2 px-6 py-2">
                {[
                  { id: 'dashboard', name: 'Dashboard', icon: '📊', gradient: 'from-blue-500 to-blue-600' },
                  { id: 'payments', name: 'Pending Payments', icon: '💰', gradient: 'from-green-500 to-green-600' },
                  { id: 'customers', name: 'Recent Customers', icon: '👥', gradient: 'from-purple-500 to-purple-600' },
                  { id: 'analytics', name: 'Growth Analytics', icon: '📈', gradient: 'from-orange-500 to-orange-600' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                        : 'text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-800'
                    }`}
                  >
                    <span className="mr-2 text-lg">{tab.icon}</span>
                    <span className="font-semibold">{tab.name}</span>
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">💰 Total Pending</p>
                      <p className="text-3xl font-bold">₹17,500</p>
                      <p className="text-blue-200 text-xs mt-1">3 customers pending</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-lg p-2">
                    <div className="flex justify-between text-xs">
                      <span>This Month</span>
                      <span className="font-semibold">-23% ↓</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">📈 Monthly Revenue</p>
                      <p className="text-3xl font-bold">₹78,000</p>
                      <p className="text-green-200 text-xs mt-1">156 orders completed</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-lg p-2">
                    <div className="flex justify-between text-xs">
                      <span>Growth</span>
                      <span className="font-semibold">+12.5% ↑</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">👥 Total Customers</p>
                      <p className="text-3xl font-bold">245</p>
                      <p className="text-purple-200 text-xs mt-1">89 loyal members</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-lg p-2">
                    <div className="flex justify-between text-xs">
                      <span>Retention</span>
                      <span className="font-semibold">87.2% ↑</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">📦 Monthly Orders</p>
                      <p className="text-3xl font-bold">156</p>
                      <p className="text-orange-200 text-xs mt-1">Avg ₹1,845 per order</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-2xl">📦</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-lg p-2">
                    <div className="flex justify-between text-xs">
                      <span>This Week</span>
                      <span className="font-semibold">+8.3% ↑</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🚀</span>
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button onClick={handleSendReminders} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-semibold">Send Reminders</div>
                  </button>
                  <button onClick={handleGenerateReport} className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-semibold">Generate Report</div>
                  </button>
                  <button onClick={handleAddCustomer} className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-2">👤</div>
                    <div className="text-sm font-semibold">Add Customer</div>
                  </button>
                  <button onClick={handleNewOrder} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-semibold">New Order</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 💰 Pending Payments Tab */}
          {activeTab === 'payments' && (
            <div className="space-y-6">
              {/* Header with Summary */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center">
                      <span className="mr-3 text-3xl">💰</span>
                      Pending Payments
                    </h2>
                    <p className="text-green-100 mt-1">Track customers with outstanding amounts</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-100 text-sm">Total Outstanding</p>
                    <p className="text-3xl font-bold">₹17,500</p>
                    <p className="text-green-200 text-xs">3 customers pending</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search by customer name or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact & Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Items & Due Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPayments.map((payment) => (
                      <tr key={payment.id} className={payment.pendingAmount > 0 ? 'bg-red-50' : 'bg-green-50'}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{payment.customerName}</div>
                            <div className="text-sm text-gray-500">Last Purchase: {payment.lastPurchase}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{payment.phone}</div>
                          <div className="text-sm text-gray-500">{payment.address}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Total: ₹{payment.totalAmount}</div>
                          <div className="text-sm text-green-600">Paid: ₹{payment.paidAmount}</div>
                          <div className={`text-sm font-medium ${payment.pendingAmount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                            Pending: ₹{payment.pendingAmount}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{payment.items.join(', ')}</div>
                          <div className={`text-sm ${payment.dueDate === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                            Due: {payment.dueDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {payment.pendingAmount > 0 ? (
                            <div className="space-y-2">
                              <button 
                                onClick={() => handleMarkAsPaid(payment.id)}
                                className="w-full bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                              >
                                Mark Paid
                              </button>
                              <button 
                                onClick={() => handleSendPaymentReminder(payment)}
                                className="w-full bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                              >
                                Send Reminder
                              </button>
                            </div>
                          ) : (
                            <span className="text-green-600 font-medium">✓ Paid</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          )}

          {/* 👥 Recent Customers Tab */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              {/* Header with Customer Stats */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center">
                      <span className="mr-3 text-3xl">👥</span>
                      Recent Customers
                    </h2>
                    <p className="text-purple-100 mt-1">Recent purchases and customer information</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-100 text-sm">Today's Customers</p>
                    <p className="text-3xl font-bold">12</p>
                    <p className="text-purple-200 text-xs">Total: ₹28,500</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔥</span>
                    <div>
                      <p className="text-sm text-gray-500">Top Customer</p>
                      <p className="font-bold text-gray-900">Vikash Gupta</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💯</span>
                    <div>
                      <p className="text-sm text-gray-500">Repeat Customers</p>
                      <p className="font-bold text-gray-900">67%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⏰</span>
                    <div>
                      <p className="text-sm text-gray-500">Peak Hour</p>
                      <p className="font-bold text-gray-900">6-8 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Activity</h3>
                    <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
                      View All Customers
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search customers by name or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="all">All Customers</option>
                      <option value="recent">Recent (7 days)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredCustomers.map((customer) => (
                  <div key={customer.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                          <p className="text-xs text-gray-500">{customer.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ₹{customer.purchaseAmount}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-700 bg-blue-50 p-2 rounded-lg">
                        <span className="mr-2 text-blue-600">📞</span>
                        <a href={`tel:${customer.phone}`} className="hover:text-blue-700 font-medium">{customer.phone}</a>
                      </div>
                      <div className="flex items-start text-sm text-gray-700 bg-purple-50 p-2 rounded-lg">
                        <span className="mr-2 mt-1 text-purple-600">📍</span>
                        <span className="font-medium">{customer.address}</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-700 bg-orange-50 p-2 rounded-lg">
                        <span className="mr-2 mt-1 text-orange-600">🛒</span>
                        <span className="font-medium">{customer.items.join(', ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <button onClick={() => handleCallCustomer(customer.phone)} className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                        📞 Call
                      </button>
                      <button onClick={() => handleWhatsAppCustomer(customer.phone, customer.name)} className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs py-2 px-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold">
                        💬 WhatsApp
                      </button>
                    </div>
                    
                    {/* Customer Rating */}
                    <div className="mt-3 flex items-center justify-center">
                      <div className="flex text-yellow-400">
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>
                      <span className="ml-2 text-xs text-gray-500 font-medium">Loyal Customer</span>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Period Selector */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Growth Analytics</h2>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="monthly">Monthly View</option>
                    <option value="yearly">Yearly View</option>
                  </select>
                </div>
                
                <div className="h-96 relative">
                  <div className="absolute top-0 right-0 flex space-x-2 z-10">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      📈 Growth: +12.5%
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      💰 Profit Margin: 35.8%
                    </div>
                  </div>
                  {selectedPeriod === 'monthly' ? (
                    <Line data={monthlyGrowthData} options={chartOptions} />
                  ) : (
                    <Bar data={yearlyGrowthData} options={barOptions} />
                  )}
                </div>
              </div>

              {/* Enhanced Analytics Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 relative z-10">Monthly Expense Analysis</h3>
                  <div className="h-80 relative z-10">
                    <Doughnut data={expenseBreakdown} options={doughnutOptions} />
                  </div>
                  <div className="mt-4 relative z-10">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Total Monthly Expenses</p>
                      <p className="text-2xl font-bold text-red-600">₹7,50,000</p>
                      <p className="text-xs text-gray-500">↑ 5.2% from last month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 relative z-10">Performance Metrics</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Profit Margin</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold text-green-600">35.8%</span>
                            <span className="ml-2 text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full">↑ 2.1%</span>
                          </div>
                        </div>
                        <div className="text-3xl">📈</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Customer Retention</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold text-blue-600">87.2%</span>
                            <span className="ml-2 text-sm text-blue-500 bg-blue-100 px-2 py-1 rounded-full">↑ 4.3%</span>
                          </div>
                        </div>
                        <div className="text-3xl">🎯</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border-l-4 border-purple-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Average Order Value</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold text-purple-600">₹1,845</span>
                            <span className="ml-2 text-sm text-purple-500 bg-purple-100 px-2 py-1 rounded-full">↑ 8.7%</span>
                          </div>
                        </div>
                        <div className="text-3xl">🛒</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Monthly Growth</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold text-orange-600">+12.5%</span>
                            <span className="ml-2 text-sm text-orange-500 bg-orange-100 px-2 py-1 rounded-full">Best Year!</span>
                          </div>
                        </div>
                        <div className="text-3xl">🚀</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-xl border-l-4 border-indigo-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Customer Satisfaction</span>
                          <div className="flex items-center mt-1">
                            <span className="text-2xl font-bold text-indigo-600">4.8/5</span>
                            <span className="ml-2 text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full">Excellent</span>
                          </div>
                        </div>
                        <div className="text-3xl">⭐</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Best Selling Item</p>
                      <p className="text-2xl font-bold">Rice (25kg)</p>
                      <p className="text-sm text-blue-200">156 units sold this month</p>
                    </div>
                    <div className="text-4xl opacity-80">🌾</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Peak Sales Hour</p>
                      <p className="text-2xl font-bold">6-8 PM</p>
                      <p className="text-sm text-green-200">Average ₹3,200/hour</p>
                    </div>
                    <div className="text-4xl opacity-80">⏰</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Loyal Customers</p>
                      <p className="text-2xl font-bold">89 Members</p>
                      <p className="text-sm text-purple-200">36% of total revenue</p>
                    </div>
                    <div className="text-4xl opacity-80">👑</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Add New Customer</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              handleAddNewCustomer({
                name: formData.get('name'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                items: [formData.get('items')],
                purchaseAmount: formData.get('amount')
              })
            }}>
              <div className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Customer Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  rows="3"
                />
                <input
                  name="items"
                  type="text"
                  placeholder="Items Purchased"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
                <input
                  name="amount"
                  type="number"
                  placeholder="Purchase Amount"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddCustomerModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Order Modal */}
      {showNewOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Create New Order</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              handleCreateNewOrder({
                customerName: formData.get('customerName'),
                items: formData.get('items'),
                amount: formData.get('amount'),
                paymentMethod: formData.get('paymentMethod')
              })
            }}>
              <div className="space-y-4">
                <input
                  name="customerName"
                  type="text"
                  placeholder="Customer Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name="items"
                  placeholder="Items (e.g., Rice 25kg, Dal 5kg)"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  rows="3"
                />
                <input
                  name="amount"
                  type="number"
                  placeholder="Total Amount"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <select
                  name="paymentMethod"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="upi">UPI</option>
                  <option value="card">Card</option>
                  <option value="credit">Credit</option>
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewOrderModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Monthly Report</h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Total Revenue</h4>
                  <p className="text-2xl font-bold text-blue-600">₹78,000</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Orders Completed</h4>
                  <p className="text-2xl font-bold text-green-600">156</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">New Customers</h4>
                  <p className="text-2xl font-bold text-purple-600">23</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Pending Payments</h4>
                  <p className="text-2xl font-bold text-orange-600">₹17,500</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Top Selling Items</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Rice 25kg - 45 units sold</li>
                  <li>• Dal 5kg - 38 units sold</li>
                  <li>• Oil 2L - 34 units sold</li>
                  <li>• Sugar 5kg - 28 units sold</li>
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {
                    alert('Report downloaded as PDF!')
                    setShowReportModal(false)
                  }}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => {
                    alert('Report sent to email!')
                    setShowReportModal(false)
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Email Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Vendor