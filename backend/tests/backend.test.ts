import request from 'supertest';
import app from '../src/server/server';

describe('Testing Routes', () => {
    let createdEmailId: string;

    it('Route Post', async () => {
        const response = await request(app)
            .post('/emails')
            .send({ email: "emails.test@mail.com" });

        createdEmailId = response.body.id;

        expect(response.status).toBe(201);
    });

    it('Route Get', async () => {
        const response = await request(app).get('/emails');
        expect(response.status).toBe(200);
    });

    it('Route Delete', async () => {
        expect(createdEmailId).toBeDefined();

        const response = await request(app).delete(`/emails/${createdEmailId}`);
        expect(response.status).toBe(204);
    });
});
