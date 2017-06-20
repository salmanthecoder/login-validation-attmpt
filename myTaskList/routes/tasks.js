var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://salman:salman@ds119772.mlab.com:19772/mytasklist',['tasks']);

router.get('/tasks',function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin','*') ;
        res.json(tasks);
    });
});

router.get('/task/:id',function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});
router.post('/tasks',function(req, res, next){
    var task = req.body;
    db.tasks.save(task,function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
router.delete('/task:id',function(req, res, next){
    var task = req.body;
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
router.put('/tasks',function(req, res, next){
    var task = req.body;
    var updateTask = {};
    updateTask.username= task.username;
    updateTask.pwd=task.pwd;
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updateTask,{},function(err, task){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
module.exports = router;