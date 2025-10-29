/**
 * The main engine class of our engine. It starts the game and runs the game loop.
 */
class Engine {

    /**
     * The list of default layers in our engine.
     * @type {string[]} 
     */
    static layers = ["", "UI"]


    /**
     * The canvas element we will draw to
     * @type {HTMLCanvasElement}
     */
    static canvas

    /**
     * The 2D context we will draw to
     * @type {CanvasRenderingContext2D}
     */
    static ctx

    /**
     * Start the game
     * @param {GameProperties} gameProperties Optional argument for specific game-specific properties
     */
    static start(gameProperties) {
        if(gameProperties)
        Engine.layers.push(...gameProperties.layers)
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)
        addEventListener("mousemove", Input.mousemove)

        SceneManager.update()
        SceneManager.getActiveScene().start()
        Engine.gameLoop()
    }

    /**
     * Run the game loop. This update the various static classes, then updates the game objects and draw them.
     */
    static gameLoop() {
        SceneManager.update()
        Engine.update()
        Engine.draw()
        Input.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    /**
     * Update all the game objects in the scene
     */
    static update() {
        SceneManager.getActiveScene().update()
    }

    /**
     * Draw all the game objects in the scene
     */
    static draw() {

        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        //@ts-ignore Since this call results in a Camera component, we can set backgroundColor
        Engine.ctx.fillStyle = Camera.main.getComponent(Camera).backgroundColor
        Engine.ctx.beginPath()
        Engine.ctx.rect(0, 0, Engine.canvas.width, Engine.canvas.height)
        Engine.ctx.fill()

        SceneManager.getActiveScene().draw(Engine.ctx)
    }
}