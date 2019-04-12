const request = require("supertest");
const crossfitServer = require("../api/server.js");
const crossfitdb = require("../database/dbConfig.js");

describe("crossfit-router.js", () => {
  afterEach(async () => {
    await crossfitdb("crossfitwod").truncate();
  });

  describe.skip("GET /", () => {
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
    it("should return the crossfit workout object", () => {
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

  describe("post(/api/Crossfitwod", () => {
    it("should return status 201", async () => {
      const frustrating = {
        Date: "April, 11, 2017",
        Workout_Name: "Frustrating",
        Warmup: "50 Jumping Jacks",
        Workout_Structure: "20 minute AMRAP",
        Workout: "This is to be deleted too"
      };

      let response = await request(crossfitServer)
        .post("/api/Crossfitwod")
        .send(frustrating);
      expect(response.status).toBe(201);
    });

    it("returns the new workout", async () => {
      const frustrating = {
        Date: "April, 11, 2017",
        Workout_Name: "Frustrating",
        Warmup: "50 Jumping Jacks",
        Workout_Structure: "20 minute AMRAP",
        Workout: "This is to be deleted too"
      };

      let response = await request(crossfitServer)
        .post("/api/Crossfitwod")
        .send(frustrating);

      expect(response.body).toEqual([
        {
          id: 1,
          Date: "April, 11, 2017",
          Workout_Name: "Frustrating",
          Warmup: "50 Jumping Jacks",
          Workout_Structure: "20 minute AMRAP",
          Workout: "This is to be deleted too"
        }
      ]);
    });

    it("returns status 400 if bad form", async () => {
      const frustrating = {
        Date: "April, 11, 2017",
        Workout_Name: "Frustrating",
        Warmup: "50 Jumping Jacks",
        Workout_Structure: "20 minute AMRAP",
        Workout: "This is to be deleted too"
      };

      let response = await request(crossfitServer)
        .post("/api/Crossfitwod")
        .send(frustrating);

      expect(response.status).toBe(201);
    });
  });
});
