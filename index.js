import { readFileSync } from 'fs'

import day11 from './day11/index.js'

const testInput = readFileSync('./day11/input.txt', 'utf8')
day11(testInput)
