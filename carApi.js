const express = require("express");
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const { carsData, carMasterData } = require("./carData.js");

// GET /car/test
app.get("/car/test", function (req, res) {
  res.send("Car API Test");
});

// GET /cars
app.get("/cars", function (req, res) {
  let { minprice, maxprice, fuel, type, sort } = req.query;
  let filteredCars = carsData;

  if (minprice) {
    filteredCars = filteredCars.filter((car) => car.price >= parseInt(minprice));
  }

  if (maxprice) {
    filteredCars = filteredCars.filter((car) => car.price <= parseInt(maxprice));
  }

  if (fuel) {
    filteredCars = filteredCars.filter((car) => carMasterData.find((m) => m.model === car.model)?.fuel === fuel);
  }

  if (type) {
    filteredCars = filteredCars.filter((car) => carMasterData.find((m) => m.model === car.model)?.type === type);
  }

  if (sort === "price") {
    filteredCars.sort((a, b) => a.price - b.price);
  }

  if (sort === "year") {
    filteredCars = filteredCars.sort((a,b)=>a.year-b.year);
  }

  if (sort === "kms") {
    filteredCars = filteredCars.sort((a,b)=>a.kms-b.kms);
  }

  res.json(filteredCars);
});

// POST /cars
app.post("/cars", function (req, res) {
  const newCar = req.body;
  carsData.push(newCar);
  res.status(201).json(newCar);
});

// GET /cars/:id
app.get("/cars/:id", function (req, res) {
  const carId = req.params.id;
  const car = carsData.find((car) => car.id === carId);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

// PUT /cars/:id
app.put("/cars/:id", function (req, res) {
  const carId = req.params.id;
  const updatedCar = req.body;
  const index = carsData.findIndex((car) => car.id === carId);

  if (index !== -1) {
    carsData[index] = { ...carsData[index], ...updatedCar };
    res.json(carsData[index]);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

// DELETE /cars/:id
app.delete("/cars/:id", function (req, res) {
  const carId = req.params.id;
  const index = carsData.findIndex((car) => car.id === carId);

  if (index !== -1) {
    const deletedCar = carsData.splice(index, 1);
    res.json(deletedCar[0]);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

// GET /carmaster
app.get("/carmaster", function (req, res) {
  res.json(carMasterData);
});

var port =process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
