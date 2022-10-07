//EVENTOS O FUNCIONALIDADES PARA TABLA GASTOS



//Funcion limpiar campos del formulario

function limpiar_formulario(){
	//if (confirm("Esta seguro que desea limpiar el formulario?")){
		var campoTextoID = document.getElementById("codigo");
		var campoTextoNombre = document.getElementById("name");
		var campoTextoBrand = document.getElementById("brand");
		var campoTextoCategory_id = document.getElementById("category_id");
		var campoTextoModel = document.getElementById("model");
		
		campoTextoID.value = "";
		campoTextoNombre.value = "";
		campoTextoBrand.value = "";
		campoTextoCategory_id.value = "";
		campoTextoModel.value = "";
		
		//Otra forma de limpiar las cajas del html
		
		/*
		$("#codigo").val("");
		$("#name").val("");
		$("#fecha").val("");
		$("#valor").val("");
		$("#desc").val("");
		$("#user").val("");
		*/
	//}
}

function limpiar_formulario_cliente(){
	//if (confirm("Esta seguro que desea limpiar el formulario?")){
		/*var campoTextoID1 = document.getElementById("codigo1");
		var campoTextoNombre1 = document.getElementById("name1");
		var campoTextoEmail = document.getElementById("email");
		var campoTextoAge = document.getElementById("age");
		
		campoTextoID1.value = "";
		campoTextoNombre1.value = "";
		campoTextoEmail.value = "";
		campoTextoAge.value = "";
*/
        $("#codigo1").val("");
		$("#nombre").val("");
		$("#email").val("");
		$("#age").val("");
    //}
}

function limpiar_mensajes(){
	$("#idmsg").val("");
	$("#message").val("");
}

//Funcion (GET) consultar o traer toda la informacion o registro de la tabla gastos
function consultar_todo(){
    $.ajax({
        url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume",
        type:"GET",
        datatype:"json",
		
		error: function(xhr, status){
			alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
		},
		
		complete: function(xhr, status){
			alert('Resultado de comprobacion -- cod. estado: ' + xhr.status);
		},	
		
        success:function(json){
            //console.log(respuesta);
            //crearRespuestaGastos(respuesta.items)
			//alert("si")
			$("#resultado").empty();
			tabla = "<center> <table border='1'> <tr> <th>ID:</th> <th>NOMBRE:</th> <th>BRAND:</th> <th>CATEGORY_ID:</th> <th>MODEL:</th> </tr> </tr>"
			filas = ""
			for (i=0; i<json.items.length; i++){
				filas += "<tr>";
				filas += "<td>" + json.items[i].id + "</td>";
				filas += "<td>" + json.items[i].name + "</td>";
				filas += "<td>" + json.items[i].brand + "</td>";
				filas += "<td>" + json.items[i].category_id + "</td>";
				filas += "<td>" + json.items[i].model + "</td>";
				filas += "<td> <button onclick='borrar_registro("+json.items[i].id+")'>Borrar</button>";//se agrega el boton y este tiene la funcion borrar registro:
				//total += json.items[i].valor
				filas += "</tr>";
			}
			filas += "</table>"
			$("#resultado").append(tabla + filas + "</center>")
			console.log(json)	
        }

    });
}

function consultar_usuarios(){
    $.ajax({
        url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"json",
		
		error: function(xhr, status){
			alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
		},
		
		complete: function(xhr, status){
			alert('Resultado de comprobacion -- cod. estado: ' + xhr.status);
		},	
		
        success:function(json){
            //console.log(respuesta);
            //crearRespuestaGastos(respuesta.items)
			
			$("#resultado1").empty();
			tabla = "<center> <table border='1'> <tr> <th>ID:</th> <th>NOMBRE:</th> <th>EMAIL:</th> <th>AGE:</th> "
			filas = ""
			for (i=0; i<json.items.length; i++){
				filas += "<tr>";
				filas += "<td>" + json.items[i].id + "</td>";
				filas += "<td>" + json.items[i].name + "</td>";
				filas += "<td>" + json.items[i].email + "</td>";
				filas += "<td>" + json.items[i].age + "</td>";
				filas += "<td> <button onclick='borrar_usuario("+json.items[i].id+")'>Borrar</button>";//se agrega el boton y este tiene la funcion borrar registro:
				//total += json.items[i].valor
				filas += "</tr>";
			}
			filas += "</table>"
			$("#resultado1").append(tabla + filas + "</center>")
			console.log(json)
			
			
        }

    });
}

