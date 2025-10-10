const user = {
    _name : "Yevgen",
    _surname : "Zagorulko",
    _position : "QA",
    _age : 33,
    _addres : {
        _city : "Kyiv",
        _postcode: "03179",
        _country: "Ukraine",
    },
    _hobbies : ['sky', 'boarding', 'photography'],

    get name() {
        return this.name.toUpperCase();
    },
    get surname() {
        return this.surname.toUpperCase();
    },
    get info() {
    return `${this._name} ${this._surname}, ${this._position}, ${this._age}, ${this._addres._city}`;
    },

    set name(value) {
        console.log(`Setter name викликано з: ${value}`);
        this._name = value.toLowerCase();
    },
    set surname(value) {
        console.log(`Setter surname викликано з: ${value}`);
        this._surname = value.toLowerCase();
    }
};

console.log(user._name);
console.log(user._surname);
console.log(user.info);
console.log(" ");

user.name = "Oleksiy";
user.surname = "Shevchenko";
