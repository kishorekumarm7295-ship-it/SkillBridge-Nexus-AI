function recommendCareer(skills){


let result=[];



if(skills.includes("python"))
{

result.push(
"Machine Learning Engineer"
);

}


if(skills.includes("tensorflow"))
{

result.push(
"Deep Learning Engineer"
);

}



if(skills.includes("sql"))
{

result.push(
"Data Analyst"
);

}



if(skills.includes("cloud"))
{

result.push(
"Cloud Engineer"
);

}



return result;


}




let studentSkills=[

"python",
"tensorflow",
"sql"

];



console.log(

recommendCareer(studentSkills)

);
