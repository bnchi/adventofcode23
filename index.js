import { readFileSync } from 'fs'

import day8 from './day8/index.js'

const testInput = readFileSync('./day8/input.txt', 'utf8')
day8(testInput)
