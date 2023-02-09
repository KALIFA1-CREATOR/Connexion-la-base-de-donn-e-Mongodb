
const express = require('express');
const {connectToDb, getDb}= require("./db")
// Init app and middlewere
const app = express(); 


//db connection
let db
connectToDb((err) =>{
    if (!err) {
        app.listen("3000", () =>{
            console.log("Le server est active au port 3000");
        });
        db = getDb()
    }
})

//routes


app.get("/books", function(req, res){

let books = []

db.collection("bookstore")
   .find() // cursor toArray forEach
   .sort({author: 1})
   .forEach(book => books.push(book))
   .then(() => {
       res.status(200).json(books)
   })
   .catch(() => {
       res.status(500).json({error : "Could not fetch the documents"})
   })

res.json({mssg: "Welcome to the API"})
})
