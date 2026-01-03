import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const quickActions = [
  "Leave balance",
  "Attendance %",
  "Next salary",
  "Apply leave",
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    { role: "ai", content: "Hi! 👋 I'm your HR Assistant. How can I help you today?" }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { role: "user", content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        content: "I understand you're asking about \"" + message + "\". This feature will be fully functional once connected to Lovable Cloud! 🚀" 
      }]);
    }, 1000);
    
    setMessage("");
  };

  const handleQuickAction = (action: string) => {
    setMessages([...messages, { role: "user", content: action }]);
    
    let response = "";
    switch (action) {
      case "Leave balance":
        response = "📅 Your leave balance:\n• Paid Leave: 15 days\n• Sick Leave: 10 days\n• Casual Leave: 5 days";
        break;
      case "Attendance %":
        response = "📊 Your attendance this month: 95%\nPresent: 19 days | Absent: 1 day";
        break;
      case "Next salary":
        response = "💰 Your next salary will be credited on 1st of next month.\nEstimated amount: ₹45,000";
        break;
      case "Apply leave":
        response = "Would you like me to help you apply for leave? Go to Leave section or I can guide you through the process!";
        break;
      default:
        response = "I can help you with that!";
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", content: response }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "floating-button",
          isOpen && "rotate-180"
        )}
        aria-label="AI Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 md:bottom-24 right-4 w-[calc(100%-2rem)] md:w-96 max-h-[70vh] bg-card rounded-2xl shadow-2xl border border-border z-40 flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="gradient-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AI HR Assistant</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line",
                    msg.role === "user"
                      ? "gradient-primary text-white rounded-br-md"
                      : "bg-secondary rounded-bl-md"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="input-field flex-1 py-2.5 text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-xl gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
