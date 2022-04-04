const { response } = require('express');





 const userGet = (req = request, res = response)=>{

    const { q, nombre = "No Name", apiKey } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apiKey
    });
};

const userPost = (req, res = response)=>{
    
    const { Nombre, Edad } = req.body;


    res.json({
        msg: 'post API - controller',
        Nombre,
        Edad
    });
};


const userPut = (req, res = response)=>{
    
    const { id } = req.params.id;


    res.json({
        msg: 'put API - controller',
        id
    });
};

const userDelete = (req, res = response)=>{
    res.json({
        msg: 'delete API - controller'

    });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}

