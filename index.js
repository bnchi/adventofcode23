import { readFileSync } from 'fs'

import day6 from './day6/index.js'

const testInput = readFileSync('./day6/input.txt', 'utf8')
day6(testInput)
