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



