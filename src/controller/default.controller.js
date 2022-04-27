exports.create = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("INSERT INTO productos set ?", 
        [req.body],
        (err, rows) => {
            console.log(err ? "Err INSERT INTO productos " + err : "Added!")
        })
    })
}

exports.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM productos",
        [req.body],
        (err, rows) => {
            console.log(err ? "Err SELECT * FROM productos " + err : "list products");
        })
    })
}