const fs = require("fs");

exports.readTruyenKieu = (req, res) =>{
    try
    {
        const readerStream = fs.createReadStream('truyen-kieu.txt');
    }
    catch (e) {
        console.log(e.message);
        res.send({
            success: false,
            message: e.message
        })
    }


};


