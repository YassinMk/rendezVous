//require express
const express =require('express');
const app=express();
const cors=require('cors');
const dotenv=require("dotenv");
const dbservice=require("./dbservice");
const mysql=require('mysql');
const nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());
app.use( express.urlencoded({ extended:false }));

const db=dbservice.getdbServiceInstance();
const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth: {
        user: 'yassine.mkhallal-etu@etu.univh2c.ma',        
        pass: 'Another#123Roro',
      },
});
//get all with pagination 
app.get('/getAll',async (req,res)=>{
    try {
        const {page,limit} = req.query;
        const offset=(page-1)*limit;
        const result = await db.getAllClients(limit,offset);
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
        const {status}= req.body;   
        const result= await db.updateClient(id,status);
        return res.status(200).json(result);
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

app.post("/send-email",async (req,res)=>{
    try{
        const {name,email,message,date}=req.body;
      
        const mailOptions = {
            from: 'djjfhdhj@gmail.com',
            to: email,
            subject: `Confirmation de votre rendez-vous de date ${date}`,
            text: message,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).send("email sended")

    }catch(err){
        console.error('Error sending email:', err);
        res.sendStatus(500);
    }
   

})

app.get("/getNbConfirm",async(req,res)=>{
   
    try{
        const numbreConfirm= await db.getNbconfirm();
        return res.status(201).json(numbreConfirm);
    } catch (e) {
        console.error(e.message);
    }
});

app.get("/getAllIdClient",async(req,res)=>{
    try{
        const idClients=await db.getAllIdClient();
        const arrayofId=idClients.map((client)=>client.id_Client);
        return res.status(201).json(arrayofId);
    }
    catch(err){
    console.error(e.message);
    res.sendStatus(500)
    }
});

app.get("/getAllClient/:id",async(req,res)=>{
    try{
        const client=  await db.getAllClient(parseInt(req.params.id));
       
        return res.status(201).json(client);
    }
    catch(err){
        console.log(`Erreur :${err}`);
    }
})

app.listen(process.env.PORT || 5000,()=>console.log('Server is running on port 5000'));