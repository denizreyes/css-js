
function dropdown(id){
  let dropsMenu = document.getElementsByClassName("dropdown-menu");
  
  for (let i = 0; i < dropsMenu.length; i++) {
    if(dropsMenu[i].classList.value === 'dropdown-menu active'){
      if(dropsMenu[i].id !== `dw${id}`)
        dropsMenu[i].classList.toggle('active')
    }
  }

  document.getElementById(`dw${id}`).classList.toggle('active')
}