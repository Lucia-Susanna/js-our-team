const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/* 
1. prendo il card container in cui andrò a inserire le card che creo
2. prendo l'array e estrapolo ogni singolo oggetto (ciclo for of)
3. per ogni singolo oggetto vado a inserire i dati nel mockup html attraverso un template literal
4. mi creo una stringa vuota in cui vado a concatenare tutte le card
5 inserisco questa stringa nell'html del container
*/
const cardContainer = document.getElementById('cardContainer')

// for (member of teamMembers){
  //   card += ` <div class="card">
  //         <img src=./assets/${member['img']} alt="member">
  //         <div class="description">
  //           <h3 class="list-icon name">${member['name']}</h3>
  //           <p class="list-icon role">${member['role']}</p>
  //           <p class="list-icon email">${member['email']}</p>
  //         </div>
  //       </div>`
  // }

  let card;
  
function newCard(array){
  for(member of array){
    card+= memberCard(member)  
  }
  return card
}

function memberCard(member){

  newMemberCard = ` <div class="card">
  <img src=./assets/${member['img']} alt="member">
  <div class="description">
  <h3 class="list-icon name">${member['name']}</h3>
  <p class="list-icon role">${member['role']}</p>
  <p class="list-icon email">${member['email']}</p>
  </div>
  </div>`

  return newMemberCard
}


cardContainer.innerHTML = newCard(teamMembers)






 const addName = document.getElementById('new-name')
 const addRole = document.getElementById('new-role')
 const add = document.getElementById('add')
 const addEmail = document.getElementById('new-email')
 let newUser = {};

newUser['name'] = addName.value
newUser['role'] = addRole.value
newUser['email'] = addEmail.value

add.addEventListener ('click', ()=>{
  event.preventDefault()
  teamMembers.push(newUser)

  cardContainer.innerHTML = newCard(teamMembers)
})
