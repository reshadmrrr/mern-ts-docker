const express = require('express');
import  logger  from "../logger/logger";

const app = express();

const users = [
    {
        id: 1,
        firstName: "Monayam",
        lastName: "Reshad",
        email: "reshadmrrr@gmail.com" ,
        createdAt: "2015-12-12T00:00:00Z",  
        updatedAt: "2015-12-12T00:00:00Z",  
    },
    {
        id: 2,
        firstName: "Another",
        lastName: "User",
        email: "user@email.com" ,
        createdAt: "2015-12-12T00:00:00Z",  
        updatedAt: "2015-12-12T00:00:00Z",  
    },
];

app.get("/users", (req: any, res: any) => {
    logger.info("users route");
    res.json(users);
});

app.get("/users/:id", (req: any, res: any) => {
    logger.info("filter user by id");
    const user = users.filter((user) => user.id == req.params.id);
    res.json(user);
});

app.post("/user", (req: any, res: any) => {
    users.push(req.body);
    res.json(users);
});

export default app;