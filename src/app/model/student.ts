
export class Student {
  constructor(firstName: string, lastName: string, gender: string, address: string, language: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.language = language;
  }

  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  language: string;
}
