class StartButtonController extends Component{
  update(){
    if(Input.buttonsUpThisFrame.includes(0)){
      if(Collisions.inCollisionPoint(Input.mousePosition, this.gameObject)){
        SceneManager.loadScene(new MainScene())
      }
    }
  }
}