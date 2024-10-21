let btn = document.getElementById("love");
let dellet = document.getElementById("dellet");
let male=document.querySelector(".male");
let female=document.querySelector(".female");
let ans = document.querySelector(".ans")
// console.log(btn);
btn.onclick =()=> {
    ans.innerHTML="";
    console.log(male.value);
    console.log(female.value);
    if (male.value ==="" && female.value ===""  )
{
    let note=document.createTextNode(" Please enter the lovers-names ");
    ans.appendChild(note);
}
   else if (male.value ==="" && female.value !=""  )
{
    let note=document.createTextNode(" Please enter the Male-name ");
    ans.appendChild(note);
}
   else if (male.value !="" && female.value ===""  )
{
    let note=document.createTextNode(" Please enter the Female-name ");
    ans.appendChild(note);
}
else {
    const randomNumber = Math.floor(Math.random() * 100);
    const percentage = randomNumber + 1;
    let note=document.createTextNode(percentage+"%");
    ans.appendChild(note);
    
}
}
dellet.onclick = () =>{
    if(male.value ==="" && female.value ===""&& ans.innerHTML==="" ){
        let note=document.createTextNode(" There is no thing to dellete ");
        ans.appendChild(note);

    }
    else{

        male.value="";
        female.value="";
        ans.innerHTML="";
    }
}