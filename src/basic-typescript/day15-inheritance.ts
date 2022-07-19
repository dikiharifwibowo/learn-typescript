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

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let admin = new Admin('John', 24);
console.log(admin.getRole());
//Output: { read: true, write: false }
console.log(admin.getName());
//Output: John
admin.setName('Jane');
console.log(admin.getName());
//Output: Jane