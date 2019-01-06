/* =================================##==================================
#-----------------------------------#
# ULTRA CODEX MODELING 				#
# AJAX SYS-LAYER LOADER 		   	#
#									#
# AUTOR: 	Z=OM 					#
# EMAIL: 	eric@citygeist.de 		#
# VERSION: 	3.0					   	#
# LAUNCH: 	07.08.2017				#
#									#
#-----------------------------------#
#====================================================================*/

/* INIT */
var xmlHttpObject = false;
if (typeof XMLHttpRequest != 'undefined') { xmlHttpObject = new XMLHttpRequest();}
if (!xmlHttpObject) {
    try { xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP");}
    catch(e) {
        try { xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");}
        catch(e) { xmlHttpObject = null; }
    }
}

/* LAYER */
function LDI(){
    if (xmlHttpObject.readyState == 4){
		var GetXON = xmlHttpObject.GetXIN;
		document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
    }
}

/* MODUL */
function LM(IDMOD,IDLOD,IDEXE){
	alert();
	var IDMOD 			= IDMOD;
	var IDLOD 			= IDLOD;
	var IDEXE 			= IDEXE;

    xmlHttpObject.open('post','',true);
	xmlHttpObject.GetXIN = 'html';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	var sndX='IDMOD='+IDMOD+'&IDLOD='+IDLOD+'&IDEXE='+IDEXE;
    xmlHttpObject.send(sndX);
}
/*#===================================================================*/


function LMI(VG,ZG,VREG){

	var v 			= VG;
	var z 			= ZG;
	var VRE			= VREG;
	
	alert(v);
	// alert('HI');
	var seitenX		= '';
    xmlHttpObject.open('post', seitenX, true);
	if(v == '9999' || v == '999999')
		{xmlHttpObject.GetXIN = 'html';}
	else{xmlHttpObject.GetXIN = 'wrapper';}
	
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	/* var sndX='v='+v+'&z='+z+'&wX=1'; */
	var sndX='v='+v+'&z='+z+'&VRE='+VRE;
    xmlHttpObject.send(sndX);
}

/* LOAD WORKAREA AND FORM */
function nv_wrk_X(v1,v2,v3){
	// alert('JO');
	var v1 			= v1;
	var v2 			= v2;
	var v3 			= v3;
		
	var seitenX		= '';
    xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.GetXIN = 'WORKAREA';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	if(v3 == 'OFF'){
		var v4 = window.document.vw_3.slct_sql.value;
		// alert(v4);
		var sndX='W1='+v1+'&v='+v2+'&z=3&S='+v4;
		xmlHttpObject.GetXIN = 'WORKAREA';
	}
	else{
		var sndX='W1='+v1+'&v='+v2+'&z=2';
		// xmlHttpObject.GetXIN = 'WORKAREA';
	}
    xmlHttpObject.send(sndX);	
}



/* LOGOUT SYSTEM */
function ENDE(){
	alert();
	var seitenX		= '';
    xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.GetXIN = 'html';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	var sndX='v=999999&VRE=1';
    xmlHttpObject.send(sndX);	
}

/* ############################################################# */
/* DO SQL */
function DOSQL(v){
	var v1 = v;
	var seitenX 	= '';
	xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.GetXIN = 'wrapper';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	var sndX='wX=1&v='+v1+'&z=1';
    xmlHttpObject.send(sndX);
}

function DOEVENT(x,yq){

	var X 	= x;
	var YQ 	= yq;
	// alert(' AKTUELL X-> '+X);
	
	if(X == 2 && YQ == 'UP'){
		var SFID = 'SFXN1';
			var Y = 2;
			// alert('JO');
	}
	else{
		if(YQ == 'UP'){
			var Y = (X-1);
			
			var SFID = 'SFXN'+Y;
			// alert('SID = '+SFID);
		}
		if(YQ == 'DW'){
			var Y = X;
			// Y++;
			// alert('$$ - '+Y);
			
			var SFID = 'SFXN'+Y;
			// 	alert('SID = '+SFID);
			X=Y;
			
		}		
	}
	// var SFID = 'SFXN1';
	var VNAME 	= document.getElementById(SFID).selectedIndex;
	var VNAMEG 	= document.getElementById(SFID).options[VNAME].value;
	// var XXX = window.getSelection;
	// alert('VALUE : '+VNAMEG);
	// alert(X);
	
	var seitenX 	= '';
	xmlHttpObject.GetXIN = 'KICK'+X;	
	var sndX='VRE=3&XZY='+X+'&FIDY='+VNAMEG+'&YQ='+YQ;

	xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
    xmlHttpObject.send(sndX);
}

function DOWORK(x){
	var x 	= x;
	// alert(x);

	// var VNAME 	= document.getElementById(SFID).selectedIndex;
	// var VNAMEG 	= document.getElementById(SFID).options[VNAME].value;
	// var VNAMEG = 'A';
	var seitenX 	= '';
	xmlHttpObject.GetXIN = 'PRE_FRM';	
	var sndX='VRE=4&FIDY='+x;
	
	
	xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
    xmlHttpObject.send(sndX);	
}
function DOYOU(){
	var v = window.document.fY.D1.value;
}
/* ####################################### */
/* ## TIMER FUNCTION FOR NACHRICHTEN ## */
/*
var LoaDTimeR;
function myfunction(){
	LoaDTimeR = setInterval(alertFUNC, 3000);
}
function alertFUNC(){
	var seitenX = 'refresh.php';
    xmlHttpObject.open('get', seitenX);
	xmlHttpObject.GetXIN = 'nachrichten';
    xmlHttpObject.onreadystatechange = hnd_MSG;
    xmlHttpObject.send(null);
}
function hnd_MSG()
{
    if (xmlHttpObject.readyState == 4)
    {
	var GetXON = xmlHttpObject.GetXIN;
    document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
    }
}

function CLSX(){
	var seitenX		= '';
    xmlHttpObject.open('post', seitenX, true);
	xmlHttpObject.GetXIN = 'html';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObject.onreadystatechange = LDI;
	var sndX='v=9999';
    xmlHttpObject.send(sndX);	
}

*/
/* ####################################### */


	function alertyou() 
	{
	
		/* document.getElementById("FV_NAMEX").value= "FUCK YOU"; */

		var VNAME = document.getElementById("FV_NAME").value;
// 	var VNAME = "WASS"	;
		// var seitenX 	= 'test.php';
		var seitenX 	= '';
		xmlHttpObject.open('post', seitenX, true);
		xmlHttpObject.GetXIN = 'FV_NAMEX';
		xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlHttpObject.onreadystatechange = LDI;
		var sndX='VRE=2&A='+VNAME;
		xmlHttpObject.send(sndX);
	
	}