export class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  public introduceSelf() {
    console.log(`Hi I'm ${this.name}`)
  }
}

class Professor extends Person {
  subject: string

  constructor(name: string, subject: string) {
    super(name)
    this.subject = subject
  }

  public introduceSelf(): void {
    console.log(`My name is ${this.name} and i teach ${this.subject}`)
  }
}

const monari = new Person('Monari')
const masinde = new Professor("Masinde", "English")
masinde.introduceSelf()
monari.introduceSelf()
