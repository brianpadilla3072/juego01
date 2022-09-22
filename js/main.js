const validar =(nombre)=>{
let nom = nombre;
if(nombre =="Andrés De Leo" ){
    document.getElementById('pantallaUno').style.display="none"
    document.getElementById('ganador').style.display="block"
}else{
    document.getElementById('pantallaUno').style.display="none"
    document.getElementById('perdedor').style.display="block"
    
}
}

const VoverIntentar = ()=>{
    document.getElementById('perdedor').style.display="none"
    document.getElementById('pantallaUno').style.display="block"
    
}

  const entrar = ()=>{
    document.getElementById('autenticacion').style.display="none"
    document.getElementById('pantallaUno').style.display="block"
}