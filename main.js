const tableBody = document.getElementById('table-body');
const examsDetails = {
    "S1": {
        "CS": {
            "2019": [
                { "code": "MAT101", "date": "October 26, 2019 9:30:00", "name": "Linear Algebra And Calculus", "id": 1 },
                { "code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id": 2 },
                { "code": "EST100", "date": "June 5, 2019 9:30:00", "name": "Engineering Mechanics", "id": 3 },
                { "code": "EST120", "date": "June 10, 2019 9:30:00", "name": "BME & BCE", "id": 4 },
                { "code": "HUN102", "date": "July 13, 2019 9:30:00", "name": "Professional Communication", "id": 5 },
                { "code": "EST102", "date": "June 18, 2019 9:30:00", "name": "Programming in C", "id": 6 },
            ],
            "2024": [
                { "code": "GAMAT101", "date": "December 31, 2024 1:30:00", "name": "Mathematics", "id": 1 },
                { "code": "GAPHT121/GXCYT122", "date": "January 3, 2025 1:30:00", "name": "Physics/Chemistry", "id": 2 },
                { "code": "GMEST103", "date": "January 6, 2025 1:30:00", "name": "Eng Graphics & CAD", "id": 3 },
                { "code": "GXEST104", "date": "January 8, 2025 1:30:00", "name": "Intro to EEE", "id": 4 },
                { "code": "UCEST105", "date": "January 10, 2025 1:30:00", "name": "Python", "id": 5 }
            ]
        },
        // Add more branches and years as needed
    }
};

// Load defaults from localStorage or set to defaults
let defaultBranch = localStorage.getItem('branch') || "CS";
let defaultSem = localStorage.getItem('sem') || "S1";
let defaultYear = localStorage.getItem('year') || "2024";

// Set dropdown values
document.getElementById("branch").value = defaultBranch;
document.getElementById("sem").value = defaultSem;
document.getElementById("scheme").value = defaultYear;

// Event listeners for dropdowns
document.getElementById('sem').addEventListener('change', function () {
    defaultSem = this.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('sem', defaultSem);
});

document.getElementById('branch').addEventListener('change', function () {
    defaultBranch = this.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('branch', defaultBranch);
});

document.getElementById('scheme').addEventListener('change', function () {
    defaultYear = this.value;
    updateTable(defaultSem, defaultBranch, defaultYear);
    localStorage.setItem('year', defaultYear);
});

// Function to update the table
function updateTable(sem, branch, year) {
    tableBody.innerHTML = ""; // Clear existing rows

    // Check if data exists for the selected sem, branch, and year
    if (examsDetails[sem] && examsDetails[sem][branch] && examsDetails[sem][branch][year]) {
        examsDetails[sem][branch][year].forEach(exam => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${exam.id}</td>
                <td>${exam.name}</td>
                <td>${exam.code}</td>
                <td>${new Date(exam.date).toLocaleDateString()}</td>
                <td id="countdown${exam.id}"></td>
            `;
            tableBody.appendChild(row);
            // Start countdown for each exam
            countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
        });
    } else {
        tableBody.innerHTML = `<tr><td colspan="5">No data available for this selection.</td></tr>`;
    }
}

// Countdown function
function countdown(cdate, dest) {
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = cdate - now;

        if (distance < 0) {
            clearInterval(x);
            dest.innerHTML = "EXAM OVER";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dest.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Initial table load
updateTable(defaultSem, defaultBranch, defaultYear);
