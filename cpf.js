const cpf = "705.484.450-52";

const cpfTeste = (cpf) => {
  const observeCpf = cpf.replace(/\D+/g, '');
  
  const newCpf = Array.from(observeCpf)
  newCpf.splice(-2, 2)

  return newCpf
};


const transformaNumber = (arr) => {
  return  arr.reduce((ac, value) => ac + Number(value))
}

const calculoPrimeiroESegundoNumero = (cpf, count,count2) => {

  const cpfprimeironumero = cpf.map(value => {
    value = value * count
    count-- 
    return value
  }).reduce((ac, value) => ac + value)

  const primeiro = 11-(cpfprimeironumero % 11)

  cpf.push(primeiro)


  const segundoNumero = cpf.map(value => {
    value = value * (count2)
    count2--
    return value
  }).reduce((ac, value) => ac+ value)

  const segundo = 11-(segundoNumero % 11)

  cpf.push(segundo)
  
  return  cpf 
}

const testandoCpf = cpfTeste(cpf); 

const fcpf = transformaNumber(calculoPrimeiroESegundoNumero(testandoCpf, 10,11))


if(cpf.replace(/\D+/g, '') === fcpf) {
  return console.log('o cpf esta correto')
}

console.log('o cpf esta errado')






