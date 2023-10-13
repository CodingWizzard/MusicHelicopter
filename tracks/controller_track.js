class Controller_Track {
    constructor(params, model) {
        this.controller_Krake = params.controller_Krake;   
        this.model = model;
        this.view = new View_Piano(params);
        
        this.state = this.state_idle;

        this.startTime = undefined
        this.endTime = undefined
    }

    state_idle() {
    }

    state_start() {
        this.state = this.state_running;

        this.model.index = 0;
    }

    state_running() {
        let index = this.model.melody[this.model.index].note + 12*this.model.melody[this.model.index].pitch;
        this.view.piano[index].play(); 

        this.startTime = Date.now();                
        this.endTime = this.startTime + 3000*this.model.melody[this.model.index].d1 / this.model.melody[this.model.index].d2

        this.state = this.state_waiting;


        if (this.model.melody[this.model.index].note === z)
            return;

        let end = 0; 
        let start = -.125 * Math.PI; 

        this.controller_Krake.view.views.forEach((view_helicopter, idx) => {
            view_helicopter.views[index].models[0].rotation.x.end = end*3*2;
            view_helicopter.views[index].models[1].rotation.x.end = end*2*2;
            view_helicopter.views[index].models[2].rotation.x.end = end*1*2;

            view_helicopter.views[index].models[0].rotation.x.start = start*3*2;
            view_helicopter.views[index].models[1].rotation.x.start = start*2*2;
            view_helicopter.views[index].models[2].rotation.x.start = start*1*2;

            view_helicopter.views[index].models[0].rotation.x.current = start;
            view_helicopter.views[index].models[1].rotation.x.current = start;
            view_helicopter.views[index].models[2].rotation.x.current = start;

            view_helicopter.views[index].models[0].rotation.x.step = 0.005*Math.sign(end-start)*3*2;
            view_helicopter.views[index].models[1].rotation.x.step = 0.005*Math.sign(end-start)*2*2;
            view_helicopter.views[index].models[2].rotation.x.step = 0.005*Math.sign(end-start)*1*2;
        });
    }

    state_waiting() {
        if (Date.now() >= this.endTime) {
            this.model.index++;
            if (this.model.index > this.model.melody.length-1)  {
                this.state = this.state_idle;
            }
            else {
                this.state = this.state_running;
            }
        }
    }

    update() {
        this.state();
    }
}
