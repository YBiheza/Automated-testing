import { expect } from "chai"
import { showFile } from '../src/function.js';
import { beforeEach } from "mocha";

const KB = 1024;
const MB = 1024 * KB;
const VALID_EXTENSIONS = ['cv.pdf', 'cv.png', 'cv.PDF', 'cv.PNG', 'cv.doc', 'cv.docx']


describe ('Extension tests', ()=> {
    let validInputObject

    beforeEach(()=> {
        validInputObject = [{
            name: 'cv.pdf',
            size: 4 * MB,
        }]
    })

    VALID_EXTENSIONS.forEach((ext) => {
        it (`should return true if the extension of files is ${ext}`, () => {
            validInputObject[0].name = ext;
            let result = showFile(validInputObject)
            expect(result.isValid).to.be.true;
        })
    })

    /*it ('should return true if the extension of files are pdf', () => {
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true if the extension of files are png', () => {
        validInputObject[0].name = 'cv.png'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true if the extension of files are doc', () => {
        validInputObject[0].name = 'cv.doc'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true if the extension of files are docx', () => {
        validInputObject[0].name = 'cv.docx'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    })

    it ('should return true if the extension of files are PDF', () => {
        validInputObject[0].name = 'cv.PDF'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true if the extension of files are PNG', () => {
        validInputObject[0].name = 'cv.PNG'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    })*/
})

describe ('Input array size tests (amount of files)', ()=> {
    let validInputObject

    beforeEach(()=> {
        validInputObject = [{
            name: 'cv.pdf',
            size: 4 * MB,
        }]
    })

    it ('should return true if size of input array of files < 2', () => {
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    })

    it ('should return true if size of input array of files > 0', () => {
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    })
})

describe ('File Size tests', ()=> {
    let validInputObject

    beforeEach(()=> {
        validInputObject = [{
            name: 'cv.pdf',
            size: 4 * MB,
        }]
    })

    it ('should return true if size of file < 7 mb', () => {
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true if size of file >= 2 kb', () => {
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    })
})


describe ('Negative tests tests', () => {
    let validInputObject

    beforeEach(()=> {
        validInputObject = [{
            name: 'cv.pdf',
            size: 4 * MB,
        }]
    })

    it ('should return false if the extension of files are not pdf/PDF/doc/docx/png/PNG/', () => {
        validInputObject[0].name = 'cv.exe'
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The extension of the file ${validInputObject[0].name} is wrong. Choose another one`);
        expect(result.isValid).to.be.false;
    }) 

    it ('should return false if size of input array === 0', () => {
        validInputObject.pop()
        let result = showFile(validInputObject)
        expect(result.error).to.equal("You didn't attach any files. It's obligatory. Add files, please");
        expect(result.isValid).to.be.false;
    }) 

    it ('should return false if size of input array > 2', () => {
        validInputObject.push({
            name: 'cv2.pdf',
            size: 2 * MB,
        }, {
            name: 'cv3.pdf',
            size: 2 * MB,
        })
        let result = showFile(validInputObject)
        expect(result.error).to.equal("You can attach 2 or less files. Not more.");
        expect(result.isValid).to.be.false;
    })

    it ('should return false if size of file > 7 mb', () => {
        validInputObject[0].size = 8 * MB;
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is too big. Choose another one`);
        expect(result.isValid).to.be.false;
    }) 

    it ('should return false if size of file === 0 bytes', () => {
        validInputObject[0].size = 0;
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is empty. Choose another one`);
        expect(result.isValid).to.be.false;
    })

    it ('should return false if size of file < 2 kb', () => {
        validInputObject[0].size = 1 * KB;
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is too small. Choose another one`);
        expect(result.isValid).to.be.false;
    })  
})

describe ('Boundary values', () => {
    let validInputObject 

    beforeEach (() => {
        validInputObject = [{
            size: 4 * MB,
            name: 'cv.pdf'
        }]
    })

    it ('should return true for the input object size === 2 files', ()=> {
        validInputObject.push({
            name: 'cv2.pdf',
            size: 2 * MB,
        })
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return false for the boundary value size === 7 mb', ()=> {
        validInputObject[0].size = 7 * MB
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is too big. Choose another one`);
        expect(result.isValid).to.be.false;
    }) 

    it ('should return false for the boundary value size === 7.0001 mb', ()=> {
        validInputObject[0].size = 7.0001 * MB
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is too big. Choose another one`);
        expect(result.isValid).to.be.false;
    })

    it ('should return true for the boundary value size === 2 kb', ()=> {
        validInputObject[0].size = 2 * KB
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return true for the boundary value size === 2.0001 kb', ()=> {
        validInputObject[0].size = 2.0001 * KB
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.true;
    }) 

    it ('should return false for the boundary value size === 1.9999 kb', ()=> {
        validInputObject[0].size = 1.9999 * KB
        let result = showFile(validInputObject)
        expect(result.error).to.equal(`The file ${validInputObject[0].name} is too small. Choose another one`);
        expect(result.isValid).to.be.false;
    }) 
})

describe('Input error tests', ()=> {
    let validInputObject

    it('Should return false if input is undefined', ()=> {
        validInputObject = undefined
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.false
        expect(result.error).to.equal('Input error. Try to attach files again')
    })

    it('Should return false if input is null', ()=> {
        validInputObject = null
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.false
        expect(result.error).to.equal('Input error. Try to attach files again')
    })

    it('Should return false if array input parsed wrong', ()=> {
        validInputObject = 'name: cv.pdf, size: 2MB'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.false
        expect(result.error).to.equal('Input error. Try to attach files again')
    })
})

describe('File data parse tests', ()=> {
    let validInputObject 

    beforeEach (() => {
        validInputObject = [{
            size: 4 * MB,
            name: 'cv.pdf'
        }]
    })

    it('Should return false if file name is not a string', ()=> {
        validInputObject[0].name = 1234
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.false
        expect(result.error).to.equal('File name is not a string.')
    })

    it('Should return false if file size is not a number', ()=> {
        validInputObject[0].size = '4MB'
        let result = showFile(validInputObject)
        expect(result.isValid).to.be.false
        expect(result.error).to.equal('File size is not a number.')
    })
})