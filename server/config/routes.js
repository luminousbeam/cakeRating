controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.get('/cakes', (req, res) => 
    {
        controller.allCakes(req,res);
    });

    app.get('/cake/:id', (req, res) => 
    {
        controller.cake(req,res);
    });

    app.post('/cake', (req, res) => 
    {
        controller.postCake(req,res);
    });

    app.put('/cake/rating/:id', (req, res) => 
    {
        controller.addRatingByID(req,res);
    });

    app.put('/cake/:id', (req, res) => 
    {
        controller.update(req,res);
    });

    app.delete('/cake/:id', (req, res) => 
    {
        controller.delete(req,res);
    });

    
}