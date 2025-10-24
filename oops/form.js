document.addEventListener("DOMContentLoaded", (event) => {
    function names(u) {
        console.log("Adding:", u);
        this.Users.push(u);
    }
    let user = {
        Users: [],

        addUsername: names,

        messages: function (val) {
            console.log(val);
        }
    };
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = document.querySelector('#name');
        const messageInput = document.querySelector('#message');
        const nameValue = nameInput.value;
        const messageValue = messageInput.value;
        user.addUsername(nameValue);
        user.messages(messageInput)
        const submission = {
            names: nameValue,
            messages: messageValue,
        }
        console.log(submission);
        console.log(user.Users)
    })

})