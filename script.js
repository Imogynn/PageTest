var data = [
    {name: "Chris", computer: "mac"},
    {name: "Shane", computer: "pc"},
    {name: "Tony", computer: "linux"}
]

function showComputers(){
    var reportDiv = document.getElementById("report");
    data.forEach(person => {
        var newDiv = document.createElement("p")
        newDiv.textContent = `${person.name} uses a ${person.computer}`
        reportDiv.appendChild(newDiv)
    })
}

showComputers()