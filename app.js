document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const degree = document.getElementById('degree').value;
    const institute = document.getElementById('institute').value;
    const skills = document.getElementById('Skills').value;
    const experience = document.getElementById('Experience').value;

    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = `
        <div id="resume-box" style="padding: 20px; border: 2px solid black; background-color:light blue; width: 100%; max-width: 600px;">
            <h2>Personal Information</h2>           
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
            <h2>Work Experience</h2>
            <p>${experience}</p>
        </div>
    `;
});

document.getElementById('download').addEventListener('click', function(event) {
    event.preventDefault(); 

    const resumeBox = document.getElementById('resume-box');

    if (!resumeBox) {
        alert("Please generate the resume first!");
        return;
    }
    html2canvas(resumeBox).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4'); 

        const imgWidth = 210; 
        const pageHeight = 297; 
        const imgHeight = canvas.height * imgWidth / canvas.width; 

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save("resume.pdf"); 
    });
});