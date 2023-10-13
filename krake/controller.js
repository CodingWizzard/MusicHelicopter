class Controller_Krake {
    constructor(params) {
        this.params = { ...params };
        // this.params.model = new Model_Krake();
        this.view = new View_Krake_Helicopter(this.params);
        
        this.state = this.state_idle;
    }

    state_idle() {
    }

    state_start() {
        this.state = this.state_running;
    }

    state_stop() {
        this.state = this.state_idle;
    }

    state_running() {
        this.view.update();
    }

    update() {
        this.state();
    }
}
