#!/usr/bin/env node

var doo = require('../dist/entry/doo');

try {
    doo.doo(process.argv);
} catch (err) {
    console.log(err.message);
    process.exit();
}