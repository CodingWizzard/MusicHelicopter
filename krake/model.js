class Model_Krake {

    constructor() {
        this.rotation = {
            x: { current: 0, start: 0, end: 20 * Math.PI, step: 0.001 },
            y: { current: 0, start: 0, end: 20 * Math.PI, step: 0.001 },
            z: { current: 0, start: 0, end: 20 * Math.PI, step: 0.001 }
        }

        this.position = {
            x: { current: 0, start: -50, end: 50, step: 0.001 },
            y: { current: 0, start: -10, end: 10, step: 0.001 },
            z: { current: 0, start: -50, end: 50, step: 0.001 }
        }

        this.scaling = {
            x: { current: 0, start: 10, end: 10, step: 0.001 },
            y: { current: 0, start: 10, end: 10, step: 0.001 },
            z: { current: 0, start: 10, end: 10, step: 0.001 }
        }

        this.init();
    }

    isFinished() {
        return this.rotation.x.current === this.rotation.x.end
            && this.rotation.y.current === this.rotation.y.end
            && this.rotation.z.current === this.rotation.z.end

            && this.position.x.current === this.position.x.end
            && this.position.y.current === this.position.y.end
            && this.position.z.current === this.position.z.end

            && this.scaling.x.current === this.scaling.x.end
            && this.scaling.y.current === this.scaling.y.end
            && this.scaling.z.current === this.scaling.z.end;
    }

    init() {
        this.rotation.x.current = this.rotation.x.start;
        this.rotation.y.current = this.rotation.y.start;
        this.rotation.z.current = this.rotation.z.start;

        this.position.x.current = this.position.x.start;
        this.position.y.current = this.position.y.start;
        this.position.z.current = this.position.z.start;

        this.scaling.x.current = this.scaling.x.start;
        this.scaling.y.current = this.scaling.y.start;
        this.scaling.z.current = this.scaling.z.start;
    }

    update() {
        // rotation
        if ((this.rotation.x.step > 0 && this.rotation.x.current < this.rotation.x.end) ||
            (this.rotation.x.step < 0 && this.rotation.x.current > this.rotation.x.end))
            this.rotation.x.current += this.rotation.x.step;

        if ((this.rotation.y.step > 0 && this.rotation.y.current < this.rotation.y.end) ||
            (this.rotation.y.step < 0 && this.rotation.y.current > this.rotation.y.end))
            this.rotation.y.current += this.rotation.y.step;

        if ((this.rotation.z.step > 0 && this.rotation.z.current < this.rotation.z.end) ||
            (this.rotation.z.step < 0 && this.rotation.z.current > this.rotation.z.end))
            this.rotation.z.current += this.rotation.z.step;

        if ((this.rotation.x.step > 0 && this.rotation.x.current > this.rotation.x.end) ||
            (this.rotation.x.step < 0 && this.rotation.x.current < this.rotation.x.end))
            this.rotation.x.current = this.rotation.x.end;

        if ((this.rotation.y.step > 0 && this.rotation.y.current > this.rotation.y.end) ||
            (this.rotation.y.step < 0 && this.rotation.y.current < this.rotation.y.end))
            this.rotation.y.current = this.rotation.y.end;

        if ((this.rotation.z.step > 0 && this.rotation.z.current > this.rotation.z.end) ||
            (this.rotation.z.step < 0 && this.rotation.z.current < this.rotation.z.end))
            this.rotation.z.current = this.rotation.z.end;



        // position
        if ((this.position.x.step > 0 && this.position.x.current < this.position.x.end) ||
            (this.position.x.step < 0 && this.position.x.current > this.position.x.end))
            this.position.x.current += this.position.x.step;

        if ((this.position.y.step > 0 && this.position.y.current < this.position.y.end) ||
            (this.position.y.step < 0 && this.position.y.current > this.position.y.end))
            this.position.y.current += this.position.y.step;

        if ((this.position.z.step > 0 && this.position.z.current < this.position.z.end) ||
            (this.position.z.step < 0 && this.position.z.current > this.position.z.end))
            this.position.z.current += this.position.z.step;

        if ((this.position.x.step > 0 && this.position.x.current > this.position.x.end) ||
            (this.position.x.step < 0 && this.position.x.current < this.position.x.end))
            this.position.x.current = this.position.x.end;

        if ((this.position.y.step > 0 && this.position.y.current > this.position.y.end) ||
            (this.position.y.step < 0 && this.position.y.current < this.position.y.end))
            this.position.y.current = this.position.y.end;

        if ((this.position.z.step > 0 && this.position.z.current > this.position.z.end) ||
            (this.position.z.step < 0 && this.position.z.current < this.position.z.end))
            this.position.z.current = this.position.z.end;



        // scaling
        if ((this.scaling.x.step > 0 && this.scaling.x.current < this.scaling.x.end) ||
            (this.scaling.x.step < 0 && this.scaling.x.current > this.scaling.x.end))
            this.scaling.x.current += this.scaling.x.step;

        if ((this.scaling.y.step > 0 && this.scaling.y.current < this.scaling.y.end) ||
            (this.scaling.y.step < 0 && this.scaling.y.current > this.scaling.y.end))
            this.scaling.y.current += this.scaling.y.step;

        if ((this.scaling.z.step > 0 && this.scaling.z.current < this.scaling.z.end) ||
            (this.scaling.z.step < 0 && this.scaling.z.current > this.scaling.z.end))
            this.scaling.z.current += this.scaling.z.step;

        if ((this.scaling.x.step > 0 && this.scaling.x.current > this.scaling.x.end) ||
            (this.scaling.x.step < 0 && this.scaling.x.current < this.scaling.x.end))
            this.scaling.x.current = this.scaling.x.end;

        if ((this.scaling.y.step > 0 && this.scaling.y.current > this.scaling.y.end) ||
            (this.scaling.y.step < 0 && this.scaling.y.current < this.scaling.y.end))
            this.scaling.y.current = this.scaling.y.end;

        if ((this.scaling.z.step > 0 && this.scaling.z.current > this.scaling.z.end) ||
            (this.scaling.z.step < 0 && this.scaling.z.current < this.scaling.z.end))
            this.scaling.z.current = this.scaling.z.end;
    }
}
