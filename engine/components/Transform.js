class Transform extends Component{
    /**
     * @type {Vector2}
     */
    position = new Vector2(0,0)

    /**
     * @type {Number}
     */
    rotation = 0

    /**
     * @type {Vector2}
     */
    scale = new Vector2(1,1)

    parent = undefined 

    setParent(parentTransform){
        this.parent = parentTransform
    }

    getLocalMatrix(){
        const matrix = new DOMMatrix()
        matrix.translateSelf(this.position.x, this.position.y)
        matrix.scaleSelf(this.scale.x, this.scale.y)
        matrix.rotateSelf(this.rotation * (180/Math.PI))
        return matrix
    }

    getWorldMatrix(){
        if(!this.parent) return this.getLocalMatrix()
        return this.parent.getWorldMatrix().multiply(this.getLocalMatrix())
    }
}