import { intersection } from 'lodash';

const matches = [
    ["0-0","0-1","0-2","0-3","0-4"], // Horizontal
    ["1-0","1-1","1-2","1-3","1-4"],
    ["2-0","2-1","2-2","2-3","2-4"],
    ["3-0","3-1","3-2","3-3","3-4"],
    ["4-0","4-1","4-2","4-3","4-4"],
    ["0-0","1-0","2-0","3-0","4-0"], // Vertical
    ["0-1","1-1","2-1","3-1","4-1"],
    ["0-2","1-2","2-2","3-2","4-2"],
    ["0-3","1-3","2-3","3-3","4-3"],
    ["0-4","1-4","2-4","3-4","4-4"],
    ["0-4","1-3","2-2","3-1","4-0"], // Diagnal
    ["0-0","1-1","2-2","3-3","4-4"],
]

export const isWinner = (selected: Array<string>) : boolean => {
    let result = false
    matches.forEach((match: Array<string>) => {
        result = result ? true : intersection(match, selected).length >= 5
    })
    return result
}