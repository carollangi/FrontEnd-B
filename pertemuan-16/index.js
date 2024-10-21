//Asynchronous JS


//Synchronous -> single thread -> blocking(di eksekusi saat itu juga)
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3, yang memakan waktu lama");
console.log("Proses 4");

//Asynchronous -> multi thread (ada proses yg berjalan secara bersamaan)-> non-blocking
//1. Parallel
//asy
setTimeout(()=>{ 
    console.log("Proses 1");
},3000);
//sync
console.log("Proses 2");
setTimeout(()=>{
    console.log("Proses 3");
}, 5000);
console.log("Proses 4");


//2. Concurrent
//kalo bentuknya jadi tajam its called callback hell
setTimeout(()=>{
    console.log("Proses 1");
    setTimeout(()=>{
        console.log("Proses 2");
        setTimeout(()=>{
            console.log("Proses 3");
            setTimeout(()=>{
                console.log("Proses 4");
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

// we didnt use fallback now
//ES6 menjadi solusi agar code tidak tajam>>> Promise

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject)=>{
    if(condition){
        resolve("Berhasil");
    }else {
        reject("Gagal");
    }
});
//2 cara pake promise
// Pertama. then - catch
newPromise
    // .then((result)=> console.log(result))
    // .catch((error)=> console.log(error));

    //or
    .then((result)=> result)
    .then((result2)=> console.log(result2))
    .catch((error)=> console.log(error));

//Ke 2. Async - Await (dari ES7)
//harus dibyat dalam fungsi
const consumePromise = async() => {
    try {
        let result = await newPromise;
    console.log(result);
    }catch (error) {
        console.log(error);
    }
};
consumePromise();

//pakai promise yang sudah ada
//1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((json)=> console.log(json));

// (async() =>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let json = await response.json();
//     console.log(json);
// })();
//kalau cuman tampilkan namenya gimana?
(async() =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    json.forEach(({name}) => console.log(name));
})();

//cuman berjalan di front end, di back end tidak

//2. AXIOS
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result)=> console.log(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach(({name})=> console.log(name));
})();