const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => { expect(divisao(10, 2)).toBe(5); expect(() => divisao(5, 0)).toThrow();});
  test('NOVO - 4.1 deve lançar erro com a mensagem correta para divisão por zero', () => { expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.'); });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('NOVO - 6.1 deve retornar 0 para n = 0', () => { expect(raizQuadrada(0)).toBe(0); });
  test('NOVO - 6.2 deve lançar erro para número negativo', () => { expect(() => raizQuadrada(-9)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('NOVO - 8.1 deve lançar erro para número negativo', () => { expect(() => fatorial(-5)).toThrow('Fatorial não é definido para números negativos.'); });
  test('NOVO - 8.2 deve retornar 1 para n = 0', () => { expect(fatorial(0)).toBe(1); });
  test('NOVO - 8.3 deve retornar 1 para n = 1', () => { expect(fatorial(1)).toBe(1); });
  test('NOVO - 8.4 deve retornar 6 para n = 3', () => { expect(fatorial(3)).toBe(6); });
  test('NOVO - 8.5 deve retornar 2 para n = 2 (primeiro caso com loop)', () => { expect(fatorial(2)).toBe(2); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('NOVO - 9.1 deve retornar 0 para array vazio', () => { expect(mediaArray([])).toBe(0); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('NOVO - 11.1 deve lançar erro ao buscar valor máximo em array vazio', () => { expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.'); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('NOVO - 12.1 deve lançar erro ao buscar valor mínimo em array vazio', () => { expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.'); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('NOVO - 15.1 deve retornar false para um número ímpar', () => { expect(isPar(3)).toBe(false); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('NOVO - 16.1 deve retornar false para um número par', () => { expect(isImpar(4)).toBe(false); });
  test('NOVO - 16.2 deve retornar false para zero', () => { expect(isImpar(0)).toBe(false); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('NOVO - 33.1 deve retornar false para n = 1', () => { expect(isPrimo(1)).toBe(false); });
  test('NOVO - 33.2 deve retornar false para n = 0', () => { expect(isPrimo(0)).toBe(false); });
  test('NOVO - 33.3 deve retornar false para n negativo', () => { expect(isPrimo(-5)).toBe(false); });
  test('NOVO - 33.4 deve retornar true para número primo maior que 2', () => { expect(isPrimo(7)).toBe(true); });
  test('NOVO - 33.5 deve retornar false para número composto maior que 2', () => { expect(isPrimo(9)).toBe(false); });
  test('NOVO - 33.6 deve retornar false para número par maior que 2', () => { expect(isPrimo(4)).toBe(false); });
  test('NOVO - 33.7 deve retornar false para número composto múltiplo de 3', () => { expect(isPrimo(6)).toBe(false); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('NOVO - 35.1 deve retornar 1 quando o array estiver vazio', () => { expect(produtoArray([])).toBe(1); });
  test('NOVO - 35.2 deve retornar 1 e não lançar erro quando o array estiver vazio', () => { expect(() => produtoArray([])).not.toThrow();expect(produtoArray([])).toBe(1);});
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('NOVO - 36.1 deve retornar min quando valor for menor que min', () => { expect(clamp(2, 5, 10)).toBe(5); });
  test('NOVO - 36.2 deve retornar o próprio valor quando valor for igual a min', () => { expect(clamp(5, 5, 10)).toBe(5); });
  test('NOVO - 36.3 deve retornar max quando valor for maior que max', () => { expect(clamp(15, 5, 10)).toBe(10); });
  test('NOVO - 36.4 deve retornar o próprio valor quando valor for igual a max', () => { expect(clamp(10, 5, 10)).toBe(10); });
  test('NOVO - 36.5 deve retornar exatamente o valor passado quando valor for igual a min', () => { const valor = new Number(5); const min = 5; expect(clamp(valor, min, 10)).toBe(valor);});
  test('NOVO - 36.6 deve retornar exatamente o valor passado quando valor for igual a max', () => { const valor = new Number(10); const max = 10; expect(clamp(valor, 5, max)).toBe(valor);  });
  test('NOVO - 36.5.1 deve retornar exatamente o valor passado quando valor for igual a min.', () => { const valor = new Number(5); const min = 5; expect(clamp(valor, min, 10)).toBe(valor); });
  test('NOVO - 36.6.1 deve retornar exatamente o valor passado quando valor for igual a max', () => { const valor = new Number(10);const max = 10; expect(clamp(valor, 5, max)).toBe(valor); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('NOVO - 37.1 deve retornar false quando não for divisível', () => { expect(isDivisivel(10, 3)).toBe(false); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('NOVO - 38.1 deve converter 100°C para 212°F', () => { expect(celsiusParaFahrenheit(100)).toBe(212); }); 
  test('NOVO - 38.2 deve converter 20°C para 68°F', () => { expect(celsiusParaFahrenheit(20)).toBe(68); });
  test('NOVO - 38.3 deve converter 37°C para 98.6°F', () => { expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 5); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('NOVO - 39.1 deve converter 212°F para 100°C', () => { expect(fahrenheitParaCelsius(212)).toBe(100); }); 
  test('NOVO - 39.2 deve converter 68°F para 20°C', () => { expect(fahrenheitParaCelsius(68)).toBe(20); });
  test('NOVO - 39.3 deve converter 98.6°F para 37°C', () => { expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37, 5); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  test('NOVO - 40.1 deve lançar erro ao inverter zero', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); }); 
  test('NOVO - 40.2 deve calcular o inverso de um número não-zero', () => { expect(inverso(4)).toBe(0.25); });
  test('NOVO - 40.3 deve calcular o inverso de um número negativo', () => { expect(inverso(-4)).toBeCloseTo(-0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('NOVO - 44.1 deve retornar false quando a < b', () => { expect(isMaiorQue(2, 7)).toBe(false); }); 
  test('NOVO - 44.2 deve retornar false quando a == b (fronteira > vs >=)', () => { expect(isMaiorQue(5, 5)).toBe(false); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('NOVO - 45.1 deve retornar false quando a > b', () => { expect(isMenorQue(7, 2)).toBe(false); }); 
  test('NOVO - 45.2 deve retornar false quando a == b (fronteira < vs <=)', () => { expect(isMenorQue(5, 5)).toBe(false); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('NOVO - 46.1 deve retornar false quando a !== b', () => { expect(isEqual(7, 8)).toBe(false); }); 
  test('NOVO - 46.2 deve usar igualdade estrita (tipos diferentes não são iguais)', () => { expect(isEqual('7', 7)).toBe(false); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('NOVO - 47.1 deve calcular a mediana de um array par e ordenado', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5);});
  test('NOVO - 47.2 deve lançar erro para array vazio', () => { expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');});
  test('NOVO - 47.3 deve calcular a mediana de um array ímpar não ordenado', () => { expect(medianaArray([5, 1, 3, 2, 4])).toBe(3);});
  test('NOVO - 47.4 deve calcular a mediana de um array par não ordenado', () => { expect(medianaArray([4, 1, 3, 2])).toBe(2.5);});
  test('NOVO - 47.5 deve calcular a mediana corretamente com números negativos e positivos não ordenados', () => { expect(medianaArray([-2, 4, 1, 3])).toBe(2); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});