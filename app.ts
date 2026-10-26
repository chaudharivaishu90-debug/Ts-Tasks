// 1
var cl=console.log;
 
interface student{
    id: number,
    name: string,
    age: number,
    course: string,
    isActive: boolean


}
 let student1:student = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};

cl(student1)

 

// 2
type department ="IT"|"HR"|"Finance"|"Marketing"
interface employees{
empId: number,
    name: string,
    salary:number,
    department: department, 
    isPermanent: boolean
}

let employee1 :employees= {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: "HR", // possible values: "IT", "HR", "Finance", "Marketing"
    isPermanent: true
};

cl(employee1)


//  3

interface books{
     id: number,
    title:string,
    author:string,
    price: number,
    isAvailable:boolean
}
let book1 :books= {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};
 cl(book1)

//  4

 type Colors= "Black"|"White"| "Blue" | "Silver"
interface mobiles{
    brand: string,
    model: string,
    price: number,
    color: Colors, // possible values: "Black", "White", "Blue", "Silver"
    storage: number

}

let mobile1:mobiles = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: "Black", // possible values: "Black", "White", "Blue", "Silver"
    storage: 256
};
cl(mobile1)


// 5
interface Customers{
    id: number,
    name: string,
    email: string,
    city: string,
    isVerified: boolean
}
let customer1:Customers = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
cl(customer1);

// // 6
interface laptop{
    brand: string,
    ram: number,
    storage: number,
    price:number,
    inStock: boolean

}
let laptop1 :laptop= {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};

cl(laptop1)


// // 7
type language="Hindi"| "English"|"Marathi"|"Tamil"
interface movies{
    title: string,
    rating: number,
    language: language, 
    releaseYear: number,
    isReleased: boolean
}
let movie1 :movies= {
    title: "Dangal",
    rating: 8.5,
    language: "Hindi", // possible values: "Hindi", "English", "Marathi", "Tamil"
    releaseYear: 2016,
    isReleased: true
};
cl(movie1)


// // 8

type accountType="Savings"| "Current"| "Salary"
interface account {
    accountNumber: number,
    holderName: string,
    balance: number,
    accountType:accountType , 
    isActive: boolean
};

let account1:account = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: "Savings", // possible values: "Savings", "Current", "Salary"
    isActive: true
};
cl(account1)



// 9

interface course {
    courseName: string,
    duration: number,
    fees: number,
    technologies:("MongoDB"|"Express"| "Angular"| "Node.js")[];
};

let course1:course = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};
cl(course1);
// // 10

type  fuelType="Petrol"| "Diesel"| "Electric"| "CNG"| "Hybrid"
interface vehicle {
    brand: string,
    model: string,
    price: number,
    fuelType: fuelType, 
    isAvailable: boolean
};

let vehicle1:vehicle = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: "Petrol", // possible values: "Petrol", "Diesel", "Electric", "CNG", "Hybrid"
    isAvailable: true
};
cl(vehicle1)


// // 11

interface teachers{
    id: number,
    name: string,
    subject: string,
    experience: number,
    skills: ("JavaScript"|"TypeScript"| "Angular")[];
}

let teacher1 :teachers = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};
cl(teacher1)


// // 12
type mystatus= "Pending"| "Confirmed"|"Delivered"|"Cancelled"
type paymentMode="Cash"|"UPI"|"Card"| "NetBanking"

interface  orders{
    orderId: number,
    amount: number,
    status: mystatus,
    paymentMode:paymentMode
};

let order1:orders = {
    orderId: 1001,
    amount: 2500,
    status: "Pending", // possible values: "Pending", "Confirmed", "Delivered", "Cancelled"
    paymentMode: "UPI" // possible values: "Cash", "UPI", "Card", "NetBanking"
};
cl(order1)
// // 13
// 13
type userRole = "ADMIN" | "SUPER_ADMIN" | "BUYER";

interface users {
    username: string;
    email: string;
    role: userRole;
    isVerified: boolean;
}

let user1: users = {
    username: "rahul123",
    email: "rahul@example.com",
    role: "BUYER",
    isVerified: true
};

cl(user1);

// 14
type productColor = "Black" | "White" | "Blue";
type productCategory = "Electronics" | "Fashion" | "Sports" | "Beauty";

interface products {
    id: number;
    name: string;
    price: number;
    color: productColor;
    quantity: number;
    category: productCategory;
}

let product1: products = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: "Black",
    quantity: 10,
    category: "Electronics"
};

cl(product1);

