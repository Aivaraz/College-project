document.getElementById("mygtukas").addEventListener("click", validation());

function validation(){
  var vardas=document.getElementById('name').value;
  sessionStorage.setItem('vardas',vardas);
  var pavarde=document.getElementById('lname').value;
  sessionStorage.setItem('pavarde',pavarde);
  var email=document.getElementById('email').value;
  sessionStorage.setItem('email',email);
  var telnr=document.getElementById('number').value;
  sessionStorage.setItem('telnr',telnr);
  var amzius=document.getElementById('age').value;
  sessionStorage.setItem('amzius',amzius);

  const url = "../puslapiai/isprintintaslapas.html";
  var paslaugosPasirinkimas=document.getElementById('sell');
  var paslaugosReiksme=paslaugosPasirinkimas.options[paslaugosPasirinkimas.selectedIndex].text;
  var remontoTipas=document.getElementById('type');
  var remontoKaina=remontoTipas.options[remontoTipas.selectedIndex].text;

if(document.getElementById('accept').checked){
    alert(pasirinkimas1(paslaugosReiksme)); alert(pasirinkimas2(remontoKaina)); redirect();}
else if(document.getElementById('decline').checked){
    alert('Neturėdami jūsų duomenų negalime priimti jūsų registracijos :(')}
    
function pasirinkimas1(paslaugosReiksme){
  const paslaugos=['Lyčio baterija','Vyriai','Klaviatūra',
  'Garso mygtukai','LCD panelė','Liečiamas ekranas',
  'Galinė nugarėlė','Vandens pažeidimai','Kameros stikliukas'];
  for(let i=0;i<paslaugos.length;i++){
    if(paslaugos[i]==paslaugosReiksme){
      var paslauga=paslaugos[i];
        return paslauga;}}}

function pasirinkimas2(remontoKaina){
    switch(pasirinkimas1(paslaugosReiksme)){
    case 'Lyčio baterija':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '5eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '10eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '18eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '18eur';
      }
      break;
    case 'Vyriai':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '10eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '13eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '18eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '18eur';
      }
      break;
    case 'Klaviatūra':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '5eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '20eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '30eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '50eur';
      }
      break;
    case 'Garso mygtukai':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '5eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '10eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '15eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '25eur';
      }
      break;
    case 'LCD panelė':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '30eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '30eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '50-80eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '100-400eur';
      }
      break;
    case 'Liečiamas ekranas':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '30eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '30eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '70-130eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '200-500eur'
      }
      break;
    case 'Galinė nugarėlė':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '10eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '20eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '30-240eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '100-540eur';
      }
      break;
    case 'Vandens pažeidimai':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '50eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '50eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '50eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '50eur';
      }
      break;
    case 'Kameros stikliukas':
      if(remontoKaina == 'Pirminė apžiūra'){
        return '10eur';
      }
      else if(remontoKaina =='Keitimas su savo dalimis'){
        return '20eur';
      }
      else if(remontoKaina =='Keitimas neorg. dalimis'){
        return '30-240eur';
      }
      else if(remontoKaina =='Keitimas org. dalimis'){
        return '100-540eur'; 
      }
      break;
    }}
      
function redirect() {
  window.location.href = url;}

}

function handleImageUpload() 
{
var image = document.getElementById("upload").files[0];
var reader = new FileReader();
reader.onload = function(e) {
  document.getElementById("display-image").src = e.target.result;
}
reader.readAsDataURL(image);} 

