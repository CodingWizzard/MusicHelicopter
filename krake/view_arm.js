class View_Krake_Arm {
    constructor(params) {
        this.params = { ...params };

        var max = 3;
        this.models = [];
        for (let i = 0; i < max; i++) {
            this.models.push(new Model_Krake());
        }
    
        this.models.forEach((model, index) => {
            // model.rotation = {
            //     x: { current: 0, start: 0.0, end: .5 * Math.PI, step: 0.005 },
            //     y: { current: 0, start: 0.0, end: .5 * Math.PI, step: 0.005 },
            //     z: { current: 0, start: 0.0, end: .5 * Math.PI, step: 0.005 }
            // }
    
            model.rotation = {
                x: { current: 0, start: 0, end: 0, step: -0.005 },
                y: { current: 0, start: 0, end: 0, step: -0.005 },
                z: { current: 0, start: 0, end: 0, step: -0.005 }
            }

            model.position = {
                x: { current: 0, start: 0, end: 0, step: 0.01 },
                y: { current: 0, start: 0, end: 0, step: 0.01 },
                z: { current: 0, start: 0, end: 0, step: 0.01 }
            }
    
            model.scaling = {
                x: { current: 0, start: 1, end: 1, step: 0.01 },
                y: { current: 0, start: 1, end: 1, step: 0.01 },
                z: { current: 0, start: 1, end: 1, step: 0.01 }
            }
    
            model.init();
        });
    
        this.anchors = [];
        this.parts = [];
        this.p = [];
    

        this.anchorBase = BABYLON.MeshBuilder.CreateBox("box", {size: .1}, params.scene);
    
        // this.anchorCylinder1 = BABYLON.MeshBuilder.CreateBox("box", {size: .1}, params.scene);
        var cylinder1 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {height: 3, diameter: .3}, params.scene);
        cylinder1.parent = this.anchorBase;  // this.anchorCylinder1;
        cylinder1.position.y = 1.5;
        // this.anchorCylinder1.parent = this.anchorBase;

        // this.anchors.push(this.anchorCylinder1);
        // this.parts.push(cylinder1);
    
        var cylinderParent = cylinder1;
        for (let i=0;i<max;i++) {
            var anchorCylinder2 = BABYLON.MeshBuilder.CreateBox("box", {size: .1}, params.scene);
            anchorCylinder2.parent = cylinderParent;
            anchorCylinder2.position.y = 1.5;
            var cylinder2 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {height: 3, diameter: .3}, params.scene);
            cylinder2.parent = anchorCylinder2;
            cylinder2.position.y = 1.5;
            
            cylinderParent = cylinder2;
    
            this.anchors.push(anchorCylinder2);
            this.parts.push(cylinder2);
        }
    
    
        // OFF
        // this.t = 0;
        // this.PMAX = 1; // 50;
        // this.ip = 0;
        // for (let i=0;i<this.PMAX;i++) {
        //     this.p.push(BABYLON.MeshBuilder.CreateCylinder("", {height: 0.1, diameter: 5}, params.scene));
        // }
    
        // this.lastCylinder = BABYLON.MeshBuilder.CreateBox("", {size: .1}, params.scene);
        this.lastCylinder = BABYLON.MeshBuilder.CreateCylinder("", {height: 0.1, diameter: 5}, params.scene);
        this.lastCylinder.parent = cylinderParent;
        this.lastCylinder.position.y = 1.5;   
    }


    update() {
        this.models.forEach((model, index) => {
            model.update();

            // if (model.isFinished())
            //     model.init();
        });

        this.anchors.forEach((anchor, idx) => {
            anchor.rotation.x = this.models[idx].rotation.x.current;
            anchor.rotation.y = this.models[idx].rotation.y.current;
            anchor.rotation.z = this.models[idx].rotation.z.current;
        });

        this.parts.forEach((part, idx) => {
            // part.position.x = models[idx].position.x.current;
            // part.position.y = models[idx].position.y.current;
            // part.position.z = models[idx].position.z.current;

            part.scaling.x = this.models[idx].scaling.x.current;
            part.scaling.y = this.models[idx].scaling.y.current;
            part.scaling.z = this.models[idx].scaling.z.current;
        });


        // OFF
        // this.t++;
        // if (this.t >= 10) {
        //     this.t = 0;
        //     this.ip ++;
        //     if (this.ip >= this.PMAX)
        //     this.ip = 0;

        //     this.p[this.ip].position.x = this.lastCylinder.getAbsolutePosition().x;
        //     this.p[this.ip].position.y = this.lastCylinder.getAbsolutePosition().y;
        //     this.p[this.ip].position.z = this.lastCylinder.getAbsolutePosition().z;

        //     this.p[this.ip].rotation.x = this.lastCylinder.parent.parent.rotation.x;
        //     this.p[this.ip].rotation.y = this.lastCylinder.parent.parent.rotation.y;
        //     this.p[this.ip].rotation.z = this.lastCylinder.parent.parent.rotation.z;

        //     // p[ip].scaling.x = lastCylinder.parent.parent.parent.scaling.x;
        //     // p[ip].scaling.y = lastCylinder.parent.parent.parent.scaling.y;
        //     // p[ip].scaling.z = lastCylinder.parent.parent.parent.scaling.z;
        // }
    }
}
