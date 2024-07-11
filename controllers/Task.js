const { raw } = require('express')
const Task = require('../models/Task')

module.exports = class TaskControler{
    static createTask(req, res){
        res.render('tasks/create')
    }

    static async createTaskSave(req,res){

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async removeTask(req,res){
        const id = req.body.id

        await Task.destroy({where: {id:id}})

        res.redirect('/tasks')
    }

    static async editTask(req, res){
        const id = req.params.id

        const tasks = await Task.findOne({where: {id:id}, raw: true})

        res.render('tasks/edit', { tasks })


    }

    static async updateTask(req, res){
        const id = req.body.id

        const tasks = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(tasks, {where:   {id:id}, raw:true } )

        res.redirect('/tasks')
    }

    static async doneTask(req, res){
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, {where: {id:id}})
        res.redirect('/tasks')


    }

    static async showTasks(req, res){

        const tasks = await Task.findAll({raw:true})


        res.render('tasks/all', { tasks })
    }

}

