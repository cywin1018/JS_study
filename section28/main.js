// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("RESOLVED!",res);
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log("ERROR!",e);
// })

// axios.get("https://swapi.dev/api/people/1/").then((res)=>{
//     console.log("RESPONSE",res);
// })
//     .catch((e)=>{
//         console.log("ERROR!",e);
//     })

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');
//
// const addNewJoke = async () =>{
//     const jokeText = await getDadJoke();
//     console.log(jokeText);
// }
// const getDadJoke = async () =>{
//     const config = {headers: {Accept : 'application/json'}}
//     const res = await axios.get('https://icanhazdadjoke.com/',config);
//   return res.data.joke;
// }
//
// button.addEventListener('click',addNewJoke);

const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params : { q : searchTerm} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}