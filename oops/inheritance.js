//classical inheritance:- in class->class in all other languages but in
//javascript prototype based inheritance is used(object to object)

let company = {
    companyName: "ABC Pvt Ltd",
    location: "India",
    showDetails: function() {
        console.log(`Company Name: ${this.companyName}, Location: ${this.location}`);
    }
};

let employee=Object.create(company); 
