export default class Cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }
    calcularGeratriz(){
        return Math.sqrt(Math.pow(this.raio,2) + Math,pow(this.altura,2))
    }
    calcularVolume(){
        return (Math.PI * Math.pow(this.raio,2) * this.altura) / 3
    }
    calcularAreaTotal(){
        return (Math.PI * Math.pow(this.raio,2)) + (Math.PI * this.raio * this.calcularGeratriz())
    }
}