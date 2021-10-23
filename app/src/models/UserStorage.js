"use strict";

class UserStorage {

  static #users = {
    id : ["lee", "kim", "park"],
    pwd : ["1234", "123", "1235"],
    name : ["이형민", "김예림", "박준영"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    return newUsers;
  }
}

module.exports = UserStorage;