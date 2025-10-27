class StartScene extends Scene{
    constructor(){
        super()

        //Create the camera in-line
        const camera = new CameraGameObject()
        camera.getComponent(Camera).backgroundColor = "orange"
        this.instantiate(camera)

        //Create the title text in-line
        const titleText = new GameObject("Title Text Game Object", {layer: "UI"})
        titleText.addComponent(new Text(), {fillStyle: "black", text: "Galaxy Guardians"})
        this.instantiate(titleText, new Vector2(100, 100))

        //Create the button in-line
        const buttonParent = new GameObject("Start Button Parent", {layer: "UI"})
        this.instantiate(buttonParent, new Vector2(200, 200))

        const button = new GameObject("Start Button Game Object", {layer:"UI"})
        button.addComponent(new Polygon(), {fillStyle: "blue", points:GameAssets.square})
        button.addComponent(new StartButtonController())
        button.transform.scale = new Vector2(100, 20)
        button.transform.setParent(buttonParent)


        const buttonText = new GameObject("Start Button Text Game Object")
        buttonText.addComponent(new Text(), {text:"Press to Start", fillStyle:"white", textAlign:"center", textBaseline:"middle"})
        buttonText.transform.scale = new Vector2(1, 1)
        buttonText.transform.setParent(buttonParent)

        //Create the state scene controller in-line
        const startSceneControllerGameObject = new GameObject("Start Scene Controller Game Object")
        startSceneControllerGameObject.addComponent(new StartSceneController())
        this.instantiate(startSceneControllerGameObject)
    }
}