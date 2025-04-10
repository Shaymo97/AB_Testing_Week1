const request = require('supertest')
const { resetTestDB } = require("./config")

const app = require("../../app")

describe("Goat API Endpoints", () => { //First argument is the name of the test, second is the test
    let api 

    beforeEach(async () => {
        await resetTestDB()
    })

    beforeAll(() => {
        api = app.listen(4000, () => {
            console.log("Test server running on port 4000");
        })
    })

    afterAll((done) => {
        console.log("Gracefully stopped test server");
        api.close(done)
    })

    describe("GET /", () => {
        it('responds to GET with a message and a description', async () => {
            //ARRANGE & ACT
            const response = await request(api).get("/")

            // ASSERT
            expect(response.status).toBe(200)
            expect(response.body.message).toBe("welcome")
            expect(response.body.description).toBe("GOAT API")
        })
    })

    describe("GET /goats", () => {
        it("should return all goats with a status code 200", async () => {
            //ARRANGE & ACT
            const response = await request(api).get("/goats")
            //ASSERT
            expect(response.status).toBe(200)
            expect(response.body.data).toBeInstanceOf(Array)
            expect(response.body.data.length).toBeGreaterThan(2)
        })
    })

    describe("GET /goats/:id", () => {
        it("should return a specific goat by id", async () => {
            //ARRANGE 
            const goatId = 1
            //ACT
            const response = await request
            (api).get(`/goats/${goatId}`)
            //ASSERT
            expect(response.status).toBe(200)
            expect(response.body.data).toHaveProperty('id',goatId)
            expect(response.body.data).toHaveProperty("name","goat 1")
        })

        it("should return a 404 if goat is not found", async () => {
            // ARRANGE
            const nonExistentGoatId = 999
            // ACT
            const response = await request(api).get(`/goats/${nonExistentGoatId}`)
            // ASSERT
            expect(response.status).toBe(404)
            expect(response.body.error).toBe('This goat does not exist!')
        })
    })

    describe("POST /goats", () => {
        it("should create a new goat and return it", async() => {
            //ARRANGE
            const newGoat = {name: "goat 4", age: 4}
            //ACT
            const response = await request(api).post("/goats").send(newGoat)
            //ASSERT
            expect(response.status).toBe(201)
            expect(response.body.data).toHaveProperty("name","goat 4")
            expect(response.body.data).toHaveProperty("age", 4)
        })

        it("should return a 400 if required fields are missing", async () => {
            //ARRANGE
            const incompletedGoat = {"name": "cow"}
            //ACT
            const response = await request(api).post("/goats").send(incompletedGoat)
            //ASSERT
            expect(response.status).toBe(400)
            expect(response.body.error).toBe("age is missing")
        })
    })
    describe("PATCH /goats/:d", () => {
        it("should update an existing goat and return it", async () => {
            //ARRANGE
            const goatId = 1
            const updatedGoat = { name: "Sir Goat 1", age: 12}
            //ACT
            const response = await request(api).patch(`/goats/${goatId}`).send(updatedGoat)
            //ASSERT
            expect(response.status).toBe(200)
            expect(response.body.data).toHaveProperty("name", "Sir Goat 1")
            expect(response.body.data).toHaveProperty("age", 12)
        })

        it('should return a 400 if update fails due to missing data', async () => {
        const nonExistentGoatId = 999;
        const updateData = { name: 'Updated Goat', age: 5 };

        const response = await request(api).patch(`/goats/${nonExistentGoatId}`).send(updateData);;

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('This goat does not exist!');
        })
  })

    
})