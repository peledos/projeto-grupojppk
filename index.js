import Cilindro from "./model/Cilindro.js"
import Cone from "./model/Cone.js"
document.getElementById("calcularCilindro").addEventListener("click", ()=>{
    let cilindroCalcular = new Cilindro(document.getElementById("raio_cilindro").value,document.getElementById("altura_cilindro").value)
    document.getElementById("resCilindro").innerHTML = `Área Total = ${cilindroCalcular.calcularAreaTotal().toFixed(2)} <br> Volume = ${cilindroCalcular.calcularVolume().toFixed(2)}`
})
document.getElementById("calcularCone").addEventListener("click", ()=>{
    let coneCalcular = new Cone(document.getElementById("raio_cone").value,document.getElementById("altura_cone").value)
    document.getElementById("resCone").innerHTML = `Área Total = ${coneCalcular.calcularAreaTotal().toFixed(2)} <br> Volume = ${coneCalcular.calcularVolume().toFixed(2)}`
})