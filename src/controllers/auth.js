const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        if (!email || !password) {
            return res.status(400).res.json({
                "error": {
                    "message": 'Please provide an email and password'
                }
            });
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {

            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).json({
                    "error": {
                        "message": 'Email or Password is incorrect'
                    }
                });
            } else {
                const id = results[0].id_u;
                db.query('SELECT * FROM users_rols WHERE user_r_fk= ?', [id], async (error, results) => {

                    const rols = [];
                    results.forEach(element =>
                        rols.push(element.rol_u_r_fk));
                    const token = jwt.sign({
                        id,
                        rols
                    }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                    });

                   const cookieOptions = {
                        expires: new Date(
                            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                        ),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookieOptions);
                    res.status(200).json({
                        "status": 200,
                        "message:": 'User Login',
                        "id": id,
                        "token": token,
                    });
                });
            }

        });

    } catch (error) {
        console.log(error);
    }
}

exports.register = (req, res) => {
    console.log(req.body);

    const {
        first_name,
        last_name,
        email,
        password,
        passwordConfirm,
        rol_id
    } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.json({
                "error": {
                    "message": 'That email is already in use'
                }
            });

        } else if (password !== passwordConfirm) {
            return res.json({
                "error": {
                    "message": 'Passwords do not match'
                }
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                const newRol = [];
                const id_user = results.insertId;

                let _rol_id = rol_id.forEach(rol_id => {
                    db.query('INSERT INTO users_rols SET ?', {
                        rol_u_r_fk: rol_id,
                        user_r_fk: id_user
                    }, (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("dato insertado tabla users_rols");
                        }

                    });
                });

                return res.json({
                    "status": 200,
                    "message:": 'User registered',
                });

            }
        });

    });

}