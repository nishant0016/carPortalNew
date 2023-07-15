let carMaster = [
    {model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", 
     colors: ["White", "Silver Grey", "Metallic Blue", "Red"], type: "Sedan", transmission: "Manual"},
    {model: "Etios SMi", make: "Toyota", fuel: "Diesel",
     colors: ["White", "Steel Grey", "Black"], type: "Hatchback", transmission: "Manual"},
    {model: "City AXi", make: "Honda", fuel: "Petrol",
     colors: ["Silver Grey", "Metallic Blue", "Black"], type: "Sedan", transmission: "Automatic"},
    {model: "Swift DXi", make: "Maruti", fuel: "Diesel",
     colors: ["White", "Red", "Black"], type: "Hatchback", transmission: "Manual"},
    {model: "Etios VXi", make: "Toyota", fuel: "Diesel",
     colors: ["White", "Silver Grey", "Black"], type: "Sedan", transmission: "Manual"},
    {model: "City ZXi", make: "Honda", fuel: "Petrol",
     colors: ["Silver Grey", "Metallic Blue", "Red"], type: "Sedan", transmission: "Manual"}
   ];
   let cars = [
    {id: "ABR12", price: 400000, year: 2015, kms: 25000, model: "Swift Dzire VXi", color: "White"},
    {id: "CBN88", price: 480000, year: 2012, kms: 75000, model: "Etios SMi", color: "Steel Grey"},
    {id: "XER34", price: 300000, year: 2013, kms: 55000, model: "City AXi", color: "Metallic Blue"},
    {id: "MPQ29", price: 400000, year: 2015, kms: 25000, model: "Swift DXi", color: "Black"},
    {id: "PYQ88", price: 480000, year: 2012, kms: 75000, model: "Etios VXi", color: "White"},
    {id: "DFI61", price: 300000, year: 2013, kms: 55000, model: "City ZXi", color: "Red"},
    {id: "JUW88", price: 400000, year: 2015, kms: 25000, model: "Swift Dzire VXi", color: "White"},
    {id: "KPW09", price: 285000, year: 2012, kms: 76321, model: "Swift Dzire VXi", color: "White"},
    {id: "NHH09", price: 725000, year: 2018, kms: 15000, model: "City ZXi", color: "Silver Grey"},
    {id: "CTT26", price: 815000, year: 2016, kms: 42500, model: "City AXi", color: "Metallic Blue"},
    {id: "VAU55", price: 345000, year: 2014, kms: 81559, model: "Swift DXi", color: "Red"},
    {id: "BTR31", price: 184000, year: 2011, kms: 120833, model: "Etios VXi", color: "Silver Grey"}
   ];

module.exports.carsData=cars;
module.exports.carMasterData=carMaster;