const { users } = require('../database');

class UserRepository {
    static async getUsers({ id } = {}) {
        return id ? users.filter(u => u.id === id) : users;
    }

    static async changeEmailById({ id, email }) {
        const index = users.findIndex(u => u.id === id);
        users[index].email = email
    }

    static async createUser({ id, email }) {
        let user = {id: id, email: email}
        users.push(user)
    }

    static async deleteUser({ id }) {
        const index = users.findIndex(u => u.id === id);
        users.splice(index, 1)
    }
    
}

module.exports = UserRepository;