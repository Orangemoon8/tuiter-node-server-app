import express from 'express'
import cors from 'cors'                                                             // import the new cors library
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";               // import controller
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


const app = express();
app.use(cors())                 // configure cors right after instantiating express
app.use(express.json());        // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)             // pass it app
app.listen(process.env.PORT || 4000);
