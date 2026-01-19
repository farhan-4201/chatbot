// Chat Service - Simulates AI responses
export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  timestamp?: Date;
}

export interface ChatResponse {
  response: string;
  intent: string;
  confidence: number;
  metadata?: {
    tokensPerSecond: number;
    latency: number;
    model: string;
  };
}

export class ChatService {
  private conversationHistory: ChatMessage[] = [];

  // Detect user intent from message
  private detectIntent(message: string): { intent: string; confidence: number } {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('score') || lowerMessage.includes('scoring')) {
      return {
        intent: 'Feature: Lead Scoring',
        confidence: 0.98
      };
    }
    if (lowerMessage.includes('model') || lowerMessage.includes('tech') || lowerMessage.includes('architecture')) {
      return {
        intent: 'Architecture: RAG + GPT-4o',
        confidence: 0.95
      };
    }
    if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return {
        intent: 'Sales: Enterprise',
        confidence: 0.92
      };
    }
    if (lowerMessage.includes('accuracy') || lowerMessage.includes('accurate')) {
      return {
        intent: 'Platform Inquiry',
        confidence: 0.90
      };
    }
    
    return {
      intent: 'General Support',
      confidence: 0.85
    };
  }

  // Generate AI response based on intent
  private generateResponse(message: string, intent: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('score')) {
      return "Lead scoring is dynamic. We use behavioral patterns, referral source, and real-time sentiment analysis to assign a temperature: Hot, Warm, or Cold. Our machine learning model is trained on 10M+ qualified leads, achieving 98.4% accuracy.";
    }
    if (lowerMessage.includes('model') || lowerMessage.includes('tech')) {
      return "We utilize a custom fine-tuned GPT-4o model combined with vector embeddings (RAG) to ensure zero hallucinations and extreme business-specific knowledge. Our architecture is decentralized across 5 global compute clusters for sub-100ms latency.";
    }
    if (lowerMessage.includes('pricing')) {
      return "Enterprise plans are tailored to your volume. Typically starting at $499/mo with dedicated AI model training and 24/7 priority support. We offer custom SLAs and integration assistance at no additional cost.";
    }
    
    return "Our proprietary neural engine processes natural language with 98% accuracy to ensure your sales team only focuses on high-intent prospects. We leverage GPT-4o combined with proprietary lead qualification algorithms.";
  }

  // Main chat method
  async chat(userMessage: string): Promise<ChatResponse> {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      text: userMessage,
      timestamp: new Date()
    });

    // Detect intent
    const { intent, confidence } = this.detectIntent(userMessage);

    // Generate response
    const response = this.generateResponse(userMessage, intent);

    // Add bot response to history
    this.conversationHistory.push({
      role: 'bot',
      text: response,
      timestamp: new Date()
    });

    // Simulate realistic metrics
    const tokensPerSecond = Math.floor(Math.random() * (160 - 140) + 140);
    const latency = Math.floor(Math.random() * (50 - 15) + 15);

    return {
      response,
      intent,
      confidence,
      metadata: {
        tokensPerSecond,
        latency,
        model: 'GPT-4o (Fine-tuned)'
      }
    };
  }

  // Get conversation history
  getHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  // Clear history
  clearHistory(): void {
    this.conversationHistory = [];
  }

  // Get analytics about the conversation
  getAnalytics() {
    const totalMessages = this.conversationHistory.length;
    const userMessages = this.conversationHistory.filter(m => m.role === 'user').length;
    const botMessages = this.conversationHistory.filter(m => m.role === 'bot').length;

    return {
      totalMessages,
      userMessages,
      botMessages,
      averageTokensPerSecond: 145.2,
      averageLatency: 24
    };
  }
}

export default new ChatService();
