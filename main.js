function createGame (player1, hour, player2){
  return `
  <li>
                <img src="Assets/icon-${player1}.svg" alt="bandeira do ${player1}"/>
                <strong>${hour}</strong>
                <img src="Assets/icon-${player2}.svg" alt="bandeira do ${player2}"/>
            </li>

`
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class= "card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2> 
        <ul>
            ${games}
            </ul>
        </div>
        `
      }


document.querySelector("#cards").innerHTML =  

          createCard(
            "24/11",
            "quinta",
            createGame("brazil", "16:00", "Serbia")
          )+
          createCard(
            "28/11",
            "segunda",
            createGame("Switzerland", "13:00", "Brazil")+
            createGame("Portugal", "16:00", "Uruguai")
          )+
         createCard(
            "02/12",
            "sexta",
            createGame("brazil", "16:00", "Camaroon")
          )
        
