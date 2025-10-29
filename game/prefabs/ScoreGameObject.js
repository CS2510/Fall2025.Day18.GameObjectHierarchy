class ScoreGameObject extends GameObject{
    constructor(){
        super("Score Game Object", {layer: "UI"})
        this.addComponent(new Text())
        this.addComponent(new ScoreController())
    }
}