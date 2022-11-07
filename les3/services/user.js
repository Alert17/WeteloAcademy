const UserRepository = require('../repositories/user');

class UserService {
    async getUsers() {
        return UserRepository.getUsers({ });
    }

    async getUser(id) {
        return UserRepository.getUsers({ id });
    }

    async changeEmail(id, email) {
        return UserRepository.changeEmailById({ id, email });
    }

    async create(id, email) {
        return UserRepository.createUser({ id, email });
    }

    async delete(id) {
        return UserRepository.deleteUser({ id });
    }

}

module.exports = new UserService();