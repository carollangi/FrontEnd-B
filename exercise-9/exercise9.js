// 1.Promise
let condition = true;
function helloWorld() {
    return new Promise((resolve)=>{
    setTimeout(() =>{
        resolve("Hello World!");
    }, 2000);
});
}

async function messages() {
    try{
        let msg = await helloWorld();
        console.log(msg);
    }catch (error){
        console.log(error);
    }
}

messages();


// 2. Fetch
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then((response)=> response.json())
    .then((users)=> {
        console.log("Data Users");
        users.data.forEach((user)=> {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    });
}

ambilDataUser();

//3. Async
async() =>{
    try{
        let response = await fetch("https://reqres.in/api/users");
        let users = await response.json();
        console.log("Data Users:");
        users.data.forEach(({ first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name:${last_name}`);
        });
    } catch (error) {
        console.error(error);
    }
}

ambilDataUser();

//4. Axios
import axios from 'axios';

async function ambilDataUser  () {
  try {
    let result = await axios.get("https://reqres.in/api/users");
    console.log("Data Users:");
    result.data.forEach(({ first_name, last_name }) => {
      console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
    });
  } catch (error) {
    console.error(error);
  }
}