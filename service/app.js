//require express
const express =require('express');
const app=express();
const cors=require('cors');
const dotenv=require("dotenv");
const dbservice=require("./dbservice");
const mysql=require('mysql');
app.use(cors());
app.use(express.json());
app.use( express.urlencoded({ extended:false }));

const db=dbservice.getdbServiceInstance();
//get all with pagination 
app.get('/getAll',async (req,res)=>{
    try {
        const {page,limit} = req.query;
        const offset=(page-1)*limit;
        const result = await db.getAllClient(limit,offset);
        console.log(result);
        const totalePageData=await db.getNbPages();
        console.log(totalePageData);
        const totalPage=Math.ceil(totalePageData[0]?.count/limit);
        console.log(totalPage);
        return res.json({
            data:result,
            pagination:{
                page:page,
                limit:limit,
                totalPage
            }

        });
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

})
//create user 
app.post('/createClient',async (req,res)=>{
    try{
        const {nom, prenom, email, NumeroTelephone,ville, avoireEntre, nomEntre, objet, date, temps} =req.body
        const result = await db.createClient(nom, prenom, email,NumeroTelephone, ville, avoireEntre, nomEntre, objet, date, temps);
        return res.json(result);

    }catch(err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/freeHoures/',async (req,res)=>{
    try{
        const {date}=req.query;
        const result=await db.getfreeHoure(date);
        return res.json(result);
    }catch(err){
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.delete('/deleteClient/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const result= await db.deleteClient(id);
        return res.json(result);
    }catch(err){
        console.log(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.put('/updateClient/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        const {date,time}= req.body;
        console.log(date , time);
        const result= await db.updateClient(id,date,time);
        return res.json(result);
    }catch(err){
        console.log(err.message);
    }
})
app.post('/admin/login',async(req,res)=>{
    try{
        const {username , password} = req.body ;
        const result= await db.authentication(username,password);
        return res.status(201).json(result);
    }catch(err){
        console.log(err.message);
        return  res.status(403).json({ error: 'Internal Server Error' });
    }
})

app.get("/getNumbreRv",async(req,res)=>{
   
    try{
        const numbreRv = await db.getNumbreRv();
        return res.status(201).json(numbreRv);
    } catch (e) {
        console.error(e.message);
    }
});

app.listen(process.env.PORT || 5000,()=>console.log('Server is running on port 5000'));