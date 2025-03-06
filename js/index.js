document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.querySelector("#comment-form");
    const commentList = document.querySelector("#comment-list");
    const usernameInput = document.querySelector("#username");
    const messageInput = document.querySelector("#message");
    const loginMessage = document.querySelector("#login-message");

    let isLoggedIn = false; // Simulación de estado de sesión

    function checkLoginStatus() {
        if (!isLoggedIn) {
            messageInput.disabled = true;
            loginMessage.style.display = "block";
        } else {
            messageInput.disabled = false;
            loginMessage.style.display = "none";
        }
    }

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!isLoggedIn) {
            alert("Debes iniciar sesión para comentar.");
            return;
        }
        
        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (username && message) {
            const comment = document.createElement("div");
            comment.classList.add("comment");
            comment.innerHTML = `<strong>${username}:</strong> <p>${message}</p>`;
            commentList.appendChild(comment);
            messageInput.value = "";
        }
    });

    checkLoginStatus();
});