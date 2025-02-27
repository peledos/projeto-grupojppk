import Cilindro from "./model/Cilindro.js"
import Cone from "./model/Cone.js"
document.getElementById("calcularCilindro").addEventListener("click", ()=>{
    let cilindroCalcular = new Cilindro(document.getElementById("raio_cilindro"),document.getElementById("altura_cilindro"))
    document.getElementById("resCilindro").innerHTML = `Área Total = ${cilindroCalcular.calcularAreaTotal()} <br> Volume = ${cilindroCalcular.calcularVolume()}`
})
document.getElementById("calcularCone").addEventListener("click", ()=>{
    let coneCalcular = new Cone(document.getElementById("raio_cone"),document.getElementById("altura_cone"))
    document.getElementById("resCone").innerHTML = `Área Total = ${coneCalcular.calcularAreaTotal()} <br> Volume = ${coneCalcular.calcularVolume()}`
})