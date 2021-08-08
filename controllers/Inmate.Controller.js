const db = require('../models/db');

//=========================
//  Bloodcenter controllers
//=========================
//INSERT INTO bloodgroup(bg_id,bg,rhd,qty,postdate) VALUES(2,'A','-',30,'2021-03-07 00:00:00');
exports.readAllinmate = (req, res,) => {
    console.log('You read all inmate')
    db.query(`SELECT * FROM inmate ORDER BY iId ASC`)
        .then(result => {
            // Send books extracted from database in response
            console.log(result.rows)
            res.status(200).send({ inmate: result.rows })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.send({ Error: q_err.message }) //DB ERROR
        })
}

exports.readBloodGroupByID = (req, res, next) => {
    const id = req.query.id;
    let bcDetail = {}
    let bgDetail = {};

    db.query(`SELECT bc.bc_id, bc.centername,bc.locstate,bc.loclga,bc.qty 
                FROM bloodcenter bc
                WHERE bc.bg = $1
                ORDER BY bg ASC`, [id])
        .then(bcresult => {
            // Send blood center extracted from database in response
            bcDetail = bcresult.rows
            db.query(`SELECT bg.bg_id,bg.bg, bg.rhd
                FROM bloodgroup bg
                WHERE bg.bg_id = $1
                ORDER BY bg ASC`, [id])
                .then(bgresult => {
                    bgDetail = bgresult.rows
                    console.log({ bcDetail, bgDetail })
                    res.status(200).send({ bcDetail, bgDetail })
                })
        })
        .catch(q_err => {
            console.log(q_err.message)
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}

exports.searchInameByName = async (req, res, next) => {
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

exports.readBooking = (req, res,) => {
    const userId = req.body.users_Id
    console.log(userId)
    db.query(`SELECT bg.bg, bg.rhd, bc.centername, bc.locstate, bc.loclga, bc.qty
                FROM booking bk, bloodcenter bc, bloodgroup bg
                WHERE (bk.bg = bg_id) AND (bk.myusers=$1)`, [userId])
        .then(result => {
            // Send booking extracted from database in response
            console.log(result.rows)
            res.status(200).send(result.rows)
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}


exports.addBooking = (req, res,) => {
    const values = [
        req.body.users_id,
        req.body.bc_id,
        req.body.bg_id,
    ]

    db.query(`INSERT INTO booking(myusers, bc,bg,postdate)
                VALUES($1,$2,$3,NOW())`, values)
        .then(result => {
            // Send booking extracted from database in response
            res.status(200).send({ success: true })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}