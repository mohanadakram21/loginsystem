



function displayuser() {
    
    var currentuser = JSON.parse(localStorage.getItem("currentuser"));

     if (currentuser) {
        // document.getElementById("username1").innerHTML = "welcome" + currentuser;
        document.getElementById("username1").innerHTML = `<h2 style="color: #17A2B8; text-align: center; padding: 50px 0;">Welcome ${currentuser}</h2>`
    }
  }
  displayuser()