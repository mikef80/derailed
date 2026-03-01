type result = "won" | "lost";

export const getPlayerStats = () => {
  const savedData = localStorage.getItem("derailed");
  return savedData
    ? JSON.parse(savedData)
    : { won: 0, lost: 0, currentStreak: 0, bestStreak: 0 };
};

export const setPlayerStats = (result: result) => {
  const newPlayerData = { ...getPlayerStats() };
  console.log(newPlayerData, "<--newPlayerData");

  if (result === "won") {
    newPlayerData.won += 1;
  } else {
    newPlayerData.lost += 1;
  }

  localStorage.setItem("derailed", newPlayerData);
};
