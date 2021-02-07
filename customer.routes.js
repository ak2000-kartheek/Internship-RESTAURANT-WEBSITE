module.exports = app => {
    const customers = require('../controllers/customer.controller.js');

    //create a new customer
    app.post("/customers", customers.create);
    //retrieve all the users
    app.get('/customers', customers.findAll);
    //single user
    app.get('/customers/:customerId', customers.findOne);
    
    //delete a customer with customer Id
    app.delete('/customers/:customerId', customers.delete);
    //Delete all
    app.delete('/customers', customers.deleteAll);
}