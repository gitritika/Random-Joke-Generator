const btn = document.querySelector(".btn");
const joke = document.querySelector(".area p");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function updatejoke(){
    let p = fetch(url);
    p.then((value1) => {
        return value1.json();
    }).then((value) => {
        let j = value.joke;
        if(j === undefined){
            joke.innerText = "click again";
        }
        else{
            joke.innerText = j;
        }
    })
}

btn.addEventListener("click",updatejoke);

