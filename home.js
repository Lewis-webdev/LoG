const user = sessionStorage.getItem("user");

if(!user){
    window.location.href = "index.html";
}else{
    document.getElementById("welcometext").textContent = "Welcome."+user;
}
document.getElementById("logoutbtn").addEventListener("click",function(){
    sessionStorage.removeItem("user");
        window.location.href = "index.html";
});
