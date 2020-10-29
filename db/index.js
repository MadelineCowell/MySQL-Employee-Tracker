// connection between JS and MySQL

const connection = require("./employeeDBConnection");

class Database {
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees () {
        return this.connection.query("SELECT employee.id, employee.first_name")
    }
    removeEmployee (removeEmployeeID) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", removeEmployeeID)
    }

    
}