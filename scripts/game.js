//Variables
//Gets the variables from receive.js
var t = team, m = match, a = alli;

var taz = 0, caz = 0, tsaz = 0, cc = 0;

var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;

var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

var nic = 0;

var co1 = 0, co2 = 0, c03 = 0, c04 = 0;

function mainTele(){
   //Obtain the components
   var to1 = document.getElementById('t1'),
       to2 = document.getElementById('t2'),
       to3 = document.getElementById('t3'),
       to4 = document.getElementById('t4'),
       to5 = document.getElementById('t5'),
       to6 = document.getElementById('t6'),
       ca1 = document.getElementById('c1'),
       ca2 = document.getElementById('c2'),
       ca3 = document.getElementById('c3'),
       ca4 = document.getElementById('c4'),
       ca5 = document.getElementById('c5'),
       ca6 = document.getElementById('c6'),
       nC = document.getElementById('nCan');
   
   //Set the values
   t1 = isTrue(to1.checked);
   t2 = isTrue(to2.checked);
   t3 = isTrue(to3.checked);
   t4 = isTrue(to4.checked);
   t5 = isTrue(to5.checked);
   t6 = isTrue(to6.checked);
   c1 = isTrue(ca1.checked);
   c2 = isTrue(ca2.checked);
   c3 = isTrue(ca3.checked);
   c4 = isTrue(ca4.checked);
   c5 = isTrue(ca5.checked);
   c6 = isTrue(ca6.checked);
   nic = isTrue(nC.checked);
   
   //Set them back to unchecked
   to1.checked = false;
   to2.checked = false;
   to3.checked = false;
   to4.checked = false;
   to5.checked = false;
   to6.checked = false;
   ca1.checked = false;
   ca2.checked = false;
   ca3.checked = false;
   ca4.checked = false;
   ca5.checked = false;
   ca6.checked = false;
   nC.checked = false; 
}
function isTrue(b){
   if(b){
      return 1;
}
  return 0;
}