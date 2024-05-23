const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    host:'localhost',
    user:'new_root',
    password:'root',
    database: 'crud'
})

app.get("/", (req,res)=>{
    const sql = "SELECT * FROM student2"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err, "Error in getting Data")
            return res.json(data)
    })
})
app.post('/create', (req,res)=>{
    const sql = "INSERT INTO student2 (`Name`, `Email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql ,[values], (err,data)=>{
        if(err) return res.json(err, "Error in getting Data")
            return res.json(data)
    })
})
app.put('/update/:id', (req,res)=>{
    const sql = "UPDATE student2 set `Name` = ?, `Email` = ? where ID = ? "
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id
    db.query(sql ,[...values,id], (err,data)=>{
        if(err) return res.json(err, "Error in getting Data")
            return res.json(data)
    })
})
app.delete('/deleteStudent/:id', (req,res)=>{
    const sql = "DELETE FROM student2 WHERE ID=?"
    const id = req.params.id
    db.query(sql ,[id], (err,data)=>{
        if(err) return res.json(err, "Error in getting Data")
            return res.json(data)
    })
})

app.listen(3000, ()=>{
    console.log("Server is listening to port 3000")
})