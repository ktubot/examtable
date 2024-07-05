document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById('table-body');
    const semesterSelect = document.getElementById('sem');
    const departmentSelect = document.getElementById('branch');

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

    // Set default values for department and semester if stored in localStorage
    let defaultDepartment = localStorage.getItem('branch') || "CS";
    let defaultSemester = localStorage.getItem('sem') || "S6";

    // Populate dropdowns with options
    function populateDropdowns() {
        // Populate semester dropdown
        Object.keys(examsDetails).forEach(semester => {
            let option = document.createElement('option');
            option.value = semester;
            option.textContent = `Semester ${semester}`;
            semesterSelect.appendChild(option);
        });

        // Populate department dropdown based on selected semester
        populateDepartmentDropdown(defaultSemester);

        // Set default selected options
        semesterSelect.value = defaultSemester;
        departmentSelect.value = defaultDepartment;
    }

    // Populate department dropdown based on selected semester
    function populateDepartmentDropdown(semester) {
        departmentSelect.innerHTML = ""; // Clear previous options
        Object.keys(examsDetails[semester]).forEach(department => {
            let option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            departmentSelect.appendChild(option);
        });
    }

    // Update table and save selections to localStorage
    function updateTable() {
        let semester = semesterSelect.value;
        let department = departmentSelect.value;
        localStorage.setItem('sem', semester);
        localStorage.setItem('branch', department);
        renderTable(semester, department);
    }

    // Render table based on selected semester and department
    function renderTable(semester, department) {
