// var promise = new Promise(function(resolve,reject){
//     resolve(1);
// });

// promise.then(
//     function(val){
//         console.log(val);
//         return val+2;
//     }
// ).then(
//     function(val){
//         console.log(val);
//     }
// )

const getFirstUserData = async () =>{
    const x = await fetch('https://my-json-server.typicode.com/typicode/demo/comments');
    const response = await x.json();
    const comments = response[0];
    const comment = await fetch(`https://my-json-server.typicode.com/typicode/demo/comments/${comments.id}`)
    const commentResponse = comment.json()

    return commentResponse;
}

getFirstUserData();

console.log(getFirstUserData())