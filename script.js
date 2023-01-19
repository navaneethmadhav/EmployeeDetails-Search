//to add details of employee to local storage


function addEmp() {
    //1. create employee object

    employee={
        empid:emp_id.value,
        empname:emp_name.value,
        empaddr:emp_addr.value,
        empdesg:emp_desg.value,
        empexp:emp_exp.value,
        empsal:emp_sal.value
    }

    //2. store emp object in local storage
    if(employee.empid in localStorage){
        alert("id already existing...");
    }
    else{
        localStorage.setItem(employee.empid,JSON.stringify(employee));
        alert('employee added successfully');
    }

}


function search() {
    //1. get search key

    key=searchId.value;

    //2. to check key in local storage

    if(key in localStorage){
        employee=JSON.parse(localStorage.getItem(key));
        result.innerHTML=`Employee name: ${employee.empname}`;
    }
    else{
        result.innerHTML=""
        alert("Not found");
    }
}









// function addEmp(){
//     employee={
//         empid:emp_id.value,
//         empname:emp_name.value,
//         empadd:emp_add.value,
//         empdesig:emp_desig.value,
//         empexp:emp_exp.value,
//         empsala:emp_sala.value
//     }

//     if(employee.empid in localStorage){
//         alert("Id Already Exist");
//     }
//     else{
//         localStorage.setItem(employee.empid,JSON.stringify(employee));
//         alert('Employee added Successfully');
//     }
// }


// function search(){
   
//      key=searchid.value;
//     console.log(key);
//     if(key in localStorage){
//     employee=JSON.parse(localStorage.getItem(key));
    
//     result.innerHTML=`Employee Name: ${employee.empname}`;
//     }
//     else{
//         result.innerHTML=`Employee not Found`;
//     }
// }