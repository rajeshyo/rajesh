const express =require('express');
const router =express.Router(); 

const Contact =require('../models/contacts');

//retriving the contact 
router.get('/contact', (req, res, next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })

});


//adding the contact
router.post('/contact', (req, res, next)=>{
   let newcontact = new Contact({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       phone: req.body.phone
   });
   newcontact.save((err, contact)=>{
       if(err){
           res.json({msg: 'faild to add contact'})
       }
       else{
        res.json({msg: 'sucessfull to add contact'})
       }
   });

    });

//delete the contact
router.delete('/contact/:id', (req, res, next)=>{
    Contact.remove({_id: req.params.id},function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
    });

//update the contact
router.put('/contact', (req, res, next)=>{
    
    });














module.exports=router;