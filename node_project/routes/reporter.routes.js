module.exports = app => {
    const reporter = require("../controllers/reporter.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", reporter.create);
  
    // Retrieve all Tutorials
    router.get("/", reporter.findAll);

    router.post("/login",reporter.f);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/reporter', router);
  };