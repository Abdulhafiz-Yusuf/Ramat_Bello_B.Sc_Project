const db = require('../models/db.js');


//=========================
//  User controllers

//=========================
/**
 * 1. Register Inmate
 * 2. SearchInmate by ID and by name
 * 3. Register a Guest
 * 4. Create VisitingHistory record
 */

exports.registerInmate = (req, res, next) => {
    console.log({ dataToSubmit: req.body })
    const body = req.body
    const values = [
        body.fName,
        body.lastName,
        body.mName,
        body.dob,
        body.gender,
        body.phone,
        body.emailAdd,
        body.homeAdd,
        body.iLga,
        body.iState,
        body.natureOfCrime,
        body.nameOfCorrCenter,
        body.doi,
        body.dor,
        body.cellCode,
    ]
    const code = body.cellCode
    db.query(`INSERT INTO 
    inmate(f_name, l_name,m_name, dob, gender, phone, email, hAddre, iLga, iState, crime, cCenter, doi, dor, code, postdate)
              VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11, $12, $13, $14, %15 NOW())
        ON CONFLICT DO NOTHING`, values)
        .then(q_res => {
            if (q_res) {
                // Send user extracted from database in response
                //res.status(200).send({ success: true })
                console.log(username)
                db.query(`SELECT * FROM inmate WHERE code=$1`, [code])
                    .then(q_res => {
                        res.status(200).send({
                            success: true,
                            user: q_res.rows //USER FULL INFO 
                        })
                        console.log({ fullUserInfo: q_res.rows })
                    })
                    .catch(q_err => {
                        console.log({ Error: q_err.message })
                        res.status(500).send({ Error: q_err.message }) //DB ERROR
                    })
            }

        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}

exports.searchInameByCellCode = async (req, res, next) => {
    // const user_id = req.query.user_id
    const name = req.body.name
    db.query(`SELECT FROM inmate
                  WHERE f_name =$1 OR l_name=$1 OR m_name=$1`, [name])
        .then(q_res => {
            res.status(200).send({
                success: true,
                user: q_res.rows //USER FULL INFO 
            })
            console.log({ fullUserInfo: q_res.rows })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })


}


exports.searchAllIname = async (req, res, next) => {
    // const user_id = req.query.user_id
    const name = req.body.name
    db.query(`SELECT * FROM inmate`)
        .then(q_res => {
            res.status(200).send({
                success: true,
                user: q_res.rows //USER FULL INFO 
            })
            console.log({ fullUserInfo: q_res.rows })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })

}


// exports.checkIfUserExistIndb = (req, res) => {
//     /*
//     checkUser in db 
//     if exist: return full user info
//      else: return userExist false
//     */
//     const email = req.body.email
//     console.log(email)
//     db.query(`SELECT users_id,username,email,email_verified,f_name,l_name,phone,user_loc_state,loc_lga,donor,
//                 bg,rhd,qty,postdate
//             FROM users, bloodgroup
//             WHERE email=$1 AND bg_id = blood_group`, [email])
//         .then(q_res => {
//             console.log(q_res.rows)
//             res.status(200).send({ userExist: true, user: q_res.rows })
//         })
//         // else res.status(200).send({ userExist: false }); //if User Doesn't Exist
//         .catch(q_err => {
//             console.log({ Error: q_err.message })
//             res.status(500).send({ Error: q_err.message }) //DB ERROR
//         })

// }


// exports.otheruserprofilefromdb = async (req, res, next) => {
//     // const email = [ "%" + req.query.email + "%"]
//     const username = String(req.query.username)
//     db.query(`SELECT * FROM users
//               WHERE username = $1`,
//         [username], (q_err, q_res) => {
//             res.json(q_res.rows)
//         });
// }
// exports.otheruserposts = async (req, res, next) => {
//     const username = String(req.query.username)
//     db.query(`SELECT * FROM posts
//               WHERE author = $1`,
//         [username], (q_err, q_res) => {
//             res.json(q_res.rows)
//         });
// }



