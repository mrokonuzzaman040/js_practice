//get post
document.getElementById('btn-post').addEventListener('click', function(){
    const inputText = document.getElementById('post-box');
    const newPost = inputText.value;

    const postContainer = document.getElementById('post-container');
    const p = document.createElement('p');
    p.innerText = newPost;
    postContainer.appendChild(p);

    inputText.value = '';
})