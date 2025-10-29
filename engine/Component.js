/**
 * A component class. All the custom code for a game is contained in components.
 * Unlike Unity, we inherit directly from Component. When working in Unity, all game-specific code will inherit from MonoBehavior.
 * 
 * See: https://docs.unity3d.com/ScriptReference/Component.html
 */

class Component{
    /**
     * @type {GameObject} The parent of this component
     * See https://docs.unity3d.com/ScriptReference/Component-gameObject.html
     */
    gameObject

    /**
     * Start the game object. Called once before a game object is updated the first time
     */
    start(){

    }

    /**
     * Update the game object. Called after start is called. Should be called once a frame before rendering.
     */
    update(){

    }
    /**
     * Draw to the screen
     * 
     * @param {CanvasRenderingContext2D} ctx The context to which we are rendering
     */
    draw(ctx){
        
    }

    /**
     * Get the transform of the parent game object.
     * See https://docs.unity3d.com/ScriptReference/Component-transform.html
     */
    get transform(){
        return this.gameObject.transform
    }
}