function consultar_mensajes(){
    $.ajax({
        url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"json",
		
		error: function(xhr, status){
			alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
		},
		
		complete: function(xhr, status){
			alert('Resultado de comprobacion -- cod. estado: ' + xhr.status);
		},	
		
        success:function(json){
            //console.log(respuesta);
            //crearRespuestaGastos(respuesta.items)
			
			$("#resultado2").empty();
			tabla = "<center> <table border='1'> <tr> <th>ID:</th> <th>MENSAJE:</th>"
			filas = ""
			for (i=0; i<json.items.length; i++){
				filas += "<tr>";
				filas += "<td>" + json.items[i].id + "</td>";
				filas += "<td>" + json.items[i].messagetext + "</td>";
				filas += "<td> <button onclick='borrar_mensaje("+json.items[i].id+")'>Borrar</button>";//se agrega el boton y este tiene la funcion borrar registro:
				//total += json.items[i].valor
				filas += "</tr>";
			}
			filas += "</table>"
			$("#resultado2").append(tabla + filas + "</center>")
			console.log(json)
			
			
        }

    });
}

//Otra forma de construir la anterior consultar o traer resultado de la tabla gastos es:
//Tiene que descomentar las lineas 20 y 21 de la funcion consultar o traer informacion
//Tambien eliminar todas las lineas de la 23 hasta la linea 41 y descomente esta funcion:

/* 
function crearRespuestaGastos(items){

    let myTable ="<table border='1'>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].nombre+"</td>";
        myTable+="<td>"+items[i].fecha+"</td>";
        myTable+="<td>"+items[i].valor+"</td>";
        myTable+="<td>"+items[i].descripcion+"</td>";
		myTable+="<td>"+items[i].nombre_usuario+"</td>";
        myTable+="<td> <button onclick='borrarElementoRoom("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
*/


function validarCampo(campoTexto){
	if(campoTexto.val() != ""){
		return true;
	}
	else{
		return false;
	}
}






//Funcion (POST) Registrar o Guardar toda la informacion en la tabla Gastos

function guardarInformacion(){
	
	if((!validarCampo($("#name"))==true)){
		alert("Debe ingresar el nombre");
		return;
	}
    if((!validarCampo($("#brand"))==true)){
		alert("Debe ingresar un brand");
		return;
	}
    if((!validarCampo($("#category_id"))==true)){
		alert("Debe ingresar una categoria");
		return;
	}
    if((!validarCampo($("#model"))==true)){
		alert("Debe ingresar un model");
		return;
	}
    
    //let id=$("#codigo").val();
    $.ajax({
        url: 'https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
		
		data: {
            brand : $("#brand").val(),
            model : $("#model").val(),
            category_id : $("#category_id").val(),
            name : $("#name").val()
            },
		
		type: 'POST',
		
		dataType: 'json',
		
				
        success:function(json){		
        },
		
		error: function(xhr, status){
			if(xhr.status == 200){
				console.log("registro guardado con exito");
			}
			else{
				console.log("Favor revise que los datos esten correctos");
			}
		},
		
		complete: function(xhr, status){
			alert('La peticion al servidor ha sido procesada con exito,' + xhr.status);
			limpiar_formulario();
			consultar_todo();
			
		},	
    });
}


function guardarUsuario(){
	
	if((!validarCampo($("#name1"))==true)){
		alert("Debe ingresar el nombre");
		return;
	}
    if((!validarCampo($("#email"))==true)){
		alert("Debe ingresar un email");
		return;
	}
    if((!validarCampo($("#age"))==true)){
		alert("Debe ingresar una edad");
		return;
	}
	
    $.ajax({
        url: 'https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
		
		data:{
			name: $("#nombre").val(),
			email: $("#email").val(),			
			age: $("#age").val()		
		},
		
		type: 'POST',
		
		dataType: 'json',
		
				
        success:function(json){		
        },
		
		error: function(xhr, status){
			if(xhr.status == 200){
				console.log("registro guardado con exito");
			}
			else{
				console.log("Favor revise que los datos esten correctos");
			}
		},
		
		complete: function(xhr, status){
			alert('La peticion al servidor ha sido procesada con exito,' + xhr.status);
			limpiar_formulario_cliente();
			consultar_usuarios();
			
		},	
    });
}

function guardarMensaje(){
	
    if((!validarCampo($("#message"))==true)){
		alert("Debe ingresar un mensaje");
		return;
	}
    $.ajax({
        url: 'https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
		data:{
			messagetext: $("#message").val()	
		},
		type: 'POST',
		dataType: 'json',	
        success:function(json){		
        },
		error: function(xhr, status){
			if(xhr.status == 200){
				console.log("registro guardado con exito");
			}
			else{
				console.log("Favor revise que los datos esten correctos");
			}
		},
		
		complete: function(xhr, status){
			alert('La peticion al servidor ha sido procesada con exito,' + xhr.status);
			limpiar_mensajes();
			consultar_mensajes();
			
		},	
    });
}


