import { argv } from 'node:process';
import randomColor from 'randomcolor';
import chalk from 'chalk';

const color = randomColor({ hue: argv[2], luminosity: argv[3] });

console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#####                     #####
#####      ${color}        #####
#####                     #####
###############################
###############################
###############################`),
);
