const request = require('supertest');
const app = require('../src/index');

describe('GET /mean', () => {
    test('should return mean of numbers', async () => {
        const response = await request(app).get('/mean?nums=1,2,3');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'mean', value: 2 });
    });
    test('should return 400 if nums are missing', async () => {
        const response = await request(app).get('/mean')
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'nums are required' });
    });
    test('should return 400 if nums contains invalid number', async () => {
        const response = await request(app).get('/mean?nums=1,foo,3');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'foo is not a number' });
    });
});

describe('GET /median', () => {
    test('should return median of numbers', async () => {
        const response = await request(app).get('/median?nums=1,2,3');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'median', value: 2 });
    });
    test('should return median of even number of elements', async () => {
        const response = await request(app).get('/median?nums=1,2,3,4');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'median', value: 2.5 });
    });
    test('should return 400 if nums are missing', async () => {
        const response = await request(app).get('/median')
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'nums are required' });
    });
    test('should return 400 if nums contains invalid number', async () => {
        const response = await request(app).get('/median?nums=1,foo,3');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'foo is not a number' });
    });
});

describe('GET /mode', () => {
    test('should return mode of numbers', async () => {
        const response = await request(app).get('/mode?nums=1,2,2,3');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'mode', value: 2 });
    });
    test('should return mode of even number of elements', async () => {
        const response = await request(app).get('/mode?nums=1,1,2,2,3');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'mode', value: 1 });
    });
    test('should return 400 if nums are missing', async () => {
        const response = await request(app).get('/mode')
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'nums are required' });
    });
    test('should return 400 if nums contains invalid number', async () => {
        const response = await request(app).get('/mode?nums=1,foo,3');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'foo is not a number' });
    });
});