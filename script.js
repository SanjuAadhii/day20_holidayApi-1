//creating a div element 
var div = document.createElement("div");
div.style.textAlign="center";
div.style.margin="60px";

//creating a input element 
var input = document.createElement("input");
input.id="date"
input.style.width="40%"
input.style.marginRight="20px";
// input.setAttribute("oninput", "getval()");
input.setAttribute("type","date")

//creating a Button element 
var button = document.createElement("button");
button.innerHTML="Check holiday!!!"
button.setAttribute("onclick","getval()")

//Appending to the html file
div.append(input,button)
document.body.append(div)

//Getting the values from the date input
function getval(){
var val =document.getElementById("date").value;
console.log(val)
var date = new Date(val)
var year = date.getFullYear();
var month = date.getMonth() + 1; // Months are zero-based, so we add 1
var day = date.getDate();

console.log(year,month,day)
foo(year,month,day);
}

//Passing the values to the api by the vales got from th date input
async function foo(year,month,day){
    try{
        var res = await fetch(`https://holidays.abstractapi.com/v1/?api_key=746e086aefcb4cf0819cdd4c7b9699fd&country=US&year=${year}&month=${month}&day=${day}`)
    var res1 = await res.json();
    console.log(res1)
    if(res1[0].name==" "){
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `This Day has "No Special Events"`;
        document.body.append(div1)
        }
    else{
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `
         <h4>Day : ${res1[0].week_day} <br>
         Day's Special : ${res1[0].name}</h4>`
        document.body.append(div1)
    }
   
    }
    catch(error){
        console.log(error)
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `Error : ${error}`;
        document.body.append(div1)
    }
    
}




