/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 class ParkingSystem {
  constructor(big, medium, small) {
    this.small = small;
    this.medium = medium;
    this.big = big;
  }
  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    if (carType === 1) {
      if (this.big > 0) {
        this.big--;
        return true;
      } else return false;
    }
    if (carType === 2) {
      if (this.medium > 0) {
        this.medium--;
        return true;
      } else return false;
    }
    if (carType === 3) {
      if (this.small > 0) {
        this.small--;
        return true;
      } else return false;
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
