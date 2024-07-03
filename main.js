const tableBody = document.getElementById('table-body');
const examsDetails = {
    "S1": {
        "CS": [
            { "code": "MAT101", "date": "May 26, 2024 9:30:00", "name": "Linear Algebra And Calculus", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST100", "date": "June 5, 2024 9:30:00", "name": "Engineering Mechanics", "id":3},
            {"code": "EST120", "date": "June 10, 2024 9:30:00", "name": "BME & BCE", "id":4},
            {"code": "HUN102", "date": "July 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},
        ],
        "EC":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],
        "ME":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],
        "EE":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],
    },
    "S2": {
        "CS": [
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "CYT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Chemistry", "id":2},
            {"code": "EST100", "date": "June 5, 2024 9:30:00", "name": "Engineering Mechanics", "id":3},
            {"code": "EST120", "date": "June 10, 2024 9:30:00", "name": "BME & BCE", "id":4},
            {"code": "HUN102", "date": "July 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},
        ],
        "EC":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],
        "ME":[
            { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
            {"code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id":2},
            {"code": "EST110", "date": "June 5, 2024 9:30:00", "name": "Engineering Graphics", "id":3},
            {"code": "EST130", "date": "June 10, 2024 9:30:00", "name": "ECE & EEE", "id":4},
            {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
            {"code": "EST102", "date": "June 18, 2024 9:30:00", "name": "Programming in C", "id":6},

        ],

    },
    "S3": {
        "CS": [
            { "code": "MAT203", "date": "May 25, 2024 9:30:00", "name": "Discrete Mathematical Structures", "id": 1 },
            {"code": "CST201", "date": "May 31, 2024 9:30:00", "name": "Data Structures", "id":2},
            {"code": "CST203", "date": "June 5, 2024 9:30:00", "name": "Engineering Mechanics", "id":3},
            {"code": "CST205", "date": "June 10, 2024 9:30:00", "name": "BME & BCE", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2024 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2024 9:30:00", "name": "Sustainable Engineering", "id":6},
        ],
        "EC": [
            { "code": "MAT201", "date": "May 25, 2024 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "ECT201", "date": "May 31, 2024 9:30:00", "name": "Solid State Devices", "id":2},
            {"code": "ECT203", "date": "June 5, 2024 9:30:00", "name": "Logic Circuit Design", "id":3},
            {"code": "ECT205", "date": "June 10, 2024 9:30:00", "name": "Network Theory", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2024 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2024 9:30:00", "name": "Sustainable Engineering", "id":6},
        ],
        "ME": [
            { "code": "MAT201", "date": "May 25, 2024 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "MET201", "date": "May 31, 2024 9:30:00", "name": "Mechanics Of Solids", "id":2},
            {"code": "MET203", "date": "June 5, 2024 9:30:00", "name": "Mechanics Of Fluids", "id":3},
            {"code": "MET205", "date": "June 10, 2024 9:30:00", "name": "Metallurgy & Material Science", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2024 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2024 9:30:00", "name": "Sustainable Engineering", "id":6},
        ],
        "CE": [
            { "code": "MAT201", "date": "May 25, 2024 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "CET201", "date": "May 31, 2024 9:30:00", "name": "Mechanics Of Solids", "id":2},
            {"code": "CET203", "date": "June 5, 2024 9:30:00", "name": "Fluid Mechanics & Hydraulics", "id":3},
            {"code": "CET205", "date": "June 10, 2024 9:30:00", "name": "Surveying & Geomatics", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2024 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2024 9:30:00", "name": "Sustainable Engineering", "id":6},
        ],
        "EE": [
            { "code": "MAT201", "date": "May 25, 2024 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "EET201", "date": "May 31, 2024 9:30:00", "name": "Circuits And Networks", "id":2},
            {"code": "EET203", "date": "June 5, 2024 9:30:00", "name": "Measurements & Instrumentation ", "id":3},
            {"code": "EET205", "date": "June 10, 2024 9:30:00", "name": "Analog Electronics", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2024 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2024 9:30:00", "name": "Sustainable Engineering", "id":6},
        ],

    },
    "S4": {
        "CS": [
            {"code": "MAT206", "date": "May 24, 2024 9:30:00", "name": "GRAPH THEORY", "id": 1 },
            {"code": "CST202", "date": "May 29, 2024 9:30:00", "name": "COMPUTER ORGANISATION AND ARCHITECTURE", "id":2},
            {"code": "CST204", "date": "June 4, 2024 9:30:00", "name": "DATABASE MANAGEMENT SYSTEMS", "id":3},
            {"code": "HUT200", "date": "June 12, 2024 9:30:00", "name": "PROFESSIONAL ETHICS", "id":4},
            {"code": "MCN202", "date": "June 15, 2024 9:30:00", "name": "CONSTITUTION OF INDIA", "id":5},
            {"code": "CST206", "date": "June 19, 2024 9:30:00", "name": "OPERATING SYSTEMS", "id":6},
        ],

        "EC": [
            {"code": "MAT204", "date": "May 24, 2024 9:30:00", "name": "PROBABILITY, RANDOM PROCESS AND NUMERICAL METHODS", "id": 1 },
            {"code": "ECT202", "date": "May 29, 2024 9:30:00", "name": "ANALOG CIRCUITS", "id":2},
            {"code": "ECT204", "date": "June 4, 2024 9:30:00", "name": "SIGNALS AND SYSTEMS", "id":3},
            {"code": "MET206", "date": "June 7, 2024 9:30:00", "name": "MANUFACTURING PROCESS", "id":4},
            {"code": "HUT200", "date": "June 12, 2024 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "June 15, 2024 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},

        ],

        "ME": [
            {"code": "MAT202", "date": "May 24, 2024 9:30:00", "name": "PROBABILITY, STATISTICS AND NUMERICAL METHODS", "id": 1 },
            {"code": "MET202", "date": "May 29, 2024 9:30:00", "name": "ENGINEERING THERMODYNAMICS", "id":2},
            {"code": "MET204", "date": "June 4, 2024 9:30:00", "name": "MANUFACTURING PROCESS", "id":3},
            {"code": "MET206", "date": "June 7, 2024 9:30:00", "name": "FLUID MACHINERY", "id":4},
            {"code": "HUT200", "date": "June 12, 2024 9:30:00", "name": "PROFESSIONAL ETHICS", "id":5},
            {"code": "MCN202", "date": "June 15, 2024 9:30:00", "name": "CONSTITUTION OF INDIA", "id":6},
        ],

    },
    "S5": {
        "CS": [
            { "code": "CST301", "date": "August 25, 2024 09:30:00", "name": "Formal Languages & Automata Theory", "id": 1 },
            {"code": "CST303", "date": "May 31, 2024 9:30:00", "name": "Computer Networks", "id":2},
            {"code": "CST305", "date": "June 5, 2024 9:30:00", "name": "System Software", "id":3},
            {"code": "CST307", "date": "June 10, 2024 9:30:00", "name": "Microprocessors & Microcontrollers ", "id":4},
            {"code": "CST309", "date": "July 13, 2024 9:30:00", "name": "Management Of Software Systems", "id":5},
            {"code": "MCN301", "date": "June 18, 2024 9:30:00", "name": "Disaster Management", "id":6},
        ],
        "EC": [
            { "code": "ECT301", "date": "May 25, 2024 9:30:00", "name": "Linear Integrated Circuits", "id": 1 },
            {"code": "ECT303", "date": "May 31, 2024 9:30:00", "name": "Solid State Devices", "id":2},
            {"code": "ECT305", "date": "June 5, 2024 9:30:00", "name": "Logic Circuit Design", "id":3},
            {"code": "ECT307", "date": "June 10, 2024 9:30:00", "name": "Network Theory", "id":4},
            {"code": "HUT300/HUT310", "date": "July 13, 2024 9:30:00", "name": "IEFT / Management For Engineers", "id":5},
            {"code": "MCN301", "date": "June 18, 2024 9:30:00", "name": "Disaster Management", "id":6},
        ],
        "ME": [
            { "code": "MET301", "date": "May 25, 2024 9:30:00", "name": "Mechanics Of Machinery", "id": 1 },
            {"code": "MET303", "date": "May 31, 2024 9:30:00", "name": "Thermal Engineering ", "id":2},
            {"code": "MET305", "date": "June 5, 2024 9:30:00", "name": "Industrial & Systems Engineering ", "id":3},
            {"code": "MET307", "date": "June 10, 2024 9:30:00", "name": "Machine Tools And Metrology", "id":4},
            {"code": "HUT300/HUT310", "date": "July 13, 2024 9:30:00", "name": "IEFT / Management For Engineers", "id":5},
            {"code": "MCN301", "date": "June 18, 2024 9:30:00", "name": "Disaster Management", "id":6},
        ],
        "CE": [
            { "code": "CET301", "date": "May 25, 2024 9:30:00", "name": "Structural Analysis – I", "id": 1 },
            {"code": "CET303", "date": "May 31, 2024 9:30:00", "name": "Design Of Concrete Structures", "id":2},
            {"code": "CET305", "date": "June 5, 2024 9:30:00", "name": "Geotechnical Engineering – II", "id":3},
            {"code": "CET307", "date": "June 10, 2024 9:30:00", "name": "Hydrology & Water Resources Engineering", "id":4},
            {"code": "CET309", "date": "July 13, 2024 9:30:00", "name": "Construction Technology & Management", "id":5},
            {"code": "MCN301", "date": "June 18, 2024 9:30:00", "name": "Disaster Management", "id":6},
        ],
        "EE": [
            { "code": "EET301", "date": "May 25, 2024 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "EET303", "date": "May 31, 2024 9:30:00", "name": "Circuits And Networks", "id":2},
            {"code": "EET305", "date": "June 5, 2024 9:30:00", "name": "Measurements & Instrumentation ", "id":3},
            {"code": "EET307", "date": "June 10, 2024 9:30:00", "name": "Analog Electronics", "id":4},
            {"code": "HUT300/HUT310", "date": "July 13, 2024 9:30:00", "name": "IEFT / Management For Engineers", "id":5},
            {"code": "MCN301", "date": "June 18, 2024 9:30:00", "name": "Disaster Management", "id":6},
        ],

    },
    "S6": {
        "CS": [
            { "code": "CST302", "date": "May 23, 2024 9:30:00", "name": "Compiler Design", "id": 1 },
            { "code": "CST304", "date": "May 28, 2024 9:30:00", "name": "Computer Graphics And Image Processing", "id": 2 },
            { "code": "CST306", "date": "June 1, 2024 9:30:00", "name": "Algorithm Analysis And Design", "id": 3 },
            { "code": "CST3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "CST308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],
        "IT": [
            { "code": "ITT302", "date": "May 23, 2024 9:30:00", "name": "Internetworking With TCP/IP", "id": 1 },
            { "code": "ITT304", "date": "May 28, 2024 9:30:00", "name": "Algorithm Analysis And Design", "id": 2 },
            { "code": "ITT306", "date": "June 1, 2024 9:30:00", "name": "Data Science", "id": 3 },
            { "code": "ITT3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "ITT308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "EC": [
            { "code": "ECT302", "date": "May 23, 2024 9:30:00", "name": "Electromagnetics", "id": 1 },
            { "code": "ECT304", "date": "May 28, 2024 9:30:00", "name": "VlSI Circuit Design", "id": 2 },
            { "code": "ECT306", "date": "June 1, 2024 9:30:00", "name": "Information Theory And Coding", "id": 3 },
            { "code": "ECT3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "June 11, 2024 9:30:00", "name": "Management For Engineers", "id": 5 },
            { "code": "ECT308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],
        "ME": [
            { "code": "MET302", "date": "May 23, 2024 9:30:00", "name": "Heat & Mass Transfer", "id": 1 },
            { "code": "MET304", "date": "May 28, 2024 9:30:00", "name": "Dynamics Of Machinery & Machine Design", "id": 2 },
            { "code": "MET306", "date": "June 1, 2024 9:30:00", "name": "Advanced Manufacturing Engineering", "id": 3 },
            { "code": "MET3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "MET310", "date": "June 11, 2024 9:30:00", "name": "Management For Engineers", "id": 5 },
            { "code": "MET308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 7 }
        ],
    
        "EE": [
            { "code": "EET302", "date": "May 23, 2024 9:30:00", "name": "Linear Control Systems", "id": 1 },
            { "code": "EET304", "date": "May 28, 2024 9:30:00", "name": "Power Systems II", "id": 2 },
            { "code": "EET306", "date": "June 1, 2024 9:30:00", "name": "Power Electronics", "id": 3 },
            { "code": "EET3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "HUT310", "date": "June 11, 2024 9:30:00", "name": "Management For Engineers", "id": 5 },
            { "code": "EET308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],

        "CE": [
            { "code": "CET302", "date": "May 23, 2024 9:30:00", "name": "Structural Analysis – II", "id": 1 },
            { "code": "CET304", "date": "May 28, 2024 9:30:00", "name": "Environmental Engineering", "id": 2 },
            { "code": "CET306", "date": "June 1, 2024 9:30:00", "name": "Design Of Hydraulic Structures", "id": 3 },
            { "code": "CET3x2", "date": "June 6, 2024 9:30:00", "name": "Elective - I", "id": 4 },
            { "code": "HUT300", "date": "June 11, 2024 9:30:00", "name": "Industrial Economics And Foreign Trade", "id": 5 },
            { "code": "CET308", "date": "June 14, 2024 9:30:00", "name": "Comprehensive Course Work", "id": 6 }
        ],
        
    },
    "S7": {
        "CS": [
            { "code": "CST401", "date": "May 22, 2024 9:30:00", "name": "Artificial Intelligence", "id": 1 },
            {"code": "CST4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "CST4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
        "EC":[
            { "code": "ECT401", "date": "May 22, 2024 9:30:00", "name": "Wireless Communication", "id": 1 },
            {"code": "ECT4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "ECT4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
        "EE":[
            { "code": "EET401", "date": "May 22, 2024 9:30:00", "name": "Advanced Control Systems", "id": 1 },
            {"code": "EET4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "EET4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
        "IT":[
            { "code": "ITT401", "date": "May 22, 2024 9:30:00", "name": "Data Analytics ", "id": 1 },
            {"code": "ITT4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "ITT4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
        "ME":[
            { "code": "MET401", "date": "May 22, 2024 9:30:00", "name": "Design Of Machine Elements", "id": 1 },
            {"code": "MET4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "MET4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
        "CE":[
            { "code": "CET401", "date": "May 22, 2024 9:30:00", "name": "Design Of Steel Structures ", "id": 1 },
            {"code": "CET4XX", "date": "May 27, 2024 9:30:00", "name": "Elective - II", "id":2},
            {"code": "CET4XX", "date": "May 30, 2024 9:30:00", "name": "Elective - Open", "id":3},
            {"code": "MCN401", "date": "June 3, 2024 9:30:00", "name": "Industrial Safety Engineering", "id":4},
        ],
    }

    "S8": {
        "CS": [
            { "code": "CST402", "date": "May 22, 2024 9:30:00", "name": "Distributed Computing", "id": 1 },
            {"code": "CST4XX", "date": "May 27, 2024 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "CST4XX", "date": "May 30, 2024 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "CST4XX", "date": "June 3, 2024 9:30:00", "name": "Program Elective 5", "id":4},
        ],
        "EC":[
            { "code": "ECT402", "date": "May 22, 2024 9:30:00", "name": "Wireless Communications", "id": 1 },
            {"code": "ECT4XX", "date": "May 27, 2024 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "ECT4XX", "date": "May 30, 2024 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "ECT4XX", "date": "June 3, 2024 9:30:00", "name": "Program Elective 5", "id":4},
        ],
        "EE":[
            { "code": "EET402", "date": "May 22, 2024 9:30:00", "name": "Electrical System Design and Estimation", "id": 1 },
            {"code": "EET4XX", "date": "May 27, 2024 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "EET4XX", "date": "May 30, 2024 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "EET4XX", "date": "June 3, 2024 9:30:00", "name": "Program Elective 5", "id":4},
        ],
        "IT":[
            { "code": "ITT402", "date": "May 22, 2024 9:30:00", "name": "Cryptography and Network Security", "id": 1 },
            {"code": "ITT4XX", "date": "May 27, 2024 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "ITT4XX", "date": "May 30, 2024 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "ITT4XX", "date": "June 3, 2024 9:30:00", "name": "Program Elective 5", "id":4},
        ],
        "ME":[
            { "code": "MET402", "date": "May 22, 2024 9:30:00", "name": "Mechatronics", "id": 1 },
            {"code": "MET4XX", "date": "May 27, 2024 9:30:00", "name": "Program Elective 3", "id":2},
            {"code": "MET4XX", "date": "May 30, 2024 9:30:00", "name": "Program Elective 4", "id":3},
            {"code": "MET4XX", "date": "June 3, 2024 9:30:00", "name": "Program Elective 5", "id":4},
        ],
    }

}

var defaultBranch;
var defaultSem;
if (localStorage.getItem('branch')) {
    defaultBranch = localStorage.getItem('branch');
    document.getElementById("branch").value = defaultBranch;
}else{
    defaultBranch = "CS";
}

if (localStorage.getItem('sem')) {
    defaultSem = localStorage.getItem('sem');
    document.getElementById("sem").value = defaultSem;
}else{
    defaultSem = "S6";
}
    

function countdown(cdate, dest) {
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = cdate - now;
        if (distance < 0) {
            clearInterval(x);
            dest.innerHTML = "EXAM OVER";
            return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 5) {
            dest.style.color = "red";
        } else {
            dest.style.color = "black";
        }

        dest.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
}

document.getElementById('branch').addEventListener('change', function (e) {
    defaultBranch = e.target.value;
    updateTable(defaultSem, defaultBranch);
    localStorage.setItem('branch', defaultBranch);
})

document.getElementById('sem').addEventListener('change', function (e) {
    defaultSem = e.target.value;
    updateTable(defaultSem, defaultBranch);
    localStorage.setItem('sem', defaultSem);
})


function updateTable(sem, branch) {
    tableBody.innerHTML = "";
    if(examsDetails[sem] === undefined || examsDetails[sem][branch] === undefined){
        document.getElementById('meme').innerHTML = `<img src="3.png" alt="No Data Found" style="width: 30vh; height: 30vh; object-fit: contain;">`;
    }else{
        document.getElementById('meme').innerHTML = "";
    
    }
    examsDetails[sem][branch].forEach(exam => {
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${exam.id}</td>
        <td>${exam.name}</td>
        <td>${exam.code}</td>
        <td>${exam.date}</td>
        <td id="countdown${exam.id}"> </td>
        `;
        tableBody.appendChild(row);
        countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
    });
}

updateTable(defaultSem, defaultBranch);
