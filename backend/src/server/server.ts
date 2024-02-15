import express from 'express';
import cors from 'cors';
import * as controller from '../controller/controller';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/emails', controller.getEmails);
app.post('/emails', controller.createEmail);
app.delete('/emails/:id', controller.deleteEmail);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});