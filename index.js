import { readFileSync } from 'fs'

import day4 from './day4/index.js'

const testInput = readFileSync('./day4/input.txt', 'utf8')
day4(testInput)