// 15
type attendanceStatus = "Present" | "Absent" | "Leave";

interface attendance {
    employeeName: string;
    date: string;
    status: attendanceStatus;
    workingHours: number;
}

let attendance1: attendance = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: "Present",
    workingHours: 8
};

cl(attendance1);

// 16
type shoppingRole = "ADMIN" | "BUYER" | "SELLER";

interface shoppingAddress {
    city: string;
    state: string;
    pincode: number;
}

interface shoppingUser {
    id: number;
    name: string;
    role: shoppingRole;
    address: shoppingAddress;
}

let shoppingUser1: shoppingUser = {
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

// 17
type inventoryStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";

interface inventory {
    productId: number;
    name: string;
    price: number;
    stock: number;
    status: inventoryStatus;
}

let inventory1: inventory = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: "LOW_STOCK"
};

cl(inventory1);

// 18
interface employeeProfile {
    id: number;
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: number;
}

let employeeProfile1: employeeProfile = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};

cl(employeeProfile1);

// 19
interface cartItem {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    discount: number;
}

let cartItem1: cartItem = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};

cl(cartItem1);

// 20
type paymentMethod = "CASH" | "UPI" | "CARD" | "NET_BANKING";
type paymentStatus = "SUCCESS" | "FAILED" | "PENDING";

interface payment {
    transactionId: string;
    amount: number;
    mode: paymentMethod;
    status: paymentStatus;
    date: string;
}

let payment1: payment = {
    transactionId: "TXN1001",
    amount: 5000,
    mode: "UPI",
    status: "SUCCESS",
    date: "2026-10-20"
};

cl(payment1);

// 21
type patientStatus = "ADMITTED" | "DISCHARGED" | "UNDER_TREATMENT";

interface doctor {
    name: string;
    specialization: string;
}

interface patient {
    patientId: number;
    name: string;
    age: number;
    status: patientStatus;
    doctor: doctor;
}

let patient1: patient = {
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

// 22
type bookStatus = "AVAILABLE" | "ISSUED" | "LOST";

interface libraryBook {
    id: number;
    title: string;
    author: string;
    status: bookStatus;
    tags: string[];
}

let libraryBook1: libraryBook = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: "AVAILABLE",
    tags: ["Programming", "Software Design"]
};

cl(libraryBook1);

// 23
type foodOrderStatus = "PLACED" | "PREPARING" | "READY" | "DELIVERED";

interface foodOrder {
    orderId: number;
    customerName: string;
    items: string[];
    totalAmount: number;
    status: foodOrderStatus;
}

let foodOrder1: foodOrder = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: "PREPARING"
};

cl(foodOrder1);

// 24
interface departmentManager {
    name: string;
    email: string;
}

interface departmentEmployee {
    id: number;
    name: string;
    salary: number;
}

interface depart {
    departmentId: number;
    name: string;
    manager: departmentManager;
    employees: departmentEmployee[];
}

