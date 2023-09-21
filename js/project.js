

function miFuncion(params) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => 
        {
            //console.log(typeof json);
           
            //console.log(typeof myJSON);
            myParce = JSON.parse(JSON.stringify(json));
            console.log( myParce.name);

            
                
                document.getElementById("datosPersona").innerHTML=myParce.name;
            
        }
        )
}