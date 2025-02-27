import Cilindro from "../model/Cilindro.js"
describe("Testes da classe Cilindro", ()=>{
    test("Teste da área total do Cilindro", ()=>{
        const raio = 3
        const altura = 4
        const areaTotalEsperada = (2 * Math.PI * raio * altura) + (2 * Math.PI * Math.pow(raio,2))
        const cilindro = new Cilindro(raio,altura)

        expect(cilindro.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })
    test("Teste do volume do Cilindro", ()=>{
        const raio = 3
        const altura = 4
        const volumeEsperado = Math.PI * Math.pow(raio,2) * altura
        const cilindro = new Cilindro(raio,altura)

        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})