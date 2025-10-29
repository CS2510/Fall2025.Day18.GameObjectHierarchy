/**
 * Text component.
 * The main drawing component other than Polygon
 * 
 * To be drawn, this component need to have a fillStyle color, a string text, and a font in CSS font format.
 * This class may show an error in IDE since there is a class called text that is part of the JS DOM.
 */
class Text extends Component {
    /**
     * @type {string} The color of the text
     */
    fillStyle = "magenta"

    /**
     * @type {string} The value of the text itself
     */
    text = "[NO TEXT]"

    /**
     * @type{string} The font to use
     */
    font = "24px 'Comic Sans MS'"


    draw(ctx) {
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        ctx.fillText(this.text, 0, 0)
    }
}