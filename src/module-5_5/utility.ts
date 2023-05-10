interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

// Pick

type Contact = Pick<Person, "contactNo" | "email">;

// Omit

type Name = Omit<Person, "email" | "contactNo">;

// Partial
type optional = Partial<Person>;
type RequiredProps = Required<Person>;

const person: Readonly<Person> = {
    name: "Joynul",
    email: "muhammadjoyhussain@gmail.com",
    contactNo: '01700000000'
}

// person.name = "forhan"

// type myObject = {
//     a: string,
//     b:string,
//     c: string
// }

// type myObject = {
//     [key: string]: string,
// }

// Record Type
type myObject = Record<'a' | 'b' | 'c', string>

const obj: myObject = {
    a: "1",
    b: "2",
    c: "3",
}
