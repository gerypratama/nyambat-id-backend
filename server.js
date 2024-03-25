const express = require("express");

const { logger } = require("./middleware/eventLogger");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/postings", require("./routes/postings"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
