export { localStorageFunctions };

class localStorageFunctions {
  constructor() {}

  getUsers() {
    var usersInStorage = JSON.parse(localStorage.getItem('users'));
    return usersInStorage;
  }

  getSize() {
    var usersInStorage = JSON.parse(localStorage.getItem('items'));
    return usersInStorage.length;
  }

  saveUsers(users) {
    console.log('this: ' + this);
    console.log('users: ' + users);
    localStorage.setItem('users', JSON.stringify(users));
  }

  clear() {
    localStorage.clear();
  }

}