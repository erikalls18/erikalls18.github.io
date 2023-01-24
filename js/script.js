
const profile = users;
var total=document.querySelector('h3');
var paginas=document.getElementById('paginas');
var lista=document.getElementById('lista');
var nPages = []

definePages();
showData(0);

function definePages(){
    let qProfiles= Math.ceil(profile.length/10); // define the number of pages 
    for(let i=0; i<qProfiles; i++){
        paginas.innerHTML+=
        `<a class="prev"href="#" onclick="showData(${i})">${i+1}</a>&nbsp;`
    }
    largo = profile.length
    for (let i=0; i<qProfiles; i++){
        if (largo > 10){
            nPages.push(10);
            largo = largo - 10;
        }
        else{
            nPages.push(largo)
        }
    }   
}

function showData(n){
    lista.innerHTML = ``
    total.innerHTML=`Total: ${profile.length}`;
    let amount=nPages[n]
    let position=n*10
    for(let i=position; i<amount+position; i++){
        var username = profile[i].name.replace(/ /g, ".");
        console.log(i)
        lista.innerHTML += 
        `<div class="contact-details">
        <img class="avatar" src=${profile[i].image}></img>
        <h3>${profile[i].name}</h3>
        <span class="email">${username}@example.com</span>
        </div>
        <div class="joined-details">
        <span class="date">Joined ${profile[i]["joined"]}</span><br>
        </div>`
    }
}
