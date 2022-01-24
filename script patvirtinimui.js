var vardas=sessionStorage.getItem('vardas');
document.getElementById('vardas').innerHTML='Kliento vardas: '+vardas;
var pavarde=sessionStorage.getItem('pavarde');
document.getElementById('pavarde').innerHTML='Kliento pavarde: '+pavarde;
var email=sessionStorage.getItem('email');
document.getElementById('email').innerHTML='Kontaktinis el. paštas: '+email;
var telnr=sessionStorage.getItem('telnr');
document.getElementById('telnr').innerHTML='Kontaktinis numeris: '+telnr;
var amzius=sessionStorage.getItem('amzius');
var random=Math.floor(Math.random()*3);
var nuolaida=0;
var x=0;
var trukme;
const kainorastis=[ 
  ['Pirminė apžiūra', 1], 
  ['Keitimas su savo dalimis', 2], 
  ['Keitimas neorg. dalimis', 4],
  ['Keitimas org. dalimis', 10],
]

//SF kodo generavimas 
function generuoti(){
var x=Math.floor(Math.random*10000);
document.getElementById('headeris').innerHTML='Sąskaita Faktūra Nr.: '+x}

document.getElementById('amzius').innerHTML='Asmeninė nuolaida jums nuo pateiktos kainos: '+nuolaida+' %';

while(x<amzius){
x+=2;
nuolaida++;}

//Uzimtumo funkcija.
debugger;
for( let j=0;j<kainorastis.length;j++){
  for(let k=0;k<kainorastis[j].length;k++){
    if(j == random){
      trukme=kainorastis[j][k];
    }
  }
}
console.log(trukme);