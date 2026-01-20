// API utility for communicating with backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Login failed');
      }
      return response.json();
    }
  },

  // Chat endpoints
  chat: {
    send: async (message: string) => {
      const response = await fetch(`${API_BASE_URL}/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      if (!response.ok) throw new Error('Failed to send message');
      return response.json();
    },

    sendLive: async (message: string, token: string) => {
      const response = await fetch(`${API_BASE_URL}/chat/live`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message })
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || err.error || 'Failed to send live message');
      }
      return response.json();
    },

    getHistory: async () => {
      const response = await fetch(`${API_BASE_URL}/chat/history`);
      if (!response.ok) throw new Error('Failed to fetch history');
      return response.json();
    },

    clearHistory: async () => {
      const response = await fetch(`${API_BASE_URL}/chat/history`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to clear history');
      return response.json();
    },

    getAnalytics: async () => {
      const response = await fetch(`${API_BASE_URL}/chat/analytics`);
      if (!response.ok) throw new Error('Failed to fetch analytics');
      return response.json();
    }
  },

  // Dashboard endpoints
  dashboard: {
    getMetrics: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/metrics`);
      if (!response.ok) throw new Error('Failed to fetch metrics');
      return response.json();
    },

    getAnalytics: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/analytics`);
      if (!response.ok) throw new Error('Failed to fetch analytics');
      return response.json();
    },

    getDistribution: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/distribution`);
      if (!response.ok) throw new Error('Failed to fetch distribution');
      return response.json();
    },

    getStats: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      return response.json();
    },

    getRealtime: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/realtime`);
      if (!response.ok) throw new Error('Failed to fetch realtime');
      return response.json();
    },

    getPerformance: async () => {
      const response = await fetch(`${API_BASE_URL}/dashboard/performance`);
      if (!response.ok) throw new Error('Failed to fetch performance');
      return response.json();
    }
  },

  // Architecture endpoints
  architecture: {
    getSteps: async () => {
      const response = await fetch(`${API_BASE_URL}/architecture/steps`);
      if (!response.ok) throw new Error('Failed to fetch architecture steps');
      return response.json();
    },

    getHealth: async () => {
      const response = await fetch(`${API_BASE_URL}/architecture/health`);
      if (!response.ok) throw new Error('Failed to fetch health');
      return response.json();
    },

    getTopology: async () => {
      const response = await fetch(`${API_BASE_URL}/architecture/topology`);
      if (!response.ok) throw new Error('Failed to fetch topology');
      return response.json();
    },

    getDataFlow: async () => {
      const response = await fetch(`${API_BASE_URL}/architecture/dataflow`);
      if (!response.ok) throw new Error('Failed to fetch dataflow');
      return response.json();
    },

    getFull: async () => {
      const response = await fetch(`${API_BASE_URL}/architecture/full`);
      if (!response.ok) throw new Error('Failed to fetch full architecture');
      return response.json();
    }
  }
};

export default api;
