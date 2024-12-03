var username= document.getElementById("username");
var useremail= document.getElementById("useremail");
var userpass= document.getElementById("userpass");
var username1= document.getElementById("username1");
var loginin= document.getElementById("login");
// var useremaill= document.getElementById("useremaill");
// var userpassl= document.getElementById("userpassl");
var alert = document.getElementById("alert")

alluser=[];

if (localStorage.getItem("userid")) {
    alluser = JSON.parse(localStorage.getItem("userid"));
    
  }
function adduser() {
  if (
    username.value.trim() === "" || 
    useremail.value.trim() === "" || 
    userpass.value.trim() === ""
) {
    alert.classList.remove("d-none");   
    console.error("All fields are required!");
    return;      
}

var isDuplicate = alluser.some(user => user.useremail === useremail.value.trim());

if (isDuplicate) {
    alert.classList.remove("d-none");
    alert.innerText = "This email is already registered!";
    console.error("Duplicate email found!");
    return;
}


var userid = {
        username:username.value,
      useremail:useremail.value,
      userpass:userpass.value,
     };
     alluser.push(userid);
     localStorage.setItem("userid", JSON.stringify(alluser));
     alert.classList.add("d-none"); 
     suss.classList.remove("d-none"); 

    }

  
  
  








 