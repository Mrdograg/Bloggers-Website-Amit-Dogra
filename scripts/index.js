function createPost() {
    document.getElementById('createPostPopup').style.display = 'block';
}

function closeNewPostDialog() {
    document.getElementById('createPostPopup').style.display = 'none';
}

function displayAllPosts() {
    window.location.href = "../html/postslist.html";
}