const collections = require('../models/models');

const Cake=collections.cake;
const Review=collections.review;

module.exports = 
{
    renderIndex: function(req,res)
    {
      res.render("index.html"); 
    },
    allCakes: function(req, res)
    {
        Cake.find()
            .then(data => res.json({status: "success", cakes:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    cake: function(req, res)
    {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    postCake: function(req, res)
    {
        Cake.create(req.body)
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    addRatingByID: function(req, res)
    {
        Cake.updateOne({_id: req.params.id},{$push: {reviews:req.body}})
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    update: function(req, res)
    {
        Cake.updateOne({_id: req.params.id}, { $set: req.body })
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    delete: function(req, res)
    {
        Cake.remove({_id: req.params.id})
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },

    
};