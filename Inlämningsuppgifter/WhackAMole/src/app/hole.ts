export type Hole = {
  moleVisible: Boolean; // Is the Mole visible or not?
  timer?: NodeJS.Timer; // This will contain the timer number (for 4s timeout)
  showTime?: Date; // Time when showed
};
