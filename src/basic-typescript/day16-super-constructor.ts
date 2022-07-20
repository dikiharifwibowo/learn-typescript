export class User {
  constructor(public name: string, public age: number) {}
  
  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User {
  read: boolean = true;
  write: boolean = false;

  constructor(public phone:string, public name: string, public age: number) {
    super(name, age)
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let admin = new Admin('08134567890','John', 24);
console.log(admin.phone)
//Output: 08134567890