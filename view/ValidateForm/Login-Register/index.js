document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    // if(user){
    //     // window.location = "/WikiHistory/view/user/HomePage.html"
     if(user.email == "admin@gmail.com" || user.email == "admindat@gmail.com" || user.email == "adminkien@gmail.com" || user.email == "adminha@gmail.com" || user.email == "adminhoang@gmail.com" || user.email == "admingiang@gmail.com" ) {
         window.location = "../../admin/HomePage_admin.html";
     }else  {
         window.location = "../../user/HomePage.html";
     }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Một liên kết đổi lại mật khẩu đã được gửi đến tài khoản của bạn")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}