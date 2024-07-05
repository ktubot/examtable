document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById('table-body');
    const semesterSelect = document.getElementById('sem');
    const departmentSelect = document.getElementById('branch');
    const memeDiv = document.getElementById('meme');

    // Exam details object (example data)
    const examsDetails = {
        "S2": {
            "CS": [
                { "code": "MAT102", "date": "May 25, 2024 9:30:00", "name": "Vector Calculus, and Differential Equations and Transforms", "id": 1 },
                {"code": "CYT100", "date": "May 31, 2024 9:30:00", "name": "Engineering Chemistry", "id":2},
                {"code": "EST100", "date": "June 5, 2024 9:30:00", "name": "Engineering Mechanics", "id":3},
                {"code": "EST120", "date": "June 10, 2024 9:30:00", "name": "BME & BCE", "id":4},
                {"code": "HUN102", "date": "June 13, 2024 9:30:00", "name": "Professional Communication", "id":5},
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
        "S8": {
            "CS": [
                { "code": "CST402", "date": "May 22, 2025 9:30:00", "name": "Distributed Computing", "id": 1 },
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
    };

    var defaultBranch;
    var defaultSem;

    // Check local storage for saved branch and semester
    if (localStorage.getItem('branch')) {
        defaultBranch = localStorage.getItem('branch');
        departmentSelect.value = defaultBranch; // Set the selected value in the dropdown
    } else {
        defaultBranch = "CS"; // Default branch
    }

    if (localStorage.getItem('sem')) {
        defaultSem = localStorage.getItem('sem');
        semesterSelect.value = defaultSem; // Set the selected value in the dropdown
    } else {
        defaultSem = "S2"; // Default semester
    }

    // Function to update the table based on selected semester and branch
    function updateTable(sem, branch) {
        tableBody.innerHTML = ""; // Clear table body
        memeDiv.innerHTML = ""; // Clear meme div

        // Check if the selected semester and branch have data
        if (examsDetails[sem] && examsDetails[sem][branch]) {
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

                // Start countdown for each exam
                countdown(new Date(exam.date).getTime(), document.getElementById(`countdown${exam.id}`));
            });
        } else {
            // Display meme image if no data found for selected semester and branch
            memeDiv.innerHTML = `<img src="3.png" alt="No Data Found" style="width: 30vh; height: 30vh; object-fit: contain;">`;
        }
    }

    // Function to initialize the page
    function initializePage() {
        // Populate semester options
        Object.keys(examsDetails).forEach(sem => {
            var option = document.createElement('option');
            option.value = sem;
            option.textContent = sem;
            semesterSelect.appendChild(option);
        });

        // Populate branch options for the default semester
        Object.keys(examsDetails[defaultSem]).forEach(branch => {
            var option = document.createElement('option');
            option.value = branch;
            option.textContent = branch;
            departmentSelect.appendChild(option);
        });

        // Update table based on default selections
        updateTable(defaultSem, defaultBranch);
    }

    // Event listener for semester change
    semesterSelect.addEventListener('change', function () {
        defaultSem = semesterSelect.value;
        updateTable(defaultSem, defaultBranch);
        localStorage.setItem('sem', defaultSem); // Save selected semester to local storage
    });

    // Event listener for branch change
    departmentSelect.addEventListener('change', function () {
        defaultBranch = departmentSelect.value;
        updateTable(defaultSem, defaultBranch);
        localStorage.setItem('branch', defaultBranch); // Save selected branch to local storage
    });

    // Function to start countdown for exam
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

    // Initialize the page
    initializePage();
});
