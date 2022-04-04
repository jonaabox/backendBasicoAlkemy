
const express = require('express');
const cors = require('cors');



class Server {

    constructor (){
       this.app = express();
       this.port = process.env.PORT;
       this.userRoutesPath = '/api/users';

        // MIDDELWARES
        this.midellwares();






        // ROUTES
       this.routes();

    }


    midellwares(){
        // Directorio
        this.app.use(express.static('public'));
        
        // Cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        //this.app.use(express.urlencoded())
    }

    routes(){
       
        this.app.use(this.userRoutesPath, require('../routes/user'));




    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}



module.exports = Server;