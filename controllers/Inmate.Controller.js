const db = require('../models/db');
const multer = require('multer');





//=========================
//  Inmate controllers
//=========================


//====================
//  READ ALL INMATE NOT USED YET IN CLIENT JUST PREPARED IF INCASE IT WILL BE REQUIRED
//====================
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



/**
 * REGISTERING INMATE AND UPLOAD OF INMATE PIC
 */
exports.registerInmate = (req, res, next) => {
    console.log(req.body)
    const values = [
        req.body.fName,
        req.body.lName,
        req.body.mName,
        req.body.dob,
        req.body.gender,
        req.body.phone,
        req.body.email,
        req.body.homeAdd,
        req.body.inmate_loc_state,
        req.body.loc_lga,
        req.body.crime,
        req.body.cCenter,
        req.body.doi,
        req.body.dor,
        req.body.code,
        req.body.iPic,
    ]
    const code = req.body.code
    console.log(values)
    // Check if inmate exist in database 
    db.query(`SELECT * FROM inmate WHERE code=$1`, [code])
        .then(q_res => {
            if (q_res.rows.length !== 0) {
                res.status(200).send({ inmateExistAlready: true, inmate: q_res.rows })//USER FULL INFO 
            }
            else {
                // if Inmate does not exist before save to database
                db.query(`INSERT INTO inmate(f_name, l_name,m_name, dob, gender, phone, email, hAddress, iLga, iState, crime,cCenter, doi,  dor,  code, ipic, postdate)
                        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11, $12, $13, $14, $15,$16, NOW())
                        ON CONFLICT DO NOTHING`, values)
                    .then(q_res => {
                        if (q_res.rows.length !== 0) {
                            res.status(200).send({ success: true, inmate: q_res.rows })//USER FULL INFO 
                            console.log({ Registered: q_res })
                        }
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
exports.readinmateByID = (req, res, next) => {
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
                    
            FROM inmate bg
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
exports.searchInmateByNameorCode = async (req, res, next) => {
    const searchText = req.body.searchText

    db.query(`SELECT * FROM inmate
                  WHERE f_name =$1 OR l_name=$1 OR m_name=$1 OR code=$1`, [searchText])
        .then(q_res => {
            res.status(200).send({
                success: true,
                inmate: q_res.rows //USER FULL INFO 
            })
            console.log({ inmate: q_res.rows })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })


}

//=================================
//             Image upload
//=================================
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, 'uploads/')
        cb(null, './client/src/assets/uploads')
        // cb(null, './client/public/uploads')
        // cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

exports.ImageUpload = (req, res) => {
    upload(req, res, err => {
        if (err) {
            // console.log(err)
            // return res.json({ success: false, err })
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        }
        else {

            return res.status(200).send({ success: true, path: res.req.file.path, filename: res.req.file.filename })
        }

    })
}



exports.updateInmatePic = (req, res) => {
    console.log('Testing Body')
    console.log(req.body)

    const pic = req.body.picName
    const code = req.body.inmate.code

    db.query(`UPDATE inmate
              SET ipic = '${pic}'
              WHERE code = '${code}'`)
        .then((q_res) => {
            return res.status(200).send({ success: true })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}