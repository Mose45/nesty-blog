function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill in all fields.");
        return;
    }

    let postContainer = document.getElementById("postContainer");

    let post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    postContainer.prepend(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}