// Register

const registerForm =
document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let user={

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value,

role:
document.getElementById("role").value


};



localStorage.setItem(
"skillbridgeUser",
JSON.stringify(user)
);



alert(
"Registration Successful 🎉"
);



window.location.href="login.html";


});


}







// Login


const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let savedUser =
JSON.parse(
localStorage.getItem(
"skillbridgeUser"
)
);



let email =
document.getElementById("loginEmail").value;



let password =
document.getElementById("loginPassword").value;



if(
savedUser &&
savedUser.email===email &&
savedUser.password===password
){


alert(
"Login Successful 🚀"
);



// future dashboard redirect

if(savedUser.role==="Student")
{

window.location.href=
"student/dashboard.html";

}


else if(savedUser.role==="Industry")
{

window.location.href=
"industry/dashboard.html";

}


else if(savedUser.role==="Faculty")
{

window.location.href=
"faculty/dashboard.html";

}


else
{

window.location.href=
"institution/dashboard.html";

}



}


else{


alert(
"Invalid Email or Password"
);


}



});


}
