class Game {
    constructor() {
        this.board = new Board();
        this.interface = new Interface();
        this.hero = [-1, -1, -1];
        this.enemy = [-1, -1, -1];
        this.maxHero = 3;
        this.isSelecting = false;
        this.modelSelected = 0;
        this.heroesOnBoard = 0;
        this.enemiesOnBoard = 0;
        this.round = 0;
    }

    newHero(id) {
        for (let i = 0; i < 3; i++) {
            if (this.hero[i] == -1) {
                this.hero[i] = new Hero(id, false);
                this.heroesOnBoard++;
                return i;
            }
        }
    }

    newEnemy() {
        for (let i = 0; i < roundContent[this.round].enemyNumber; i++) {
            print(roundContent[this.round].enemyNumber);
            if (this.enemy[i] == -1) {
                this.enemy[i] = new Hero(roundContent[this.round].enemyModel[i], true);
                this.enemy[i].position = this.board.blocks[this.placeEnemy()][0];
                this.enemy[i].blockPos = this.placeEnemy();
                this.board.blocks[this.placeEnemy()][1] = 0;
                this.enemiesOnBoard++;
            }
        }
    }

    draw() {
        this.interface.draw();
        push();
        rotate(-150, createVector(1, 0, 0));
        translate(createVector(0, 150, -50));
        this.board.draw();
        for (let i = 0; i < this.maxHero; i++) {
            if (this.hero[i].visibility)
                this.hero[i].draw();
            if (this.enemy[i].visibility)
                this.enemy[i].draw();
        }
        this.refreshPosition();
        pop();
    }

    mouseTrackerBoard() {
        for (let i = 0; i < 18; i++) {
            if (mouseX - (width / 2) < bounding[i].right && mouseX - (width / 2) > bounding[i].left &&
                mouseY - (height / 2) > bounding[i].top && mouseY - (height / 2) < bounding[i].bottom) {
                mouse = i;
            }
        }
    }

    mouseTrackerStore() {
        for (let i = 0; i < 3; i++) {
            if (mouseX - (width / 2) < boundingStore[i].right && mouseX - (width / 2) > boundingStore[i].left &&
                mouseY - (height / 2) > boundingStore[i].top && mouseY - (height / 2) < boundingStore[i].bottom) {
                return i;
            }
        }
    }

    mouseTrackerInventory() {
        for (let i = 0; i < 3; i++) {
            if (mouseX - (width / 2) < boundingInventory[i].right && mouseX - (width / 2) > boundingInventory[i].left &&
                mouseY - (height / 2) > boundingInventory[i].top && mouseY - (height / 2) < boundingInventory[i].bottom) {
                return i;
            }
        }
    }

    refreshPosition() {
        for (let i = 0; i < this.maxHero; i++) {
            if (this.hero[i].followMouse)
                this.hero[i].position = this.board.blocks[mouse][0];
        }
    }

    placeEnemy() {
        for (let i = 14; i < 18; i++) {
            if (this.board.blocks[i][1] == -1) {
                return i;
            }
        }
    }

    generateEnemies() {
        battleLog.html(battleLog.html() + '<br><br><br><center>-- ROUND ' + this.round + ' --</center>');
        for (let i = 0; i < roundContent[this.round].enemyNumber; i++) {
            this.newEnemy();
        }
    }

    attack(source, target) {
        print(source);
        print(target);
        if (target.life > 0) {
            let hit = Math.floor(Math.random() * (source.attack - source.attack / 2)) + source.attack / 2;
            target.life = target.life - hit;
            if (source.isEnemy == true)
                battleLog.html(battleLog.html() + '<br><br> E -> ' + source.name + ' attacks ' + target.name + ' and takes ' + hit + ' HP. ' + target.name + ' HP is now ' + target.life + '.');
            if (source.isEnemy == false)
                battleLog.html(battleLog.html() + '<br><br> A -> ' + source.name + ' attacks ' + target.name + ' and takes ' + hit + ' HP. ' + target.name + ' HP is now ' + target.life + '.');
        }
        this.checkLife();
    }

    checkLife() {
        for (let i = 0; i < 3; i++) {
            if (this.hero[i] != -1 && this.hero[i].life <= 0) {
                this.board.blocks[this.hero[i].blockPos][1] = -1;
                this.hero[i] = -1;
                this.heroesOnBoard--;
            }
            if (this.enemy[i] != -1 && this.enemy[i].life <= 0) {
                this.board.blocks[this.enemy[i].blockPos][1] = -1;
                this.enemy[i] = -1;
                this.enemiesOnBoard--;
            }
        }
    }

}