const express = require('express');
const logger = require("../logger/logger")
import userController from "../controller/userController";
const app = express();

// const users = [
//     {
//         id: 1,
//         firstName: "Monayam",
//         lastName: "Reshad",
//         email: "reshadmrrr@gmail.com" ,
//         createdAt: "2015-12-12T00:00:00Z",  
//         updatedAt: "2015-12-12T00:00:00Z",  
//     },
//     {
//         id: 2,
//         firstName: "Another",
//         lastName: "User",
//         email: "user@email.com" ,
//         createdAt: "2015-12-12T00:00:00Z",  
//         updatedAt: "2015-12-12T00:00:00Z",  
//     },
// ];

app.get("/users", (req: any, res: any) => {
    userController.getUsers().then(data => res.json(data));
});

app.post("/user", (req: any, res: any) => {
   userController.createUser(req.body).then(data => res.json(data));
});

app.put("/user", (req: any, res: any) => {
   userController.updateUser(req.body).then(data => res.json(data));
});

app.delete("/user/:id", (req: any, res: any) => {
   userController.deleteUser(req.params.id).then(data => res.json(data));
});

export default app;