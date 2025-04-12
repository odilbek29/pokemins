import { pokemons } from "./pokemons";
const ota=document.getElementById("ota");
const select=document.getElementById("select");
const sortselect=document.getElementById("sort-select");
const input=document.getElementById("input");
console.log(pokemons);



function chizish(malumot){
    ota.innerHTML=``;
    malumot.map((pokemons)=>{
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=` 
          <h2>${pokimon.name}</h2>
          <img src="${pokimon.img}" alt="asd"> <br>
          <button>${pokimon.type}</button>
          <h3>candy count: ${pokimon?.candy_count || 0}</h3>
          <h3>weight: ${pokimon.weight}</h3>
          <h4>${pokimon.weaknesses} </h4>
          <div class="p-id">${pokimon.num}</div>
          <div class="time">${pokimon.spawn_time}</div>


          
          `;
          ota.appendChild(div);
    });

}
chizish(pokemons)