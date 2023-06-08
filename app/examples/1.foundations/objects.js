var person_ = {
  name: "Maria Jones",
  age: 21,
  hasDriverLicence: true,
  dateOfBirth: "01/01/2000",
  address: {
    firstLine: "123",
    postCode: "SE1",
    country: "England",
  },
}

console.log(JSON.stringify(person_))

console.log(person_.name)
console.log(person_.age)
console.log(person_.hasDriverLicence)
console.log(JSON.stringify(person_.address))

console.log(Object.values(person_))
