module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a new News
    router.post("/", news.createNews);
  
    // Retrieve all News with issues by id
   
   router.get("/", news.findAllNews);
   router.get("/bytitle/", news.findAllbyTitle);

   router.put("/countclick/:id", news.update);

   router.get("/onenews/:id", news.findOne);
    

    app.use('/api/news', router);
};