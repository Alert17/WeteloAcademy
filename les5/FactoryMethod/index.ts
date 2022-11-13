enum Types {
    client = 'client',
    admin = 'admin'
}

interface IUser {
    name: string
    type: Types
}

abstract class CreateUserFactory {
    static create(user: IUser) {
        switch (user.type) {
            case Types.admin:
                return new CreateAdminUser(user)
            case Types.client:
                return new CreateClientUser(user)
            default:
                return new CreateClientUser(user)
        }
    }
}

class CreateAdminUser extends CreateUserFactory {
    name: string
    type: Types
    constructor(user) {
        super();
        this.name = user.name
        this.type = user.type
    }

    printInfo() {
        console.log(`Admin: ${this.name}`)
    }
}

class CreateClientUser extends CreateUserFactory {
    name: string
    type: Types

    constructor(user) {
        super();
        this.name = user.name
        this.type = user.type
    }

    printInfo() {
        console.log(`Client: ${this.name}`)
    }
}

const user1 = CreateUserFactory.create({name: 'Jordan', type: Types.admin})
const user2 = CreateUserFactory.create({name: 'Mike', type: Types.client})

user1.printInfo()
user2.printInfo()