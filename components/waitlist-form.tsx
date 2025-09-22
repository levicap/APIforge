"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { joinWaitlist } from "@/app/actions/waitlist"
import emailjs from "@emailjs/browser"
import { toast } from "@/hooks/use-toast"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setError("")

    try {
      // Initialize EmailJS with your public key
      emailjs.init("aOsypJLWMEc0BcJht")
      
      // Get form data
      const email = formData.get("email") as string
      const name = (formData.get("name") as string) || "Anonymous"
      
      // Prepare template parameters for the new template
      const templateParams = {
        user_name: name,
        user_email: email,
        subject: `New message from ${name}`,
        message: `You've received a new message from your apispark website.

From: ${name}

Email: ${email}

---

This message was sent from your apispark contact form.`
      }
      
      // Send email using EmailJS with the new template
      await emailjs.send("service_jlvqyny", "template_fzyqvtm", templateParams)
      
      // Also call the existing server action
      const result = await joinWaitlist(formData)

      if (result.success) {
        // Show toast notification
        toast({
          title: "Success!",
          description: "Your data has been sent. When we launch, you'll get an email.",
        })
        // Set submitted state after a short delay to show the loader
        setTimeout(() => {
          setIsSubmitted(true)
        }, 1000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error("EmailJS error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      // Keep loader for at least 1 second before showing success state
      if (!error) {
        setTimeout(() => {
          setIsSubmitting(false)
        }, 1000)
      } else {
        setIsSubmitting(false)
      }
    }
  }

  // Display loader when submitting
  if (isSubmitting && !isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sending your information...</h3>
            <p className="text-gray-600 text-sm">
              Please wait while we process your request.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Display success message when submitted
  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">You're on the list!</h3>
            <p className="text-green-700 text-sm">
              We'll notify you as soon as APISpark launches. Get ready to revolutionize your API development!
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
      <CardHeader className="text-center">
        <Badge className="mx-auto mb-2 bg-blue-100 text-blue-700 border-blue-200">
          <Mail className="w-3 h-3 mr-1" />
          Early Access
        </Badge>
        <CardTitle className="text-xl">Join the Waitlist</CardTitle>
        <CardDescription>
          Be among the first to experience APISpark and get exclusive early access with special pricing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your name (optional)"
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">No spam, ever. Unsubscribe at any time.</p>
      </CardContent>
    </Card>
  )
}