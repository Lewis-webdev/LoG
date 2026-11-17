const form = document.getElementById("mydetails");
const message = document.getElementById("message");

form.addEventListener("submit",function(c){
    c.preventDefault();

  const username = document.getElementById("mytext").value.trim();
  const password = document.getElementById("mypassword").value;

  if(username ==="muriithilewismaina@gmail.com" && password === "Lewis_3297"){
        message.textContent = "Login Successfully!";
        message.style.color = "white";
        sessionStorage.setItem("user","Lewis Maina");
        setTimeout(function (){
            window.location.href="home.html";
        },1000);
    }else{
        message.textContent = "Wrong Email Address or Password!";
        message.style.color = "white";
    }
    
});
