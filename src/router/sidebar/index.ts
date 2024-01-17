import part1 from './documents/part1'
import part2 from './documents/part2'
import part3 from './documents/part3'
import part4 from './documents/part4'
import part5 from './documents/part5'
import part7 from './documents/part7'
import part9 from './documents/part9'
import revise from './revise'

const sidebar = {
    '/': [],
    ...part1,
    ...part2,
    ...part3,
    ...part4,
    ...part5,
    ...part7,
    ...part9,
    ...revise
}

export { sidebar }
