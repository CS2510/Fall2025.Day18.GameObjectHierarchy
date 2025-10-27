/**
 * Base class for all objects ín a scene.
 * 
 * See: https://docs.unity3d.com/ScriptReference/GameObject.html
 */

class GameObject {
    components = []
    hasStarted = false
    markForDelete = false
    name = "[NO NAME]"
    layer = ""
    constructor(name, options) {
        Object.assign(this, options)
        this.addComponent(new Transform())
        this.name = name
    }
    broadcastMessage(name, args) {
        for (const component of this.components) {
            if (component[name]) {
                component[name](...args)
            }
        }
        for (const child of this.transform.children) {
            child.broadcastMessage(name, args)
        }
    }
    start() {
        this.broadcastMessage("start", [])
    }
    update() {
        if (!this.hasStarted) {
            this.hasStarted = true
            this.start()
        }
        this.broadcastMessage("update", [])
    }
    draw(ctx) {
        ctx.save()
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)
        for (const component of this.components) {
            component.draw(ctx)
        }
        for (const child of this.transform.children) {
            child.draw(ctx)
        }
        ctx.restore()
    }
    addComponent(component, values) {
        this.components.push(component)
        component.gameObject = this
        Object.assign(component, values)
    }
    get transform() {
        return this.components[0]
    }
    destroy() {
        this.markForDelete = true
    }
    getComponent(type) {
        return this.components.find(go => go instanceof type)
    }

    static find(name) {
        return SceneManager.getActiveScene().gameObjects.find(go => go.name == name)
    }
}