import { Router, Request, Response } from 'express';
import dashboardService from '../services/dashboardService.js';

const router = Router();

// GET /api/dashboard/metrics - Get all dashboard metrics
router.get('/metrics', (req: Request, res: Response) => {
  try {
    const metrics = dashboardService.getAllMetrics();
    res.json(metrics);
  } catch (error) {
    console.error('Metrics error:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

// GET /api/dashboard/analytics - Get analytics data
router.get('/analytics', (req: Request, res: Response) => {
  try {
    const data = dashboardService.getAnalyticsData();
    res.json({ analyticsData: data });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// GET /api/dashboard/distribution - Get lead distribution
router.get('/distribution', (req: Request, res: Response) => {
  try {
    const data = dashboardService.getLeadDistribution();
    res.json({ distributionData: data });
  } catch (error) {
    console.error('Distribution error:', error);
    res.status(500).json({ error: 'Failed to fetch distribution' });
  }
});

// GET /api/dashboard/stats - Get performance stats
router.get('/stats', (req: Request, res: Response) => {
  try {
    const stats = dashboardService.getStats();
    res.json({ stats });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// GET /api/dashboard/realtime - Get real-time metrics
router.get('/realtime', (req: Request, res: Response) => {
  try {
    const metrics = dashboardService.getRealTimeMetrics();
    res.json(metrics);
  } catch (error) {
    console.error('Real-time metrics error:', error);
    res.status(500).json({ error: 'Failed to fetch real-time metrics' });
  }
});

// GET /api/dashboard/performance - Get system performance
router.get('/performance', (req: Request, res: Response) => {
  try {
    const performance = dashboardService.getPerformanceMetrics();
    res.json(performance);
  } catch (error) {
    console.error('Performance error:', error);
    res.status(500).json({ error: 'Failed to fetch performance metrics' });
  }
});

export default router;
