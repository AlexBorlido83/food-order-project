"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoSchema = void 0;
const mongoose = require("mongoose");
exports.UserInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    street: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
});
//# sourceMappingURL=userInfo.model.js.map