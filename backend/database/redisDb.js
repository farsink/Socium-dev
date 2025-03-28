const redis = require('redis');
const dotenv = require('dotenv');
const { createClient } = redis;
dotenv.config();


const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-17099.c10.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 17099
    }
});

const connectRedis = async() => {
    try {
        await client.connect();
        console.log('Connected to Redis...');
    }   
    catch (err) {
        console.error('Redis connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = connectRedis;

