function createUser() {
    const user = { name: "Alice", age: 25 };

    return {
        getUser: function() {
            console.log(user);
        },
        setUserName: function(newName) {
            user.name = newName;
        }
    };
}

const user1 = createUser();
const user2 = createUser();

user1.getUser(); // Output: { name: "Alice", age: 25 }
user1.setUserName("Bob");
user1.getUser(); // Output: { name: "Bob", age: 25 }
user2.getUser(); // Output: { name: "Alice", age: 25 }
