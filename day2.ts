const textInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

function possibleGameIndexesSum(text: string): number {
  const lines = text.split("\n");
  const possibleGameIndexes = new Set<number>();

  lines.forEach((line) => {
    const gameNumberMatch = line.match(/Game (\d+):/);

    if (gameNumberMatch) {
      const gameNumber = parseInt(gameNumberMatch[1], 10);

      const hasNoRedFailure = !/\b([1-9][3-9]|[2-9]\d+)\s+red\b/.test(line);
      const hasNoGreenFailure = !/\b([1-9][4-9]|[2-9]\d+)\s+green\b/.test(line);
      const hasNoBlueFailure = !/\b([1-9][5-9]|[2-9]\d+)\s+blue\b/.test(line);

      if (hasNoRedFailure && hasNoGreenFailure && hasNoBlueFailure) {
        possibleGameIndexes.add(gameNumber);
      }
    }
  });

  const possibleGameIndexesSum = Array.from(possibleGameIndexes).reduce(
    (sum, idx) => sum + idx,
    0
  );

  return possibleGameIndexesSum;
}

console.log("possibleGameIndexesSum", possibleGameIndexesSum(textInput));

function fewestNumberOfCubesPower(text: string): number {
  const lines = text.split("\n");
  let totalPower = 0;

  lines.forEach((line) => {
    const gameNumberMatch = line.match(/Game (\d+):/);
    if (gameNumberMatch) {
      const colorCounts: Record<string, number> = {};

      const matches = line.matchAll(/(\d+)\s+(blue|green|red)/g);

      for (const match of matches) {
        const count = parseInt(match[1], 10);
        const color = match[2];

        if (!colorCounts[color] || colorCounts[color] < count) {
          colorCounts[color] = count;
        }
      }

      const gamePower = Object.values(colorCounts).reduce(
        (product, count) => product * count,
        1
      );
      totalPower += gamePower;
    }
  });

  return totalPower;
}

console.log("fewestNumberOfCubesPower", fewestNumberOfCubesPower(textInput));
