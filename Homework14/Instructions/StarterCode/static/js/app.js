// from data.js
var tableData = data;

//Name vars
//Make sure you have a column for date/time, city, state, 
//country, shape, and comment at the very least.

//var city = d3.select("#city");
//var state = d3.select("#state");
//var country = d3.select("#country");
//var shape = d3.select("#shape");
//var duration = d3.select("#durationMinutes");
//var comments = d3.select("#comments");

//select main ids
var datetime = d3.select("#datetime");
var city = d3.select("#City");
var state = d3.select("#State");
var country = d3.select("#Country");
var shape = d3.select("#Shape");
var duration = d3.select("#Duration");
var comments = d3.select("#Comments");

//add tbod id then select table, add attributes if needed
//.tablestriped, .tablebordered
var table =d3.select("ufo-table");
table.attr("class", "table table-striped");
var tbody = d3.select("#table-display");

console.log(data);
//appends a table to your web page and then adds new rows of 
//data for each UFO sighting.

//create loop and append table data
data.forEach(data => {
    console.log(data);
    var row = tbody.append("tr");
    //varcolum=tbodu.append("td")

    //add second loop?
    //entries(ufodata).forEach(([key,value]) +>)
    Object.entries(data).forEach(([key,value]) => {
        console.log(key,value);
        var column = row.append("td");
        console.log(row);
        console.log(column);
        column.text(value);
        //var tData = tRow.append("td");
        //tData.text(value);
    });
});

//Second try here
var button= d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    console.log(inputValue);
    console.log(inputDate);

    var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);
    console.log(filteredData);
    list.html(""); 
};
//create dropdown for button, html includes the choices
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};

//Loop for table again and display table
inputTypeArray.forEach((date3) => {
    Object.entries(date3).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});   

//renderTable();



//Using Button, add new data for each UFO sighting section
//reference buttons and target
//var submitButton = d3.select("#filter-btn-date");
//var button= d3.select("#filter-btn");
//var inputField =d3.select("#input-field")

//submitButton
//button.on("Filter Table", handleClick) {
    //additional code to prevent error in refresh

    //tbody.html("");
    //d3.event.preventDefault();
    //select inputfields
    //var inputField = d3.select("#datetime");
    //var inputElement = inputField.property("value");
    //filter
    //var inputTypeArray = data.filter(one => one.datetime === inputElement);
    //console.log(inputTypeArray);

//Loop for table again
    //inputTypeArray.forEach((selection) => {
        //var row = tbody.append("tr");
        //console.log(row);
        //Object.entries(selection).forEach(([key,value]) => {
            //var cell = row.append("td");
        //});
    //});      
//});
