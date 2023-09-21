

function getUsers(params) {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => 
        {
            //console.log(typeof json);
           
            //console.log(typeof myJSON);
            users = JSON.parse(JSON.stringify(json));
            console.log( users.name);

            
                
            //document.getElementById("datosPersona").innerHTML=users.length;

            
            
            //myTable=document.getElementById("Table");

            for (i = 0; i < users.length; i++){

            
                $("#Users").append('<div class="card" style="width: 18rem"> <img src="..." class="card-img-top" alt="..." /> <div class="card-body"> <h5 class="card-title">'+users[i].name+'</h5> <p class="card-text">username: '+users[i].username+' </p><p class="card-text">e-mail: '+users[i].email+'</p> <a href="#" class="btn btn-primary">Ver Galeria</a> </div></div>' 
            //+
            //'<td align="center" style="dislay: none;">' + users.alumnoUTP[i].apePaterno + '</td>'+
            //'<td align="center" style="dislay: none;">' + users.alumnoUTP[i].edad + '</td>'+'</tr>'
            );
            }

            
        }
        )
}