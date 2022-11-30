import express from 'express'
import cors from 'cors'                                                             // import the new cors library
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";               // import controller
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb://localhost:27017/tuiter');
// mongodb+srv://8orangemoon:<password>@cluster0.jnidktq.mongodb.net/?retryWrites=true&w=majority


const app = express();
app.use(cors())                 // configure cors right after instantiating express
app.use(express.json());        // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)             // pass it app
app.listen(process.env.PORT || 4000);


