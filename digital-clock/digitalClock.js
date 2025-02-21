const clock = document.querySelector('#clock');

//setInterval will run this function after given milliseconds (here 10ms)
setInterval(()=>{
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
},10);