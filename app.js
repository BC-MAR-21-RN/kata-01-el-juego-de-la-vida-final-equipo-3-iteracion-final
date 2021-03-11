class LifeGame {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }

    RunGame() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

       

        rl.question('INGRESA FILAS :', (numberRows) => {
           this.rows = numberRows
            rl.question('INGRESA COLUMNAS :', (numberColumns) => {
                this.columns = numberColumns

 
                rl.close();
            });
        });
    }
 
    


}

let newGame = new LifeGame(2, 2);

newGame.RunGame();
