const request = require("supertest");
const crossfitServer = require("../api/server.js");

describe("crossfit-router.js", () => {
  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(crossfitServer)
        .get("/api/Crossfitwod")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it("should return JSON", () => {
      return request(crossfitServer)
        .get("/api/Crossfitwod")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    it("should return", () => {
      let crossfitWod = [
        {
          id: 1,
          Date: "April, 10, 2017",
          Workout_Name: "Annie",
          Warmup: "50 dummbbell calf raises",
          Workout_Structure: "25 minute AMRAP",
          Workout:
            "-5 Hang Power Cleans, -10 Renegade Rows, -15 Wall balls, -20 Goblet squats"
        },
        {
          id: 2,
          Date: "April, 10, 2017",
          Workout_Name: "Annie",
          Warmup: "50 dummbbell calf raises",
          Workout_Structure: "25 minute AMRAP",
          Workout:
            "-5 Hang Power Cleans, -10 Renegade Rows, -15 Wall balls, -20 Goblet squats"
        }
      ];
      return request(crossfitServer)
        .get("/api/Crossfitwod")
        .then(res => {
          expect(res.body).toEqual(crossfitWod);
        });
    });
  });
});
