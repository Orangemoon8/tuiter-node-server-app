import express from 'express'
import cors from 'cors'                                                             // import the new cors library
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";               // import controller
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

// localmongoose.connect('mongodb://localhost:27017/tuiter');
// remote connection: mongodb+srv://8orangemoon:753951@cluster0.jnidktq.mongodb.net/?retryWrites=true&w=majority
// console.log('environment variable is the following')
console.log(process.env.DB_CONNECTION_STRING)

const CONNECTION_STRING = 'mongodb+srv://alice:alice123@cluster0.jnidktq.mongodb.net/?retryWrites=true&w=majority'
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter'

console.log('current connection path is the following')
console.log(CONNECTION_STRING);

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors())                 // configure cors right after instantiating express
app.use(express.json());        // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)             // pass it app
app.listen(process.env.PORT || 4000);


