class PlayerController extends Component {
    start() {
        this.frame = 0 // Which frame are we on?
        this.nextFireFrame = 10 //The frame when we are going to fire next
        this.nextRight = true //Tracks which side we are going to fire on
        this.speed = 200 //The speed our ship can travel
        this.boundsX = 1000
        this.boundsY = 1000

    }
    update() {
        this.frame++

        let proposedChange = Vector2.zero

        if (Input.keysDown.includes("ArrowLeft")) {
            proposedChange.plusEquals(Vector2.left)
        }
        if (Input.keysDown.includes("ArrowRight")) {
            proposedChange.plusEquals(Vector2.right)
        }
        if (Input.keysDown.includes("ArrowUp")) {
            proposedChange.plusEquals(Vector2.up)
        }
        if (Input.keysDown.includes("ArrowDown")) {
            proposedChange.plusEquals(Vector2.down)
        }

        this.transform.position.plusEquals(proposedChange.times(Time.deltaTime * this.speed))

        Camera.main.transform.position = this.transform.position.clone()

        if (this.transform.position.x > this.boundsX) this.transform.position.x = this.boundsX
        if (this.transform.position.x < -this.boundsX) this.transform.position.x = -this.boundsX
        if (this.transform.position.y < -this.boundsY) this.transform.position.y = -this.boundsY
        if (this.transform.position.y > this.boundsY) this.transform.position.y = this.boundsY


        if (this.frame >= this.nextFireFrame) {
            if (this.nextRight) {
                instantiate(new LaserGameObject(), this.transform.position.plus(Vector2.right.times(10)))
            }
            else {
                instantiate(new LaserGameObject(), this.transform.position.plus(Vector2.left.times(10)))
            }
            this.nextRight = !this.nextRight
            this.nextFireFrame = this.frame + 10
        }
    }
}