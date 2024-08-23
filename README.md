# Checkout Recovery Automation


## Screenshots

#### Server logs
<img width="630" alt="Screenshot 2024-08-23 at 8 56 50 PM" src="https://github.com/user-attachments/assets/efb7fad5-1f9e-4424-baf1-7b82d0247831">

#### UI to View all sent messages
Test interval - [1, 2, 3] (minutes)

<img width="1460" alt="Screenshot 2024-08-24 at 1 29 15 AM" src="https://github.com/user-attachments/assets/26ff0a4b-8082-4fb1-8980-f48de3ca48f8">


## Installation

### Server Setup

#### 1. Install Server Package Dependencies
Navigate to the server directory and install the required packages:
```bash
cd server
npm install
```

#### 2. Configure environment variables

You need to set up your environment variables for MongoDB and Redis.

```bash
cp .env.example .env
```

Make sure to update the .env file with your own MONGO_DB_URI and REDIS_DB_URI values.

#### 3. Start the Server

```bash
npm run dev
```

### Client Setup

#### 1. Install Client Package Dependencies
Navigate to the client directory and install the required packages:
```bash
cd server
npm install
```

#### 2. Start the Project
```bash
npm run dev
```


## Demo CURLs

#### Schedule an recovery on abandoned checkout
```bash
curl -X POST -H "Content-Type: application/json" -d @server/sample-data/abandoned-checkout.json http://localhost:4000/abandoned-checkout/schedule-recovery 
```

#### Cancel recovery on order placed
```bash
curl -X POST -H "Content-Type: application/json" -d @server/sample-data/order-placed.json http://localhost:4000/order-placed/cancel-recovery 
```

#### Customize recovery schedule
```bash
curl -X PATCH  -H "Content-Type: application/json" -d '{ "customerId": 207119551, "recoveryIntervalMinutes": [30, 1440, 4320] }' http://localhost:4000/schedule-config/update-config
```

#### All sent messages
```bash
curl -X GET  -H "Content-Type: application/json" http://localhost:4000/sent-message/get-all
```


