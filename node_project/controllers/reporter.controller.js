const db=require('../models');
const Reporter=db.reporter;
const Op=db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const { QueryTypes } = require('sequelize');
var sequelize = require('sequelize');
const saltRounds = 10; 

//create a new tutorial
let p,d;
exports.create=(req,res)=>{
const reporter={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    number:req.body.number,
    password:req.body.password,
    
};

Reporter.findOne().then(data=>{
    if(reporter.email==data.email)
    {
        res.send("error"
        )
    }
    else{

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(reporter.password, salt, (err, hash) => {
                   if(err) throw err;
           
                   // Set the hashed password and save the model
                   reporter.password = hash;
                   console.log(hash);
                   Reporter.create(reporter).then(data=>{
                       res.send(data);
                   }).catch(err=>{
                       if(err)
                       {
                           console.log(err);
                       }
                   }); 
                   
               })
              
           
            });
            // bcrypt.genSalt(10, (err, salt) => {
            //     bcrypt.hash(tutorials.password, salt, (err, hash) => {
            //            if(err) throw err;
               
            //            // Set the hashed password and save the model
            //            tutorials.password = hash;
            //            console.log(hash);
            //            Tutorial.create(tutorials).then(data=>{
            //                res.send(data);
            //            }).catch(err=>{
            //                if(err)
            //                {
            //                    console.log(err);
            //                }
            //            }); 
                       
            //        })
                  
               
            //     });

    }
}).catch(err =>{
    if(err)
    {
        console.log(err);
    }
})





};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    
    Reporter.findAll().then(data=>{
        res.send(data);
    }).catch(err =>{
        if(err)
        {
            console.log(err);
        }
    })
  
};

exports.f=async (req,res)=>{
   const email=req.body.email.email;
   console.log(email);
   const password=req.body.password.password;
   console.log(password);
  await Reporter.findOne({ where:{email:email}}).then(data=>{
    console.log(data.password);   
    bcrypt.compare(password, data.password, function(err, result) {
        // if res == true, password matched
        // else wrong password
        if (result) {
            result == true;
            console.log(result);
            res.send(data);       
        }
        else{
            console.log("password dont match");
            console.log(result);
        }
          });
      
}
).catch(err =>{
    if(err)
    {
        console.log(err);
    }
})


//   bcrypt.compare(password,d.password,(error,r)=>{
  
// })


}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};