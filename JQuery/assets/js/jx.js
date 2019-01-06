/* =================================##==================================
# ULTRA CODEX MODELING 							#
# AJAX SYS-LAYER LOADER 		   			#
#	AUTOR: 	Z=OM 											#
# EMAIL: 	eric@citygeist.de 				#
# VERSION: 	3.0					   					#
# LAUNCH: 	2012										#
#==================================================================== */

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
function LDL(){
    if (xmlHttpObject.readyState == 4){
		var GetXON = xmlHttpObject.GetXIN;
		document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
    }
}

/* MODUL */
function LM(M){
	var M 			= M;
	/*
	var ID_MOD 			= ID_MOD;
	var ID_LOD 			= ID_LOD;
	var ID_EXE 			= ID_EXE;
	var ID_SLCT			= ID_SLCT;

	if(typeof ID_MOD	== 'undefined'){	ID_MOD 		= '0';	}
	if(typeof ID_LOD 	== 'undefined'){	ID_LOD 		= '0';	}
	if(typeof ID_EXE 	== 'undefined'){	ID_EXE 		= '0';	}
	if(typeof ID_SLCT 	== 'undefined'){	ID_SLCT 	= '0';	}

	if((ID_EXE == '1') && (ID_LOD != '1')){
		var ID_SLCT 		= window.document.vw_3.slct_sql.value;
		var sndX='ID_MOD='+ID_MOD+'&ID_LOD='+ID_LOD+'&ID_EXE='+ID_EXE+'&ID_SLCT='+ID_SLCT;
	}
	else{
		var sndX='ID_MOD='+ID_MOD+'&ID_LOD='+ID_LOD+'&ID_EXE='+ID_EXE+'&ID_SLCT='+ID_SLCT;
	}
	*/
	var sndX='M='+M;
  xmlHttpObject.open('post','',true);
	xmlHttpObject.GetXIN = 'html';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttpObject.onreadystatechange = LDL;
	xmlHttpObject.send(sndX);
		
}

function ID(ID_MOD){	LM(ID_MOD,'1','0','0'); }
function DB(){ LM('0','0','0','0'); }

/* #===================================================================# */

function dore(){
	alert('MYF');
	document.getElementById('MYF').submit();
}

function CRY(){
	alert('hi');
}
