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
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Updated sender
      to: email, // Send to user's email instead of admin
      subject: "🚀 Welcome to APIForge Waitlist!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
          <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px;">🎉 Welcome to APIForge!</h1>
              <p style="color: #64748b; margin: 10px 0 0 0;">Thank you for joining our waitlist</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 25px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: white; margin: 0 0 15px 0; font-size: 18px;">👋 Hello ${name}!</h3>
              <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 6px;">
                <p style="color: white; margin: 5px 0;">You're now on the APIForge waitlist and will be among the first to know when we launch our revolutionary AI-powered API builder.</p>
                <p style="color: white; margin: 15px 0 5px 0;"><strong>What's next?</strong></p>
                <p style="color: white; margin: 5px 0;">• We'll send you exclusive updates about our progress</p>
                <p style="color: white; margin: 5px 0;">• You'll get early access when we launch</p>
                <p style="color: white; margin: 5px 0;">• Special pricing for early adopters</p>
              </div>
            </div>

            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #334155; margin: 0 0 10px 0;">🚀 About APIForge</h4>
              <p style="color: #64748b; margin: 5px 0; font-size: 14px;">APIForge is the future of API development - build, test, and deploy APIs with the power of AI. No more complex configurations or endless documentation.</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                🚀 Get ready to revolutionize your API development workflow!
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This email was sent from APIForge. You can unsubscribe at any time.
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
      message: "Successfully joined the waitlist! Check your email for confirmation.",
    }
  } catch (error) {
    console.error("Error sending waitlist email:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again.",
    }
  }
}
