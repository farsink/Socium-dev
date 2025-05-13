const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./database/MongoDb');
const User = require('./database/Schema/user');

dotenv.config();
// Connect to MongoDB

connectDB();



// Example usage


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});