class MainControllerGameObject extends GameObject{
  constructor(){
    super("Main Controller Game Object")
    this.addComponent(new MainController())
  }
}