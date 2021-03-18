// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    var monitorList = [];
    for (var i = 0; i < newMonitorsList.length; i++) {
        monitorList.push([newMonitorsList[i], i + 1]);
    }
    return monitorList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;