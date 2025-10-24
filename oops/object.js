function names(u) {
        console.log("Adding:", u);
        this.Users.push(u); 
    }
let user = {
    Users: [], 
    addUsername:names ,

    messages: function(val) {
        console.log(val);
    }
};

user.addUsername("Shreesh");
user.addUsername("Alice");
user.messages("Hi");
console.log(user.Users); 