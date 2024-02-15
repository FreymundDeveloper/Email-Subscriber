import nodemailer from 'nodemailer';

// The idea of ​​this algorithm is to simulate a mechanism for confirming the registration of 
// registered emails. Linking the application to a simulated server on the Mailtrap platform.

// Adjust transporter according to your server configuration.
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "047dfd42c4657a",
        pass: "0bb6ced12904db"
    }
});

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
}

async function sendEmailConfirmation(email: string): Promise<void> {
    const mailOptions: MailOptions = {
        from: 'sandbox.smtp.mailtrap.io',
        to: email,
        subject: 'Sign up Confirmation',
        text: 'You have been successfully subscribed to "Email-Subscriber"!'
    };

    try {
        await transporter.sendMail(mailOptions);

        console.log('Confirmation email sent to:', email);
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        throw error;
    }
}

export default sendEmailConfirmation;