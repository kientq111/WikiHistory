firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // window.location= "/WikiHistory/view/user/HomePage.html"
        document.getElementById("exit").style.display = "none";
        document.getElementById("commentContainer").style.display = "none";

    } else {
        document.getElementById("user").innerHTML = "Xin Chào, " + user.email
        document.getElementById("nav-drop").style.display = "none";


    }
    if (user.email == "admin@gmail.com") {
        document.getElementById("user").innerHTML = " Xin chào Quản trị viên "
    }
})


function logout() {
    firebase.auth().signOut()
    window.location = "../user/HomePage.html";

}