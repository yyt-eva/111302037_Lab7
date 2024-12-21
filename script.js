document.getElementById('submit').addEventListener('click', () => {
    const mathInput = document.getElementById('math').value;
    const englishInput = document.getElementById('english').value;

    if (mathInput === '' || englishInput === '') {
        alert('Please enter both grades.');
        return;
    }

    const mathGrade = parseFloat(mathInput);
    const englishGrade = parseFloat(englishInput);
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const tableBody = document.querySelector('#gradesTable tbody');
    const rowCount = tableBody.rows.length + 1;

    // Add new row
    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    updateFooter();
});

function updateFooter() {
    const tableBody = document.querySelector('#gradesTable tbody');
    const rows = tableBody.rows;

    let totalMath = 0, totalEnglish = 0, totalAverage = 0;

    for (let i = 0; i < rows.length; i++) {
        const math = parseFloat(rows[i].cells[1].innerText);
        const english = parseFloat(rows[i].cells[2].innerText);
        const avg = parseFloat(rows[i].cells[3].innerText);

        totalMath += math;
        totalEnglish += english;
        totalAverage += avg;
    }

    const rowCount = rows.length;
    document.getElementById('mathAvg').innerText = (totalMath / rowCount).toFixed(2);
    document.getElementById('englishAvg').innerText = (totalEnglish / rowCount).toFixed(2);
    document.getElementById('overallAvg').innerText = (totalAverage / rowCount).toFixed(2);
}
