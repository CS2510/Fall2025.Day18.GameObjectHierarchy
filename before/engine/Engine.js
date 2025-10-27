class Engine {
    static layers = ["", "UI"]
    //Engine-specific
    static start(gameProperties) {
        Engine.layers.push(...gameProperties.layers)
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)
        addEventListener("mousemove", Input.mousemove)
        //Game-specific
        SceneManager.update()
        SceneManager.getActiveScene().start()
        Engine.gameLoop()
    }

    //Engine-specific code
    static gameLoop() {
        SceneManager.update()
        Engine.update()
        Engine.draw()
        Input.update()
        requestAnimationFrame(Engine.gameLoop)
    }



    //Engine-specific
    static update() {
        SceneManager.getActiveScene().update()
    }

    //Engine-specific
    static draw() {

        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        //Game-specific
        Engine.ctx.fillStyle = Camera.main.getComponent(Camera).backgroundColor
        Engine.ctx.beginPath()
        Engine.ctx.rect(0, 0, Engine.canvas.width, Engine.canvas.height)
        Engine.ctx.fill()

        SceneManager.getActiveScene().draw(Engine.ctx)

    }
}