const { Router } = require("express");

const routes = Router();


routes.get('/ping', (req, res) => res.status(200).json({ message: "I am alive!" }));

module.exports = routes;