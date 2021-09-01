import sum from "./sum";
import StringUtils from "../StringUtils/StringUtils";
import { strict as assert } from "assert";

let c: number = 0;
c = sum(1, 3);
console.log(`hello world! ${c}`);

assert.equal(c, 4, "1+3=4");

let util: StringUtils = new StringUtils();
util.log("test");

//ts only cool code
