firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        window.location= "/WikiHistory/view/ValidateForm/Login-Register/index.html"
        
    }else{
        document.getElementById("user").innerHTML = "Xin Chào, "+user.email
        document.getElementById("nav-drop").style.display = "none";
        

    }
})


function logout(){
    firebase.auth().signOut()
}
