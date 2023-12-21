import { readFileSync } from 'fs'

import day7 from './day7/index.js'

const testInput = readFileSync('./day7/input.txt', 'utf8')
day7(testInput)
