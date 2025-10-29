class MainScene extends Scene{
    constructor(){
        super()

        const cameraGameObject = new CameraGameObject()
        cameraGameObject.getComponent(Camera).backgroundColor = "black"
        this.instantiate(cameraGameObject)
       
        this.instantiate(new MainControllerGameObject())

        this.instantiate(new EnemyGameObject(), new Vector2(0,0))
        this.instantiate(new EnemyGameObject(), new Vector2(50, 50))
        this.instantiate(new EnemyGameObject(), new Vector2(30, 30))
        this.instantiate(new EnemyGameObject(), new Vector2(40, 70))
        this.instantiate(new PlayerGameObject(), new Vector2(100, 300))

        //UI Game Objects
        this.instantiate(new ScoreGameObject(), new Vector2(100, 30))
    }
}