const goatsController = require('../../../controllers/goats')
const Goat = require('../../../models/Goat')

// Mocking response methods
const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()

// we are mocking .send(), .json() and .end()
const mockStatus = jest.fn(() => ({ 
  send: mockSend, 
  json: mockJson, 
  end: mockEnd 
}));

const mockRes = { status: mockStatus };


describe('Goats controller', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

  describe('index', () => {
    it('should return goats with a status code 200', async () => {
      const testGoats = ['g1', 'g2']
      jest.spyOn(Goat, 'getAll').mockResolvedValue(testGoats)

      await goatsController.index(null, mockRes)
      
      expect(Goat.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockSend).toHaveBeenCalledWith({ data: testGoats })
    })

    it('should return an error upon failure', async () => {
      jest.spyOn(Goat, 'getAll').mockRejectedValue(new Error('Something happened to your db'))

      await goatsController.index(null, mockRes)
      
      expect(Goat.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(500)
      expect(mockSend).toHaveBeenCalledWith({ error: 'Something happened to your db' })
    })
  })

  describe ('show', () => {
    let testGoat, mockReq;

    beforeEach(() => {
      testGoat = { id: 1, name: 'Test goat', age: 22 }
      mockReq = { params: { id: 1 } }
    });

    it('should return a goat with a 200 status code', async () => {
      jest.spyOn(Goat, 'findById').mockResolvedValue(new Goat(testGoat))

      await goatsController.show(mockReq, mockRes);
      
      expect(Goat.findById).toHaveBeenCalledTimes(1);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockSend).toHaveBeenCalledWith({ data: new Goat(testGoat) })
    })

    it('should return an error if the goat is not found', async () => {
      jest.spyOn(Goat, 'findById').mockRejectedValue(new Error('oh no'))

      await goatsController.show(mockReq, mockRes)
      
      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(404)
      expect(mockSend).toHaveBeenCalledWith({ error: 'oh no' })
    })
  })

  describe ('create', () => {
    it('should return a new goat with a 201 status code', async () => {
      let testGoat = { name: 'Test Goat', age: 2 }
      const mockReq = { body: testGoat }

      jest.spyOn(Goat, 'create').mockResolvedValue(new Goat(testGoat))

      await goatsController.create(mockReq, mockRes)
      
      expect(Goat.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(201)
      expect(mockSend).toHaveBeenCalledWith({ data: new Goat({ ...testGoat }) })
    })


    it('should return an error if creation fails', async () => {
      let testGoat = { name: 'Test Goat' }
      const mockReq = { body: testGoat }

      jest.spyOn(Goat, 'create').mockRejectedValue(new Error('oh no'))

      await goatsController.create(mockReq, mockRes)
      
      expect(Goat.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockSend).toHaveBeenCalledWith({ error: 'oh no' })
    })
  })

  describe ('update', () => {
    it('should update a goat and return it with a 200 status code', async () => {
      const existingGoat = { id: 22, name: 'Old goat', age: 22 }
      const updatedGoat = { ...existingGoat, name: 'Updated Goat', age: 4 };
      const mockReq = { params: { id: 22 }, body: { name: 'Updated Goat', age: 4 } }

      jest.spyOn(Goat, 'findById').mockResolvedValue(new Goat(existingGoat))
      jest.spyOn(Goat.prototype, 'update').mockResolvedValue(updatedGoat)

      await goatsController.update(mockReq, mockRes)

      expect(Goat.findById).toHaveBeenCalledWith(22);
      expect(Goat.prototype.update).toHaveBeenCalledWith({ name: 'Updated Goat', age: 4 });
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockSend).toHaveBeenCalledWith({ data: updatedGoat });
    })

    it('should return an error if the goat is not found', async () => {
      const mockReq = { params: { id: '49' }, body: {} };

      jest.spyOn(Goat, 'findById').mockRejectedValue(new Error('Goat not found'));

      await goatsController.update(mockReq, mockRes);

      expect(Goat.findById).toHaveBeenCalledWith(49);
      expect(mockStatus).toHaveBeenCalledWith(400);
      expect(mockSend).toHaveBeenCalledWith({ error: 'Goat not found' });
    })
  })

  describe ('destroy', () => {
    it('should return a 204 status code on successful deletion', async () => {
      const testGoat = { id: 1, name: 'Test Goat', age: 22 };
      const mockReq = { params: { id: '1' } };

      jest.spyOn(Goat, 'findById').mockResolvedValue(new Goat(testGoat));
      jest.spyOn(Goat.prototype, 'destroy').mockResolvedValue();

      await goatsController.destroy(mockReq, mockRes);

      expect(Goat.findById).toHaveBeenCalledWith(1);
      expect(Goat.prototype.destroy).toHaveBeenCalledTimes(1);
      expect(mockStatus).toHaveBeenCalledWith(204);
      expect(mockEnd).toHaveBeenCalled();
    });

    it('should return an error if the goat is not found', async () => {
      const mockReq = { params: { id: '49' } };

      jest.spyOn(Goat, 'findById').mockRejectedValue(new Error('Goat not found'));

      await goatsController.destroy(mockReq, mockRes);

      expect(Goat.findById).toHaveBeenCalledWith(49);
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockSend).toHaveBeenCalledWith({ error: 'Goat not found' });
    });
  })
})
