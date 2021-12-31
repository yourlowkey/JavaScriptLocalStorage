var data = [] 
function submitData() {
    const hoten = document.getElementById('hoten').value;
    const diemtoan = document.getElementById('diemtoan').value;
    const diemly = document.getElementById('diemly').value;
    const diemhoa = document.getElementById('diemhoa').value;
    if(!hoten || !diemtoan || !diemly || !diemhoa) {
        alert('Xin nhap du thong tin')
        return;
    }
    const score = {
        name: hoten,
        math: diemtoan,
        physics: diemly,
        chemistry: diemhoa
    }
    
    data.push(score);
    localStorage.setItem("localData", JSON.stringify(data));
    writeDataToTable()
}
function getData(){
    var str = localStorage.getItem("localData");
    if(str != null)
        data=JSON.parse(str); 
}
function writeDataToTable(){
    getData();
    let html = document.getElementById('usersTable').innerHTML;  
    for(var i=0; i< data.length; i++){
        html += `<tr id=${'hsg'+i}><td>` + (i+1)  + "</td>"
        html += "<td>" + data[i].name + "</td>"
        html += "<td>" + data[i].math + "</td>"
        html += "<td>" + data[i].physics + "</td>"
        html += "<td>" + data[i].chemistry + "</td>"
        html += `<td>${((parseInt(data[i].math) + parseInt(data[i].physics) + parseInt(data[i].chemistry)) / 3).toFixed(2)}</td></tr>`

    }
    const TableContainer = document.getElementById('usersTable');
     TableContainer.innerHTML= html
} 
    
function confirmHSG() {
 for (i=0 ; i< data.length;i++){
     if (((parseInt(data[i].math) + parseInt(data[i].physics) + parseInt(data[i].chemistry)) / 3)> 8){
         document.getElementById('hsg'+i).style.color="red";
     }
 }
}
// // Retrieve your data from locaStorage
// var saveData = JSON.parse(localStorage.saveData || null) || {};

// // Store your data.
// function saveStuff(data) {
//   saveData.data = data;
//   // saveData.foo = foo;
//   saveData.time = new Date().getTime();
//   localStorage.saveData = JSON.stringify(saveData);
// }

// // Do something with your data.
// function loadStuff() {
//   return saveData.data || "default";

