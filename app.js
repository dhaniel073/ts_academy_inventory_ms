const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/dataConfig');
const productRoutes = require('./Routes/ProductRoute');

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.use('/products', productRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
    // connectDB();
});