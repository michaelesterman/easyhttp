// This is an example app

const http = new easyHTTP();

// Create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Get post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });



// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//      if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// })