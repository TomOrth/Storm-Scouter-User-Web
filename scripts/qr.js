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
$(document).ready(function(){
    $('#back').prop('disabled', true);
    $('#submit').click(function(){
   //Clears div
   $('#qrcode').html("");
   //Gets components
   var r = document.getElementById('robo-auto');
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
   
   //Set the values
   roboAuto = isTrue(r.checked);
   t1 += isTrue(to1.checked);
   t2 += isTrue(to2.checked);
   t3 += isTrue(to3.checked);
   t4 += isTrue(to4.checked);
   t5 += isTrue(to5.checked);
   t6 += isTrue(to6.checked);
   c1 += isTrue(ca1.checked);
   c2 += isTrue(ca2.checked);
   c3 += isTrue(ca3.checked);
   c4 += isTrue(ca4.checked);
   c5 += isTrue(ca5.checked);
   c6 += isTrue(ca6.checked);
   nic += isTrue(nC.checked);
   co1 = isTrue(coo1.checked);
   co2 = isTrue(coo2.checked);
   co3 = isTrue(coo3.checked);
   co4 = isTrue(coo4.checked);
   taz += tA.value;
   caz += cA.value;
   tsaz += tsa.value;
   cc += cCen.value;
   notes = not.value;
   
   
   if(taz === ""){taz = "0";}
   if(caz === ""){caz = "0";}
   if(tsaz === ""){tsaz = "0";}
   if(cc === ""){cc = "0"}
   if(notes === ""){notes = "No notes"}
   if(tro.checked){notes += " trouble with noodles"}
   //resets values
   reset();
   //Final qr string
   var value = String(t) + "," + String(m) + "," + String(a) + "," + String(roboAuto) + "," + String(taz) + "," + String(caz) + "," + String(tsaz) + "," +
               String(cc) + "," + String(t1) + "," + String(t2) + "," + String(t3) + "," + String(t4) + "," + String(t5) + "," + String(t6) + "," + 
               String(c1) + "," + String(c2) + "," + String(c3) + "," + String(c4) + "," + String(c5) + "," + String(c6) + "," + String(nic) + "," + String(co1) + 
               "," + String(co2) + "," + String(co3) + "," + String(co4) + "," + String(notes) + ":";
   console.log(co3);
      //Makes qr
      jQuery('#qrcode').qrcode(value);
      $("#back").prop("disabled", false);
      
  });
}); 
