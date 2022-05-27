//document.querySelector('#clickMe').addEventListener('click', makeReq)

document.querySelector('#login').addEventListener('click', signIn)

function signIn(){
  const userName = document.querySelector("#userName").value;
  console.log('hih')
  window.location.href='/messaging.html'
  
}

// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?student=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
// }