var player1 = prompt("Enter name of first player one:");
var colorPlayer1 = 'rgb(86151,255)';

var player2 = prompt("Enter name of first player two:");
var colorPlayer2 = 'rgb(237,45,70)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum){
    console.log('You won starting at this row,col');
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background_color',color);

}






