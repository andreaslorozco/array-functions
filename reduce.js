const customers = [
  { name: 'Leane Graham', age: 20, occupation: 'Finance', end: 1999 },
  { name: 'Ervin Howell', age: 30, occupation: 'Technology', end: 2000 },
  { name: 'Victor Plains', age: 17, occupation: 'Sports', end: 2015 },
  { name: 'Clementine Bauch', age: 61, occupation: 'Technology', end: 1987 },
  { name: 'Patricia Lebsack', age: 89, occupation: 'Auto', end: 1999 },
  { name: 'Chelsey Dietrich', age: 21, occupation: 'Retail', end: 1995 },
  { name: 'Mrs. Dennis Schulist', age: 31, occupation: 'Retail', end: 2008 },
  { name: 'Kurtis Weissnat', age: 48, occupation: 'Finance', end: 2006 },
  { name: 'Nicholas Runolfsdottir', age: 67, occupation: 'Techonolgy', end: 2019 },
  { name: 'Glenna Reichert', age: 29, occupation: 'Sports', end: 2022 },
];

// Obtener la suma de las edades de todos los clientes

const result = customers.reduce((age, customer) => {
  return age + customer.age
}, 0);

console.log(result);