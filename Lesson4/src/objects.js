const user = {
    name : "Yevgen",
    surname : "Zagorulko",
    position : "QA",
    age : 33,
    addres : {
        city : "Kyiv",
        postcode: "03179",
        country: "Ukraine",
    },
    hobbies : ['sky', 'boarding', 'photography'],
    displayInfo : function() {
        console.log(`Name: ${this.name}` );
        console.log(`Surname: ${this.surname}` );
        console.log(`Age: ${this.age}` );
        console.log(`City: ${this.addres.city}` );
        console.log(`Postcode: ${this.addres.postcode}` );
        console.log(`Adress: ${this.addres.country}` );
        console.log(`Hobbies: ${this.hobbies}` );
    },
};
user.displayInfo();
