# Checkout Recovery Automation

## Demo CURLs

#### Schedule an recovery on abandoned checkout
```bash
curl -X POST -H "Content-Type: application/json" -d @sample-data/abandoned-checkout.json http://localhost:4000/abandoned-checkout/schedule-recovery 
```

#### Cancel recovery on order placed
```bash
curl -X POST -H "Content-Type: application/json" -d @sample-data/order-placed.json http://localhost:4000/order-placed/cancel-recovery 
```

#### Customize recovery schedule
```bash
curl -X PATCH  -H "Content-Type: application/json" -d '{ "customerId": 207119551, "recoveryIntervalMinutes": [30, 1440, 4320] }' http://localhost:4000/schedule-config/update-config
```