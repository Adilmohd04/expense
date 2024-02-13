const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
connectDB();
const {getAllExpenses,createExpense,getSomeExpense,deleteExpense,updateExpense} = require('./controller/expense')
const cors=require('cors')

const app = new express()
app.use(bodyParser.json());
app.use(cors({origin:'*'}))

app.get('/api/v2/health',(req,res) =>{
    res.status(200).send("Health Check");
})

app.get('/api/v2/expenses',getAllExpenses);
app.post('/api/v2/create',createExpense);
app.get('/api/v2/ap1/some/:id',getSomeExpense);
app.delete('/api/v2/delete',deleteExpense);
app.put('/api/v2/update',updateExpense);

app.listen(3000, ()=>{
    console.log("Server running")
})