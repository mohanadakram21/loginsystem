


function smg() {
    var allUsers = JSON.parse(localStorage.getItem("userid")) || [];
  
    var emailInput = document.getElementById("useremaill").value.trim();
    var passwordInput = document.getElementById("userpassl").value.trim();
  
  
    if (emailInput === "" || passwordInput === "") {
        sva.classList.remove("d-none");
        sva.innerText = "All fields are required!";
        console.error("All fields are required!");
        return;
    }
  
    

    var foundUser = allUsers.find(user => 
        user.useremail === emailInput && user.userpass === passwordInput
    );
  
    if (foundUser) {
        console.log("Login successful");
        suss.classList.remove("d-none"); 
        sva.classList.add("d-none");
        localStorage.setItem("currentuser",JSON.stringify(foundUser.username));
        window.location.href = "user.html";
    } else {
        console.log("Login failed");
  
        sva.classList.remove("d-none");
        sva.innerText = "Incorrect email or password!";
    }
 
  }
  