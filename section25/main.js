// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit',function (e){
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     // console.log(usernameInput.value,tweetInput.value)
//     const username = tweetForm.elements.username;
//     const tweet = tweetForm.elements.tweet;
//     addTweet(username.value,tweet.value);
//     username.value = "";
//     tweet.value="";
//     e.preventDefault();
// })
//
// const addTweet = (username,tweet)=>{
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addTweet(productInput.value,qtyInput.value);
    productInput.value="";
    qtyInput.value="";

})
const addTweet = (product,qty)=>{
    const newTweet = document.createElement('li');
    newTweet.append(`${qty} ${product}`)
    list.append(newTweet);
}