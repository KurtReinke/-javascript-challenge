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
data.forEach(ufodata => {
    console.log(ufodata);
    var row = tbody.append("tr");
    //var tRow = tbody.append("tr");

    //add second loop?
    //entries(ufodata).forEach(([key,value]) +>)
    Object.entries(ufodata).forEach(([key,value]) => {
        console.log(key,value);
        var column = row.append("td");
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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    list.html(""); 



}



//Using Button, add new data for each UFO sighting section
//reference buttons and target
//var submitButton = d3.select("#filter-btn-date");
var button= d3.select("#filter-btn");
//var inputField =d3.select("#input-field")

function handleClick() {
    console.log("A button was clicked!");
    console.log(d3.event.target);
}
//submitButton
button.on("Filter Table", handleClick) {
    //additional code to prevent error in refresh

    //tbody.html("");
    d3.event.preventDefault();


    //logs of what has occured
    console.log("Hi, a button was clicked!"); 
    //see the object that dispatched the event
    console.log(d3.event.target);

    //select inputfield(s) and element(s)
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    console.log(inputElement);
    //filter
    var inputTypeArray = data.filter(one => one.datetime === inputElement);
    console.log(inputTypeArray);

//appending again
    inputTypeArray.forEach((selection) => {
        var row = tbody.append("tr");
        console.log(row);
        //below "object" becomes the targetet array (element)
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
            console.log(cell);
        });
    });      
});