'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "user", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-12-15T05:17:53.042Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "user",
        {
            "IdUser": {
                "type": Sequelize.INTEGER(11),
                "field": "IdUser",
                "primaryKey": true,
                "allowNull": false
            },
            "FirstName": {
                "type": Sequelize.STRING(45),
                "field": "FirstName",
                "allowNull": false
            },
            "LastName": {
                "type": Sequelize.STRING(45),
                "field": "LastName",
                "allowNull": false
            },
            "Email": {
                "type": Sequelize.STRING(45),
                "field": "Email",
                "allowNull": false
            },
            "Password": {
                "type": Sequelize.STRING(45),
                "field": "Password",
                "allowNull": false
            },
            "Description": {
                "type": Sequelize.STRING(45),
                "field": "Description",
                "allowNull": false
            },
            "AmountDue": {
                "type": Sequelize.INTEGER(11),
                "field": "AmountDue",
                "allowNull": false
            },
            "DateDue": {
                "type": Sequelize.DATE,
                "field": "DateDue",
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
