var socket = io.connect()
function setstatus(text){
    document.querySelector("#status").textContent = String(text)
}
window.addEventListener('deviceorientation', function(event) {
    const { alpha, beta, gamma } = event
    setstatus(`alpha=${alpha} beta=${beta} gamma=${gamma}`)
    // socket.emit('sensor', {alpha,beta,gamma})
  })
  function sendevent(){
      socket.emit('sensor',"hello")
      setstatus("hello")
  }
//   setstatus("hello")
