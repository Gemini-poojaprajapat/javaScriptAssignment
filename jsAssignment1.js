function GenerateTable() {
    //Build an array containing Customer records.
    var Employees = new Array();
    Employees.push(["Name", "age", "DoB", "Email", "Company" ]);
    Employees.push([ "John Hammond", "22", "12-12-2000", "Pooja.p@gemail.com" , "GeminiSolutions"]);
    Employees.push([ "Mudassar Khan","22", "12-12-2000", "Pinki.p@gemail.com", "GeminiSolutions"]);
    Employees.push([ "Suzanne Mathews","22","12-12-2000", "Neha.p@gemail.com", "GeminiSolutions"]);
    Employees.push([ "Robert Schidner", "22", "12-12-2000", "Pooja.pra@gemail.com", "GeminiSolutions"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = Employees[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = Employees[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < Employees.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Employees[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}