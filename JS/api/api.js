/*

Core Module Systems
There are two primary module systems in modern JavaScript development: 
Feature 	ES Modules (ESM)	                    CommonJS (CJS)
Standard	Official ECMAScript standard (modern)	Original Node.js standard
Import Syntax	import { name } from './file.js'	const name = require('./file')
Export Syntax	export / export default	          module.exports / exports

Default Export: Only one export per file and can be imported as any name  
Normal/Named Export: Multiple exports from a single file as an object 

We can also export one default method + multiple named exports from a single file 

Important Notes - Why type:"module" is necessary in package.json file:
Default Behavior: By default, Node.js treats .js files as CommonJS (CJS), the legacy module system that uses require() and module.exports.
Strict Mode: Adding "type": "module" automatically enables Strict Mode for all your scripts, enforcing better coding practices.

*/

import { getDataFromDB } from "../database/db.js";
import myMethod from "../database/db.js"; // when importing default exports, any name can be used

export function callAPI() {
    console.log("API called");

    // call DB method
    myMethod();
    getDataFromDB();
}

export default function testApi() {

}