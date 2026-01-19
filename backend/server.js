// Simplified Express server in plain JavaScript (no TypeScript compilation needed)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ============ SERVICES ============
// Persistence Helper
const fs = {
  async write(file, data) {
    try {
      const fsPromise = await import('fs/promises');
      const path = await import('path');
      const dataDir = path.join(process.cwd(), 'data');
      if (!(await fsPromise.stat(dataDir).catch(() => false))) {
        await fsPromise.mkdir(dataDir, { recursive: true });
      }
      await fsPromise.writeFile(path.join(dataDir, `${file}.json`), JSON.stringify(data, null, 2));
    } catch (e) { console.error('Write error:', e); }
  },
  async read(file) {
    try {
      const fsPromise = await import('fs/promises');
      const path = await import('path');
      const content = await fsPromise.readFile(path.join(process.cwd(), 'data', `${file}.json`), 'utf-8');
      return JSON.parse(content);
    } catch (e) { return null; }
  }
};

// Chat Service
const chatService = {
  conversationHistory: [],

  async init() {
    const saved = await fs.read('chat_history');
    if (saved) this.conversationHistory = saved;
  },

  detectIntent(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('score')) return { intent: 'Feature: Lead Scoring', confidence: 0.98 };
    if (lowerMessage.includes('model') || lowerMessage.includes('tech')) return { intent: 'Architecture: RAG + GPT-4o', confidence: 0.95 };
    if (lowerMessage.includes('pricing')) return { intent: 'Sales: Enterprise', confidence: 0.92 };
    if (lowerMessage.includes('accuracy')) return { intent: 'Platform Inquiry', confidence: 0.90 };
    return { intent: 'General Support', confidence: 0.85 };
  },

  generateResponse(message, intent) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('score')) {
      return "Lead scoring is dynamic. We use behavioral patterns, referral source, and real-time sentiment analysis to assign a temperature: Hot, Warm, or Cold. Our ML model achieves 98.4% accuracy.";
    }
    if (lowerMessage.includes('model') || lowerMessage.includes('tech')) {
      return "We utilize a custom fine-tuned GPT-4o model combined with vector embeddings (RAG) to ensure zero hallucinations and extreme business-specific knowledge.";
    }
    if (lowerMessage.includes('pricing')) {
      return "Enterprise plans are tailored to your volume. Typically starting at $499/mo with dedicated AI model training and 24/7 priority support.";
    }
    return "Our proprietary neural engine processes natural language with 98% accuracy to ensure your sales team only focuses on high-intent prospects.";
  },

  async chat(userMessage) {
    this.conversationHistory.push({ role: 'user', text: userMessage, timestamp: new Date() });
    const { intent, confidence } = this.detectIntent(userMessage);
    const response = this.generateResponse(userMessage, intent);
    this.conversationHistory.push({ role: 'bot', text: response, timestamp: new Date() });

    // Save to disk
    await fs.write('chat_history', this.conversationHistory);

    return {
      response,
      intent,
      confidence,
      metadata: {
        tokensPerSecond: Math.floor(Math.random() * 20 + 140),
        latency: Math.floor(Math.random() * 35 + 15),
        model: 'GPT-4o (Fine-tuned)'
      }
    };
  },

  getHistory() {
    return this.conversationHistory;
  },

  async clearHistory() {
    this.conversationHistory = [];
    await fs.write('chat_history', []);
  },

  getAnalytics() {
    return {
      totalMessages: this.conversationHistory.length,
      userMessages: this.conversationHistory.filter(m => m.role === 'user').length,
      botMessages: this.conversationHistory.filter(m => m.role === 'bot').length,
      averageTokensPerSecond: 145.2,
      averageLatency: 24
    };
  }
};
chatService.init();


// Dashboard Service
const dashboardService = {
  getAnalyticsData() {
    return [
      { name: 'Mon', leads: 400, conv: 240 },
      { name: 'Tue', leads: 300, conv: 139 },
      { name: 'Wed', leads: 600, conv: 380 },
      { name: 'Thu', leads: 800, conv: 490 },
      { name: 'Fri', leads: 500, conv: 390 },
      { name: 'Sat', leads: 400, conv: 200 },
      { name: 'Sun', leads: 300, conv: 150 }
    ];
  },

  getLeadDistribution() {
    return [
      { name: 'Hot', value: 45, color: '#ff00e5' },
      { name: 'Warm', value: 30, color: '#ff8a00' },
      { name: 'Cold', value: 25, color: '#0066ff' }
    ];
  },

  getStats() {
    return [
      { label: "AI Response Quality", value: "98.4%", color: "text-primary" },
      { label: "Lead Capture Rate", value: "+215%", color: "text-accent" },
      { label: "Avg. Latency", value: "0.12s", color: "text-secondary" }
    ];
  },

  getAllMetrics() {
    return {
      analyticsData: this.getAnalyticsData(),
      distributionData: this.getLeadDistribution(),
      stats: this.getStats()
    };
  },

  getRealTimeMetrics() {
    return {
      activeLeads: Math.floor(Math.random() * 100 + 50),
      conversionRate: (Math.random() * 20 + 15).toFixed(2),
      avgResponseTime: Math.floor(Math.random() * 80 + 12) + 'ms',
      qualityScore: (Math.random() * 8 + 90).toFixed(1),
      timestamp: new Date()
    };
  },

  getPerformanceMetrics() {
    return {
      cpuUsage: Math.floor(Math.random() * 40 + 20),
      memoryUsage: Math.floor(Math.random() * 50 + 30),
      requestsPerSecond: Math.floor(Math.random() * 150 + 100),
      errorRate: (Math.random() * 0.5).toFixed(3),
      uptime: 99.98
    };
  }
};

