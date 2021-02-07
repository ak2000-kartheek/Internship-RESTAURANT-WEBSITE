const sql = require('../models/db.js');

const Customer = function (customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.mobile = customer.mobile;
    this.feedback = customer.feedback;
};

Customer.create = (newCustomer, result) => {
    sql.query('insert into customers set ?', newCustomer, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log("Created Customer : ", { id: res.insertedId, ...newCustomer });
        return (null, { id: res.insertedId, ...newCustomer });
    })
};

Customer.findById = (customerId, result) => {
    sql.query(`select * from customers where Id = ${customerId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Found Customer:', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    })
};

Customer.getAll = result => {
    sql.query('select * from customers', (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Customers : ', res);
        result(null, res);
    })
};



Customer.remove = (id, result) => {
    sql.query('delete from customers where id = ?', id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, res);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: 'Not_Found' }, null);
            return;
        }
        console.log('Deleted Customer with Id : ', id);
        result(null, res);
    });
};


Customer.removeAll = result => {
    sql.query('delete from customers', (err, res) => {
        if (err) {
            console.log(err);
            result(null, res);
            return;
        }
        console.log('Deleted ${res.affectedRows} Customers')
        result(null, res);
    });
};

module.exports = Customer;