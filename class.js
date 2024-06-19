class UserManager {
    constructor(users) {
        this.users = users;
    }
    getUserById(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) {
                return this.users[i];
            }
        }
        return null;
    }
    addUser(user) {
        this.users.push(user)
        console.log("User added:", user);
    }
}

var manager = new UserManager([{ id: 1, name: "John" }]);
manager.addUser({ id: 2, name: "Doe" });

let unusedClass = class {
    method() {
        return "Unused";
    }
};
