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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YXNrMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaWd1cmVzID0gbmV3IE1hcChbXHJcbiAgICBbJ0ExJywgJ+KZliddLFxyXG4gICAgWydCMScsICfimZgnXSxcclxuICAgIFsnQzEnLCAn4pmXJ10sXHJcbiAgICBbJ0QxJywgJ+KZlCddLFxyXG4gICAgWydFMScsICfimZUnXSxcclxuICAgIFsnRjEnLCAn4pmXJ10sXHJcbiAgICBbJ0cxJywgJ+KZmCddLFxyXG4gICAgWydIMScsICfimZYnXSxcclxuICAgIFsnQTInLCAn4pmZJ10sXHJcbiAgICBbJ0IyJywgJ+KZmSddLFxyXG4gICAgWydDMicsICfimZknXSxcclxuICAgIFsnRDInLCAn4pmZJ10sXHJcbiAgICBbJ0UyJywgJ+KZmSddLFxyXG4gICAgWydGMicsICfimZknXSxcclxuICAgIFsnRzInLCAn4pmZJ10sXHJcbiAgICBbJ0gyJywgJ+KZmSddLFxyXG4gICAgWydBNycsICfimZ8nXSxcclxuICAgIFsnQjcnLCAn4pmfJ10sXHJcbiAgICBbJ0M3JywgJ+KZnyddLFxyXG4gICAgWydENycsICfimZ8nXSxcclxuICAgIFsnRTcnLCAn4pmfJ10sXHJcbiAgICBbJ0Y3JywgJ+KZnyddLFxyXG4gICAgWydHNycsICfimZ8nXSxcclxuICAgIFsnSDcnLCAn4pmfJ10sXHJcbiAgICBbJ0E4JywgJ+KZnCddLFxyXG4gICAgWydCOCcsICfimZ4nXSxcclxuICAgIFsnQzgnLCAn4pmdJ10sXHJcbiAgICBbJ0Q4JywgJ+KZmiddLFxyXG4gICAgWydFOCcsICfimZsnXSxcclxuICAgIFsnRjgnLCAn4pmdJ10sXHJcbiAgICBbJ0c4JywgJ+KZniddLFxyXG4gICAgWydIOCcsICfimZwnXVxyXG5cclxuXSk7XHJcbmNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdIXCI7XHJcblxyXG5mb3IgKGxldCBpID0gMTsgaSA8IDk7IGkrKyl7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKyl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMZXR0ZXIgPSBsZXR0ZXJzLmNoYXJBdChqKTtcclxuICAgICAgIGxldCBjb29yZHMgPSBjdXJyZW50TGV0dGVyICsgaTtcclxuICAgICAgICBpZihmaWd1cmVzLmhhcyhjb29yZHMpKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJHtjb29yZHN9OiAke2ZpZ3VyZXMuZ2V0KGNvb3Jkcyl9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkKCkge1xyXG4gICAgbGV0IGJvYXJkID0gXCI8dGFibGUgY2VsbHNwYWNpbmc9JzAnPjx0aGVhZD48dHI+PHRoPjwvdGg+XCI7XHJcbiAgICAvL9C00L7QsdCw0LLQu9GP0Y4g0LHRg9C60L7QstC60Lgg0L/QvtCy0LXRgNGFLCDQv9C10YDQstCw0Y8g0Y/Rh9C10LnQutCwINC/0YDQvtC/0YPRidC10L3QsFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xyXG4gICAgICAgIGJvYXJkICs9IGA8dGg+JHtsZXR0ZXJzLmNoYXJBdChpKX08L3RoPmA7XHJcbiAgICB9XHJcbiAgICBib2FyZCArPSBcIjwvdHI+PC90aGVhZD5cIjtcclxuICAgIC8v0YLQtdC/0LXRgNGMINGB0LDQvNC+INC+0YHQvdC+0LLQvdC+0LUg0L/QvtC70LVcclxuICAgIGJvYXJkICs9IFwiPHRib2R5PlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpKyspe1xyXG4gICAgICAgIGJvYXJkICs9IGA8dHI+PHRkPiR7aX08L3RkPmA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspe1xyXG4gICAgICAgICAgICAvL9Cn0YLQvtCx0Ysg0LTQstCw0LbQtNGLINC90LUg0LLRgdGC0LDQstCw0YLRjCwg0YHRgNCw0LfRgyDQttC1INC+0L/RgNC10LTQtdC70Y/QtdC8INC60L7QvtGA0LTQuNC90LDRgtGDINGP0YfQtdC50LrQuCDQsiDQstC40LTQtVxyXG4gICAgICAgICAgICAvL9Cx0YPQutCy0LAgKyDRhtC40YTRgNCwXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGV0dGVyID0gbGV0dGVycy5jaGFyQXQoaik7XHJcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBjdXJyZW50TGV0dGVyICsgaTtcclxuICAgICAgICAgICAgLy/Rj9GH0LXQudC60LgsINGDINC60L7RgtC+0YDRi9GFINC40L3QtNC10LrRgSDQv9C+0LvRg9GH0LDQtdGC0YHRjyDRh9GR0YLQvdGL0LksINCx0YPQtNGD0YIg0YfRkdGA0L3Ri9C80LhcclxuICAgICAgICAgICAgaWYoKGkgKyBqKSUyICE9PSAwKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkICs9IGA8dGQ+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgYm9hcmQgKz0gYDx0ZCBjbGFzcz1cImJsYWNrXCI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL9Ci0LXQv9C10YDRjCDQv9GA0L7QstC10YDRj9C10LwsINC00L7Qu9C20L3QsCDQu9C4INCyINGN0YLQvtC5INGP0YfQtdC50LrQtSDQsdGL0YLRjCDRhNC40LPRg9GA0LAsINC10YHQu9C4INC00LAsINGC0L4g0YHRgNCw0LfRgyDQtdGRINC00L7QsdCw0LLQu9GP0LXQvFxyXG4gICAgICAgICAgICBpZihmaWd1cmVzLmhhcyhjb29yZHMpKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkICs9IGAke2ZpZ3VyZXMuZ2V0KGNvb3Jkcyl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZCArPSBgPC90ZD5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZCArPSBgPC90cj5gO1xyXG4gICAgfVxyXG4gICAgYm9hcmQgKz0gYDwvdGJvZHk+PC90YWJsZT5gO1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2szXCIpO1xyXG5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCByZW5kZXJCb2FyZCgpKTsiXSwiZmlsZSI6InRhc2szLmpzIn0=
