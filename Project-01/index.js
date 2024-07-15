const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// Middleware to parse request body
app.use(express.urlencoded({ extended: false }));


app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
})

// REST API
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    //console.log("Body", body);
    users.push({...body , id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length});
    });
    });

app.patch("/api/users/:id", (req, res) => {
    // TODO : Edit the user with ID

    return res.json({status: "pending"});
});

app.delete("/api/users/:id", (req, res) => {
    // TODO : Delete the user with ID
    return res.json({status: "pending"});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})