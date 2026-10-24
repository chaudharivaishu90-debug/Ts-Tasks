// 1
var cl=console.log;
 
interface students{
    id: number,
    name: string,
    age: number,
    course: string,
    isActive: boolean


}
 let student2:students = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};

cl(student2)

 

// 2
type department ="IT"|"HR"|"Finance"|"Marketing"
interface employees{
empId: number,
    name: string,
    salary:number,
    department: department, // possible values: "IT", "HR", "Finance", "Marketing"
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

interface department {
    departmentId: number;
    name: string;
    manager: departmentManager;
    employees: departmentEmployee[];
}

let department1: department = {
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
// let studentResult1 = {
//     studentId: 101,
//     name: "Pooja",
//     marks: [
//         { subject: "JavaScript", score: 85 },
//         { subject: "TypeScript", score: 90 },
//         { subject: "Angular", score: 78 }
//     ],
//     percentage: 84.33,
//     result: "PASS" // possible values: "PASS", "FAIL", "ATKT"
// };

// // 27
// let property1 = {
//     propertyId: 201,
//     type: "Flat", // possible values: "Flat", "House", "Plot"
//     price: 4500000,
//     area: 1000,
//     location: {
//         city: "Pune",
//         locality: "Wakad"
//     },
//     status: "Available" // possible values: "Available", "Sold", "Rented"
// };

// // 28
// let socialPost1 = {
//     postId: 100,
//     author: "Ravi",
//     content: "Learning TypeScript",
//     likes: 25,
//     comments: ["Great", "Keep learning"],
//     visibility: "PUBLIC" // possible values: "PUBLIC", "PRIVATE", "FRIENDS"
// };

// // 29
// let insurance1 = {
//     policyNumber: "POL1001",
//     holderName: "Mahesh",
//     type: "HEALTH", // possible values: "LIFE", "HEALTH", "VEHICLE"
//     premium: 12000,
//     coverage: 500000,
//     nominee: "Sunita"
// };

// // 30
// let enrollment1 = {
//     enrollmentId: 5001,
//     student: {
//         id: 101,
//         name: "Rahul"
//     },
//     course: {
//         id: 201,
//         name: "Angular",
//         fees: 15000
//     },
//     status: "ENROLLED", // possible values: "ENROLLED", "COMPLETED", "DROPPED"
// };

// // 31
// let vehicleService1 = {
//     serviceId: 301,
//     vehicleNumber: "MH12AB1234",
//     serviceType: "GENERAL", // possible values: "GENERAL", "REPAIR", "OIL_CHANGE"
//     cost: 5000,
//     partsUsed: [
//         { name: "Oil Filter", price: 500 },
//         { name: "Engine Oil", price: 1500 }
//     ]
// };

// // 32
// let onlineExam1 = {
//     examId: 901,
//     studentName: "Kavita",
//     durationMinutes: 60,
//     status: "NOT_STARTED", // possible values: "NOT_STARTED", "IN_PROGRESS", "SUBMITTED"
//     questions: [
//         {
//             question: "What is TypeScript?",
//             options: ["Language", "Database", "Browser"],
//             marks: 2
//         }
//     ]
// };

// // 33
// let project1 = {
//     projectId: 1001,
//     projectName: "HRMS",
//     status: "ACTIVE", // possible values: "PLANNED", "ACTIVE", "COMPLETED"
//     teamMembers: [
//         { name: "Amit", role: "Developer" },
//         { name: "Priya", role: "Tester" }
//     ],
//     technologies: ["Angular", "Node.js", "MongoDB"]
// };

// // 34
// let subscription1 = {
//     userId: 101,
//     plan: "PREMIUM", // possible values: "FREE", "BASIC", "PREMIUM"
//     startDate: "2026-10-01",
//     endDate: "2027-10-01",
//     autoRenew: true
// };

// // 35
// let warehouse1 = {
//     warehouseId: 1,
//     name: "Pune Warehouse",
//     location: "Pune",
//     products: [
//         { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
//         { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
//     ]
// };

// // 36
// let ecomOrder1 = {
//     orderId: "ORD1001",
//     customer: {
//         id: 101,
//         name: "Rahul",
//         email: "rahul@example.com"
//     },
//     items: [
//         { productId: 1, name: "Laptop", price: 60000, quantity: 1 },
//         { productId: 2, name: "Mouse", price: 1000, quantity: 2 }
//     ],
//     shippingAddress: {
//         street: "MG Road",
//         city: "Pune",
//         state: "Maharashtra",
//         pincode: 411001
//     },
//     orderStatus: "CONFIRMED", // possible values: "PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "RETURNED"
//     paymentStatus: "PAID", // possible values: "PENDING", "PAID", "REFUNDED"
//     couponCode: "SAVE10"
// };

// // 37
// let instituteStudent1 = {
//     studentId: 101,
//     personalInfo: {
//         fullName: "Aakash Patil",
//         email: "aakash@example.com",
//         phone: "9876543210",
//         address: {
//             city: "Udgir",
//             state: "Maharashtra"
//         }
//     },
//     batch: {
//         batchId: 10,
//         batchName: "Angular Evening Batch",
//         startDate: "2026-11-15"
//     },
//     courses: ["JavaScript", "TypeScript", "Angular"],
//     status: "ACTIVE" // possible values: "ACTIVE", "INACTIVE", "PLACED"
// };

// // 38
// let machineTest1 = {
//     testId: 501,
//     testName: "TypeScript Objects",
//     student: {
//         id: 101,
//         name: "Rahul"
//     },
//     facultyName: "Amit",
//     status: "COMPLETED_AND_EXPLAINED", // possible values: "NOT_ATTENDED", "ATTENDED", "NOT_COMPLETED", "COMPLETED_NOT_EXPLAINED", "COMPLETED_AND_EXPLAINED"
//     performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
//     score: 85,
//     totalMarks: 100,
//     feedback: "Good understanding of interfaces",
//     technologies: ["TypeScript", "JavaScript"]
// };

// // 39
// let payroll1 = {
//     employee: {
//         id: 201,
//         name: "Priya",
//         department: "Development",
//         joiningDate: "2024-06-01"
//     },
//     salary: {
//         basic: 40000,
//         hra: 10000,
//         allowances: 5000,
//         deductions: 3000,
//         bonus: 2000
//     },
//     month: "October 2026",
//     status: "GENERATED" // possible values: "GENERATED", "PAID", "ON_HOLD"
// };

// // 40
// let loanApplication1 = {
//     applicationId: "LN1001",
//     applicant: {
//         name: "Mahesh",
//         age: 35,
//         monthlyIncome: 80000,
//         employmentType: "SALARIED" // possible values: "SALARIED", "SELF_EMPLOYED"
//     },
//     loan: {
//         type: "HOME", // possible values: "HOME", "PERSONAL", "EDUCATION"
//         requestedAmount: 2500000,
//         tenureYears: 20,
//         interestRate: 8.5
//     },
//     documents: [
//         { documentName: "PAN Card", uploaded: true },
//         { documentName: "Salary Slip", uploaded: true },
//         { documentName: "Bank Statement", uploaded: false }
//     ],
//     status: "UNDER_REVIEW" // possible values: "APPLIED", "UNDER_REVIEW", "APPROVED", "REJECTED"
// };

// // 41
// let apiResponse1 = {
//     success: true,
//     message: "Users fetched successfully",
//     data: {
//         users: [
//             {
//                 id: 1,
//                 name: "Ravi",
//                 role: "ADMIN", // possible values: "ADMIN", "USER", "MANAGER"
//                 permissions: ["READ", "WRITE", "DELETE"]
//             },
//             {
//                 id: 2,
//                 name: "Amit",
//                 role: "USER",
//                 permissions: ["READ"]
//             }
//         ],
//         pagination: {
//             currentPage: 1,
//             pageSize: 10,
//             totalRecords: 2,
//             totalPages: 1
//         }
//     },
//     error: null
// };

// // 42
// let projectTask1 = {
//     projectId: 101,
//     projectName: "HRMS",
//     tasks: [
//         {
//             taskId: 1,
//             title: "Create Login API",
//             assignedTo: { id: 10, name: "Amit" },
//             priority: "HIGH", // possible values: "LOW", "MEDIUM", "HIGH", "CRITICAL"
//             status: "IN_PROGRESS", // possible values: "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"
//             dueDate: "2026-11-01"
//         },
//         {
//             taskId: 2,
//             title: "Create Login UI",
//             assignedTo: { id: 11, name: "Priya" },
//             priority: "MEDIUM",
//             status: "TODO",
//             dueDate: "2026-11-05",
//             dependencies: [1]
//         }
//     ]
// };

// // 43
// let hotelBooking1 = {
//     bookingId: "HB1001",
//     guest: {
//         name: "Neha",
//         email: "neha@example.com",
//         phone: "9876543210"
//     },
//     hotel: {
//         name: "City Hotel",
//         location: "Mumbai",
//         roomNumber: 205,
//         amenities: ["WiFi", "AC", "Breakfast"]
//     },
//     stay: {
//         checkIn: "2026-11-01",
//         checkOut: "2026-11-04",
//         guests: 2
//     },
//     totalAmount: 15000,
//     status: "RESERVED" // possible values: "RESERVED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"
// };

// // 44
// let advancedCart1 = {
//     cartId: "CART101",
//     customerId: 201,
//     items: [
//         {
//             productId: 1,
//             name: "T-Shirt",
//             unitPrice: 799,
//             quantity: 2,
//             options: {
//                 color: "Black",
//                 size: "L"
//             }
//         },
//         {
//             productId: 2,
//             name: "Cap",
//             unitPrice: 399,
//             quantity: 1
//         }
//     ],
//     discount: {
//         type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
//         value: 10,
//         couponCode: "SAVE10"
//     },
//     shippingFee: 50,
//     currency: "INR" // possible values: "INR", "USD"
// };

// // 45
// let authSession1 = {
//     user: {
//         id: 1,
//         username: "admin01",
//         email: "admin@example.com",
//         role: "SUPER_ADMIN" // possible values: "ADMIN", "SUPER_ADMIN", "USER"
//     },
//     authentication: {
//         provider: "LOCAL", // possible values: "LOCAL", "GOOGLE", "GITHUB"
//         accessToken: "sample-access-token",
//         expiresIn: 3600,
//         twoFactorEnabled: true
//     },
//     devices: [
//         {
//             deviceId: "DEV001",
//             deviceName: "Windows Laptop",
//             lastLogin: "2026-10-22",
//             trusted: true
//         }
//     ],
//     lastPasswordChange: "2026-09-01"
// };

// // 46
// let insuranceClaim1 = {
//     claimId: "CL1001",
//     policyNumber: "POL1001",
//     claimant: {
//         name: "Rohit",
//         relationship: "SELF" // possible values: "SELF", "SPOUSE", "CHILD", "PARENT"
//     },
//     claimAmount: 100000,
//     approvedAmount: 80000,
//     incident: {
//         date: "2026-10-01",
//         description: "Hospital admission",
//         location: "Pune"
//     },
//     documents: [
//         { name: "Medical Bills", verified: true },
//         { name: "Discharge Summary", verified: false }
//     ],
//     status: "DOCUMENTS_REQUIRED" // possible values: "SUBMITTED", "DOCUMENTS_REQUIRED", "APPROVED", "REJECTED", "SETTLED"
// };

// // 47
// let transaction1 = {
//     transactionId: "TX5001",
//     type: "TRANSFER", // possible values: "CREDIT", "DEBIT", "TRANSFER"
//     amount: {
//         value: 10000,
//         currency: "INR" // possible values: "INR", "USD", "EUR", "GBP"
//     },
//     sender: {
//         accountId: "ACC101",
//         name: "Amit"
//     },
//     receiver: {
//         accountId: "ACC202",
//         name: "Rahul"
//     },
//     timestamp: "2026-10-23T10:30:00",
//     metadata: {
//         source: "Internet Banking",
//         referenceId: "REF1001"
//     }
// };

// // 48
// let hrmsEmployee1 = {
//     employeeId: "EMP1001",
//     personalDetails: {
//         firstName: "Amit",
//         lastName: "Sharma",
//         dateOfBirth: "1995-05-15",
//         contact: {
//             email: "amit@example.com",
//             phone: "9876543210"
//         },
//         address: {
//             current: "Pune, Maharashtra",
//             permanent: "Udgir, Maharashtra"
//         }
//     },
//     employmentDetails: {
//         department: "IT",
//         designation: "Software Developer",
//         joiningDate: "2025-01-10",
//         status: "ACTIVE", // possible values: "PROBATION", "ACTIVE", "NOTICE_PERIOD", "RESIGNED"
//         previousExperience: 2
//     },
//     compensation: {
//         annualCTC: 600000,
//         monthlyGross: 50000,
//         salaryComponents: [
//             { name: "Basic", amount: 25000 },
//             { name: "HRA", amount: 15000 },
//             { name: "Allowance", amount: 10000 }
//         ]
//     },
//     documents: [
//         {
//             documentType: "PAN",
//             fileName: "pan.pdf",
//             uploadedAt: "2025-01-10",
//             verified: true
//         },
//         {
//             documentType: "Degree Certificate",
//             fileName: "degree.pdf",
//             uploadedAt: "2025-01-10",
//             verified: false
//         }
//     ]
// };

// // 49
// let batchReport1 = {
//     batch: {
//         batchId: 10,
//         batchName: "Angular Evening",
//         faculty: "Amit",
//         students: [
//             { studentId: 1, name: "Rahul", email: "rahul@example.com" },
//             { studentId: 2, name: "Priya", email: "priya@example.com" }
//         ]
//     },
//     test: {
//         testId: 501,
//         title: "TypeScript Interfaces",
//         date: "2026-10-20",
//         totalMarks: 100,
//         technologies: ["TypeScript", "JavaScript"]
//     },
//     results: [
//         {
//             studentId: 1,
//             attendance: "ATTENDED", // possible values: "ATTENDED", "ABSENT"
//             score: 85,
//             performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
//             codeCompleted: true,
//             explainedToFaculty: true,
//             feedback: "Good problem-solving"
//         },
//         {
//             studentId: 2,
//             attendance: "ABSENT",
//             codeCompleted: false,
//             explainedToFaculty: false
//         }
//     ],
//     summary: {
//         totalStudents: 2,
//         attended: 1,
//         absent: 1,
//         averageScore: 85
//     }
// };

// // 50
// let completeProduct1 = {
//     id: "PRD1001",
//     name: "Smart Watch",
//     description: "Fitness tracking smart watch",
//     category: {
//         id: 10,
//         name: "Electronics",
//         parentCategory: "Wearables"
//     },
//     pricing: {
//         basePrice: 5000,
//         sellingPrice: 3999,
//         taxPercentage: 18,
//         currency: "INR", // possible values: "INR", "USD"
//         discount: {
//             type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
//             value: 20,
//             validUntil: "2026-12-31"
//         }
//     },
//     inventory: {
//         sku: "WATCH-BLK-001",
//         stock: 25,
//         warehouseId: 101,
//         status: "IN_STOCK" // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
//     },
//     specifications: [
//         { name: "BatteryLife", value: "7 days" },
//         { name: "WaterResistant", value: true },
//         { name: "DisplaySize", value: 1.8 }
//     ],
//     variants: [
//         {
//             variantId: "VAR001",
//             color: "Black", // possible values: "Black", "Blue", "White"
//             priceAdjustment: 0,
//             available: true
//         },
//         {
//             variantId: "VAR002",
//             color: "Blue",
//             priceAdjustment: 200,
//             available: true
//         }
//     ],
//     shipping: {
//         methods: ["STANDARD", "EXPRESS"], // possible values: "STANDARD", "EXPRESS", "SAME_DAY"
//         returnable: true,
//         returnDays: 7
//     },
//     reviews: [
//         {
//             userId: 201,
//             rating: 5,
//             comment: "Excellent product",
//             date: "2026-10-20"
//         },
//         {
//             userId: 202,
//             rating: 4,
//             date: "2026-10-21"
//         }
//     ],
//     lifecycle: "ACTIVE" // possible values: "DRAFT", "ACTIVE", "DISCONTINUED"
// };


