
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
document.getElementById("signUp").addEventListener("click",function(){
    const username = document.getElementById("txt-input").value
    const pwd = document.getElementById("pwd").value
    if(username === "" || pwd === ""   ){
        alert("Fill up the form");
    }
    else{
        var users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }
        const user = users.find(u => u.username === username );
        if (user) {
            alert("This username was already taken");
        }
        else {
            const newUser = new User(username, pwd);
            if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"));
            }
            users.push(newUser);
            document.getElementById("txt-input").value = "";
            document.getElementById("pwd").value = "";
            localStorage.setItem("users", JSON.stringify(users));

            alert("You was sign up");
        }

    }
})
document.getElementById("login").addEventListener("click", function() {
    const username = document.getElementById("txt-input").value
    const pwd = document.getElementById("pwd").value
    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    const user = users.find(u => u.username === username && u.password === pwd);
    if (user) {
        alert("You  logged in");
    } else {
        alert("Wrong data");
    }
    document.getElementById("txt-input").value = "";
    document.getElementById("pwd").value = "";
});