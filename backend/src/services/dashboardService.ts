// Dashboard Service - Provides analytics and metrics data
export interface AnalyticsData {
  name: string;
  leads: number;
  conv: number;
}

export interface DashboardMetrics {
  analyticsData: AnalyticsData[];
  distributionData: {
    name: string;
    value: number;
    color: string;
  }[];
  stats: {
    label: string;
    value: string;
    color: string;
  }[];
}

export class DashboardService {
  // Generate analytics data
  getAnalyticsData(): AnalyticsData[] {
    return [
      { name: 'Mon', leads: 400, conv: 240 },
      { name: 'Tue', leads: 300, conv: 139 },
      { name: 'Wed', leads: 600, conv: 380 },
      { name: 'Thu', leads: 800, conv: 490 },
      { name: 'Fri', leads: 500, conv: 390 },
      { name: 'Sat', leads: 400, conv: 200 },
      { name: 'Sun', leads: 300, conv: 150 },
    ];
  }

  // Get lead temperature distribution
  getLeadDistribution() {
    return [
      { name: 'Hot', value: 45, color: '#ff00e5' },
      { name: 'Warm', value: 30, color: '#ff8a00' },
      { name: 'Cold', value: 25, color: '#0066ff' },
    ];
  }

  // Get performance stats
  getStats() {
    return [
      { label: "AI Response Quality", value: "98.4%", color: "text-primary" },
      { label: "Lead Capture Rate", value: "+215%", color: "text-accent" },
      { label: "Avg. Latency", value: "0.12s", color: "text-secondary" },
    ];
  }

  // Get all dashboard metrics
  getAllMetrics(): DashboardMetrics {
    return {
      analyticsData: this.getAnalyticsData(),
      distributionData: this.getLeadDistribution(),
      stats: this.getStats()
    };
  }

  // Get real-time metrics
  getRealTimeMetrics() {
    return {
      activeLeads: Math.floor(Math.random() * 150 + 50),
      conversionRate: (Math.random() * 35 + 15).toFixed(2),
      avgResponseTime: Math.floor(Math.random() * 100 + 12) + 'ms',
      qualityScore: (Math.random() * 8 + 90).toFixed(1),
      timestamp: new Date()
    };
  }

  // Get performance metrics
  getPerformanceMetrics() {
    return {
      cpuUsage: Math.floor(Math.random() * 40 + 20),
      memoryUsage: Math.floor(Math.random() * 50 + 30),
      requestsPerSecond: Math.floor(Math.random() * 200 + 100),
      errorRate: (Math.random() * 0.5).toFixed(3),
      uptime: 99.98
    };
  }
}

export default new DashboardService();
