'use strict';

/**
 * An object that can be used for detecting collisions.
 */
class CollisionDetector {
  constructor() {  
  }

  /**
   * Checks if two objects have collided.
   * @param object1 - The first object to check.
   * @param object2 - The other object to check.
   * @return true if the objects have collided, false if not.
   */
  collisionBetween() {
    return this.objectsWithin(object1, object2, 0);
  }

  /**
   * Checks if two objects are within a certain distance apart.
   * @param object1 - The first object to check.
   * @param object2 - The other object to check.
   * @param distance - The distance to check for.
   * @return true if the objects are within distance, false if not.
   */
  objectsWithin(object1, object2, distance) {
    var dx = object1.x - object2.x;
    var dy = object1.y - object2.y;
    var scalarDistance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return scalarDistance < object1.radius + object2.radius + distance;
  }
}
