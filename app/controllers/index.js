$(function () {
    listar_vehiculos();
});

function listar_vehiculos(){
    $.ajax({
        url: "app/models/no_normalizada/listar.php",
        method: "POST",
        data: {},
        dataType: "json",
    }).done(function (response) {
        if(response.success){
            let acum_cars = "";
            for(let i = 0; i < response.total; i++){
                acum_cars += 
                "<tr>"+
                    "<td>"+ (i+1) + "</td>"+
                    "<td>"+ response.data[i].marca + "</td>"+
                    "<td>"+ response.data[i].modelo  + "</td>"+
                    "<td>"+ response.data[i].fecha + "</td>"+
                    "<td>"+ response.data[i].tipo_vehiculo  + "</td>"+
                    "<td>"+ response.data[i].tipo_gasolina  + "</td>"+
                    "<td>"+ response.data[i].tipo_transmision  + "</td>"+
                    "<td>"+ response.data[i].color  + "</td>"+
                    "<td>"+ response.data[i].numero_puertas  + "</td>"+
                    "<td>"+ response.data[i].id_no_normalizada  + "</td>"+
                "</tr>";
            }

            $("#tb_vehiculos").html(acum_cars);
        }else{
            alert(response.error);
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        alert(
            `Ocurrió un error al conectar con el servidor: ${textStatus}`
        );
    });
}