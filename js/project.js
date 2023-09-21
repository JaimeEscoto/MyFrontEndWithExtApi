function loadPage(id,albumId)
{
  if (id<0){
        getUsers();
  }
  else
  {
    //cargar galeria
    getUserbyId(id);
    getAlbumsbyId(id,albumId);
  }
}

function getPhotosUrlbyAlbumId(albumId)
{
    document.getElementById("Fotos").innerHTML = "";
    //document.getElementById("Albums").innerHTML = "";
    //console.log('https://jsonplaceholder.typicode.com/albums?userId='+id);
    fetch('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
      .then(response => response.json())
      .then(data => 
        { 
            data.forEach(item => {
                // Crea un elemento de card
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '8rem';


                // Crea el contenido de la card
                card.innerHTML = `
                  <div class="card-body">
                  <img class="card-img-top" src="${item.thumbnailUrl}" alt="Card image cap">
                    <p class="card-title"> ${item.title}  </p>
                   
                
                  </div>
                `;
          
                // Agrega la card al contenedor
                const contenedor = document.getElementById('Fotos');
                contenedor.appendChild(card);
            }
            )
             
        }
  
        )


}

function getAlbumsbyId(id)
{
    document.getElementById("Albums").innerHTML = "";
    //console.log('https://jsonplaceholder.typicode.com/albums?userId='+id);
    fetch('https://jsonplaceholder.typicode.com/albums?userId='+id)
      .then(response => response.json())
      .then(data => 
        { 
            data.forEach(item => {
                // Crea un elemento de card
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem';


                // Crea el contenido de la card
                card.innerHTML = `
                  <div class="card-body">
                    <h5 class="card-title">: ${item.title} : </h5>
                   
                    <button type="button" class="btn btn-dark" onclick="getPhotosUrlbyAlbumId(${item.id})">
			Ver Fotos
		</button>
                  </div>
                `;
          
                // Agrega la card al contenedor
                const contenedor = document.getElementById('Albums');
                contenedor.appendChild(card);
            }
            )
             
        }
  
        )


}
function getUserbyId(id)
{
    console.log('https://jsonplaceholder.typicode.com/users/'+id);
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(response => response.json())
      .then(data => 
        {
            //console.log(typeof data);
            nam=JSON.parse(JSON.stringify(data)).name
            //console.log(typeof JSON.parse(JSON.stringify(data)).name);
            //document.getElementById('toptitle').innerText=nam;
            //console.log(typeof json);
           
            //console.log(typeof myJSON);
             
        }
  
        )
}

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => 
        {
            //document.getElementById('toptitle').innerText="Usuarios";
            //console.log(typeof json);
           
            //console.log(typeof myJSON);
            
            data.forEach(item => {
                // Crea un elemento de card
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem';
          
                // Crea el contenido de la card
                card.innerHTML = `
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">username: ${item.username}</p>
                    <p class="card-text">email: ${item.email}</p>
                    <button type="button" class="btn btn-dark" onclick="getAlbumsbyId(${item.id})">
			Ver Albums
		</button>
                  </div>
                `;
          
                // Agrega la card al contenedor
                const contenedor = document.getElementById('Users');
                contenedor.appendChild(card);
            }
            )
                
         
        }
  
        )
}

    
