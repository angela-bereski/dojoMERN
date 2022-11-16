
const express = require("express");
const app = express();
const port= 8000;

const {faker} = require("@faker-js/faker");

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        _id: faker.datatype.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

const newFakeUser = createUser();


const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
    return newCompany;
}

const newFakeCompany = createCompany();

const createUserAndCompany = () => {
    const newNew = [
        {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        _id: faker.datatype.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        },
        {
        _id: faker.datatype.number(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
        }
    ]
    return (newNew);
}

const newFakeUserCompany = createUserAndCompany();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/users/new", (req,res) => {
    res.json(newFakeUser);
    console.log(newFakeUser)
})

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
    console.log(newFakeCompany)
})

app.get("/api/user/company", (req, res) => {
    res.json(newFakeUserCompany)
    console.log(newFakeUserCompany)
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );