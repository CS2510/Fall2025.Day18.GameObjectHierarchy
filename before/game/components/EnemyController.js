class EnemyController extends Component {
    startPosition
    swayWidth = 100
    speed = 60
    start() {
        this.velocity = new Vector2(this.speed * Time.deltaTime, 0)
        this.startPosition = this.transform.position.clone() // Store the start position so I can move back and forth around that spot
    }
    update() {
        this.transform.position.plusEquals(this.velocity)

        if (this.transform.position.x > this.startPosition.x + this.swayWidth || this.transform.position.x < this.startPosition.x - this.swayWidth) {
            this.velocity.x *= -1
        }
       
    }
    onCollisionEnter(other) {
        if (other.name == "Laser Game Object"){
            this.gameObject.destroy()
            GameObject.find("Score Game Object").getComponent(ScoreController).score ++ 
        }
    }
}