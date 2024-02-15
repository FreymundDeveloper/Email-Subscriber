import express, { Request, Response } from 'express';
import database from '../model/model';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/emails', (req: Request, res: Response) => {
    const { id } = req.query;

    if (id) {
        database.get('SELECT * FROM emails WHERE id = ?', [id], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (!row) return res.status(404).json({ error: 'Email not found' });

            res.json(row);
        });
    } 
    else {
        database.all('SELECT * FROM emails', (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            
            res.json(rows);
        });
    }
});

app.post('/emails', (req: Request, res: Response) => {
    const { email } = req.body;

    database.run('INSERT INTO emails (email) VALUES (?)', [email], function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json({ id: this.lastID, email });
    });
});

app.delete('/emails/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    database.run('DELETE FROM emails WHERE id = ?', [id], function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (this.changes === 0) return res.status(404).json({ error: 'Email not found' });

        res.sendStatus(204);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