//Funcion (PUT) Editar o Actualizar registro de la tabla Gastos
function editar_Informacion(){
    if((!validarCampo($("#codigo"))==true)){
		alert("Debe ingresar el codigo");
		return;
	}
    if((!validarCampo($("#name"))==true)){
		alert("Debe ingresar el nombre");
		return;
	}
    if((!validarCampo($("#brand"))==true)){
		alert("Debe ingresar un brand");
		return;
	}
    if((!validarCampo($("#category_id"))==true)){
		alert("Debe ingresar una categoria");
		return;
	}
    if((!validarCampo($("#model"))==true)){
		alert("Debe ingresar un model");
		return;
	}
    let myData={
        id : $("#codigo").val(),
        brand : $("#brand").val(),
        model : $("#model").val(),
        category_id : $("#category_id").val(),
        name : $("#name").val()
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
	
	if (confirm("Está seguro de cambiar este registro:  " + $("#codigo").val() + "  ??")){
		
		$.ajax({
			url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume",
			type:"PUT",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			success:function(json){
				$("#resultado").empty();

				consultar_todo();
				alert("se ha realizado la Actualicion del registro correctamente")
			}
		});
	}
}

function editar_usuario(){
    if((!validarCampo($("#codigo1"))==true)){
		alert("Debe ingresar el codigo");
		return;
	}
    if((!validarCampo($("#nombre"))==true)){
		alert("Debe ingresar el nombre");
		return;
	}
    if((!validarCampo($("#email"))==true)){
		alert("Debe ingresar un email");
		return;
	}
    if((!validarCampo($("#age"))==true)){
		alert("Debe ingresar una edad");
		return;
	}
    let myData={
        id : $("#codigo1").val(),
        name : $("#nombre").val(),
        email : $("#email").val(),
        age : $("#age").val()
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
	
	if (confirm("Está seguro de cambiar este registro:  " + $("#codigo1").val() + "  ??")){
		
		$.ajax({
			url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
			type:"PUT",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			success:function(json){
				$("#resultado1").empty();

				consultar_usuarios();
				alert("se ha realizado la Actualicion del registro correctamente")
			}
		});
	}
}




//Funcion (DELETE) Borrar o Eliminar registro de la tabla Gastos
function borrar_registro(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
	//alert(dataToSend);
	
	if (confirm("Está seguro de eliminar el registro:  " + idElemento + "  ??")){
	
		$.ajax({
			url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume",
			type:"DELETE",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			
			success:function(respuesta){
				$("#resultado").empty();
				limpiar_formulario();
				consultar_todo();
				alert("El registro se ha Eliminado correctamente.")
				
			}
		});
	}
}

function borrar_usuario(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
	
	
	if (confirm("Está seguro de eliminar el registro:  " + idElemento + "  ??")){
	
		$.ajax({
			url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
			type:"DELETE",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			
			success:function(respuesta){
				$("#resultado1").empty();
				limpiar_formulario_cliente();
				consultar_usuarios();
				alert("El registro se ha Eliminado correctamente.")
				
			}
		});
	}
}

function borrar_mensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
	
	
	if (confirm("Está seguro de eliminar el registro:  " + idElemento + "  ??")){
	
		$.ajax({
			url:"https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
			type:"DELETE",
			data:dataToSend,
			contentType:"application/JSON",
			datatype:"JSON",
			
			success:function(respuesta){
				$("#resultado2").empty();
				limpiar_mensajes();
				consultar_mensajes();
				alert("El registro se ha Eliminado correctamente.")
				
			}
		});
	}
}


//Funcion (GET) para buscar o Consultar por ID

function consultaID(){
	if((!validarCampo($("#codigo")))==true){
		alert("Debe ingresar un ID")
	}
    
	else{
        //alert('https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/'+ $("#codigo").val())
		$.ajax({
			url: 'https://g94e4f3768d722f-ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/'+ $("#codigo").val(),
			
			type: 'GET',
			dataType: 'json',

			success: function(json){

				$("#resultado").empty();
                tabla = "<center> <table border='1'> <tr> <th>ID:</th> <th>NOMBRE:</th> <th>BRAND:</th> <th>CATEGORY_ID:</th> <th>MODEL:</th> </tr> </tr>"
                filas = ""
                for (i=0; i<json.items.length; i++){
                    filas += "<tr>";
                    filas += "<td>" + json.items[i].id + "</td>";
                    filas += "<td>" + json.items[i].name + "</td>";
                    filas += "<td>" + json.items[i].brand + "</td>";
                    filas += "<td>" + json.items[i].category_id + "</td>";
                    filas += "<td>" + json.items[i].model + "</td>";
                    filas += "<td> <button onclick='borrar_registro("+json.items[i].id+")'>Borrar</button>";//se agrega el boton y este tiene la funcion borrar registro:
                    //total += json.items[i].valor
                    filas += "</tr>";
                }
                filas += "</table>"
                $("#resultado").append(tabla + filas + "</center>")
                console.log(json)
				
			},

			error: function(xhr, status){
				alert('ha ocurrido un problema, Error: ' + xhr.status);
			},
			
			complete: function(xhr, status){
				alert('La peticion ha sido realizada,' + xhr.status);
				
			}		

		});
	}
}