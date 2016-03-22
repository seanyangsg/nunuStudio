function Scene()
{
	//Super
	THREE.Scene.call(this);
	this.rotationAutoUpdate = false;
	this.matrixAutoUpdate = false;

	//Create cannon world
	this.world = new CANNON.World();
	this.world.broadphase = new CANNON.NaiveBroadphase();
	this.world.gravity.set(0,-10,0);
	this.world.solver.tolerance = 0.05;
}

//Functions prototypes
Scene.prototype = Object.create(THREE.Scene.prototype);
Scene.prototype.update = update;

//Update scene
function update()
{
	this.world.step(1/60);
	
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update();
	}
}