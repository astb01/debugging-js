document.getElementById("peopleForm").addEventListener("click", function (e) {
    e.preventDefault();
});

function processForm() {
    const firstName = document.getElementById("firtName").value;
    const lastName = document.getElementById("lastName").value;

    appendEntry(firstName, lastName);

    document.getElementById("peopleForm").reset();
}

function appendEntry(firstName, lastName) {
    const table = document.getElementById("entrie");

    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;    
}