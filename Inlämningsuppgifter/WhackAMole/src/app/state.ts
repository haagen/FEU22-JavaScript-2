import { Hole } from './hole';

export type State = {
  holes: Hole[]; // This array will contain the holes
  score: number; // How many scores has the player got
  time: number; // What is the visible time
  started: boolean; // Is the game running?
  timerTicks: number; // What is the timerTick - running once every 100ms
  reactionTime: number | undefined; // Fastest Reaction time
  playerName?: string; // The name of the player
};
