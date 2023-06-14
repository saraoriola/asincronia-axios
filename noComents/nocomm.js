let users; // Declaración de la variable global "users"

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    users = res.data; // Asignar los datos de respuesta a la variable global "users"
    console.table(users); // Mostrar los datos en forma de tabla
    users.forEach((user) => {
      console.log(user.name); // Mostrar el nombre de cada usuario
    });
  })
  .catch((err) => console.error(err));
