import { Game } from './game.js';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        // Cargar cualquier recurso necesario para el menú, como imágenes o fuentes
        this.load.image('background', '/static/image/menu-background.png');
        this.load.image('startButton', '/static/image/start-button.png');
    }

    create() {
        // Agregar una imagen de fondo
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'background').setScale(0.5);

        // Agregar un texto de título
        this.add.text(this.sys.game.config.width / 2, 100, 'Game Title', {
            fontSize: '48px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Agregar un botón para iniciar el juego
        const startButton = this.add.image(this.sys.game.config.width / 2, 250, 'startButton').setInteractive();

        // Manejar el evento de clic en el botón de inicio
        startButton.on('pointerdown', () => {
            this.scene.start('Game'); // Cambia a la escena del juego
        });

        // Cambiar el color o escala del botón cuando el ratón pase por encima
        startButton.on('pointerover', () => {
            startButton.setScale(1.1);
        });

        startButton.on('pointerout', () => {
            startButton.setScale(1);
        });
    }
}