const mysql = require("mysql");

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.infouser = (req, res) => {

        const {
            id
        } = req.params;
        db.query('SELECT * FROM users WHERE id_u= ?', [id], async (error, results) => {
                      
            if (results.length > 0) {
                const fistName = results[0].first_name;
                const lastName = results[0].last_name;
                const email = results[0].email;
                db.query('SELECT * FROM users_rols WHERE user_r_fk= ?', [id], async (error, results) => {

                    const rols = [];
                    results.forEach(element =>
                        rols.push(element.rol_u_r_fk));

                    res.status(200).json({
                        "name": fistName + ' ' + lastName,
                        "email": email,
                        "rols": rols,
                    });
                });
            }else{
                res.status(400).json({
                    "error": {
                        "message": 'id does not exist'
                    }
                });

            }
        });

}