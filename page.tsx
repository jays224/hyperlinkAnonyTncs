"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skull } from "lucide-react"

const urlShorteners = [
  { name: "is.gd", url: "https://is.gd", recommended: true },
  { name: "TinyURL", url: "https://tinyurl.com" },
  { name: "Bit.ly", url: "https://bitly.com" },
  { name: "Rebrand.ly", url: "https://rebrandly.com" },
  { name: "Cutt.ly", url: "https://cutt.ly" },
  { name: "click.ly", url: "https://click.ly" },
  { name: "tiny.cc", url: "https://tiny.cc" },
  { name: "shorter.me", url: "https://shorter.me" },
  { name: "shorter.gg", url: "https://shorter.gg" },
  { name: "spoo.me", url: "https://spoo.me" },
  { name: "shorturl.asia", url: "https://shorturl.asia" },
  { name: "reurl.cc", url: "https://reurl.cc" },
  { name: "href.li", url: "https://href.li" },
  { name: "HyperHost", url: "https://hyperhost.ua" },
  { name: "l8.nu", url: "https://l8.nu" },
]

export default function Page() {
  const [url, setUrl] = useState("")
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceClick = (serviceName: string, serviceUrl: string) => {
    setSelectedService(serviceName)
    if (url) {
      window.open(serviceUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Starfield background */}
      <div className="starfield absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-5xl">
          {/* Main container with border glow */}
          <div className="border-2 border-accent rounded-3xl p-8 md:p-12 bg-background/40 backdrop-blur-sm shadow-[0_0_80px_rgba(234,179,8,0.3)]">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-accent glow-text tracking-tight">
                AnonyTncs | LINK HIDER
              </h1>
              <div className="flex items-center justify-center gap-3 text-accent/90">
                <Skull className="w-5 h-5" />
                <p className="text-lg md:text-xl font-medium">Professional URL Shortening Service</p>
                <Skull className="w-5 h-5" />
              </div>
            </div>

            {/* URL Input Section */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="url"
                  placeholder="Enter your long URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-background/60 border-accent/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-accent h-12 text-base"
                />
              </div>
              {url && <p className="text-sm text-accent/70 mt-2">Select a service below to shorten your URL</p>}
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {urlShorteners.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.name, service.url)}
                  className="relative group h-16 rounded-xl border-2 border-accent/50 bg-background/60 hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                >
                  {service.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background px-3 py-0.5 rounded-full text-xs font-bold">
                      ⭐ Recommended
                    </span>
                  )}
                  <span className="text-accent font-bold text-lg group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Discord Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-background font-bold text-lg h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] transition-all duration-300"
                onClick={() => window.open("https://discord.gg/yourserver", "_blank")}
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