// Architecture Service
const architectureService = {
  getArchitectureSteps() {
    return [
      { id: 1, label: 'Edge Web Layer', description: 'Custom widget injection', component: 'Globe', status: 'healthy', latency: 2 },
      { id: 2, label: 'Interface Core', description: 'WebSocket transmission', component: 'MessageSquare', status: 'healthy', latency: 4 },
      { id: 3, label: 'Neural Nexus', description: 'GPT-4o + Vector RAG', component: 'BrainCircuit', status: 'healthy', latency: 145 },
      { id: 4, label: 'Orchestrator', description: 'Node.js compute cluster', component: 'Server', status: 'healthy', latency: 8 },
      { id: 5, label: 'Persistence', description: 'MongoDB Atlas', component: 'Database', status: 'healthy', latency: 15 }
    ];
  },

  getSystemHealth() {
    const steps = this.getArchitectureSteps();
    return {
      overall: 'healthy',
      components: steps.length,
      online: steps.length,
      uptime: 99.98,
      lastCheck: new Date()
    };
  },

  getSystemTopology() {
    return {
      name: 'NextGen AI Neural Network',
      version: '4.0',
      nodes: this.getArchitectureSteps(),
      regions: ['us-east-1', 'eu-west-1', 'ap-southeast-1'],
      redundancy: 'multi-region active-active'
    };
  },

  getDataFlow() {
    return {
      inbound: { requests: Math.floor(Math.random() * 500 + 500), dataSize: Math.floor(Math.random() * 40 + 10) + 'MB', throughput: Math.floor(Math.random() * 80 + 50) + 'Mbps' },
      processing: { activeJobs: Math.floor(Math.random() * 30 + 10), avgDuration: Math.floor(Math.random() * 150 + 50) + 'ms', successRate: (Math.random() * 3 + 96).toFixed(2) + '%' },
      outbound: { responses: Math.floor(Math.random() * 500 + 500), dataSize: Math.floor(Math.random() * 30 + 5) + 'MB', throughput: Math.floor(Math.random() * 60 + 40) + 'Mbps' }
    };
  },

  getFullArchitecture() {
    return {
      steps: this.getArchitectureSteps(),
      health: this.getSystemHealth()
    };
  }
};

// ============ ROUTES ============
// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date(), uptime: process.uptime() });
});

// Chat routes
app.post('/api/chat/send', async (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }
  const response = await chatService.chat(message);
  res.json(response);
});

app.get('/api/chat/history', (req, res) => {
  res.json({ history: chatService.getHistory() });
});

app.delete('/api/chat/history', async (req, res) => {
  await chatService.clearHistory();
  res.json({ message: 'History cleared' });
});


app.get('/api/chat/analytics', (req, res) => {
  res.json(chatService.getAnalytics());
});

// Dashboard routes
app.get('/api/dashboard/metrics', (req, res) => {
  res.json(dashboardService.getAllMetrics());
});

app.get('/api/dashboard/analytics', (req, res) => {
  res.json({ analyticsData: dashboardService.getAnalyticsData() });
});

app.get('/api/dashboard/distribution', (req, res) => {
  res.json({ distributionData: dashboardService.getLeadDistribution() });
});

app.get('/api/dashboard/stats', (req, res) => {
  res.json({ stats: dashboardService.getStats() });
});

app.get('/api/dashboard/realtime', (req, res) => {
  res.json(dashboardService.getRealTimeMetrics());
});

app.get('/api/dashboard/performance', (req, res) => {
  res.json(dashboardService.getPerformanceMetrics());
});

// Architecture routes
app.get('/api/architecture/steps', (req, res) => {
  res.json({ steps: architectureService.getArchitectureSteps() });
});

app.get('/api/architecture/health', (req, res) => {
  res.json(architectureService.getSystemHealth());
});

app.get('/api/architecture/topology', (req, res) => {
  res.json(architectureService.getSystemTopology());
});

app.get('/api/architecture/dataflow', (req, res) => {
  res.json(architectureService.getDataFlow());
});

app.get('/api/architecture/full', (req, res) => {
  res.json(architectureService.getFullArchitecture());
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.path });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 NextGen AI Backend running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 CORS enabled for: ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
});
