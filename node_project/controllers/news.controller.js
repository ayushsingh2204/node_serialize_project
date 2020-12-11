const db = require("../models");
const { QueryTypes } = require('sequelize');
//const { Sequelize } = require('sequelize');
const getNews = db.news;
const Issues = db.issue;
const Op = db.Sequelize.Op;

// Create and Save a new News
exports.createNews = (req, res) => {
   // Validate request
   if (!req.body.NewsTitle) {
    res.status(400).send({
      message: "Title can not be empty!"
    });
    return;
  }

  // Create a News
  const news = {
    
    NewsTitle: req.body.NewsTitle,
    News: req.body.News,
    City: req.body.City,
    Image: req.body.Image,
    Count: req.body.Count || 0
    //"total_post":req.body.total_post 
    
  };

  // Save News in the database
  getNews.create(news)
    .then(data => {
        console.log(data);
        
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

//Find all news
exports.findAllNews = (req, res) => {
    getNews.findAll({order: [
  
      ['Count', 'DESC']]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving News."
        });
      });
  };

  //Find all news
exports.findAllbyTitle = (req, res) => {
  const NewsTitle = req.query.title;
  var condition = NewsTitle ? { NewsTitle: { [Op.like]: `%${NewsTitle}%` } } : null;
  getNews.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving News."
      });
    });
};

  

//Find one newss
  exports.findOne = (req, res) => {
    const id=req.params.id;
    getNews.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving News."
        });
      });
  };


//get issues for given news
  

  exports.findAllNewsWithIssuesById = (req,res) => {
    


    getNews.findByPk(2, {include: ['issues']})
   .then((news) => {
  
   res.send(news);
  
   })
.catch((err) => {
  console.log("Error while find news : ", err)
})

};

exports.update = (req, res) => {
  const id = req.params.id;
console.log(req.body);
console.log(id);
  getNews.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Count was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Count with id=${id}. Maybe News was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

  