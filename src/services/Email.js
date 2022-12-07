import emailjs from '@emailjs/browser';

export async function SendEmail(name, email, message, subject) {
    const params = { name, email, message, subject };
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATEID,
            params,
            import.meta.env.VITE_EMAIL_PUBLICKEY
        );
        console.log("succes email");
        return true;
    } catch (error) {
        console.log("failed email:");
        console.log(error);
        return false;
    }
}