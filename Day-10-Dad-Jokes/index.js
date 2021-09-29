const content = document.getElementById('jokeContent');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click',()=>{
  checkErr();
})
checkErr();

async function getApi() {
  const api = 'https://icanhazdadjoke.com';
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch(api, config);
  const data = await res.json();
  return data;
}
async function checkErr(){
  try{
    let result = await getApi();
    content.innerHTML=result.joke;
  } catch(e){
    console.log(e);
  }
}

// function getApi() {
//   const api = 'https://icanhazdadjoke.com';
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch(api, config)
//     .then((res) => res.json())
//     .then((data) =>{
//       content.innerHTML= data.joke;
//     });
// }
