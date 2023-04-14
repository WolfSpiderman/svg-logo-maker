

class Shape{
    constructor(text, color, bgColor, border) {
        this.text = text;
        this.color = color;
        this.bgColor = bgColor;
        this.border = border;
    }
}
class Circle extends Shape{
    constructor(text, color, bgColor, border) {
        super(text, color, bgColor, border);
    }
    renderSVG() {}
}
class Square extends Shape{
    constructor(text, color, bgColor, border) {
        super(text, color, bgColor, border);
    }
    renderSVG() {}
}
class Triangle extends Shape{
    constructor(text, color, bgColor, border) {
        super(text, color, bgColor, border);
    }
    renderSVG() {}
}