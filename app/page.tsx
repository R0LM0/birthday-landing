"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cake, Coffee, Sparkles, Terminal, Zap } from "lucide-react"

export default function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false)
  const [currentAge, setCurrentAge] = useState(0)
  const [consoleText, setConsoleText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const consoleMessages = [
    "$ node birthday_wishes.js",
    "> Inicializando celebración...",
    "> Cargando datos del programador...",
    "> friend.name = 'R0LMO'",
    "> friend.age = 35",
    "> friend.skills = ['C#', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Coffee', 'Jagger']",
    "> ",
    "> console.log('Que nota chele ya son 35 años man!')",
    "> console.log('Te deseo feliz cumpleaños')",
    "> console.log('Que tus proyectos y metas se cumplan')",
    "> console.log('Disfruta de tu día!')",
    "> console.log('Que la pases bien!')",
    "> console.log('Que DIOS te siga bendiciendo!')",
    "> ",
    "> Celebración ejecutada exitosamente ✅",
    "> Process finished with exit code: HAPPINESS",
  ]

  const restartConsoleAnimation = () => {
    setConsoleText("")
    setCurrentLine(0)
    setIsAnimating(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000)
    const ageTimer = setInterval(() => {
      setCurrentAge((prev) => (prev < 35 ? prev + 1 : 35))
    }, 100)

    setTimeout(() => clearInterval(ageTimer), 3500)

    return () => {
      clearTimeout(timer)
      clearInterval(ageTimer)
    }
  }, [])

  useEffect(() => {
    if (currentLine < consoleMessages.length) {
      const timer = setTimeout(() => {
        setConsoleText((prev) => prev + consoleMessages[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    } else if (isAnimating) {
      setIsAnimating(false)
    }
  }, [currentLine, consoleMessages, isAnimating])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <Terminal className="w-16 h-16 mx-auto mb-4 text-primary glow-animation" />
            <div className="font-mono text-sm text-muted-foreground mb-2">
              $ celebrating_birthday --age={currentAge} --friend=true
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            HAPPY BIRTHDAY R0LMO!
          </h1>

          {showMessage && (
            <div className="typewriter font-mono text-sm sm:text-base md:text-xl lg:text-2xl text-foreground mb-8 mx-auto max-w-2xl px-4">
              // Compilando 35 años de mi mejor amigo...
            </div>
          )}

          <div className="flex justify-center items-center gap-4 mb-8">
            <Cake className="w-8 h-8 text-primary" />
            <span className="text-4xl font-bold text-primary">{currentAge}</span>
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Code Block Section */}
        <Card className="mb-16 p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-4">birthday_celebration.js</span>
            </div>
            <div className="text-green-400">
              <div className="text-blue-400">function</div> <span className="text-yellow-400">celebrateBirthday</span>(){" "}
              {"{"}
              <div className="ml-4 text-gray-300">
              <div>
                  <span className="text-blue-400">const</span> <span className="text-white">day</span> ={" "}
                  <span className="text-green-300">'17-september'</span>;
                </div>
                <div>
                  <span className="text-blue-400">const</span> <span className="text-white">friend</span> ={" "}
                  <span className="text-green-300">'R0LMO'</span>;
                </div>
                <div>
                  <span className="text-blue-400">const</span> <span className="text-white">age</span> ={" "}
                  <span className="text-orange-400">35</span>;
                </div>
                <div>
                  <span className="text-blue-400">const</span> <span className="text-white">wishes</span> ={" "}
                  <span className="text-green-300">'Que tengas un año lleno de commits exitosos!'</span>;
                </div>
                <br />
                <div>
                  <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(
                  <span className="text-green-300">
                    `HAPPY BIRTHDAY ${"{"}ROLMO{"}"}! 🎉`
                  </span>
                  );
                </div>
                <div>
                  <span className="text-purple-400">return</span> {"{"} <span className="text-white">day</span>, <span className="text-white">friend</span>, <span className="text-white">age</span>, <span className="text-white">wishes</span> {"}"};
                </div>
              </div>
              {"}"}
            </div>
          </div>
        </Card>

        {/* Personal Message Console Section */}
        <Card className="mb-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-6">
            <Terminal className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4 text-foreground">// Ejecutando mensaje personal...</h2>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-4">birthday_wishes.js</span>
            </div>
            <pre className="text-green-400 whitespace-pre-wrap min-h-[300px]">
              {consoleText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-4 glow-animation font-mono"
            onClick={restartConsoleAnimation}
          >
            <Zap className="w-5 h-5 mr-2" />$ start_celebration.sh
          </Button>
          <div className="mt-4 flex justify-center items-center gap-4 text-muted-foreground">
            <Coffee className="w-5 h-5" />
            <span className="font-mono text-sm">Powered by friendship & caffeine</span>
            <Coffee className="w-5 h-5" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono">
            made by{" "}
            <a 
              href="https://github.com/R0LM0/birthday-landing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 cursor-pointer transition-colors duration-200"
            >
              r0lm0.dev
            </a>
            {" "}your friend | Version 35.0.0
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Icon by{" "}
            <a 
              href="https://www.flaticon.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Flaticon
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
