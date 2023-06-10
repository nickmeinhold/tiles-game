import { Game, MapObject } from "npm:@gathertown/gather-game-client@^40.0.0";
import { createGameClient } from './utils.ts';

console.log("Connecting to gather game server...");

const game : Game = createGameClient();
game.connect();
game.subscribeToConnection((connected) => {
  console.log("connected?", connected);
});

game.subscribeToEvent("playerMoves", (data, _) => {
  const x = data.playerMoves.x ?? 0;
  const y = data.playerMoves.y ?? 0;
  console.log(`x: ${x}, y: ${y}`);

  if(x >= 1 && x < 4 && y >= 1 && y < 4 ) {
    const nextCount = count[x-1][y-1] + 1;
    if(nextCount < 10) {
      console.log(`count[${x-1}][${y-1}] : ${nextCount-1} -> ${nextCount}`);
      count[x-1][y-1] = nextCount;
      const objId = `object_${x}_${y}`;
      game.setObject('blank', objId, objectAt(x,y, nextCount));
    }
  }
});

// assumes range has been checked : x,y both [0,2]
function objectAt(x: number, y: number, index: number) : MapObject {
  return {
    x: x, 
    y: y, 
    id: `object_${x}_${y}`,
    normal: objectUrl.get(index)!, 
    type: 0,
    width: 32,
    height: 32,
    zIndex: 0
  };
}

const count:number[][] = [[0,0,0],[0,0,0],[0,0,0]];

const objectUrl = new Map<number, string>([
  [1, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/VVCKWY3BkMUjK7ucTExT47'],
  [2, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/ZllWlsjH06xQIWw1KDllMH'],
  [3, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/bdhpGqlShWeroBd1BWhlWi'],
  [4, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/OmZvB3Wnr8bRN7vOKWcLnf'],
  [5, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/cvSY5h7RnWicDiuC8pl9v1'],
  [6, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/1piQ3GGxT0xbXZCdZZ4dpL'],
  [7, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/dr4QzDbCjh1bxx9dll5N0U'],
  [8, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/rGZKWAe0iwgJCledwX07cE'],
  [9, 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/2Sfh5oe7Ck4zOnuQS1v7vm']
]);

const animationUrl = 'https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/uXtCAlpX7Ip2mzUJ/1zWDDoXCD6fXWYbllQ6AST';
