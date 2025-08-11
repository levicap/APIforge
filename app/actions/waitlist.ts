"use server"

import { Resend } from "resend"

// WARNING: Hardcoding API keys is NOT a secure practice for production environments.
// This is done temporarily as per user request.
// For production, always use environment variables (e.g., process.env.RESEND_API_KEY).
const resend = new Resend("re_fQFesUHz_E2LrA5GScRQ8fiX4qSAAR1t3") // Hardcoded API Key

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const name = (formData.get("name") as string) || "Anonymous"

  if (!email) {
    return { success: false, message: "Email is required" }
  }

  try {
    // Send notification email to admin using Resend
    // IMPORTANT: Replace 'onboarding@yourdomain.com' with an email address
    // that you have verified in your Resend account.
    await resend.emails.send({
      from: "APIForge <onboarding@apiforge.dev>", // Replace with your verified sender email
      to: "ahmedbenyahia654@gmail.com", // Admin email
      subject: "🚀 New APIForge Waitlist Registration",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
          <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px;">🎉 New APIForge Registration!</h1>
              <p style="color: #64748b; margin: 10px 0 0 0;">Someone just joined your waitlist</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 25px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: white; margin: 0 0 15px 0; font-size: 18px;">👤 User Details</h3>
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 6px;">
                <p style="color: white; margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
                <p style="color: white; margin: 5px 0;"><strong>👋 Name:</strong> ${name}</p>
                <p style="color: white; margin: 5px 0;"><strong>⏰ Registration Time:</strong> ${new Date().toLocaleString(
                  "en-US",
                  {
                    timeZone: "Africa/Tunis",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  },
                )} (Tunisia Time)</p>
              </div>
            </div>

            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #334155; margin: 0 0 10px 0;">📊 Quick Stats</h4>
              <p style="color: #64748b; margin: 5px 0; font-size: 14px;">• This user is excited about APIForge's AI-powered API builder</p>
              <p style="color: #64748b; margin: 5px 0; font-size: 14px;">• They'll receive early access notifications when you launch</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                🚀 Keep building the future of API development with APIForge!
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This notification was automatically sent from your APIForge landing page
            </p>
          </div>
        </div>
      `,
    })

    // Store in database (simulated)
    console.log("User added to waitlist:", {
      email,
      name,
      timestamp: new Date(),
      location: "Tunisia",
    })

    return {
      success: true,
      message: "Successfully joined the waitlist! We'll notify you when APIForge launches.",
    }
  } catch (error) {
    console.error("Error sending waitlist email:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again.",
    }
  }
}
