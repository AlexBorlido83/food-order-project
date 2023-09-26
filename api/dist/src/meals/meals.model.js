"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsSchema = void 0;
const mongoose = require("mongoose");
exports.MealsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});
//# sourceMappingURL=meals.model.js.map