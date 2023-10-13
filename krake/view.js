class View_Krake {
    constructor(params) {
        this.params = { ...params };

        this.anchorBase = BABYLON.MeshBuilder.CreateBox("box", {size: .1}, params.scene);

        var max = 88;
        this.views = [];
        for (let i = 0; i < max; i++) {
            let view = (new View_Krake_Arm(this.params));
            view.anchorBase.parent = this.anchorBase;
            view.anchorBase.rotation.x = 0;
            view.anchorBase.rotation.y = 0;
            view.anchorBase.rotation.z = Math.PI*2*i/max;
            this.views.push(view);
        }
    }


    update() {
        this.views.forEach((view, index) => {
            view.update();
        });
    }
}



class View_Krake_Helicopter {
    constructor(params) {
        this.params = { ...params };

        this.anchorBase = BABYLON.MeshBuilder.CreateBox("box", {size: .1}, params.scene);

        var max = 3;
        this.views = [];
        for (let i = 0; i < max; i++) {
            let view = (new View_Krake(this.params));
            view.anchorBase.parent = this.anchorBase;
            view.anchorBase.position.x = 15*Math.sin(2*Math.PI*i/max);
            view.anchorBase.position.y = 15*Math.cos(2*Math.PI*i/max);
            view.anchorBase.rotation.x = 0;
            view.anchorBase.rotation.y = 0;
            view.anchorBase.rotation.z = Math.PI*2*i/max;
            this.views.push(view);
        }
    }


    update() {
        this.views.forEach((view, index) => {
            view.update();
        });
    }
}
