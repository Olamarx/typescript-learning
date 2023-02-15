"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([100000, 3, -5, 110]);
const sorter = new Sorter_1.Sorter([numbersCollection]);
sorter.sort();
console.log(numbersCollection.data);
