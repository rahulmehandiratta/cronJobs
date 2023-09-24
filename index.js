const cron = require("node-cron");
const axios = require("axios"); // You may need to install this library if not already done: npm install axios

// Your JSON data

//11:50 pm call s3 and check updated file and check 


const data = {
  games: [
    {
      gameId: "1",
      contest: [
        { contestId: "1", time: "0 13 * * *" },
        { contestId: "2", time: "0 14 * * *" },
        { contestId: "3", time: "0 15 * * *" },
        { contestId: "4", time: "0 16 * * *" },
        { contestId: "5", time: "0 17 * * *" },
        { contestId: "6", time: "2 22 * * *" },
      ],
    },
    {
      gameId: "2",
      contest: [
        { contestId: "1", time: "0 13 * * *" },
        { contestId: "2", time: "0 14 * * *" },
        { contestId: "3", time: "0 15 * * *" },
        { contestId: "4", time: "0 16 * * *" },
        { contestId: "5", time: "0 17 * * *" },
        { contestId: "6", time: "2 22 * * *" },
      ],
    },
    {
      gameId: "3",
      contest: [
        { contestId: "1", time: "0 13 * * *" },
        { contestId: "2", time: "0 14 * * *" },
        { contestId: "3", time: "0 15 * * *" },
        { contestId: "4", time: "0 16 * * *" },
        { contestId: "5", time: "0 17 * * *" },
        { contestId: "6", time: "2 22 * * *" },
      ],
    },
    {
      gameId: "4",
      contest: [
        { contestId: "1", time: "0 13 * * *" },
        { contestId: "2", time: "0 14 * * *" },
        { contestId: "3", time: "0 15 * * *" },
        { contestId: "4", time: "0 16 * * *" },
        { contestId: "5", time: "0 17 * * *" },
        { contestId: "6", time: "2 22 * * *" },
      ],
    },
  ],
};

async function startContest(gameId, contestId) {
  try {
    // const response = await axios.post("YOUR_CONTEST_START_API_URL", {
    //   gameId,
    //   contestId,
    // });

    console.log(
      `Contest ${contestId} for game ${gameId} started. Response:`,
    //   response.data
    );
  } catch (error) {
    console.error(
      `Error starting contest ${contestId} for game ${gameId}:`,
      error.message
    );
  }
}
data.games.forEach((game) => {
    game.contest.forEach((contest) => {
      const { gameId: contestGameId, contestId, time } = contest;
  
      console.log(`Iterating: gameId=${contestGameId}, contestId=${contestId}`);

      cron.schedule(time, () => {
        console.log(`Scheduled time: ${time}`);
        console.log(`Starting contest ${contestId} for game ${contestGameId} at ${time}`);
        startContest(contestGameId, contestId);
      });
    });
  });
  
  console.log("Cron jobs scheduled.");