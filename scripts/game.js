//Variables
//Gets the variables from receive.js
var t = team, m = match, a = alli;

var roboAuto = 0;

var taz = 0, caz = 0, tsaz = 0, cc = 0;

var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;

var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

var nic = 0;

var co1 = 0, co2 = 0, c03 = 0, c04 = 0;

var notes = "";




function mainTele(){
   var to1 = document.getElementById('t1');
   var to2 = document.getElementById('t2');
   var to3 = document.getElementById('t3');
   var to4 = document.getElementById('t4');
   var to5 = document.getElementById('t5');
   var to6 = document.getElementById('t6');
   var ca1 = document.getElementById('c1');
   var ca2 = document.getElementById('c2');
   var ca3 = document.getElementById('c3');
   var ca4 = document.getElementById('c4');
   var ca5 = document.getElementById('c5');
   var ca6 = document.getElementById('c6');
   var nC = document.getElementById('nCan');
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
function reset(){
   var rA = document.getElementById('robo-auto');
   var tA = document.getElementById('toteAuto');
   var cA = document.getElementById('conAuto');
   var tsa = document.getElementById('toteStack');
   var cCen = document.getElementById('conCen');
   var to1 = document.getElementById('t1');
   var to2 = document.getElementById('t2');
   var to3 = document.getElementById('t3');
   var to4 = document.getElementById('t4');
   var to5 = document.getElementById('t5');
   var to6 = document.getElementById('t6');
   var ca1 = document.getElementById('c1');
   var ca2 = document.getElementById('c2');
   var ca3 = document.getElementById('c3');
   var ca4 = document.getElementById('c4');
   var ca5 = document.getElementById('c5');
   var ca6 = document.getElementById('c6');
   var nC = document.getElementById('nCan');
   var coo1 = document.getElementById('co1');
   var coo2 = document.getElementById('co2');
   var coo3 = document.getElementById('co3');
   var coo4 = document.getElementById('co4');
   var not = document.getElementById('notesBox');
   var tro = document.getElementById('troub');
   //Set them back to unchecked
   rA.checked = false;
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
   coo1.checked = false;
   coo2.checked = false;
   coo3.checked = false;
   coo4.checked = false;
   tro.checked = false;
   //sets the fields back to nothing
   tA.value = "";
   cA.value = "";
   tsa.value = "";
   cCen.value = "";
}

}