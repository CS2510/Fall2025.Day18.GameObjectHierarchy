/**
 * Transform component.
 * Each game object is required to have a transform. The transform should be added automatically at game object creation time by the engine.
 * 
 * This stores information about a game object's world space attributes and its position in the game object hierarchy.
 * 
 * See https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform.html
 */
class Transform extends Component{
    /**
     * The local position of the game object
     * Unlike Unity, this stores the local position of the game object
     * See https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform-position.html
     * @type {Vector2} 
     */
    position = new Vector2(0,0)

    /**
     * The local rotation of the game object
     * Unlike Unity, this stores the local rotation of the game object.
     * Also, we store rotation as a number, not as a quaternion.
     * See https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform-rotation.html
     * @type {Number} 
     */
    rotation = 0

    /**
     * The local scale of the game object
     * See https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform-localScale.html
     * @type {Vector2} 
     */
    scale = new Vector2(1,1)

    /**
     * The transform of the game object that is our parent.
     * If this is falsey, then the game object is at the top level of the game object hierarchy in the scene.
     * See https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform-parent.html
     * @type {Transform}
     */
    parent = undefined 

    /**
     * Set the parent of the game object transform.
     * Note that this must be the transform of a game object, not the game object itself.
     * https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform.SetParent.html
     * @param {Transform} parentTransform 
     */
    setParent(parentTransform){
        this.parent = parentTransform
    }

    /**
     * Get the local transform of the game object as a matrix.
     * @returns {DOMMatrix}
     */
    getLocalMatrix(){
        const matrix = new DOMMatrix()
        matrix.translateSelf(this.position.x, this.position.y)
        matrix.scaleSelf(this.scale.x, this.scale.y)
        matrix.rotateSelf(this.rotation * (180/Math.PI))
        return matrix
    }

    /**
     * Get the world transform of the game object as a matrix.
     * @returns {DOMMatrix}
     */
    getWorldMatrix(){
        if(!this.parent) return this.getLocalMatrix()
        return this.parent.getWorldMatrix().multiply(this.getLocalMatrix())
    }
}