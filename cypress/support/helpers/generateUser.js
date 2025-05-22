import { faker } from "@faker-js/faker";

// Generate a random first name
const firstName = faker.person.firstName();
// Generate a random last name
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

export {firstName, lastName, email, password}

  export const generateUserRegistrationData= () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});
