const fs = require('fs');
   
   class Shape {
     constructor(text, color, bgColor, border) {
       this.text = text;
       this.color = color;
       this.bgColor = bgColor;
       this.border = border;
     }
   }
   
   class Circle extends Shape {
     constructor(text, color, bgColor, border) {
       super(text, color, bgColor, border);
     }
   
     renderSVG(filePath) {
       const circleSVG = `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
      fill="${this.bgColor}" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
   
    </svg>`;
   
       return new Promise((resolve, reject) => {
        fs.writeFile(filePath, circleSVG, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();           
            }         
        });
    });
}
}

class Square extends Shape{
    constructor(text, color, bgColor, border) {
        super(text, color, bgColor, border);
    }
    renderSVG(filePath) {
        const sqrSVG = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <rect x="50" width="200" height="200" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
       fill="${this.bgColor}" />
    
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((resolve, reject) => {
         fs.writeFile(filePath, sqrSVG, (err) => {
             if (err) {
                 reject(err);
             } else {
                 resolve();           
             }         
         });
     });
 }
}
class Triangle extends Shape{
    constructor(text, color, bgColor, border) {
        super(text, color, bgColor, border);
    }
    renderSVG(filePath) {
        const triSVG = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
       fill="${this.bgColor}" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((resolve, reject) => {
         fs.writeFile(filePath, triSVG, (err) => {
             if (err) {
                 reject(err);
             } else {
                 resolve();           
             }         
         });
     });
 }
}

module.exports = { Shape, Circle, Square, Triangle };