function conversion(){
	
	var cantidad=  parseFloat($("#cantidad").val());
	var destino= parseFloat($("#destino").val());
	var moneda= parseFloat($("#moneda").val()); 
	var resultado = (moneda*cantidad)/destino;
	resultado = resultado.toFixed(2);

	$("#resultado").html(resultado);
}
function cambiar(){
	
	var destino= $("#destino" ).val();
	var moneda= $("#moneda" ).val();
	
	$("#destino").val(moneda);
	$("#moneda").val(destino);
	
	conversion();
	

}

$("#cambiar").click(cambiar);

$("#cantidad").change(conversion);
$("#destino").change(conversion);
$("#moneda").change(conversion);

function USA(){
	
	var src = $("#USA").attr("value");
	$("#euro").attr("src",src);
	
}

$("#USA").hover(USA);
function Japan(){
	
	var src = $("#Japan").attr("value");
	$("#euro").attr("src",src);
}

$("#Japan").hover(Japan);

function Eurozone(){
	
	var src = $("#Eurozone").attr("value");
	$("#euro").attr("src",src);
}

$("#Eurozone").hover(Eurozone);

function wei(){
	
	var src = $("#wei").attr("value");
	$("#euro").attr("src",src);
}

$("#wei").hover(wei);
function kingkong(){
	
	var src = $("#kingkong").attr("value");
	$("#euro").attr("src",src);
}

$("#kingkong").hover(kingkong);