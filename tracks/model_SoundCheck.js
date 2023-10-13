let c = 0
let cs = 1
let d = 2
let ds = 3
let e = 4
let f = 5
let fs = 6
let g = 7
let gs = 8
let a = 9
let as = 10
let b = 11
let z = 7 * 12 + 0


// Laudate omnes gentes


class Model_Sopran {
    constructor() {

        this.index = -1;
        this.melody = [];

        // console.log("Sopran");
        let max = 100;
        for(let i=0;i<max;i++) {               
            let iNote = Math.abs(Math.floor(12*Math.sin(i*2*Math.PI/max) + 12*Math.cos(2*i*Math.PI/max)));
            let iPitch = 3 + Math.floor(Math.random()*3);
            let iLength = Math.floor(Math.pow(2.0, Math.floor(Math.random()*16)));
            // console.log(iNote, iPitch, iLength);
            this.melody.push({note: iNote , pitch: iPitch, d1: 1, d2: iLength}); 
        }
    }
}

class Model_Mezzosopran {
    constructor() {

        this.index = -1;
        this.melody = [];

        // console.log("Mezzosopran");
        let max = 100;
        for(let i=0;i<max;i++) {               
            let iNote = Math.abs(Math.floor(12*Math.sin(i*2*Math.PI/max) + 12*Math.cos(2*i*Math.PI/max)));
            let iPitch = 2 +  Math.floor(Math.random()*3);
            let iLength = Math.floor(Math.pow(2.0, Math.floor(Math.random()*8)));
            // console.log(iNote, iPitch, iLength);
            this.melody.push({note: iNote , pitch: iPitch, d1: 1, d2: iLength}); 
        }
    }
}

class Model_Alt {
    constructor() {

        this.index = -1;
        this.melody = [];

        // console.log("Alt");
        let max = 100;
        for(let i=0;i<max;i++) {               
            let iNote = Math.abs(Math.floor(12*Math.sin(i*2*Math.PI/max) + 12*Math.cos(2*i*Math.PI/max)));
            let iPitch = 0 + Math.floor(Math.random()*3);
            let iLength = Math.floor(Math.pow(2.0, Math.floor(Math.random()*4)));
            // console.log(iNote, iPitch, iLength);
            this.melody.push({note: iNote , pitch: iPitch, d1: 1, d2: iLength}); 
        }
    }
}