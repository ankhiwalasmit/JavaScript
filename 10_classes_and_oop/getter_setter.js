class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // if we define getter on a property, then we also need to define setter for that property and vice versa
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){ 
        this._email = value
    }

    // returns the password
    get password(){
        // return this.password.toUpperCase() // error
        // return this._password.toUpperCase() // error
        return `${this._password}smit`
    }
    // sets(saves) the password
    set password(value){ 
        // this.password = value // error
        this._password = value
    }
}

const smit = new User("s@smit.ai", "abc")
console.log(smit.password);
console.log(smit.email);