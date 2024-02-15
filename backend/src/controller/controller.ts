import { Request, Response } from 'express';
import database from '../model/model';

export const getEmails = (req: Request, res: Response) => {
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
}

export const createEmail = (req: Request, res: Response) => {
    const { email } = req.body;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(email)) return res.status(400).json({ error: 'Invalid email format' });

    database.get('SELECT * FROM emails WHERE email = ?', [email], (err, row) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (row) return res.status(400).json({ error: 'Email already exists' });

        database.run('INSERT INTO emails (email) VALUES (?)', [email], function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.json({ id: this.lastID, email });
        });
    });
}


export const deleteEmail = (req: Request, res: Response) => {
    const { id } = req.params;

    database.run('DELETE FROM emails WHERE id = ?', [id], function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (this.changes === 0) return res.status(404).json({ error: 'Email not found' });

        res.sendStatus(204);
    });
}