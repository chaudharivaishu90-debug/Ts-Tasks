"use strict";
// 1
var cl = console.log;
let student1 = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};
cl(student1);
let employee1 = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: "HR", // possible values: "IT", "HR", "Finance", "Marketing"
    isPermanent: true
};
cl(employee1);
let book1 = {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};
cl(book1);
let mobile1 = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: "Black", // possible values: "Black", "White", "Blue", "Silver"
    storage: 256
};
cl(mobile1);
let customer1 = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
cl(customer1);
let laptop1 = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};
cl(laptop1);
let movie1 = {
    title: "Dangal",
    rating: 8.5,
    language: "Hindi", // possible values: "Hindi", "English", "Marathi", "Tamil"
    releaseYear: 2016,
    isReleased: true
};
cl(movie1);
;
let account1 = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: "Savings", // possible values: "Savings", "Current", "Salary"
    isActive: true
};
cl(account1);
;
let course1 = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};
cl(course1);
;
let vehicle1 = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: "Petrol", // possible values: "Petrol", "Diesel", "Electric", "CNG", "Hybrid"
    isAvailable: true
};
cl(vehicle1);
let teacher1 = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};
cl(teacher1);
;
let order1 = {
    orderId: 1001,
    amount: 2500,
    status: "Pending", // possible values: "Pending", "Confirmed", "Delivered", "Cancelled"
    paymentMode: "UPI" // possible values: "Cash", "UPI", "Card", "NetBanking"
};
cl(order1);
let user1 = {
    username: "rahul123",
    email: "rahul@example.com",
    role: "BUYER",
    isVerified: true
};
cl(user1);
let product1 = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: "Black",
    quantity: 10,
    category: "Electronics"
};
cl(product1);
let attendance1 = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: "Present",
    workingHours: 8
};
cl(attendance1);
let shoppingUser1 = {
    id: 101,
    name: "Aakash",
    role: "BUYER",
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    }
};
cl(shoppingUser1);
let inventory1 = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: "LOW_STOCK"
};
cl(inventory1);
let employeeProfile1 = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};
cl(employeeProfile1);
let cartItem1 = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};
cl(cartItem1);
let payment1 = {
    transactionId: "TXN1001",
    amount: 5000,
    mode: "UPI",
    status: "SUCCESS",
    date: "2026-10-20"
};
cl(payment1);
let patient1 = {
    patientId: 301,
    name: "Suresh",
    age: 45,
    status: "UNDER_TREATMENT",
    doctor: {
        name: "Dr. Mehta",
        specialization: "Cardiology"
    }
};
cl(patient1);
let libraryBook1 = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: "AVAILABLE",
    tags: ["Programming", "Software Design"]
};
cl(libraryBook1);
let foodOrder1 = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: "PREPARING"
};
cl(foodOrder1);
let department1 = {
    departmentId: 10,
    name: "Development",
    manager: {
        name: "Amit",
        email: "amit@example.com"
    },
    employees: [
        { id: 1, name: "Raj", salary: 40000 },
        { id: 2, name: "Simran", salary: 45000 }
    ]
};
cl(department1);
let travelBooking1 = {
    bookingId: "TR101",
    passengerName: "Manoj",
    source: "Pune",
    destination: "Mumbai",
    travelDate: "2026-11-10",
    status: "BOOKED"
};
cl(travelBooking1);
let studentResult1 = {
    studentId: 101,
    name: "Pooja",
    marks: [
        { subject: "JavaScript", score: 85 },
        { subject: "TypeScript", score: 90 },
        { subject: "Angular", score: 78 },
    ],
    percentage: 84.33,
    result: "PASS" // possible values: "PASS", "FAIL", "ATKT"
};
cl(studentResult1);
let property1 = {
    propertyId: 201,
    type: "Flat", // possible values: "Flat", "House", "Plot"
    price: 4500000,
    area: 1000,
    location: {
        city: "Pune",
        locality: "Wakad"
    },
    status: "Available" // possible values: "Available", "Sold", "Rented"
};
cl(property1);
;
let socialPost1 = {
    postId: 100,
    author: "Ravi",
    content: "Learning TypeScript",
    likes: 25,
    comments: ["Great", "Keep learning"],
    visibility: "PUBLIC" // possible values: "PUBLIC", "PRIVATE", "FRIENDS"
};
cl(socialPost1);
let insurance1 = {
    policyNumber: "POL1001",
    holderName: "Mahesh",
    type: "HEALTH", // possible values: "LIFE", "HEALTH", "VEHICLE"
    premium: 12000,
    coverage: 500000,
    nominee: "Sunita"
};
cl(insurance1);
;
let enrollment1 = {
    enrollmentId: 5001,
    student: {
        id: 101,
        name: "Rahul"
    },
    course: {
        id: 201,
        name: "Angular",
        fees: 15000
    },
    status: "ENROLLED", // possible values: "ENROLLED", "COMPLETED", "DROPPED"
};
cl(enrollment1);
let vehicleService1 = {
    serviceId: 301,
    vehicleNumber: "MH12AB1234",
    serviceType: "GENERAL", // possible values: "GENERAL", "REPAIR", "OIL_CHANGE"
    cost: 5000,
    partsUsed: [
        { name: "Oil Filter", price: 500 },
        { name: "Engine Oil", price: 1500 }
    ]
};
cl(vehicleService1);
let onlineExam1 = {
    examId: 901,
    studentName: "Kavita",
    durationMinutes: 60,
    status: "NOT_STARTED", // possible values: "NOT_STARTED", "IN_PROGRESS", "SUBMITTED"
    questions: [
        {
            question: "What is TypeScript?",
            options: ["Language", "Database", "Browser"],
            marks: 2
        }
    ]
};
cl(onlineExam1);
let project1 = {
    projectId: 1001,
    projectName: "HRMS",
    status: "ACTIVE", // possible values: "PLANNED", "ACTIVE", "COMPLETED"
    teamMembers: [
        { name: "Amit", role: "Developer" },
        { name: "Priya", role: "Tester" }
    ],
    technologies: ["Angular", "Node.js", "MongoDB"]
};
cl(project1);
let subscription1 = {
    userId: 101,
    plan: "PREMIUM", // possible values: "FREE", "BASIC", "PREMIUM"
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    autoRenew: true
};
cl(subscription1);
let warehouse1 = {
    warehouseId: 1,
    name: "Pune Warehouse",
    location: "Pune",
    products: [
        { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
        { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
    ]
};
cl(warehouse1);
let ecomOrder1 = {
    orderId: "ORD1001",
    customer: {
        id: 101,
        name: "Rahul",
        email: "rahul@example.com"
    },
    items: [
        { productId: 1, name: "Laptop", price: 60000, quantity: 1 },
        { productId: 2, name: "Mouse", price: 1000, quantity: 2 }
    ],
    shippingAddress: {
        street: "MG Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    },
    orderStatus: "CONFIRMED", // possible values: "PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "RETURNED"
    paymentStatus: "PAID", // possible values: "PENDING", "PAID", "REFUNDED"
    couponCode: "SAVE10"
};
cl(ecomOrder1);
let instituteStudent1 = {
    studentId: 101,
    personalInfo: {
        fullName: "Aakash Patil",
        email: "aakash@example.com",
        phone: "9876543210",
        address: {
            city: "Udgir",
            state: "Maharashtra"
        }
    },
    batch: {
        batchId: 10,
        batchName: "Angular Evening Batch",
        startDate: "2026-11-15"
    },
    courses: ["JavaScript", "TypeScript", "Angular"],
    status: "ACTIVE" // possible values: "ACTIVE", "INACTIVE", "PLACED"
};
cl(instituteStudent1);
let machineTest1 = {
    testId: 501,
    testName: "TypeScript Objects",
    student: {
        id: 101,
        name: "Rahul"
    },
    facultyName: "Amit",
    status: "COMPLETED_AND_EXPLAINED", // possible values: "NOT_ATTENDED", "ATTENDED", "NOT_COMPLETED", "COMPLETED_NOT_EXPLAINED", "COMPLETED_AND_EXPLAINED"
    performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
    score: 85,
    totalMarks: 100,
    feedback: "Good understanding of interfaces",
    technologies: ["TypeScript", "JavaScript"]
};
cl(machineTest1);
let payroll1 = {
    employee: {
        id: 201,
        name: "Priya",
        department: "Development",
        joiningDate: "2024-06-01"
    },
    salary: {
        basic: 40000,
        hra: 10000,
        allowances: 5000,
        deductions: 3000,
        bonus: 2000
    },
    month: "October 2026",
    status: "GENERATED" // possible values: "GENERATED", "PAID", "ON_HOLD"
};
cl(payroll1);
let loanApplication1 = {
    applicationId: "LN1001",
    applicant: {
        name: "Mahesh",
        age: 35,
        monthlyIncome: 80000,
        employmentType: "SALARIED" // possible values: "SALARIED", "SELF_EMPLOYED"
    },
    loan: {
        type: "HOME", // possible values: "HOME", "PERSONAL", "EDUCATION"
        requestedAmount: 2500000,
        tenureYears: 20,
        interestRate: 8.5
    },
    documents: [
        { documentName: "PAN Card", uploaded: true },
        { documentName: "Salary Slip", uploaded: true },
        { documentName: "Bank Statement", uploaded: false }
    ],
    status: "UNDER_REVIEW" // possible values: "APPLIED", "UNDER_REVIEW", "APPROVED", "REJECTED"
};
cl(loanApplication1);
let apiResponse1 = {
    success: true,
    message: "Users fetched successfully",
    data: {
        users: [
            {
                id: 1,
                name: "Ravi",
                role: "ADMIN", // possible values: "ADMIN", "USER", "MANAGER"
                permissions: ["READ", "WRITE", "DELETE"]
            },
            {
                id: 2,
                name: "Amit",
                role: "USER",
                permissions: ["READ"]
            }
        ],
        pagination: {
            currentPage: 1,
            pageSize: 10,
            totalRecords: 2,
            totalPages: 1
        }
    },
    error: null
};
cl(apiResponse1);
let projectTask1 = {
    projectId: 101,
    projectName: "HRMS",
    tasks: [
        {
            taskId: 1,
            title: "Create Login API",
            assignedTo: { id: 10, name: "Amit" },
            priority: "HIGH", // possible values: "LOW", "MEDIUM", "HIGH", "CRITICAL"
            status: "IN_PROGRESS", // possible values: "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"
            dueDate: "2026-11-01"
        },
        {
            taskId: 2,
            title: "Create Login UI",
            assignedTo: { id: 11, name: "Priya" },
            priority: "MEDIUM",
            status: "TODO",
            dueDate: "2026-11-05",
            dependencies: [1]
        }
    ]
};
cl(projectTask1);
let hotelBooking1 = {
    bookingId: "HB1001",
    guest: {
        name: "Neha",
        email: "neha@example.com",
        phone: "9876543210"
    },
    hotel: {
        name: "City Hotel",
        location: "Mumbai",
        roomNumber: 205,
        amenities: ["WiFi", "AC", "Breakfast"]
    },
    stay: {
        checkIn: "2026-11-01",
        checkOut: "2026-11-04",
        guests: 2
    },
    totalAmount: 15000,
    status: "RESERVED" // possible values: "RESERVED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"
};
cl(hotelBooking1);
;
let advancedCart1 = {
    cartId: "CART101",
    customerId: 201,
    items: [
        {
            productId: 1,
            name: "T-Shirt",
            unitPrice: 799,
            quantity: 2,
            options: {
                color: "Black",
                size: "L"
            }
        },
        {
            productId: 2,
            name: "Cap",
            unitPrice: 399,
            quantity: 1
        }
    ],
    discount: {
        type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
        value: 10,
        couponCode: "SAVE10"
    },
    shippingFee: 50,
    currency: "INR" // possible values: "INR", "USD"
};
cl(advancedCart1);
;
let authSession1 = {
    user: {
        id: 1,
        username: "admin01",
        email: "admin@example.com",
        role: "SUPER_ADMIN" // possible values: "ADMIN", "SUPER_ADMIN", "USER"
    },
    authentication: {
        provider: "LOCAL", // possible values: "LOCAL", "GOOGLE", "GITHUB"
        accessToken: "sample-access-token",
        expiresIn: 3600,
        twoFactorEnabled: true
    },
    devices: [
        {
            deviceId: "DEV001",
            deviceName: "Windows Laptop",
            lastLogin: "2026-10-22",
            trusted: true
        }
    ],
    lastPasswordChange: "2026-09-01"
};
cl(authSession1);
;
let insuranceClaim1 = {
    claimId: "CL1001",
    policyNumber: "POL1001",
    claimant: {
        name: "Rohit",
        relationship: "SELF" // possible values: "SELF", "SPOUSE", "CHILD", "PARENT"
    },
    claimAmount: 100000,
    approvedAmount: 80000,
    incident: {
        date: "2026-10-01",
        description: "Hospital admission",
        location: "Pune"
    },
    documents: [
        { name: "Medical Bills", verified: true },
        { name: "Discharge Summary", verified: false }
    ],
    status: "DOCUMENTS_REQUIRED" // possible values: "SUBMITTED", "DOCUMENTS_REQUIRED", "APPROVED", "REJECTED", "SETTLED"
};
cl(insuranceClaim1);
let transaction1 = {
    transactionId: "TX5001",
    type: "TRANSFER", // possible values: "CREDIT", "DEBIT", "TRANSFER"
    amount: {
        value: 10000,
        currency: "INR" // possible values: "INR", "USD", "EUR", "GBP"
    },
    sender: {
        accountId: "ACC101",
        name: "Amit"
    },
    receiver: {
        accountId: "ACC202",
        name: "Rahul"
    },
    timestamp: "2026-10-23T10:30:00",
    metadata: {
        source: "Internet Banking",
        referenceId: "REF1001"
    }
};
cl(transaction1);
let hrmsEmployee1 = {
    employeeId: "EMP1001",
    personalDetails: {
        firstName: "Amit",
        lastName: "Sharma",
        dateOfBirth: "1995-05-15",
        contact: {
            email: "amit@example.com",
            phone: "9876543210"
        },
        address: {
            current: "Pune, Maharashtra",
            permanent: "Udgir, Maharashtra"
        }
    },
    employmentDetails: {
        department: "IT",
        designation: "Software Developer",
        joiningDate: "2025-01-10",
        status: "ACTIVE", // possible values: "PROBATION", "ACTIVE", "NOTICE_PERIOD", "RESIGNED"
        previousExperience: 2
    },
    compensation: {
        annualCTC: 600000,
        monthlyGross: 50000,
        salaryComponents: [
            { name: "Basic", amount: 25000 },
            { name: "HRA", amount: 15000 },
            { name: "Allowance", amount: 10000 }
        ]
    },
    documents: [
        {
            documentType: "PAN",
            fileName: "pan.pdf",
            uploadedAt: "2025-01-10",
            verified: true
        },
        {
            documentType: "Degree Certificate",
            fileName: "degree.pdf",
            uploadedAt: "2025-01-10",
            verified: false
        }
    ]
};
cl(hrmsEmployee1);
;
let batchReport1 = {
    batch: {
        batchId: 10,
        batchName: "Angular Evening",
        faculty: "Amit",
        students: [
            { studentId: 1, name: "Rahul", email: "rahul@example.com" },
            { studentId: 2, name: "Priya", email: "priya@example.com" }
        ]
    },
    test: {
        testId: 501,
        title: "TypeScript Interfaces",
        date: "2026-10-20",
        totalMarks: 100,
        technologies: ["TypeScript", "JavaScript"]
    },
    results: [
        {
            studentId: 1,
            attendance: "ATTENDED", // possible values: "ATTENDED", "ABSENT"
            score: 85,
            performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
            codeCompleted: true,
            explainedToFaculty: true,
            feedback: "Good problem-solving"
        },
        {
            studentId: 2,
            attendance: "ABSENT",
            codeCompleted: false,
            explainedToFaculty: false
        }
    ],
    summary: {
        totalStudents: 2,
        attended: 1,
        absent: 1,
        averageScore: 85
    }
};
cl(batchReport1);
let completeProduct1 = {
    id: "PRD1001",
    name: "Smart Watch",
    description: "Fitness tracking smart watch",
    category: {
        id: 10,
        name: "Electronics",
        parentCategory: "Wearables"
    },
    pricing: {
        basePrice: 5000,
        sellingPrice: 3999,
        taxPercentage: 18,
        currency: "INR", // possible values: "INR", "USD"
        discount: {
            type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
            value: 20,
            validUntil: "2026-12-31"
        }
    },
    inventory: {
        sku: "WATCH-BLK-001",
        stock: 25,
        warehouseId: 101,
        status: "IN_STOCK" // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
    },
    specifications: [
        { name: "BatteryLife", value: "7 days" },
        { name: "WaterResistant", value: true },
        { name: "DisplaySize", value: 1.8 }
    ],
    variants: [
        {
            variantId: "VAR001",
            color: "Black", // possible values: "Black", "Blue", "White"
            priceAdjustment: 0,
            available: true
        },
        {
            variantId: "VAR002",
            color: "Blue",
            priceAdjustment: 200,
            available: true
        }
    ],
    shipping: {
        methods: ["STANDARD", "EXPRESS"], // possible values: "STANDARD", "EXPRESS", "SAME_DAY"
        returnable: true,
        returnDays: 7
    },
    reviews: [
        {
            userId: 201,
            rating: 5,
            comment: "Excellent product",
            date: "2026-10-20"
        },
        {
            userId: 202,
            rating: 4,
            date: "2026-10-21"
        }
    ],
    lifecycle: "ACTIVE" // possible values: "DRAFT", "ACTIVE", "DISCONTINUED"
};
cl(completeProduct1);
