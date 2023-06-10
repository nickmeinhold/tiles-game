import { Game } from "npm:@gathertown/gather-game-client@^40.0.0";

export function createGameClient(): Game {
  const SPACE_ID = Deno.env.get('SPACE_ID');

  if(SPACE_ID === undefined) {
    throw(new MissingEnvVar('SPACE_ID'));
  }

  const API_KEY = Deno.env.get('API_KEY');

  if(API_KEY === undefined) {
    throw(new MissingEnvVar('API_KEY'));
  }

  return new Game(SPACE_ID, () => Promise.resolve({ apiKey:  API_KEY}));

}

class MissingEnvVar extends Error {
  constructor(msg: string) {
    super(`The environment variable "${msg}" is required but was not found.\n
            Review the documentation for your cloud provider to determine how to set an env var.\n
            eg. for Cloud Run see https://cloud.google.com/run/docs/configuring/environment-variables\n`);
    this.name = "MissingEnvVar";
  }
}
