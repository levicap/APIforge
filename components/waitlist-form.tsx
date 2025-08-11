"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { joinWaitlist } from "@/app/actions/waitlist"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setError("")

    try {
      const result = await joinWaitlist(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">You're on the list!</h3>
            <p className="text-green-700 text-sm">
              We'll notify you as soon as APIForge launches. Get ready to revolutionize your API development!
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
          Be among the first to experience APIForge and get exclusive early access with special pricing.
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
                Joining...
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
