import axios from 'axios';

export const postCallEmail = async (email: string): Promise<string> => {
    const response = await axios.post<string>('http://localhost:3001/emails', {
        email: email
    });

    return response.data;
};