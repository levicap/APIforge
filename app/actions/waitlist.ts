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
    console.error("Error adding to waitlist:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again.",
    }
  }
}
