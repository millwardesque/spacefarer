export interface Engine {
  isWorking: boolean;
}

export function generateRandomEngine(): Engine {
  const isWorkingProbability = 0.2;
  return {
    isWorking: Math.random() <= isWorkingProbability,
  };
}
