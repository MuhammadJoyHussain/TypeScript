// // Arrow Function
// const createArray = (param: string): string[] => {
//     return [param];
// }

// const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2];
// }

// const result = createArray1<string, string>("Bangladesh", "I love my country");
// const result1 = createArray1<boolean, Array<string>>(false, ["USA"])
// type Name = { name: string }

// const result2 = createArray1<Name, boolean>({ name: "Bangladesh" }, false)

// // Spread operator
// const me = 'Joynul Hussain';
// const myInfo = {
//     name: "Joynul",
//     age: 26,
//     salary: 1,
// }

// const addMeInMyMind = <T>(myInfo: T) => {
//     const person = "Jhon Doe";
//     const newData = { ...myInfo, person };
//     return newData;
// }

// const result3 = addMeInMyMind(myInfo);
