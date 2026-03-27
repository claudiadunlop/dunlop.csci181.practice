console.log("Trip script connected");

// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
//constants
const DRIVER_NAME = "Claudia";
const DISTANCE_MILES = 384;
const MPG = 25;
const FUEL_PRICE = 3.98;
const FUEL_CAPACITY = 15;
const IS_ROUND_TRIP = true;

//lets
let total_distance;
let stop_counter = 0;
let miles_traveled = 0;
let amount_spent_on_gas = 0;
let estimated_total_cost = 0;

//calculations
let miles_per_tank = milesPerTank(FUEL_CAPACITY, MPG);
let cost_per_fuel_tank = costPerFuelTank(FUEL_CAPACITY, FUEL_PRICE);
// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------
function calculateGallonsNeeded(total_distance, mpg) {
    return total_distance / mpg;
}
function calculateFuelCost(gallons, gas_price){
    return gallons * gas_price;
}

function milesPerTank(fuel_capacity, mpg){
    return fuel_capacity * mpg;
}

function costPerFuelTank(fuel_capacity, gas_price){
    return fuel_capacity * gas_price;
}
// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------
//check if it's a round trip
if (IS_ROUND_TRIP) {
    total_distance = DISTANCE_MILES * 2;
} else {
    total_distance = DISTANCE_MILES;
}

console.log(`The total distance of the trip is ${total_distance} miles.`);
//loops through the trip and calculates stops until the trip is done
for(let i = 0; i < total_distance; i++){
    if (i % miles_per_tank === 0){
        stop_counter++;
        miles_traveled += miles_per_tank;
        amount_spent_on_gas += cost_per_fuel_tank;
        console.log(`This is stop number ${stop_counter}. You have traveled ${miles_traveled} miles and spent $${amount_spent_on_gas} on gas.`);
    }
}

//prints out final info
console.log(`${DRIVER_NAME} drove ${total_distance} miles, used approximately ${calculateGallonsNeeded(total_distance, MPG)} gallons of gas, and spent approximately $${calculateFuelCost(calculateGallonsNeeded(total_distance, MPG), FUEL_PRICE)} on fuel.`);