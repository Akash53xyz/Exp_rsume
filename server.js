const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const calculateATS = require("./ats");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API to receive resume data
app.post("/generate-resume", (req, res) => {
    const { name, skills, experience } = req.body;

    const resumeText = `${name} ${skills} ${experience}`;
    const atsScore = calculateATS(resumeText);

    res.json({
        success: true,
        atsScore: atsScore,
        message: "Resume analyzed successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

