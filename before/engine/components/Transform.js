class Transform extends Component{
    position = new Vector2(0,0)
    rotation = 0
    scale = new Vector2(1,1)
    children = []
    parent = undefined
    setParent(gameObject){
        this.parent = gameObject
        gameObject.transform.children.push(this.gameObject)
    }
}