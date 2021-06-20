"use strict";
exports.__esModule = true;
var classImplementInterface_1 = require("./classImplementInterface");
var documentOne = new classImplementInterface_1.Invoice('Vina milk', 'drink milk', 5000000);
var documentTwo = new classImplementInterface_1.Invoice('Vietnam Airlines', 'fly', 25000000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);
