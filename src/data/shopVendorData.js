// Mock vendor data for each shop
export const shopVendorData = {
  1: { // Bhatia Pustak Bhandar
    shopInfo: {
      id: 1,
      name: "Bhatia Pustak Bhandar",
      type: "Books & Stationery",
      owner: "Rajesh Bhatia",
      established: "2010",
      rating: 4.8,
      totalReviews: 234,
      address: "Shop No. 15, Khan Market, New Delhi",
      phone: "+91 98765 43210",
      email: "bhatia.books@gmail.com"
    },
    stats: {
      totalPending: 12500,
      monthlyRevenue: 85000,
      totalCustomers: 320,
      monthlyOrders: 145,
      weeklyGrowth: 12.5,
      customerSatisfaction: 96,
      averageOrderValue: 586
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Amit Sharma',
        phone: '+91 98765 43210',
        address: 'A-12, Lajpat Nagar II, New Delhi 110024',
        totalAmount: 3500,
        paidAmount: 2000,
        pendingAmount: 1500,
        lastPurchase: '2024-09-20',
        items: ['NCERT Class 12 Physics', 'Scientific Calculator', 'Geometry Box'],
        dueDate: '2024-10-20',
        date: '2024-09-20',
        priority: 'high',
        customerType: 'regular'
      },
      {
        id: 2,
        customerName: 'Priya Gupta',
        phone: '+91 87654 32109',
        address: 'B-45, Model Town, New Delhi 110009',
        totalAmount: 2800,
        paidAmount: 1800,
        pendingAmount: 1000,
        lastPurchase: '2024-09-18',
        items: ['Engineering Drawing Book', 'Compass Set'],
        dueDate: '2024-10-18',
        date: '2024-09-18',
        priority: 'medium',
        customerType: 'new'
      },
      {
        id: 3,
        customerName: 'Rahul Verma',
        phone: '+91 99887 66554',
        address: 'C-23, Connaught Place, New Delhi',
        totalAmount: 4200,
        paidAmount: 2500,
        pendingAmount: 1700,
        lastPurchase: '2024-09-15',
        items: ['Medical Entrance Books Set', 'Highlighters Pack'],
        dueDate: '2024-10-15',
        date: '2024-09-15',
        priority: 'high',
        customerType: 'premium'
      },
      {
        id: 4,
        customerName: 'Sneha Patel',
        phone: '+91 88776 65543',
        address: 'D-56, Vasant Kunj, New Delhi',
        totalAmount: 1800,
        paidAmount: 800,
        pendingAmount: 1000,
        lastPurchase: '2024-09-22',
        items: ['Art Supplies', 'Sketchbooks', 'Color Pencils'],
        dueDate: '2024-10-22',
        date: '2024-09-22',
        priority: 'low',
        customerType: 'regular'
      },
      {
        id: 5,
        customerName: 'Karan Singh',
        phone: '+91 77665 54432',
        address: 'E-89, Greater Kailash, New Delhi',
        totalAmount: 5600,
        paidAmount: 3000,
        pendingAmount: 2600,
        lastPurchase: '2024-09-12',
        items: ['Law Books Collection', 'Legal Dictionary', 'Case Study Books'],
        dueDate: '2024-10-12',
        date: '2024-09-12',
        priority: 'urgent',
        customerType: 'premium'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Vikash Kumar',
        phone: '+91 97654 32109',
        address: 'E-56, Model Town, New Delhi 110009',
        purchaseAmount: 1200,
        totalPurchases: 4800,
        items: ['NCERT Books Class 10', 'Geometry Box', 'Graph Papers'],
        date: '2024-09-22',
        customerSince: '2023-03-15',
        lastVisit: '2024-09-22',
        preferredPayment: 'UPI',
        loyaltyPoints: 240,
        category: 'student'
      },
      {
        id: 2,
        name: 'Sunita Devi',
        phone: '+91 98123 45678',
        address: 'C-78, Lajpat Nagar, New Delhi 110024',
        purchaseAmount: 800,
        totalPurchases: 2400,
        items: ['Children Story Books', 'Coloring Pencils', 'Drawing Books'],
        date: '2024-09-21',
        customerSince: '2024-01-10',
        lastVisit: '2024-09-21',
        preferredPayment: 'Cash',
        loyaltyPoints: 120,
        category: 'parent'
      },
      {
        id: 3,
        name: 'Dr. Meena Sharma',
        phone: '+91 91234 56789',
        address: 'A-45, Defence Colony, New Delhi',
        purchaseAmount: 2800,
        totalPurchases: 15600,
        items: ['Medical Reference Books', 'Professional Notebooks', 'Premium Pens'],
        date: '2024-09-20',
        customerSince: '2022-05-20',
        lastVisit: '2024-09-20',
        preferredPayment: 'Card',
        loyaltyPoints: 780,
        category: 'professional'
      },
      {
        id: 4,
        name: 'Ravi Mehta',
        phone: '+91 92345 67890',
        address: 'B-12, Karol Bagh, New Delhi',
        purchaseAmount: 1500,
        totalPurchases: 6800,
        items: ['Competitive Exam Books', 'Mock Test Papers', 'Reference Guides'],
        date: '2024-09-19',
        customerSince: '2023-08-12',
        lastVisit: '2024-09-19',
        preferredPayment: 'UPI',
        loyaltyPoints: 340,
        category: 'student'
      },
      {
        id: 5,
        name: 'Anjali Singh',
        phone: '+91 93456 78901',
        address: 'D-67, Pitampura, New Delhi',
        purchaseAmount: 950,
        totalPurchases: 3200,
        items: ['Art & Craft Supplies', 'Sketch Pads', 'Watercolors'],
        date: '2024-09-18',
        customerSince: '2023-11-05',
        lastVisit: '2024-09-18',
        preferredPayment: 'UPI',
        loyaltyPoints: 160,
        category: 'hobbyist'
      },
      {
        id: 6,
        name: 'Rohit Kumar',
        phone: '+91 94567 89012',
        address: 'F-23, Janakpuri, New Delhi',
        purchaseAmount: 2200,
        totalPurchases: 8900,
        items: ['Engineering Textbooks', 'Technical Drawing Set', 'Calculator'],
        date: '2024-09-17',
        customerSince: '2022-09-18',
        lastVisit: '2024-09-17',
        preferredPayment: 'Card',
        loyaltyPoints: 445,
        category: 'student'
      },
      {
        id: 7,
        name: 'Mrs. Kavita Jain',
        phone: '+91 95678 90123',
        address: 'G-34, Rohini, New Delhi',
        purchaseAmount: 750,
        totalPurchases: 2100,
        items: ['School Stationery', 'Notebooks Set', 'Pencil Box'],
        date: '2024-09-16',
        customerSince: '2024-04-22',
        lastVisit: '2024-09-16',
        preferredPayment: 'Cash',
        loyaltyPoints: 105,
        category: 'parent'
      },
      {
        id: 8,
        name: 'Arjun Yadav',
        phone: '+91 96789 01234',
        address: 'H-45, Dwarka, New Delhi',
        purchaseAmount: 3200,
        totalPurchases: 12800,
        items: ['Business Management Books', 'Leadership Guides', 'Office Supplies'],
        date: '2024-09-15',
        customerSince: '2021-12-10',
        lastVisit: '2024-09-15',
        preferredPayment: 'UPI',
        loyaltyPoints: 640,
        category: 'professional'
      }
    ],
    monthlyData: [68000, 72000, 78000, 75000, 82000, 85000, 88000, 86000, 85000, 91000, 89000, 92000],
    yearlyData: [720000, 850000, 980000, 1050000, 1200000],
    weeklyData: [18000, 22000, 19000, 26000, 21000, 24000, 23000],
    categoryData: {
      'Academic Books': 45,
      'Stationery': 25,
      'Art Supplies': 15,
      'Office Supplies': 10,
      'Others': 5
    },
    popularItems: [
      { name: 'NCERT Textbooks', sales: 145, growth: '+12%' },
      { name: 'Notebooks Set', sales: 128, growth: '+8%' },
      { name: 'Geometry Box', sales: 96, growth: '+15%' },
      { name: 'Scientific Calculator', sales: 67, growth: '+22%' },
      { name: 'Art Supplies Kit', sales: 54, growth: '+5%' }
    ]
  },
  
  2: { // Grocera
    shopInfo: {
      id: 2,
      name: "Grocera",
      type: "Grocery & Vegetables",
      owner: "Suresh Agarwal"
    },
    stats: {
      totalPending: 12500,
      monthlyRevenue: 85000,
      totalCustomers: 450,
      monthlyOrders: 320
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Ravi Sharma',
        phone: '+91 99887 76655',
        address: 'D-23, Sonari Layout, Jamshedpur 831011',
        totalAmount: 5500,
        paidAmount: 3000,
        pendingAmount: 2500,
        lastPurchase: '2024-09-19',
        items: ['Rice 25kg', 'Dal 10kg', 'Oil 5L'],
        dueDate: '2024-10-19'
      },
      {
        id: 2,
        customerName: 'Meera Devi',
        phone: '+91 88776 65544',
        address: 'F-67, West Layout, Sonari, Jamshedpur 831011',
        totalAmount: 3200,
        paidAmount: 2000,
        pendingAmount: 1200,
        lastPurchase: '2024-09-17',
        items: ['Vegetables', 'Fruits', 'Spices'],
        dueDate: '2024-10-17'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Anjali Singh',
        phone: '+91 94567 89012',
        address: 'G-12, Sonari Market, Jamshedpur 831011',
        purchaseAmount: 2800,
        items: ['Weekly Groceries', 'Fresh Vegetables'],
        date: '2024-09-23'
      },
      {
        id: 2,
        name: 'Rakesh Kumar',
        phone: '+91 93456 78901',
        address: 'H-34, West Layout, Jamshedpur 831011',
        purchaseAmount: 1900,
        items: ['Rice', 'Dal', 'Sugar'],
        date: '2024-09-22'
      }
    ],
    monthlyData: [70000, 75000, 80000, 78000, 82000, 85000, 88000, 86000, 85000],
    yearlyData: [900000, 950000, 1020000, 1080000, 1150000]
  },

  3: { // Shri Bajrang Store
    shopInfo: {
      id: 3,
      name: "Shri Bajrang Store",
      type: "Kitchen & Utensils",
      owner: "Mohan Lal"
    },
    stats: {
      totalPending: 6800,
      monthlyRevenue: 52000,
      totalCustomers: 180,
      monthlyOrders: 145
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Kavita Sharma',
        phone: '+91 97665 44332',
        address: 'J-45, Kagal Nagar, Jamshedpur 831011',
        totalAmount: 4200,
        paidAmount: 2500,
        pendingAmount: 1700,
        lastPurchase: '2024-09-16',
        items: ['Pressure Cooker', 'Steel Plates'],
        dueDate: '2024-10-16'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Deepak Gupta',
        phone: '+91 92334 56789',
        address: 'K-78, Main Market, Sonari, Jamshedpur 831011',
        purchaseAmount: 3200,
        items: ['Kitchen Set', 'Non-stick Pan'],
        date: '2024-09-21'
      }
    ],
    monthlyData: [45000, 48000, 50000, 49000, 51000, 52000, 54000, 53000, 52000],
    yearlyData: [580000, 610000, 650000, 680000, 720000]
  },

  4: { // Reliance Smart
    shopInfo: {
      id: 4,
      name: "Reliance Smart",
      type: "Retail & Books",
      owner: "Store Manager"
    },
    stats: {
      totalPending: 15000,
      monthlyRevenue: 120000,
      totalCustomers: 680,
      monthlyOrders: 450
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Arjun Patel',
        phone: '+91 96554 33221',
        address: 'L-23, SNP Area, Jamshedpur 831001',
        totalAmount: 8500,
        paidAmount: 5000,
        pendingAmount: 3500,
        lastPurchase: '2024-09-15',
        items: ['Books', 'Stationery', 'Office Items'],
        dueDate: '2024-10-15'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Rohit Singh',
        phone: '+91 91223 34445',
        address: 'M-56, Abaan Colony, Jamshedpur 831001',
        purchaseAmount: 4500,
        items: ['Study Materials', 'Notebooks'],
        date: '2024-09-23'
      }
    ],
    monthlyData: [100000, 105000, 110000, 115000, 118000, 120000, 125000, 122000, 120000],
    yearlyData: [1300000, 1400000, 1480000, 1560000, 1650000]
  },

  5: { // Patel Footwear
    shopInfo: {
      id: 5,
      name: "Patel Footwear",
      type: "Footwear & Accessories",
      owner: "Ramesh Patel"
    },
    stats: {
      totalPending: 9200,
      monthlyRevenue: 65000,
      totalCustomers: 220,
      monthlyOrders: 180
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Neha Verma',
        phone: '+91 95443 32211',
        address: 'N-12, Market Road, Bistupur, Jamshedpur 831004',
        totalAmount: 3800,
        paidAmount: 2000,
        pendingAmount: 1800,
        lastPurchase: '2024-09-14',
        items: ['Sports Shoes', 'Sandals'],
        dueDate: '2024-10-14'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Sanjay Kumar',
        phone: '+91 90112 23334',
        address: 'O-78, Bistupur Market, Jamshedpur 831004',
        purchaseAmount: 2800,
        items: ['Formal Shoes', 'Belt'],
        date: '2024-09-22'
      }
    ],
    monthlyData: [55000, 58000, 60000, 62000, 63000, 65000, 68000, 66000, 65000],
    yearlyData: [720000, 760000, 800000, 840000, 890000]
  },

  6: { // Electrokraft
    shopInfo: {
      id: 6,
      name: "Electrokraft",
      type: "Home Appliances",
      owner: "Vinod Agarwal"
    },
    stats: {
      totalPending: 25000,
      monthlyRevenue: 150000,
      totalCustomers: 320,
      monthlyOrders: 95
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Manoj Singh',
        phone: '+91 94332 21100',
        address: 'P-45, Super Centre Mall, Sakchi, Jamshedpur 831011',
        totalAmount: 18000,
        paidAmount: 10000,
        pendingAmount: 8000,
        lastPurchase: '2024-09-12',
        items: ['Refrigerator', 'Microwave'],
        dueDate: '2024-10-12'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Pooja Sharma',
        phone: '+91 89001 12223',
        address: 'Q-23, Sakchi Market, Jamshedpur 831011',
        purchaseAmount: 12000,
        items: ['Washing Machine', 'Iron'],
        date: '2024-09-20'
      }
    ],
    monthlyData: [130000, 135000, 140000, 145000, 148000, 150000, 155000, 152000, 150000],
    yearlyData: [1650000, 1750000, 1850000, 1950000, 2100000]
  },

  7: { // Khosla Electronics
    shopInfo: {
      id: 7,
      name: "Khosla Electronics",
      type: "Electronics & Gadgets",
      owner: "Raj Khosla"
    },
    stats: {
      totalPending: 18500,
      monthlyRevenue: 95000,
      totalCustomers: 280,
      monthlyOrders: 165
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Sunil Kumar',
        phone: '+91 93221 10099',
        address: 'R-67, Kasidih, Jamshedpur 831001',
        totalAmount: 12000,
        paidAmount: 7000,
        pendingAmount: 5000,
        lastPurchase: '2024-09-13',
        items: ['Mobile Phone', 'Headphones'],
        dueDate: '2024-10-13'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Anita Devi',
        phone: '+91 88990 01122',
        address: 'S-34, Hira Singh Bagan, Jamshedpur 831001',
        purchaseAmount: 8500,
        items: ['Laptop', 'Mouse'],
        date: '2024-09-21'
      }
    ],
    monthlyData: [80000, 85000, 88000, 90000, 92000, 95000, 98000, 96000, 95000],
    yearlyData: [1050000, 1120000, 1200000, 1280000, 1350000]
  },

  8: { // Shree Electronics
    shopInfo: {
      id: 8,
      name: "Shree Electronics",
      type: "Electrical Products",
      owner: "Ramesh Gupta"
    },
    stats: {
      totalPending: 22000,
      monthlyRevenue: 110000,
      totalCustomers: 350,
      monthlyOrders: 200
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Kiran Sharma',
        phone: '+91 92110 09988',
        address: 'T-45, Chowk Bazar, Jugsalai, Jamshedpur 831006',
        totalAmount: 15000,
        paidAmount: 8000,
        pendingAmount: 7000,
        lastPurchase: '2024-09-11',
        items: ['LED TV', 'Sound System'],
        dueDate: '2024-10-11'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Rahul Verma',
        phone: '+91 87889 90011',
        address: 'U-78, Radhe Complex, Jugsalai, Jamshedpur 831006',
        purchaseAmount: 9500,
        items: ['Fan', 'Cooler', 'Bulbs'],
        date: '2024-09-19'
      }
    ],
    monthlyData: [95000, 100000, 105000, 107000, 108000, 110000, 115000, 112000, 110000],
    yearlyData: [1200000, 1280000, 1360000, 1440000, 1520000]
  },

  9: { // Amul Dairy
    shopInfo: {
      id: 9,
      name: "Amul Dairy",
      type: "Dairy Products",
      owner: "Govind Patel"
    },
    stats: {
      totalPending: 4500,
      monthlyRevenue: 75000,
      totalCustomers: 520,
      monthlyOrders: 380
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Savita Devi',
        phone: '+91 91009 98877',
        address: 'V-12, Adityapur Colony, Jamshedpur',
        totalAmount: 2800,
        paidAmount: 1500,
        pendingAmount: 1300,
        lastPurchase: '2024-09-20',
        items: ['Milk', 'Paneer', 'Butter'],
        dueDate: '2024-10-20'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Mukesh Singh',
        phone: '+91 86778 89900',
        address: 'W-56, Adityapur Market, Jamshedpur',
        purchaseAmount: 1200,
        items: ['Daily Milk', 'Curd'],
        date: '2024-09-23'
      }
    ],
    monthlyData: [65000, 68000, 70000, 72000, 73000, 75000, 78000, 76000, 75000],
    yearlyData: [820000, 870000, 920000, 980000, 1050000]
  },

  10: { // Anima Sports
    shopInfo: {
      id: 10,
      name: "Anima Sports",
      type: "Sports Equipment",
      owner: "Anil Sharma"
    },
    stats: {
      totalPending: 14500,
      monthlyRevenue: 88000,
      totalCustomers: 190,
      monthlyOrders: 120
    },
    pendingPayments: [
      {
        id: 1,
        customerName: 'Vikas Kumar',
        phone: '+91 89998 87766',
        address: 'X-78, Golmuri Sports Complex, Jamshedpur',
        totalAmount: 8500,
        paidAmount: 4000,
        pendingAmount: 4500,
        lastPurchase: '2024-09-10',
        items: ['Cricket Kit', 'Football'],
        dueDate: '2024-10-10'
      }
    ],
    customers: [
      {
        id: 1,
        name: 'Amit Yadav',
        phone: '+91 85667 78899',
        address: 'Y-34, Golmuri Market, Jamshedpur',
        purchaseAmount: 5500,
        items: ['Gym Equipment', 'Sports Shoes'],
        date: '2024-09-18'
      }
    ],
    monthlyData: [75000, 78000, 80000, 83000, 85000, 88000, 92000, 90000, 88000],
    yearlyData: [950000, 1020000, 1100000, 1180000, 1260000]
  }
};