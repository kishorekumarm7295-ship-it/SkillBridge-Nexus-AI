function sendMessage(){


let input =
document.getElementById("userInput");


let message=input.value;



if(message=="")
return;



let chat =
document.getElementById("chatbox");



chat.innerHTML +=

`
<div class="user">
${message}
</div>
`;



let reply="";



message=message.toLowerCase();



if(message.includes("python"))
{

reply=
"Python skill detected 🚀 Learn Machine Learning, Data Science and AI.";

}


else if(message.includes("job"))
{

reply=
"Based on your profile, AI Engineer and ML Developer roles are recommended.";

}


else if(message.includes("internship"))
{

reply=
"Recommended internships: AI Intern, Data Analyst Intern, ML Research Intern.";

}


else
{

reply=
"I suggest improving technical skills, projects and certifications.";

}



setTimeout(()=>{


chat.innerHTML +=

`
<div class="bot">
${reply}
</div>
`;

chat.scrollTop=chat.scrollHeight;


},500);



input.value="";


}
