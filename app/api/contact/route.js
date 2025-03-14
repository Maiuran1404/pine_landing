// import { Resend } from "resend";

// const resend = process.env.RESEND_API_KEY
//   ? new Resend(process.env.RESEND_API_KEY)
//   : null;

export async function POST(request) {
  // Temporary response while contact functionality is disabled
  return Response.json({
    success: true,
    message: "Contact form is temporarily disabled",
  });

  // try {
  //   const { name, email, message } = await request.json();

  //   if (!resend) {
  //     console.log("Email would have been sent:", { name, email, message });
  //     return Response.json({
  //       success: true,
  //       message:
  //         "Email functionality is disabled. Please configure RESEND_API_KEY in .env file.",
  //     });
  //   }

  //   const data = await resend.emails.send({
  //     from: "Pine <onboarding@resend.dev>",
  //     to: "maiuran.loganathan@uni.minerva.edu",
  //     subject: "New Pine Contact Form Submission",
  //     html: `
  //       <h2>New Contact Form Submission</h2>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p><strong>Message:</strong> ${message}</p>
  //     `,
  //   });

  //   return Response.json({ success: true, data });
  // } catch (error) {
  //   return Response.json({ success: false, error: error.message });
  // }
}
