const figures = new Map([
    ['A1', '♖'],
    ['B1', '♘'],
    ['C1', '♗'],
    ['D1', '♔'],
    ['E1', '♕'],
    ['F1', '♗'],
    ['G1', '♘'],
    ['H1', '♖'],
    ['A2', '♙'],
    ['B2', '♙'],
    ['C2', '♙'],
    ['D2', '♙'],
    ['E2', '♙'],
    ['F2', '♙'],
    ['G2', '♙'],
    ['H2', '♙'],
    ['A7', '♟'],
    ['B7', '♟'],
    ['C7', '♟'],
    ['D7', '♟'],
    ['E7', '♟'],
    ['F7', '♟'],
    ['G7', '♟'],
    ['H7', '♟'],
    ['A8', '♜'],
    ['B8', '♞'],
    ['C8', '♝'],
    ['D8', '♚'],
    ['E8', '♛'],
    ['F8', '♝'],
    ['G8', '♞'],
    ['H8', '♜']

]);
const letters = "ABCDEFGH";

for (let i = 1; i < 9; i++){
    for (let j = 0; j < 8; j++){
        let currentLetter = letters.charAt(j);
       let coords = currentLetter + i;
        if(figures.has(coords)){
            //console.log(`${coords}: ${figures.get(coords)}`)
        }
    }
}

function renderBoard() {
    let board = "<table cellspacing='0'><thead><tr><th></th>";
    //добавляю буковки поверх, первая ячейка пропущена
    for (let i = 0; i < 8; i++){
        board += `<th>${letters.charAt(i)}</th>`;
    }
    board += "</tr></thead>";
    //теперь само основное поле
    board += "<tbody>";
    for (let i = 1; i < 9; i++){
        board += `<tr><td>${i}</td>`;
        for (let j = 0; j < 8; j++){
            //Чтобы дважды не вставать, сразу же определяем координату ячейки в виде
            //буква + цифра
            let currentLetter = letters.charAt(j);
            let coords = currentLetter + i;
            //ячейки, у которых индекс получается чётный, будут чёрными
            if((i + j)%2 !== 0){
                board += `<td>`;
            }
            else{
                board += `<td class="black">`;
            }
            //Теперь проверяем, должна ли в этой ячейке быть фигура, если да, то сразу её добавляем
            if(figures.has(coords)){
                board += `${figures.get(coords)}`;
            }
            board += `</td>`;
        }
        board += `</tr>`;
    }
    board += `</tbody></table>`;
    return board;
}

const container = document.getElementById("task3");
container.insertAdjacentHTML("afterbegin", renderBoard());