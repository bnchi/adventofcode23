import { readFileSync } from 'fs'

import day12 from './day12/index.js'

const testInput = readFileSync('./day12/input.txt', 'utf8')
day12(testInput)
