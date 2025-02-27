import Cone from "../model/Cone.js"

describe("Testes da classe Cone", () => {
    test("Teste da área total do Cone", () => {
        const raio = 3;
        const altura = 4;
        const geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
        const areaTotalEsperada = (Math.PI * Math.pow(raio, 2)) + (Math.PI * raio * geratriz);
        const cone = new Cone(raio, altura);

        expect(cone.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada, 2);
    });
    test("Teste do volume do Cone", () => {
        const raio = 3;
        const altura = 4;
        const volumeEsperado = (Math.PI * Math.pow(raio, 2) * altura) / 3;
        const cone = new Cone(raio, altura);

        expect(cone.calcularVolume()).toBeCloseTo(volumeEsperado, 2);
    });
});
