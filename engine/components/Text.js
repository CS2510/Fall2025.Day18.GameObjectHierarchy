/**
 * Text component.
 * The main drawing component other than Polygon
 * 
 * To be drawn, this component need to have a fillStyle color, a string text, and a font in CSS font format.
 * Note: There is a naming conflict with the DOM Text interface, hence the @ts-ignore below
 * TODO: In a future semester it might help to given this a different name so there isn't a conflict with the Text DOM class
 */
//@ts-ignore
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