import { Router, Request, Response } from 'express';
import architectureService from '../services/architectureService.js';

const router = Router();

// GET /api/architecture/steps - Get architecture steps
router.get('/steps', (req: Request, res: Response) => {
  try {
    const steps = architectureService.getArchitectureSteps();
    res.json({ steps });
  } catch (error) {
    console.error('Steps error:', error);
    res.status(500).json({ error: 'Failed to fetch architecture steps' });
  }
});

// GET /api/architecture/health - Get system health
router.get('/health', (req: Request, res: Response) => {
  try {
    const health = architectureService.getSystemHealth();
    res.json(health);
  } catch (error) {
    console.error('Health error:', error);
    res.status(500).json({ error: 'Failed to fetch system health' });
  }
});

// GET /api/architecture/topology - Get system topology
router.get('/topology', (req: Request, res: Response) => {
  try {
    const topology = architectureService.getSystemTopology();
    res.json(topology);
  } catch (error) {
    console.error('Topology error:', error);
    res.status(500).json({ error: 'Failed to fetch system topology' });
  }
});

// GET /api/architecture/dataflow - Get data flow information
router.get('/dataflow', (req: Request, res: Response) => {
  try {
    const dataflow = architectureService.getDataFlow();
    res.json(dataflow);
  } catch (error) {
    console.error('Data flow error:', error);
    res.status(500).json({ error: 'Failed to fetch data flow' });
  }
});

// GET /api/architecture/full - Get complete architecture
router.get('/full', (req: Request, res: Response) => {
  try {
    const architecture = architectureService.getFullArchitecture();
    res.json(architecture);
  } catch (error) {
    console.error('Full architecture error:', error);
    res.status(500).json({ error: 'Failed to fetch full architecture' });
  }
});

export default router;
