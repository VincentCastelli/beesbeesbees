var Bee = function() {
  this.age = 5;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.job = 'keep on growing';
Bee.prototype.color = 'yellow';
