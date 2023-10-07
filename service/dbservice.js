const dotenv=require("dotenv");
const { query } = require("express");
const mysql=require("mysql");
let instance=null;
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("db"+connection.state);
})

class dbservice{
    static getdbServiceInstance(){
        return instance ? instance : new dbservice();
    }
    async getAllClient(limit,offset){
        try{
            const result= await new Promise((resolve,reject)=>{
                const query=`SELECT client.id_Client ,
                              client.nom_client,client.prenom_Client,
                              client.email_Client, 
                              client.objet_Client,
                              DATE_FORMAT(rendez_vous.date_rv, '%y-%m-%d') AS formatted_date_rv,
                              rendez_vous.heure_rv,
                              rendez_vous.status
                              FROM client 
                              JOIN rendez_vous ON client.id_Client=rendez_vous.id_Client
                              LIMIT ? OFFSET ? `;
                connection.query(query ,[parseInt(limit),parseInt(offset)],(err,result)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve (result);
                })
            });
            console.log(result);
            return result;  

        }catch(err){
            console.log(err.message);
        }
    }
    
    async getNbPages(){
        try{
            const result= await new Promise((resolve,reject)=>{
                let query=`SELECT COUNT(*) as count  from Client`;
                connection.query(query,(err,result)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve(result);
                })
            });
            return result;
        }catch(err){
            console.log(err.message);
        }
    }

    async createClient(nom , prenom , email,NumeroTelephone,ville,avoireEntre,nomEntre,objet,date,temps){
        try {  
            const checkEmail = await new Promise((resolve, reject) => {
                const query = `
                    SELECT id_Client
                    FROM client
                    WHERE email_Client = ?;
                `;
                connection.query(query, [email], (error, results) => {
                    if (error) {
                        reject(new Error(error.message));
                    }
                    resolve(results);
                });
            });
    
            if (checkEmail.length > 0) {
                // The email already exists in the client table
                const errorMessage = 'L\'adresse e-mail existe déjà pour un client existant.';
                return errorMessage;
            }
            const clientId = await new Promise((resolve, reject) => {
                    const clientQuery = `
                        INSERT INTO client (nom_Client, prenom_Client, email_Client,telephone_Client, ville_Client, nom_entreprise_Client, avoir_entreprise_Client, objet_Client)
                        VALUES (?, ?, ?, ?, ?, ?, ?,?)
                    `;
                    connection.query(clientQuery, [nom, prenom, email,NumeroTelephone, ville, nomEntre, avoireEntre, objet], (err, result) => {
                        if (err) {
                            reject(new Error(err.message));
                        }
                        resolve(result.insertId); // Get the ID of the newly inserted client
                    });
                }); 

                const insererRendezVous = await new Promise((resolve, reject) => {
                    const rendezvousQuery = `
                        INSERT INTO rendez_vous (id_Client, date_rv, heure_rv, id_Administrateur)
                        VALUES (?, ?, ?, ?)
                    `;
                    connection.query(rendezvousQuery, [clientId, date, temps, 1], (err, result) => {
                        if (err) {
                            reject(new Error(err.message));
                        }
                        result="Le Rendez Vous est bien enregistré"
                        resolve(result);// Return the message to indicate that the booking has been made successfully
                    });
                });;
               
            return insererRendezVous;
        
        }catch(err){
            console.log(err.message);
        }
    
    
    }
    async getfreeHoure(date){
        try{
            const gethourquey= await new Promise((resolve,reject)=>{
                const query = `
                SELECT heure_rv
                FROM rendez_vous
                WHERE DATE(date_rv) = ?;
            `;
            connection.query(query, [date], (err, results) => {
                if (err) {
                    reject(new Error(err.message));
                }
                resolve(results);
            });
           
            })
            return gethourquey;
        }catch(err){
            console.log(err.message)
        }
    }
    async deleteClient(id){
        try{
            const deletClient =await new Promise ((resolve , reject )=>{
                const rendezVousQuery=`DELETE FROM rendez_vous where id_Client=?`;
                const clientQuery = `DELETE FROM client WHERE id_Client = ?`;
                connection.query(rendezVousQuery, [id], (error, resultRendezVous) => {
                    if (error) {
                        reject(new Error(error.message));
                    }
                    connection.query(clientQuery, [id], (error, resultClient) => {
                        if (error) {
                            reject(new Error(error.message));
                        }
                        const rendezVousMessage = "Le client a été supprimé de la table 'rendez_vous' avec succès.";
                        const clientMessage = "Le client a été supprimé de la table 'client' avec succès.";
    
                        const combinedMessage = `${rendezVousMessage} \n ${clientMessage}`;
                        resolve(combinedMessage);
                    });
                });
            });
       
        return  deletClient ;
    }catch(err){
        console.log(err.message);
    }
    
}
        async updateClient(id, date, time) {
            try {
                const updateClientResult = await new Promise((resolve, reject) => {
                    const query = `
                        UPDATE rendez_vous
                        SET date_rv = ?, heure_rv = ?
                        WHERE id_Client = ?;
                    `;
                    connection.query(query, [date, time, id], (err, result) => {
                        if (err) {
                            reject(new Error(err.message));
                        }
                         result = `Le client ${id} a été modifié avec succès au ${date} à l'heure ${time}.`;
                        resolve(result);
                    });
                });
                return updateClientResult;
            } catch (err) {
                console.error(err.message);
                throw new Error('Une erreur s\'est produite lors de la mise à jour du client.');
            }
        }

        async authentication(username, password) {
            try {
                const verifyAdmin = await new Promise((resolve, reject) => {
                    let query = `SELECT * FROM administrateur WHERE nom_Administrateur=? AND mot_de_passe_Administrateur=?;`;
                    // Pass the parameters correctly to connection.query
                    connection.query(query, [username, password], (err, result) => {
                        if (err) {
                            reject(new Error("Une erreur s'est produite lors de l'authentification"));
                        } else {
                            resolve(result);
                        }
                    });
                });
        
                if (verifyAdmin.length > 0) {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                console.log(err.message);
                return false; // You might want to handle the error and return an appropriate value
            }
        }
        async getNumbreRv (){
            try{
                const nombreRendezVous=await new Promise ((resolve ,reject)=>{
                    let sqlQuery=`SELECT COUNT(*) as nombreRv FROM rendez_vous`
                    connection.query(sqlQuery,(err,results)=>{
                        if(err){
                            reject(new Error(err.message));
                        }else{
                            resolve(results[0].nombreRv)
                        }
                    });
                    
                 });
                 return nombreRendezVous
            }catch(err){
                console.log(err.message);
                throw err;
            } 

        }
}

module.exports=dbservice;