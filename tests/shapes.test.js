const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { Shape, Circle, Square, Triangle } = require('../lib/shapes');

describe('Shape', () => {
  test('should create a new Shape instance with given properties', () => {
    const shape = new Shape("Hello World", "black", "white", true);
    expect(shape.text).toBe("Hello World");
    expect(shape.color).toBe("black");
    expect(shape.bgColor).toBe("white");
    expect(shape.border).toBe(true);
  });
});

describe('Circle', () => {
  const filePath = path.join(__dirname, 'circle.svg');

  beforeEach(() => {
    fse.removeSync(filePath);
  });

  test('should render circle SVG image at the provided filepath', async () => {
    const circle = new Circle("Hello World", "black", "white", true);
    await circle.renderSVG(filePath);
    
    // Verify that the SVG image was created successfully at the provided path.
    const svgExists = fs.existsSync(filePath);
    expect(svgExists).toBe(true);

    // Verify that the contents of the file match the expected SVG markups.
    const expectedSVG = `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80" stroke-width="3" stroke="black" fill="white" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="black">Hello World</text>
   
    </svg>`;
    
    const actualSVG = await fse.readFile(filePath, 'utf-8');
    expect(actualSVG).toBe(expectedSVG);
  });

  test('should reject with an error if file path is invalid', () => {
    const circle = new Circle("Hello World", "black", "white", true);
    const invalidFilePath = './invalid/circle.svg';

    return expect(circle.renderSVG(invalidFilePath)).rejects.toThrow();
  });
});

describe('Square', () => {
  const filePath = path.join(__dirname, 'square.svg');

  beforeEach(() => {
    fse.removeSync(filePath);
  });

  test('should render square SVG image at the provided filepath', async () => {
    const square = new Square("Hello World", "black", "white", true);
    await square.renderSVG(filePath);
    
    // Verify that the SVG image was created successfully at the provided path.
    const svgExists = fs.existsSync(filePath);
    expect(svgExists).toBe(true);

    // Verify that the contents of the file match the expected SVG markups.
    const expectedSVG = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <rect x="50" width="200" height="200" stroke-width="3" stroke="black" fill="white" />
    
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="black">Hello World</text>
    
     </svg>`;
    
    const actualSVG = await fse.readFile(filePath, 'utf-8');
    expect(actualSVG).toBe(expectedSVG);
  });

  test('should reject with an error if file path is invalid', () => {
    const square = new Square("Hello World", "black", "white", true);
    const invalidFilePath = './invalid/square.svg';

    return expect(square.renderSVG(invalidFilePath)).rejects.toThrow();
  });
});

describe('Triangle', () => {
  const filePath = path.join(__dirname, 'triangle.svg');

  beforeEach(() => {
    fse.removeSync(filePath);
  });

  test('should render triangle SVG image at the provided filepath', async () => {
    const triangle = new Triangle("Hello World", "black", "white", true);
    await triangle.renderSVG(filePath);
    
    // Verify that the SVG image was created successfully at the provided path.
    const svgExists = fs.existsSync(filePath);
    expect(svgExists).toBe(true);

    // Verify that the contents of the file match the expected SVG markups.
    const expectedSVG = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z" stroke-width="3" stroke="black" fill="white" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">Hello World</text>
    
     </svg>`;
    
    const actualSVG = await fse.readFile(filePath, 'utf-8');
    expect(actualSVG).toBe(expectedSVG);
  });

  test('should reject with an error if file path is invalid', () => {
    const triangle = new Triangle("Hello World", "black", "white", true);
    const invalidFilePath = './invalid/triangle.svg';

    return expect(triangle.renderSVG(invalidFilePath)).rejects.toThrow();
  });
});
