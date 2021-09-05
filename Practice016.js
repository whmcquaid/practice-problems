/*  Write a robot simulator, where robots can be placed on an infinite 2D grid, with cardinal directions of North, South, East and West.
Robots will always be facing in one of the cardinal directions and also have coordinates on the grid (e.g. {x: 3, y: 8})
Movement in any direction on the grid is a change of 1 unit
Robots can perform a variety of actions which update their coordinates and orientation on the board as described below

8:38
// Robot properties
bearing - direction the robot is facing
coordinates - x,y position on the grid

// Robot methods
orient('north') - sets the robot's bearing by the passed cardinal direction
turnRight() - updates the robot's bearing
turnLeft()  - updates the robot's bearing
at(1,2) - sets the robots coordinates
advance(1) - updates the robot's coordinates (based on it's current bearing) by the argument count (i.e. 1)
instructions('ALA') - converts an encoded instructions string to a list of methods
place({x: 2, y: -7, direction: 'east'}) - sets both the robot's coordinates and bearing
evaluate('ALA') - will execute the passed instructions on the robot

// Expectations
expect(robot.instructions('RAAL')).toEqual(['turnRight', 'advance', 'advance', 'turnLeft']);
robot.place({x: 2, y: -7, direction: 'east'});
robot.evaluate('RRAAAAALA');
expect(robot.coordinates).toEqual([-3, -8]);
expect(robot.bearing).toEqual('south'); */

const INSTRUCTIONS = {
  R: 'turnRight',
  L: 'turnLeft',
  A: 'advance',
}
class Robot {
  constructor(bearing = 'N', coordinates = { x: 0, y: 0 }) {
    this.bearing = bearing
    this.coordinates = coordinates
  }

  place({ x, y, direction }) {
    this.at({ x, y })
    this.orient(direction)
  }
  orient(direction = 'N') {
    this.bearing = direction
  }
  turnRight() {
    switch (this.bearing) {
      case 'N':
        this.bearing = 'E'
        break
      case 'E':
        this.bearing = 'S'
        break
      case 'S':
        this.bearing = 'W'
        break
      case 'W':
        this.bearing = 'N'
        break
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case 'N':
        this.bearing = 'W'
        break
      case 'E':
        this.bearing = 'N'
        break
      case 'S':
        this.bearing = 'E'
        break
      case 'W':
        this.bearing = 'S'
        break
    }
  }
  at({ x, y }) {
    this.coordinates = { x, y }
  }
  advance(increment = 1) {
    switch (this.bearing) {
      case 'N':
        this.coordinates = {
          y: this.coordinates.y + increment,
          x: this.coordinates.x,
        }
        break
      case 'E':
        this.coordinates = {
          y: this.coordinates.y,
          x: this.coordinates.x + increment,
        }
        break
      case 'S':
        this.coordinates = {
          y: this.coordinates.y - increment,
          x: this.coordinates.x,
        }
        break
      case 'W':
        this.coordinates = {
          y: this.coordinates.y,
          x: this.coordinates.x - increment,
        }
        break
    }
  }
  instructions(string) {
    // use an object with the keys being the capital letters of the instructions string
    // and the values being the methods to call
    const result = string.split('').map((letter) => INSTRUCTIONS[letter])
    return result
  }
  evaluate(commands) {
    const instructions = this.instructions(commands)
    instructions.forEach((instr) => this[instr]())
  }
}
// const myRobot = new Robot ('N', {x: 1, y: 1})
const myRobot = new Robot()

console.log(myRobot.coordinates, myRobot.bearing)
myRobot.place({ x: 2, y: -7, direction: 'E' })
myRobot.evaluate('RRAAAAALA')
console.log(myRobot.coordinates, myRobot.bearing)
