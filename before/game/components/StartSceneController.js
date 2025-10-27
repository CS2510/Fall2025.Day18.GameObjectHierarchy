class StartSceneController extends Component{
    start(){
        this.time = 0
    }
    update(){
        this.time += Time.deltaTime
        // if(this.time > 3){
        if(Input.keysDown.length > 0){
            SceneManager.loadScene(new MainScene())
        }
    }
}