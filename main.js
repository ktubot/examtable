const tableBody = document.getElementById('table-body');
const examsDetails = {
    // Your exam details should be structured to support different years like 2019, 2024, etc.
    // Example structure:
    "S1": {
        "CS": {
            "2019": [
                { "code": "MAT101", "date": "October 26, 2019 9:30:00", "name": "Linear Algebra And Calculus", "id": 1 },
                { "code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id": 2 },
            ],
            "2024": [
                { "code": "MAT101", "date": "October 26, 2024 9:30:00", "name": "2", "id": 1 },
                { "code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "3", "id": 2 },
            ]
        },
        "EC": {
            "2019": [
                { "code": "MAT102", "date": "May 25, 2019 9:30:00", "name": "Vector Calculus", "id": 1 },
                { "code": "PHT100", "date": "May 31, 2019 9:30:00", "name": "Engineering Physics", "id": 2 },
            ],
            "2024": [
                { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus", "id": 1 },
                { "code": "PHT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Physics", "id": 2 },
            ]
        }
        // Add other branches and semesters similarly for both years
    },
    // Other semesters (S2, S3, etc.) with the same structure
};

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
    defaultSem = "S6";
}

if (localStorage.getItem('year')) {
    defaultYear = localStorage.getItem('year');
    document.getElementById("year").value = defaultYear;
} else {
    defaultYear = "2024";
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

function updateTable(sem, branch, year) {
    tableBody.innerHTML = "";
    if (
        examsDetails[sem] === undefined ||
        examsDetails[sem][branch] === undefined ||
        examsDetails[sem][branch][year] === undefined
    ) {
        document.getElementById('meme').innerHTML = `<img src="3.png" alt="No Data Found" style="width: 30vh; height: 30vh; object-fit: contain;">`;
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
            <td id="countdown${exam.id}"> </td>
        `;
        tableBody.appendChild(row);
        countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
    });
}

updateTable(defaultSem, defaultBranch, defaultYear);
