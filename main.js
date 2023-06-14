// ASINCRONÍA & AXIOS //

    // Obtener y mostrar usuarios utilizando la API de JSONPlaceholder //

    // EJERCICIO 1️⃣ // - Imprimir por consola la lista (array) de usuarios.
    axios
    .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => console.table(res.data))
        .catch((err) => console.error(err));

    // EJERCICIO 2️⃣ // - Imprimir por consola solo el nombre de los usuarios.
    axios
    .get("https://jsonplaceholder.typicode.com/users") 
        .then((res) => {                                      
           res.data.forEach((user) => {                   
                console.log(user.name);
            });
            })  
        .catch((err) => console.error('No existen usuarios registrados'(err)))

    // EJERCICIO 3️⃣ // - Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API. 
    axios
    .get("https://jsonplaceholder.typicode.com/users") 
        .then((res) => {
            users = res.data;
            console.table(users);
        })
        .catch((err) => console.error(err));

    // EJERCICIO 4️⃣ // - Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
    const showUsers = () => {console.table(users)};

    // EJERCICIO 5️⃣ // - Crea un botón que, cuando lo cliques, ejecute la función que habías creado.
    // He realizado dos, uno que ejecute la función desde HTML (línea 22)
    // Y otro desde aquí 👇🏽
    function showJUsers() {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            console.warn(res.data); // he puesto .warn para diferenciar la acción al ejecutarlo
          })
          .catch((err) => console.error(err));
      }
    document.getElementById("js").addEventListener("click", showJUsers);

    // EJERCICIO 6️⃣ // - Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML).
    