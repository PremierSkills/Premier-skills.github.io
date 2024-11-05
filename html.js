document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Create an object to store the form data
    const formData = {
        "Name": name,
        "Email": email,
        "Course": course
    };

    // Export data to Excel
    exportToExcel(formData);
    
    // Optionally, clear the form
    document.getElementById("registrationForm").reset();
});

// Function to export data to Excel
function exportToExcel(data) {
    const ws_data = [
        ["Name", "Email", "Course"], // Column headers
        [data.Name, data.Email, data.Course] // Data row
    ];

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Registrations");

    // Generate Excel file and prompt download
    XLSX.writeFile(wb, "registrations.xlsx");
}
