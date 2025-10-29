/**
 * The camera game object that should be in every scene
 */
class CameraGameObject extends GameObject{
    constructor(){
        super("Camera Game Object")
        this.addComponent(new Camera())
    }
}