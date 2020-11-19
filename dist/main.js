(()=>{"use strict";const n="https://pokeapi.co/api/v2/pokemon/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch error",n)}},e=async n=>(await a(n)).results.map((n=>n.url)),t=async n=>{const a=[],e=n.map((n=>(async n=>{try{const a=await fetch(n);return await a.json()}catch(n){console.log("Fetch error",n)}})(n)));return await Promise.all(e).then((n=>a.push(n))),a},s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>'\n    <div class="Error404">\n        <h1>Error 404</h1>\n        <span>Not Found</span>\n    </div>\n    ',r={"/":async()=>{const n=await e();return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/poke":async()=>{const n=s(),e=await a(n),t=`  \n            <article class="character-item-self">\n                    <h2># ${e.id}</h2>\n                    <h2>${e.name}</h2>  \n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png" alt="${e.name}">       \n                    <div class="types-self">\n                        <h3>Type: </h3>\n                        ${e.types.map((n=>`\n                        <span>${n.type.name}</span>\n                         `)).join("")}\n                    </div>\n                    <div class="pokemon-info">\n                        <div class="abilities">\n                            <h3>Abilities: </h3>\n                            ${e.abilities.map((n=>`\n                            <span class="hidden_${n.is_hidden}">${n.ability.name} </span>\n                            `)).join("")}\n                        </div>\n                    </div>\n            </article>   \n    `;return(async()=>{const n=s(),e=await a(n);document.querySelector(".character-item-self").classList.add(""+e.types[0].type.name)})(),t},"/kanto":async()=>{const n=await e("?limit=151&offset=0");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/johto":async()=>{const n=await e("?limit=100&offset=151");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/hoenn":async()=>{const n=await e("?limit=135&offset=251");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/sinnoh":async()=>{const n=await e("?limit=107&offset=386");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/unova":async()=>{const n=await e("?limit=156&offset=493");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/kalos":async()=>{const n=await e("?limit=72&offset=649");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/alola":async()=>{const n=await e("?limit=81&offset=721");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `},"/galar":async()=>{const n=await e("?limit=84&offset=809");return`\n    <div class="characters">   \n        ${(await t(n))[0].map((n=>`\n            <article class="character-item ${n.types[0].type.name}">\n                <a href="#/${n.name}">\n                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n.id}.png" alt="${n.name}">\n                    <h2>${n.name}</h2> \n                </a>\n                <div class="types">\n                ${n.types.map((n=>`\n                    <span>${n.type.name}</span>\n                `)).join("")}\n                </div>\n            </article>   \n            `)).join("")}\n\n    </div>\n    `}},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content"),e=document.getElementById("footer");n.innerHTML='\n    <nav>\n        <span class="menu-button">Menu</span>\n        <ul class="menu"> \n            <li><a href="">Home</a></li>\n            <li><a href="#/Kanto">Kanto</a></li>\n            <li><a href="#/Johto">Johto</a></li>\n            <li><a href="#/Hoenn">Hoenn</a></li>\n            <li><a href="#/Sinnoh">Sinnoh</a></li>\n            <li><a href="#/Unova">Unova</a></li>\n            <li><a href="#/Kalos">Kalos</a></li>\n            <li><a href="#/Alola">Alola</a></li>\n            <li><a href="#/Galar">Galar</a></li>\n        </ul>\n    </nav>\n    ',e.innerHTML='\n    <ul>\n        <li><a href="mailto:dimartvil@hotmail.com" type="email">dimartvil@hotmail.com</a></li>\n        <li>Developed by <strong>dimartvil</strong></li>\n    </ul>\n    ';let t=(n=>{let a;switch(n){case"/":a=n;break;case"contact":case"show":case"about":case"kanto":case"johto":case"hoenn":case"sinnoh":case"unova":case"kalos":case"alola":case"galar":a="/"+n;break;default:a="/poke"}return a})(s()),c=r[t]?r[t]:i;a.innerHTML=await c(),(()=>{const n=document.querySelector(".menu-button"),a=document.querySelector(".menu");n.addEventListener("click",(()=>{a.classList.toggle("active")}))})()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();