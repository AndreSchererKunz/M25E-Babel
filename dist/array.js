"use strict";

var alunos = [{
  nome: 'Gian',
  nota: 10
}, {
  nome: 'João',
  nota: 9
}, {
  nome: 'Andreia',
  nota: 8
}, {
  nome: 'Igor',
  nota: 7
}, {
  nome: 'Tobias',
  nota: 6
}, {
  nome: 'Araci',
  nota: 5
}, {
  nome: 'Aline',
  nota: 4
}, {
  nome: 'Lucas',
  nota: 3
}, {
  nome: 'Angélica',
  nota: 2
}, {
  nome: 'Rafael',
  nota: 1
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);