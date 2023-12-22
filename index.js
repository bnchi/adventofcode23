import { readFileSync } from 'fs'

import day9 from './day9/index.js'

const testInput = readFileSync('./day9/input.txt', 'utf8')
day9(testInput)
