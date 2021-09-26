const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");

const router = express.Router();

router.get('/', function(req, res){
    controller.getPosts()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
})

router.get('/:postID', function(req, res){
    controller.getPost(req.params.postID)
    .then((messageList) => {
        response.success(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.post('/', function(req, res){
    controller.addPost(req.body)
        .then((fullMesagge) => {
            response.success(req, res, fullMesagge, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        })
})

router.put('/:postID', function(req, res){
    controller.editPost(req.params.postID, req.body.propiedad, req.body.valor)
        .then((fullMesagge) => {
            response.success(req, res, fullMesagge, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        })
})

router.delete('/:postID', function(req, res){
    controller.removePost(req.params.postID)
        .then((fullMesagge) => {
            response.success(req, res, fullMesagge, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        })
})

module.exports = router;