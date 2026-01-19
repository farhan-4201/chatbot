// Architecture Service - Provides system architecture information
export interface ArchitectureStep {
  id: number;
  label: string;
  description: string;
  component: string;
  status: 'healthy' | 'warning' | 'critical';
  latency: number;
}

export interface SystemArchitecture {
  steps: ArchitectureStep[];
  health: {
    overall: 'healthy' | 'warning' | 'critical';
    components: number;
    online: number;
  };
}

export class ArchitectureService {
  // Get architecture steps
  getArchitectureSteps(): ArchitectureStep[] {
    return [
      {
        id: 1,
        label: 'Edge Web Layer',
        description: 'Custom widget injection & client-side rendering',
        component: 'Globe',
        status: 'healthy',
        latency: 2
      },
      {
        id: 2,
        label: 'Interface Core',
        description: 'WebSocket transmission & real-time sync',
        component: 'MessageSquare',
        status: 'healthy',
        latency: 4
      },
      {
        id: 3,
        label: 'Neural Nexus',
        description: 'GPT-4o + Vector RAG embeddings',
        component: 'BrainCircuit',
        status: 'healthy',
        latency: 145
      },
      {
        id: 4,
        label: 'Orchestrator',
        description: 'Node.js compute cluster & load balancing',
        component: 'Server',
        status: 'healthy',
        latency: 8
      },
      {
        id: 5,
        label: 'Persistence',
        description: 'MongoDB Atlas & distributed database',
        component: 'Database',
        status: 'healthy',
        latency: 15
      }
    ];
  }

  // Get system health
  getSystemHealth() {
    const steps = this.getArchitectureSteps();
    const totalComponents = steps.length;
    const onlineComponents = steps.filter(s => s.status === 'healthy').length;
    
    let overall: 'healthy' | 'warning' | 'critical' = 'healthy';
    if (onlineComponents < totalComponents) {
      overall = onlineComponents < totalComponents / 2 ? 'critical' : 'warning';
    }

    return {
      overall,
      components: totalComponents,
      online: onlineComponents,
      uptime: 99.98,
      lastCheck: new Date()
    };
  }

  // Get detailed system topology
  getSystemTopology() {
    return {
      name: 'NextGen AI Neural Network',
      version: '4.0',
      nodes: this.getArchitectureSteps(),
      connections: [
        { from: 0, to: 1, bandwidth: '10Gbps', latency: 2 },
        { from: 1, to: 2, bandwidth: '5Gbps', latency: 4 },
        { from: 2, to: 3, bandwidth: '8Gbps', latency: 8 },
        { from: 3, to: 4, bandwidth: '15Gbps', latency: 15 }
      ],
      regions: ['us-east-1', 'eu-west-1', 'ap-southeast-1'],
      redundancy: 'multi-region active-active'
    };
  }

  // Get data flow information
  getDataFlow() {
    return {
      inbound: {
        requests: Math.floor(Math.random() * 1000 + 500),
        dataSize: Math.floor(Math.random() * 50 + 10) + 'MB',
        throughput: Math.floor(Math.random() * 100 + 50) + 'Mbps'
      },
      processing: {
        activeJobs: Math.floor(Math.random() * 50 + 10),
        avgDuration: Math.floor(Math.random() * 200 + 50) + 'ms',
        successRate: (Math.random() * 5 + 95).toFixed(2) + '%'
      },
      outbound: {
        responses: Math.floor(Math.random() * 1000 + 500),
        dataSize: Math.floor(Math.random() * 40 + 5) + 'MB',
        throughput: Math.floor(Math.random() * 80 + 40) + 'Mbps'
      }
    };
  }

  // Get complete architecture information
  getFullArchitecture(): SystemArchitecture {
    return {
      steps: this.getArchitectureSteps(),
      health: this.getSystemHealth()
    };
  }
}

export default new ArchitectureService();
