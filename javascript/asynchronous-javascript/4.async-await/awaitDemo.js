async function fetchData() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
      }
}

fetchData().then((data) => console.log(data));
