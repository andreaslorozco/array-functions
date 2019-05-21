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

// Traer los nombres de todos que tienen edad mayor a 30

let result = [];
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  if (customer.age > 30) {
    result.push(customer.name);
  }
};

console.log(result);

// Sumar la edad de cada uno en uno

for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  customer.age++;
}

console.log(customers);

// Sumar la edad de cada uno de los clientes

let sumResult = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  sumResult += customer.age++;
}
console.log(sumResult);

// Traer el primer cliente que trabaje en Tecnologia

let techCustomer = null;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  if (customer.occupation == "Technology") {
    techCustomer = customer;
  };
};
console.log(techCustomer);