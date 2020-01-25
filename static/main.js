
function setStatus(text) {
  document.querySelector('#status').textContent = String(text)
}
window.addEventListener('deviceorientation', function(event) {
  const {alpha,beta,gamma} = event
  setStatus(`alpha = ${alpha} beta=  ${beta} gamma = ${gamma}`)
},true)
