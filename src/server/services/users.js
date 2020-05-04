const bcrypt = require('bcryptjs'); //bcrypt crea un password en modo hash
const MongoLib = require('../lib/mongo');

class UserServices {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedpassword = await bcrypt.hash(password, 10);
    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedpassword,
    });

    return createUserId;
    
  }

}

module.exports = UserServices;

