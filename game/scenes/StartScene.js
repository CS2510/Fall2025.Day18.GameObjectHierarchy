class StartScene extends Scene{
    constructor(){
        super()

        const camera = new CameraGameObject()
        camera.getComponent(Camera).backgroundColor = "orange"
        this.instantiate(camera)

        const titleText = new GameObject("Title Text Game Object", {layer: "UI"})
        titleText.addComponent(new Text(), {fillStyle: "black", text: "Galaxy Guardians"})
        this.instantiate(titleText, new Vector2(100, 100))


        const button = new GameObject("Start Button Game Object", {layer:"UI"})
        button.addComponent(new Polygon, {fillStyle: "blue", points:GameAssets.square})
        button.transform.scale = new Vector2(100, 20)
        this.instantiate(button, new Vector2(200, 200))

        const startSceneControllerGameObject = new GameObject("Start Scene Controller Game Object")
        startSceneControllerGameObject.addComponent(new StartSceneController())
        this.instantiate(startSceneControllerGameObject)
    }
}