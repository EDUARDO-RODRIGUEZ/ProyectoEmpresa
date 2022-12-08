import emailjs from '@emailjs/browser';

export async function SendEmail(name, email, message, subject) {
    const params = { name, email, message, subject };
    try {
        await emailjs.send(
            "service_gkfa2d5",
            "template_0tidwi4",
            params,
            "GJET4e8e275f2VfUJ"
        );
        console.log("succes email");
        return true;
    } catch (error) {
        console.log("failed email:");
        console.log(error);
        return false;
    }
}