let department1: depart = {
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

// 25
type travelStatus = "BOOKED" | "CANCELLED" | "COMPLETED";

interface travelBooking {
    bookingId: string;
    passengerName: string;
    source: string;
    destination: string;
    travelDate: string;
    status: travelStatus;
}

let travelBooking1: travelBooking = {
    bookingId: "TR101",
    passengerName: "Manoj",
    source: "Pune",
    destination: "Mumbai",
    travelDate: "2026-11-10",
    status: "BOOKED"
};

cl(travelBooking1);
// // 26


interface marks{
    subject:string,
    score:number

}
interface students {
studentId:number;
name:string;
marks:marks[];
percentage:number;
result:"PASS"| "FAIL"| "ATKT"

}
let studentResult1 :students = {
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
cl(studentResult1)

// // 27
interface location{
    city:string,
    locality:string
}

interface Property{
    propertyId:number;
    type:"Flat"| "House"| "Plot"
    price:number;
    area:number;
    location:location;
    status:"Available"| "Sold"|"Rented"
}
let property1:Property = {
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
cl(property1)

// // 28
interface socialPost{


     postId:number,
    author: string,
    content:string,
    likes: number,
    comments: string[];
    visibility: "PUBLIC"|  "PUBLIC"| "PRIVATE"| "FRIENDS";
};

let socialPost1 :socialPost= {
    postId: 100,
    author: "Ravi",
    content: "Learning TypeScript",
    likes: 25,
    comments: ["Great", "Keep learning"],
    visibility: "PUBLIC" // possible values: "PUBLIC", "PRIVATE", "FRIENDS"
};
cl(socialPost1)
 // 29
interface insurance{
    policyNumber: string,
    holderName: string,
    type: "LIFE"| "HEALTH"| "VEHICLE"
    premium: number,
    coverage:number
    nominee: string
}
let insurance1 :insurance = {
    policyNumber: "POL1001",
    holderName: "Mahesh",
    type: "HEALTH", // possible values: "LIFE", "HEALTH", "VEHICLE"
    premium: 12000,
    coverage: 500000,
    nominee: "Sunita"
};
cl(insurance1)
// // 30
interface enrollment{
     enrollmentId:number,
    student: {
        id: number,
        name: string
    },
    course: {
        id: number
        name: string,
        fees: number
    },
    status: "ENROLLED"|  "ENROLLED"| "COMPLETED"|"DROPPED"
};

let enrollment1 :enrollment= {
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
cl(enrollment1)
// // 31
interface vehicleService{
    serviceId: number,
    vehicleNumber: string,
    serviceType: "GENERAL"| "GENERAL"|"REPAIR"| "OIL_CHANGE"
    cost: 5000,
    partsUsed: [
        { name: string, price: number },
        { name: string, price:number }
    ]
}
let vehicleService1 :vehicleService = {
    serviceId: 301,
    vehicleNumber: "MH12AB1234",
    serviceType: "GENERAL", // possible values: "GENERAL", "REPAIR", "OIL_CHANGE"
    cost: 5000,
    partsUsed: [
        { name: "Oil Filter", price: 500 },
        { name: "Engine Oil", price: 1500 }
    ]
};
cl(vehicleService1)
// // 32
interface onlineExam{
    examId: number,
    studentName: string,
    durationMinutes: number,
    status: "NOT_STARTED"|"NOT_STARTED"|"IN_PROGRESS"| "SUBMITTED"
    questions: [
        {
            question:string,
            options:string[];
            marks: number
        }
    ]

}
let onlineExam1 :onlineExam= {
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
cl(onlineExam1)
// // 33 
interface project{
     projectId: number,
    projectName: string,
    status: "ACTIVE"|"PLANNED"| "ACTIVE"|"COMPLETED"
    teamMembers: [
        { name: string, role:string },
        { name: string, role: string }
    ],
    technologies:string[];

}
let project1 :project = {
    projectId: 1001,
    projectName: "HRMS",
    status: "ACTIVE", // possible values: "PLANNED", "ACTIVE", "COMPLETED"
    teamMembers: [
        { name: "Amit", role: "Developer" },
        { name: "Priya", role: "Tester" }
    ],
    technologies: ["Angular", "Node.js", "MongoDB"]
};
cl(project1)
// // 34
interface subscription{
    userId: number,
    plan: "PREMIUM"| "FREE"| "BASIC"| ;
    startDate:string,
    endDate: string,
    autoRenew: boolean
}
let subscription1 :subscription = {
    userId: 101,
    plan: "PREMIUM", // possible values: "FREE", "BASIC", "PREMIUM"
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    autoRenew: true
};
cl(subscription1)
// 35
interface warehouse{
    warehouseId: number,
    name: string,
    location: string,
    products: [
        { productId: number, name: string, quantity: number, reorderLevel: number },
        { productId: number, name: string, quantity: number, reorderLevel: number }
    ]
}
let warehouse1:warehouse = {
    warehouseId: 1,
    name: "Pune Warehouse",
    location: "Pune",
    products: [
        { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
        { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
    ]
};
cl(warehouse1)

// 36
interface ecomOrder{
     orderId: string,
    customer: {
        id: number,
        name: string,
        email:string
    },
    items: [
        { productId: number, name: string, price: number, quantity: number },
        { productId: number, name: string, price: number, quantity: number }
    ],
    shippingAddress: {
        street: string,
        city: string,
        state: string,
        pincode: number
    },
    orderStatus: "PLACED"|"CONFIRMED"|"SHIPPED"|"DELIVERED",
    paymentStatus: "PAID"|"PENDING"| "REFUNDED"
    couponCode: string


}

let ecomOrder1 :ecomOrder = {
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
cl(ecomOrder1)
// 37

interface instituteStudent{
    studentId: number,
    personalInfo: {
        fullName: string,
        email: string,
        phone: string,
        address: {
            city: string,
            state: string
        }
    },
    batch: {
        batchId: number,
        batchName: string,
        startDate:string
    },
    courses:string[];
    status: "ACTIVE"| "INACTIVE"| "PLACED"
}
let instituteStudent1 :instituteStudent = {
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
cl(instituteStudent1)
// 38


interface machineTest{
    testId: number,
    testName: string,
    student: {
        id: number,
        name: string
    },
    facultyName: string,
    status: "NOT_ATTENDED"| "ATTENDED"|"NOT_COMPLETED"| "COMPLETED_NOT_EXPLAINED"| "COMPLETED_AND_EXPLAINED"
    performance:  "VERY_POOR"|"POOR"| "GOOD"|"VERY_GOOD"| "EXCELLENT"
    score: number,
    totalMarks: number,
    feedback: string,
    technologies: string[];

}
let machineTest1 :machineTest= {
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
cl(machineTest1)

// 39
interface payroll{
employee: {
        id: number,
        name: string,
        department: string,
        joiningDate: string
    },
    salary: {
        basic: number,
        hra: number,
        allowances: number,
        deductions: number,
        bonus: number
    },
    month:string,
    status: string
}
let payroll1 :payroll = {
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
cl(payroll1)
// 40


interface loanApplication{
    applicationId: string,
    applicant: {
        name:string,
        age: number,
        monthlyIncome: number,
        employmentType: "SALARIED"| "SELF_EMPLOYED"
    },
    loan: {
        type: "HOME"| "PERSONAL"|"EDUCATION"
        requestedAmount: number,
        tenureYears: number,
        interestRate: number
    },
    documents: [
        { documentName: string, uploaded: boolean },
        { documentName: string, uploaded: boolean },
        { documentName: string, uploaded: boolean }
    ],
    status: "APPLIED"| "UNDER_REVIEW"| "APPROVED"| "REJECTED"
}
let loanApplication1 :loanApplication = {
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
// 41


interface apiResponse{
success: boolean,
    message: string,
    data: {
        users: [
            {
                id: number,
                name: string,
                role:  "ADMIN"| "USER"|"MANAGER"
                permissions: string[]
            },
            {
                id: number,
                name: string,
                role:string,
                permissions: string[]
            }
        ],
        pagination: {
            currentPage: number,
            pageSize: number,
            totalRecords: number,
            totalPages: number
        }
    },
    error: null
}
let apiResponse1 :apiResponse = {
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
cl(apiResponse1)
// 42



interface projectTask{
    projectId:number,
    projectName: string,
    tasks: [
        {
            taskId: number,
            title: string,
            assignedTo: { id: number, name: string },
            priority:  "LOW"| "MEDIUM"|"HIGH"| "CRITICAL"
            status:  "IN_PROGRESS"|"IN_REVIEW"|"DONE"
            dueDate:string
        },
        {
            taskId: number,
            title: string,
            assignedTo: { id: number, name:string },
            priority: string,
            status: string,
            dueDate: string,
            dependencies: number[]
        }
    ]

}
let projectTask1 :projectTask= {
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
cl(projectTask1)

// 43
interface hotelBooking{
    bookingId: string,
    guest: {
        name: string,
        email: string,
        phone: string
    },
    hotel: {
        name: string,
        location: string,
        roomNumber: number,
        amenities: string[]
    },
    stay: {
        checkIn: string,
        checkOut: string,
        guests: number
    },
    totalAmount: number,
    status: "RESERVED"| "CHECKED_IN"|"CHECKED_OUT"| "CANCELLED"
}
let hotelBooking1:hotelBooking = {
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
cl(hotelBooking1)
// 44
interface advancedCart{
    cartId: string,
    customerId: number,
    items: [
        {
            productId: number,
            name: string,
            unitPrice: number,
            quantity: number,
            options: {
                color: string,
                size:string
            }
        },
        {
            productId: number,
            name: string,
            unitPrice:number,
            quantity: number
        }
    ],
    discount: {
        type:"PERCENTAGE"| "FIXED"
        value: number,
        couponCode: string
    },
    shippingFee: number,
    currency: "INR"| "USD"
};


let advancedCart1 :advancedCart = {
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
cl(advancedCart1)

// 45
interface authSession{
    user: {
        id: number,
        username: string,
        email: string,
        role:  "ADMIN"|"SUPER_ADMIN"| "USER"
    },
    authentication: {
        provider: "LOCAL"| "GOOGLE"|"GITHUB"
        accessToken: string,
        expiresIn: number,
        twoFactorEnabled: boolean
    },
    devices: [
        {
            deviceId:string,
            deviceName: string,
            lastLogin:string,
            trusted: boolean
        }
    ],
    lastPasswordChange: string
};

let authSession1:authSession = {
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
cl(authSession1)
// 46

interface insuranceClaim{

 claimId: string,
    policyNumber: string,
    claimant: {
        name: string,
        relationship:"SELF"| "SPOUSE"| "CHILD"| "PARENT"
    },
    claimAmount: number,
    approvedAmount: number,
    incident: {
        date: string,
        description: string,
        location: string
    },
    documents: [
        { name:string, verified:boolean },
        { name:string, verified: boolean }
    ],
    status: "DOCUMENTS_REQUIRED"| "APPROVED"|"REJECTED"|"SETTLED"
};
let insuranceClaim1:insuranceClaim = {
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
cl(insuranceClaim1)
// 47

interface transaction{
    transactionId:string,
    type:"CREDIT"| "DEBIT"| "TRANSFER"
    amount: {
        value: number,
        currency: "INR"| "USD"| "EUR"| "GBP"
    },
    sender: {
        accountId:string,
        name: string
    },
    receiver: {
        accountId: string,
        name: string
    },
    timestamp: string,
    metadata: {
        source: string,
        referenceId: string
    }
}
let transaction1:transaction = {
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
cl(transaction1)
// 48
interface hrmsEmployee{
    employeeId: string,
    personalDetails: {
        firstName:string,
        lastName: string,
        dateOfBirth: string,
        contact: {
            email: string,
            phone: string
        },
        address: {
            current: string,
            permanent: string
        }
    },
    employmentDetails: {
        department: string,
        designation: string,
        joiningDate:string,
        status:  "PROBATION"| "ACTIVE"| "NOTICE_PERIOD"| "RESIGNED"
        previousExperience: 2
    },
    compensation: {
        annualCTC: number,
        monthlyGross: number,
        salaryComponents: [
            { name: string, amount:number },
            { name: string, amount: number },
            { name: string, amount:number }
        ]
    },
    documents: [
        {
            documentType: string,
            fileName: string,
            uploadedAt:string,
            verified: boolean
        },
        {
            documentType: string,
            fileName: string,
            uploadedAt:string,
            verified: boolean
        }
    ]
}
let hrmsEmployee1 :hrmsEmployee = {
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

// 49
interface batchReport{

batch: {
        batchId: number,
        batchName: string,
        faculty: string,
        students: [
            { studentId: number, name: string, email:string },
            { studentId: number, name: string, email: string }
        ]
    },
    test: {
        testId: number,
        title: string,
        date: string,
        totalMarks: number,
        technologies: string[]
    },
    results: [
        {
            studentId: number,
            attendance: "ATTENDED"| "ABSENT"
            score: 85,
            performance: "VERY_POOR"| "POOR"|"GOOD"| "VERY_GOOD"|"EXCELLENT"
            codeCompleted: boolean,
            explainedToFaculty: boolean,
            feedback:string
        },
        {
            studentId: number,
            attendance: string,
            codeCompleted: boolean,
            explainedToFaculty: boolean
        }
    ],
    summary: {
        totalStudents: number,
        attended: number,
        absent: number,
        averageScore: number
    }
};
let batchReport1 :batchReport = {
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
cl(batchReport1)
// 50
interface completeProduct{
id: string,
    name: string,
    description: string,
    category: {
        id: number,
        name:string,
        parentCategory:string
    },
    pricing: {
        basePrice: number,
        sellingPrice: number,
        taxPercentage: number,
        currency: "INR"| "USD"
        discount: {
            type: "PERCENTAGE"| "FIXED"
            value: number,
            validUntil: string
        }
    },
    inventory: {
        sku: string,
        stock: number,
        warehouseId: number,
        status: "IN_STOCK"| "LOW_STOCK"| "OUT_OF_STOCK"
    },
    specifications: [
        { name: string, value: string},
        { name: string, value: boolean },
        { name: string, value:number }
    ],
    variants: [
        {
            variantId:string,
            color: "Black"| "Blue"|"White"
            priceAdjustment: number,
            available: boolean
        },
        {
            variantId: string,
            color: boolean,
            priceAdjustment: number,
            available: boolean
        }
    ],
    shipping: {
        methods: string[];
        returnable: boolean,
        returnDays: number
    },
    reviews: [
        {
            userId: number,
            rating: number,
            comment: string,
            date: string
        },
        {
            userId: number,
            rating: number,
            date:string
        }
    ],
    lifecycle: "DRAFT"|"ACTIVE"|"DISCONTINUED"

}

let completeProduct1 :completeProduct= {
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


cl(completeProduct1)