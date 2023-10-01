import { join, dirname } from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { setupMaster, fork } from "cluster";
import { watchFile, unwatchFile } from "fs";
import cfonts from "cfonts";
import chalk from "chalk";
import util from "util"
import { createInterface } from "readline";
import yargs from "yargs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, author } = require(join(__dirname, "./package.json"));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('BOTWHAITA v5', {
    font: 'block', 
    align: 'center',
    gradient: ['white','white']})
    say('ediz fab & dan', {
    font: 'block',
    align: 'center',
    gradient: ['white','white']})

var isRunning = false;
/**
* Start a js file 
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true;
let args = [join(__dirname, file), ...process.argv.slice(2)]
  
setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
//console.log('╭--------- - - - ✓\n┆ ✅ TIEMPO DE ACTIVIDAD ACTUALIZADA\n╰-------------------- - - -', data)
switch (data) {
case 'reset':
p.process.kill();
isRunning = false;
start.apply(this, arguments);
break;
case 'uptime':
p.send(process.uptime());
break;
}
});
p.on('exit', (_, code) => {
isRunning = false;
console.error('⚠️ ERRORE INASPETTATO ⚠️', code)

p.process.kill();
isRunning = false;
start.apply(this, arguments);

if (process.env.pm_id) {
process.exit(1);
} else {
process.exit();
}});
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
if (!opts['test']) {
if (!rl.listenerCount()) {
rl.on('line', (line) => {
p.emit('message', line.trim());
});
}}}
start('main.js');
