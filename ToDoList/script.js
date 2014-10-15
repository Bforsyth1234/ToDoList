var toDoApp = {};

toDoApp.toDo = [];
toDoApp.time = [];

toDoApp.create = function () {
    var info = document.getElementById("info").value;

    var toDoInfo = {};
    toDoInfo.info = info;
    toDoInfo.isDone = false;
    

    toDoApp.toDo.push(toDoInfo);
    document.getElementById("info").value = "";
    
    toDoApp.read();
};

toDoApp.read = function () {
   // toDoApp.timeStamp();
    var holder = "";
    for (var i in toDoApp.toDo) {

            holder += "<tr>";
            holder += "<td>" + toDoApp.toDo[i].info + "</td>";
            holder += "<td>";
            if (toDoApp.toDo[i].isDone === false) {

                holder += "<button class='btn btn-warning' onclick='toDoApp.done(" + i + ")'>Done</button>&nbsp";
            };
            holder += "</tr>";

    }
        document.getElementById("output").innerHTML = holder;
        
}

toDoApp.done = function (index) {
    
    var info = toDoApp.toDo[index].info
    toDoApp.toDo[index].isDone = !toDoApp.toDo[index].isDone;

   
    //toDoApp.toDo[index].info +=  "&nbsp&nbsp&nbsp<i class='fa fa-check-square fa-2x'></i>";
    toDoApp.toDo[index].info = toDoApp.toDo[index].info + "&nbsp&nbsp&nbsp<i class='fa fa-check-square fa-2x'></i>";
    toDoApp.read();
    

       
    
};


/*toDoApp.timeStamp = function () {
    var d = new Date();
    toDoApp.time.push(d, index);
    console.log(d);
};*/