"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Zap,
  Code,
  Puzzle,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  HelpCircle,
} from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
          <Sparkles className="w-3 h-3 mr-1" />
          Coming Soon
        </Badge>
        <span className="ml-2 text-sm">Be the first to experience the future of API development</span>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* APIForge Logo */}
            <img src="/images/api-logo.png" alt="APIForge Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              APIForge
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#ai-power" className="text-gray-600 hover:text-gray-900 transition-colors">
              AI Powered
            </a>
            <a href="#frameworks" className="text-gray-600 hover:text-gray-900 transition-colors">
              Frameworks
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Early Access
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered API Builder
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Build APIs with
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI & Drag-Drop
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create powerful APIs in minutes, not hours. APIForge combines AI intelligence with intuitive drag-and-drop
            components that work seamlessly with any framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* APIForge Platform Screenshot */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl"></div>
            <img
              src="/images/flowforge-platform.png"
              alt="APIForge Platform - API Documentation Interface"
              className="relative rounded-2xl shadow-2xl border border-gray-200 w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
          </div>

          {/* Platform Features Highlight */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Generated Docs</h3>
              <p className="text-gray-600 text-sm">
                Beautiful API documentation generated automatically from your designs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Testing</h3>
              <p className="text-gray-600 text-sm">
                Test your APIs instantly with built-in testing tools and real-time responses
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Puzzle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visual Builder</h3>
              <p className="text-gray-600 text-sm">Drag and drop components to build complex API workflows visually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              <Code className="w-3 h-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Everything you need to build
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                world-class APIs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, APIForge provides all the tools you need to create robust, scalable APIs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visual API Design */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Visual API Design with Drag-and-Drop</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Intuitive canvas for building API endpoints as flow diagrams. Nodes for HTTP methods, database
                  actions, external API calls, authentication, validation, and conditional logic. Click any node to
                  configure parameters, request/response schemas, and error handling.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Business Logic Orchestration */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Business Logic Orchestration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Add custom workflows and conditional branching without writing code. Combine multiple data sources,
                  transformations, and service calls in a single endpoint. Built-in function library (date manipulation,
                  string parsing, math operations) with option to add custom scripts.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Database Integration */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Database Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Native support for PostgreSQL, MySQL, MongoDB, Supabase, Firebase, and other BaaS providers. Visual
                  schema designer (ERD view) with automatic CRUD API generation. Secure query building with parameter
                  binding to prevent injection.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Live API Testing & Debugging */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Live API Testing & Debugging</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Built-in API tester for sending requests and viewing responses. Real-time execution tracing to debug
                  data flow inside endpoints. Log viewer with request history, errors, and performance metrics.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Auto-Generated API Documentation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Auto-Generated API Documentation</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Instant Swagger / OpenAPI docs for every project. "Try It Out" mode for interactive testing. Shareable
                  documentation links for external teams and clients.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Version Control & Deployment */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Version Control & Deployment</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Save, fork, and roll back API designs. One-click deployment to cloud (Vercel, Railway, Render). Export
                  as runnable Express.js / FastAPI code or as a portable JSON schema.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Security & Authentication */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Security & Authentication</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  API key management, JWT authentication, OAuth2 integration. Role-based access control for endpoints.
                  Environment variables for securely storing secrets.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Integrations & Extensibility */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  {/* New API Connectivity Logo */}
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="API Connectivity"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl mb-3">Integrations & Extensibility</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Pre-built connectors for Stripe, SendGrid, Twilio, Slack, and other services. Webhooks for
                  event-driven workflows. Plugin system for adding custom nodes or integrations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Power Section */}
      <section id="ai-power" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            <Brain className="w-3 h-3 mr-1" />
            AI at its Core
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Powered by the latest AI models for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              High-Quality Code Generation
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            APIForge leverages advanced AI models to generate clean, efficient, and production-ready API code. Focus on
            your logic, let AI handle the boilerplate.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/images/gpt.png" alt="OpenAI GPT-4o Logo" className="w-8 h-8 object-contain" />
                </div>
                <CardTitle className="text-xl">OpenAI GPT-4o</CardTitle>
                <CardDescription>
                  Leverage the most advanced AI models for intelligent code generation, schema design, and more.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/images/claude.png" alt="Claude Sonnet Logo" className="w-8 h-8 object-contain" />
                </div>
                <CardTitle className="text-xl">Claude Sonnet</CardTitle>
                <CardDescription>
                  Benefit from Anthropic's balanced intelligence for robust and context-aware API logic.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/images/grok.png" alt="Grok Logo" className="w-8 h-8 object-contain" />
                </div>
                <CardTitle className="text-xl">Grok Integration</CardTitle>
                <CardDescription>
                  Benefit from cutting-edge AI for rapid prototyping, complex logic generation, and smart suggestions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img src="/images/deepseek.png" alt="DeepSeek Logo" className="w-8 h-8 object-contain" />
                </div>
                <CardTitle className="text-xl">DeepSeek AI</CardTitle>
                <CardDescription>
                  Utilize powerful open-source AI for specialized code tasks and efficient problem-solving.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Support Section */}
      <section id="frameworks" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <Code className="w-3 h-3 mr-1" />
            Universal Compatibility
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Works with your
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              favorite framework
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            APIForge generates clean, production-ready code for any backend framework or language you prefer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "NestJS", logo: "/images/nestjs-logo.png" },
              {
                name: "Spring Boot",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
              },
              {
                name: "Express.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                name: "FastAPI",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
              },
              { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
              {
                name: "Ruby on Rails",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
              },
            ].map((framework) => (
              <div
                key={framework.name}
                className="flex flex-col items-center p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <img
                  src={framework.logo || "/placeholder.svg"}
                  alt={framework.name}
                  className="h-16 w-auto mb-3 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(
                      framework.name,
                    )}`
                  }}
                />
                <span className="text-sm font-medium text-gray-700">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
              <Star className="w-3 h-3 mr-1" />
              Early Bird Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Simple, transparent
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                pricing for everyone
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get early access with special launch pricing. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-gray-600 mb-4">Perfect for side projects and learning</CardDescription>
                <div className="text-4xl font-bold text-gray-900">
                  $0
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <Badge className="mt-2 bg-green-100 text-green-700 border-green-200">Free Forever</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Up to 3 API projects",
                    "Basic AI assistance",
                    "Drag & drop builder",
                    "Community support",
                    "Basic templates",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-all duration-300 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <CardDescription className="text-gray-600 mb-4">For growing teams and businesses</CardDescription>
                <div className="text-4xl font-bold text-gray-900">
                  <span className="line-through text-2xl text-gray-400 mr-2">$49</span>
                  $29
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">Early Bird 40% Off</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited API projects",
                    "Advanced AI features",
                    "Premium templates",
                    "Priority support",
                    "Team collaboration",
                    "Advanced testing tools",
                    "Custom integrations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-gray-600 mb-4">For large organizations</CardDescription>
                <div className="text-4xl font-bold text-gray-900">
                  Custom
                  <span className="text-lg font-normal text-gray-600 block">pricing</span>
                </div>
                <Badge className="mt-2 bg-purple-100 text-purple-700 border-purple-200">Contact Sales</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Pro",
                    "On-premise deployment",
                    "Custom AI training",
                    "24/7 dedicated support",
                    "SLA guarantees",
                    "Advanced security",
                    "Custom integrations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              <HelpCircle className="w-3 h-3 mr-1" />
              Got Questions?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about APIForge, its features, and pricing.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                What is APIForge?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                APIForge is an AI-powered API builder that allows you to create powerful APIs in minutes using an
                intuitive drag-and-drop interface. It integrates with various backend frameworks and leverages advanced
                AI capabilities for code generation and workflow automation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                How does AI assist in API building?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                AI in APIForge streamlines API development by intelligently generating code, suggesting optimal schema
                designs, and automating complex logic. It helps reduce manual coding, accelerate prototyping, and ensure
                high-quality, production-ready APIs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                What frameworks does APIForge support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                APIForge generates code compatible with a wide range of popular backend frameworks, ensuring seamless
                integration with your existing technology stack. This includes frameworks like NestJS, Spring Boot,
                Express.js, FastAPI, Django, and Ruby on Rails.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                Is there a free plan available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, APIForge offers a free tier designed for individual developers and small projects. This plan
                provides access to core features, basic AI assistance, and community support, allowing you to get
                started without any cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                How can I get early access?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                You can join our exclusive waitlist by providing your email address on our landing page. Early access
                members will be among the first to experience APIForge's full capabilities and may receive special
                offers upon launch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section with Waitlist Form */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Sparkles className="w-3 h-3 mr-1" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to revolutionize
            <br />
            your API development?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with APIForge. Get early access and save
            40% on your first year.
          </p>

          {/* Waitlist Form */}
          <div className="mb-8">
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                {/* APIForge Logo in footer */}
                <img src="/images/api-logo.png" alt="APIForge Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold">APIForge</span>
              </div>
              <p className="text-gray-400 mb-6">
                The future of API development. Build powerful APIs with AI assistance and drag-and-drop simplicity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.866-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.2-.625-.56-.949-.477-.9-.637-2.104-.258-3.121z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.196-4.354-2.617-6.78-6.979-6.98-1.281-.057 1.689-.073 4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Migration Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:ahmedbenyahia654@gmail.com" className="hover:text-white transition-colors">
                    ahmedbenyahia654@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+21650193344" className="hover:text-white transition-colors">
                    +216 50193344
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Route Mahdia, Sfax, Tunisia</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <a href="https://apiforge.dev" className="hover:text-white transition-colors">
                    apiforge.dev
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Company</h4>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>&copy; 2025 APIForge. All rights reserved. Coming soon to revolutionize API development.</p>
              </div>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GDPR
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
