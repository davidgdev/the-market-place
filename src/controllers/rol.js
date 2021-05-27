const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.all = async (req, res) => {

    db.query("SELECT * FROM rols", function (err, result, fields) {
        if (err) throw err;
        res.json(result)
    });
};

exports.create = (req, res) => {
    console.log(req.body);

    const {
        name,
        description
    } = req.body;
    db.query('SELECT name_r FROM rols WHERE name_r = ?', [name], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.json({
                "error": {
                    "message": 'That rol is already in use'
                }
            });

        }
        db.query('INSERT INTO rols SET ?', {
            name_r: name,
            description_r: description
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.json({
                    "status": 200,
                    "message:": 'Rol registered',
                });
            }
        });

    });

}