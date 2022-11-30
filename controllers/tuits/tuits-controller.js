// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from '../tuits/tuits-dao.js';

const createTuit = async (req, res) => {
    const newTuit = req.body;                   // retrieve data from HTTP body
    // newTuit.likes = 0;                          // initialize likes counter
    newTuit.liked = false;                      // initialize liked flag
    // tuits.push(newTuit);                        // append new tuit to tuits array
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);                          // respond with new tuit
}                                               // next chapter will store in database instead

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;     // get ID of tuit to update from path
    const updates = req.body;                   // get updates from HTTP body
    // const tuitIndex = tuits.findIndex(          // find index of tuit to update
    //     (t) => t._id.toString() === tuitdIdToUpdate)   // in the tuits array
    // tuits[tuitIndex] =                          // update the element in tuits array
    //     {...tuits[tuitIndex], ...updates};      // merging/updating old tuit with updates
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
    // res.sendStatus(200);                        // respond with success
}                                               // next chapter will remove from database intead

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;     // retrieve the ID of the tuit we want to remove
    const status = await tuitsDao               // status reports success or failure
        .deleteTuit(tuitdIdToDelete);           // to delete record from database
    // tuits = tuits.filter((t) =>           // filter out the tuit from the tuits array
    //     t._id.toString() !== tuitdIdToDelete);
    // res.sendStatus(200);                        // respond with success
    res.json(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}



