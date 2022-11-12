enum Types {
    client = 'client',
    admin = 'admin'
}

interface IUser {
    name: string
    type: Types
}

abstract class Creator{

    public abstract factoryMethod(name) : IUser

    public  abstract userInfo(name) : string
}

class ClientCreator extends Creator{
    public factoryMethod(name): IUser {
        return new Client(name, Types.client);
    }
    public userInfo(name) : string {
        const user = this.factoryMethod(name)
        return `Username: ${user.name}, type: ${user.type};`
    }
}

class AdminCreator extends Creator{

    public factoryMethod(name): IUser {
        return new Admin(name, Types.admin);
    }

    public userInfo(name) : string {
        const user = this.factoryMethod(name)
        return `Username: ${user.name}, type: ${user.type};`
    }
}

class Client implements IUser {

    constructor(
        public name : string,
        public type: Types
    ) {}
}

class Admin implements IUser {

    public constructor(
        public name: string,
        public type: Types
    ) {}
}

const user = new ClientCreator().userInfo('Alert')
console.log(user)