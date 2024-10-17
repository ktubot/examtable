const tableBody = document.getElementById('table-body');
const examsDetails = {
    "S1": {
        "CS": {
            "2019": [
                { "code": "MAT101", "date": "October 26, 2019 9:30:00", "name": "Linear Algebra And Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST100", "date": "June 5, 2019 9:30:00", "name": "Engineering Mechanics", "id":3},
                {"code": "EST120", "date": "June 10, 2019 9:30:00", "name": "BME & BCE", "id":4},
                {"code": "HUN102", "date": "July 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GAMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GAPHT121/GXCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GMEST103", "date": "January 6, 2025 1:30:00", "name": "Eng Graphics & CAD", "id": 3 },
{ "code": "GXEST104", "date": "January 8, 2025 1:30:00", "name": "Intro to EEE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        "EC": {
            "2019": [
                { "code": "MAT102", "date": "May 25, 2019 9:30:00", "name": "Vector Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST110", "date": "June 5, 2019 9:30:00", "name": "Engineering Graphics", "id":3},
                {"code": "EST130", "date": "June 10, 2019 9:30:00", "name": "ECE & EEE", "id":4},
                {"code": "HUN102", "date": "June 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GYMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GBPHT121/GXCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GMEST103", "date": "January 6, 2025 1:30:00", "name": "Eng Graphics & CAD", "id": 3 },
{ "code": "GXEST104", "date": "January 9, 2025 1:30:00", "name": "Intro to EEE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        "ME": {
            "2019": [
                { "code": "MAT102", "date": "May 25, 2019 9:30:00", "name": "Vector Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST110", "date": "June 5, 2019 9:30:00", "name": "Engineering Graphics", "id":3},
                {"code": "EST130", "date": "June 10, 2019 9:30:00", "name": "ECE & EEE", "id":4},
                {"code": "HUN102", "date": "June 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GYMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GZPH1121/GCCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GCEST103", "date": "January 6, 2025 1:30:00", "name": "Mechanics", "id": 3 },
{ "code": "GCEST104", "date": "January 8, 2025 1:30:00", "name": "IME&ICE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        "EE": {
            "2019": [
                { "code": "MAT102", "date": "May 25, 2019 9:30:00", "name": "Vector Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST110", "date": "June 5, 2019 9:30:00", "name": "Engineering Graphics", "id":3},
                {"code": "EST130", "date": "June 10, 2019 9:30:00", "name": "ECE & EEE", "id":4},
                {"code": "HUN102", "date": "June 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GYMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GBPHT121/GXCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GMEST103", "date": "January 6, 2025 1:30:00", "name": "Eng Graphics & CAD", "id": 3 },
{ "code": "GXEST104", "date": "January 9, 2025 1:30:00", "name": "Intro to EEE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        "CE": {
            "2019": [
                { "code": "MAT102", "date": "May 25, 2019 9:30:00", "name": "Vector Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST110", "date": "June 5, 2019 9:30:00", "name": "Engineering Graphics", "id":3},
                {"code": "EST130", "date": "June 10, 2019 9:30:00", "name": "ECE & EEE", "id":4},
                {"code": "HUN102", "date": "June 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GYMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GZPH1121/GCCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GCEST103", "date": "January 6, 2025 1:30:00", "name": "Mechanics", "id": 3 },
{ "code": "GCEST104", "date": "January 8, 2025 1:30:00", "name": "IME&ICE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        "IT": {
            "2019": [
                { "code": "MAT101", "date": "October 26, 2019 9:30:00", "name": "Linear Algebra And Calculus", "id": 1 },
                {"code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id":2},
                {"code": "EST100", "date": "June 5, 2019 9:30:00", "name": "Engineering Mechanics", "id":3},
                {"code": "EST120", "date": "June 10, 2019 9:30:00", "name": "BME & BCE", "id":4},
                {"code": "HUN102", "date": "July 13, 2019 9:30:00", "name": "Professional Communication", "id":5},
                {"code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id":6},
            ],
            "2024": [
{ "code": "GAMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
{ "code": "GAPHT121/GXCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
{ "code": "GMEST103", "date": "January 6, 2025 1:30:00", "name": "Eng Graphics & CAD", "id": 3 },
{ "code": "GXEST104", "date": "January 8, 2025 1:30:00", "name": "Intro to EEE", "id": 4 },
{ "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
"S3": {
    "CS": {
        "2019": [
            { "code": "MAT203", "date": "May 25, 2019 9:30:00", "name": "Discrete Mathematical Structures", "id": 1 },
            {"code": "CST201", "date": "May 31, 2019 9:30:00", "name": "Data Structures", "id":2},
            {"code": "CST203", "date": "June 5, 2019 9:30:00", "name": "Engineering Mechanics", "id":3},
            {"code": "CST205", "date": "June 10, 2019 9:30:00", "name": "BME & BCE", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2019 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2019 9:30:00", "name": "Sustainable Engineering", "id":6}
        ]
    },
    "EC": {
        "2019": [
            { "code": "MAT201", "date": "May 25, 2019 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "ECT201", "date": "May 31, 2019 9:30:00", "name": "Solid State Devices", "id":2},
            {"code": "ECT203", "date": "June 5, 2019 9:30:00", "name": "Logic Circuit Design", "id":3},
            {"code": "ECT205", "date": "June 10, 2019 9:30:00", "name": "Network Theory", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2019 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2019 9:30:00", "name": "Sustainable Engineering", "id":6}
        ]
    },
    "ME": {
        "2019": [
            { "code": "MAT201", "date": "May 25, 2019 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "MET201", "date": "May 31, 2019 9:30:00", "name": "Mechanics Of Solids", "id":2},
            {"code": "MET203", "date": "June 5, 2019 9:30:00", "name": "Mechanics Of Fluids", "id":3},
            {"code": "MET205", "date": "June 10, 2019 9:30:00", "name": "Metallurgy & Material Science", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2019 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2019 9:30:00", "name": "Sustainable Engineering", "id":6}
        ]
    },
    "CE": {
        "2019": [
            { "code": "MAT201", "date": "May 25, 2019 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "CET201", "date": "May 31, 2019 9:30:00", "name": "Mechanics Of Solids", "id":2},
            {"code": "CET203", "date": "June 5, 2019 9:30:00", "name": "Fluid Mechanics & Hydraulics", "id":3},
            {"code": "CET205", "date": "June 10, 2019 9:30:00", "name": "Surveying & Geomatics", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2019 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2019 9:30:00", "name": "Sustainable Engineering", "id":6}
        ]
    },
    "EE": {
        "2019": [
            { "code": "MAT201", "date": "May 25, 2019 9:30:00", "name": "Partial Differential Equation & Complex Analysis", "id": 1 },
            {"code": "EET201", "date": "May 31, 2019 9:30:00", "name": "Circuits And Networks", "id":2},
            {"code": "EET203", "date": "June 5, 2019 9:30:00", "name": "Measurements & Instrumentation", "id":3},
            {"code": "EET205", "date": "June 10, 2019 9:30:00", "name": "Analog Electronics", "id":4},
            {"code": "HUT200/EST200", "date": "July 13, 2019 9:30:00", "name": "Design And Engineering / Professional Communication", "id":5},
            {"code": "MCN201", "date": "June 18, 2019 9:30:00", "name": "Sustainable Engineering", "id":6}
        ]

    }
};


// Handle defaults
var defaultBranch;
var defaultSem;
var defaultYear;

if (localStorage.getItem('branch')) {
    defaultBranch = localStorage.getItem('branch');
    document.getElementById("branch").value = defaultBranch;
} else {
    defaultBranch = "CS";
}

if (localStorage.getItem('sem')) {
    defaultSem = localStorage.getItem('sem');
    document.getElementById("sem").value = defaultSem;
} else {
    defaultSem = "S1";
}

if (localStorage.getItem('year')) {
    defaultYear = localStorage.getItem('year');
    document.getElementById("year").value = defaultYear;
} else {
    defaultYear = "2024";
}
window.addEventListener('load', function() {
    localStorage.clear();
});

document.addEventListener("DOMContentLoaded", function () {
    const semDropdown = document.getElementById('sem');
    const branchDropdown = document.getElementById('branch');
    const schemeDropdown = document.getElementById('scheme');

    // Ensure event listeners are correctly bound
    semDropdown.addEventListener('change', function (e) {
        defaultSem = e.target.value;
        updateTable(defaultSem, defaultBranch, defaultYear);
    });

    branchDropdown.addEventListener('change', function (e) {
        defaultBranch = e.target.value;
        updateTable(defaultSem, defaultBranch, defaultYear);
    });

    schemeDropdown.addEventListener('change', function (e) {
        defaultYear = e.target.value;
        updateTable(defaultSem, defaultBranch, defaultYear);
    });

    // Initialize table on page load
    updateTable(defaultSem, defaultBranch, defaultYear);
});

// Add event listener for the scheme dropdown
document.getElementById('scheme').addEventListener('change', function (e) {
    defaultYear = e.target.value; // Update defaultYear based on scheme
    updateTable(defaultSem, defaultBranch, defaultYear); // Update the table with the new scheme/year
    localStorage.setItem('year', defaultYear); // Store the selected scheme (year) in localStorage
});

// Existing listeners for branch and sem
document.getElementById('branch').addEventListener('change', function (e) {
    defaultBranch = e.target.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('branch', defaultBranch);
});

document.getElementById('sem').addEventListener('change', function (e) {
    defaultSem = e.target.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('sem', defaultSem);
});

document.getElementById('year').addEventListener('change', function (e) {
    defaultYear = e.target.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('year', defaultYear);
});


// Function to update the table
function updateTable(sem, branch, year) {
    tableBody.innerHTML = "";
    
    if (
        examsDetails[sem] === undefined ||
        examsDetails[sem][branch] === undefined ||
        examsDetails[sem][branch][year] === undefined
    ) {
        document.getElementById('meme').innerHTML = `<img src="3.png" alt="No Data Found" style="width: 30vh; height: 30vh; object-fit: contain;">`;
        return;
    } else {
        document.getElementById('meme').innerHTML = "";
    }

    examsDetails[sem][branch][year].forEach(exam => {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${exam.id}</td>
            <td>${exam.name}</td>
            <td>${exam.code}</td>
            <td>${exam.date}</td>
            <td id="countdown${exam.id}"></td>
        `;
        tableBody.appendChild(row);
        countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
    });
}

// Countdown function
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

        dest.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
}

// Call the updateTable function for the first load
updateTable(defaultSem, defaultBranch, defaultYear);
