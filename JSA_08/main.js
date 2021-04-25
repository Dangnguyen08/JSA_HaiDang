// Client - server
// Http - request - response
// Api 
// RESTful Api

let ul = document.querySelector('ul');

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => {
//     let newUsers = users.map(user => `<li> 
//         <h3> ${user.name} </h3>
//         <p> ${user.email} </p>
//     </li>`)
//     newUsers.join('');
//     ul.innerHTML = newUsers;
//     console.log(newUsers.join(''));
// })

fetch("https://6084debc9b2bed001704158d.mockapi.io/api/album")
.then(response => response.json())
.then(albums => {
    let newAlbums = albums.map(album => `<li><img src=${album.imageAlbum}<p>${album.nameAlbum}</p></li>`)
    newAlbums.join('');
    ul.innerHTML = newAlbums
})