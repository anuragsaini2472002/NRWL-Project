/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/db/conn.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const DB = 'mongodb+srv://crud_project:Anurag123@cluster0.bkuxg.mongodb.net/merncrud?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection start with mongoDB")).catch((err) => console.log(err.message));


/***/ }),

/***/ "./apps/api/src/app/models/userSchema.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Number, required: true },
    nhsNumber: { type: Number, required: true },
    drPlusIdNo: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true }
});
const user = new mongoose.model("nrwlProject", userSchema);
module.exports = user;


/***/ }),

/***/ "./apps/api/src/app/routes/router.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const express = __webpack_require__("express");
const router = express.Router();
const users = __webpack_require__("./apps/api/src/app/models/userSchema.js");
// register user
router.post('/register', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address } = req.body;
    if (!firstName || !lastName || !email || !dob || !nhsNumber || !drPlusIdNo || !gender || !address) {
        req.status(422).json("Please fill the data!");
    }
    try {
        const preUser = yield users.findOne({ email }); //email:email
        console.log(preUser);
        if (preUser) {
            res.status(422).json("This user is already present!");
            console.log("This user is already present!");
        }
        else {
            const addUser = new users({ firstName, lastName, email, dob, nhsNumber, drPlusIdNo, gender, address });
            yield addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
    }
    catch (error) {
        res.status(422).json(error);
    }
}));
// get user data
router.get('/getdata', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield users.find();
        res.status(201).json(userData);
        console.log(userData);
    }
    catch (error) {
        res.status(422).json(error);
    }
}));
// get individual data
router.get('/getuser/:id', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const { id } = req.params;
        const userIndividual = yield users.findById({ _id: id });
        console.log(userIndividual);
        res.status(201).json(userIndividual);
    }
    catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
}));
module.exports = router;


/***/ }),

/***/ "cors":
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// import * as express from 'express';
// const app = express();
// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });
// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);
const express = __webpack_require__("express");
const app = express();
const mongoose = __webpack_require__("mongoose");
__webpack_require__("./apps/api/src/app/db/conn.js");
const users = __webpack_require__("./apps/api/src/app/models/userSchema.js");
const cors = __webpack_require__("cors");
const router = __webpack_require__("./apps/api/src/app/routes/router.js");
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Server successfully run in port: ${port}`);
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map