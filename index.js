// { <div id="joke" class="joke"> Awesome joke is loading.....</div>}

//   {  <button id="jokebtn" class="btn">Next Joke</button>
   
//  }


 const jokes = document.querySelector('#joke');
 const jokebtn = document.querySelector('#jokebtn');

 const setHeader ={
    headers:{
        Accept:"application/json"
    }
 }

 const generateJokes = () => {
   fetch('https://icanhazdadjoke.com',setHeader)
     .then((res) => res.json() 
     )
     .then((data)=>{
        jokes.innerHTML = `${data.joke} 😆😄`;
     }).catch((error) => {
       console.log(error);
     })
 };


 jokebtn.addEventListener('click', generateJokes);
 generateJokes();