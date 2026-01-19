import { Router, Request, Response } from 'express';
import chatService from '../services/chatService.js';

const router = Router();

// POST /api/chat/send - Send a message to the AI
router.post('/send', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required and must be a string' });
      return;
    }

    if (message.trim().length === 0) {
      res.status(400).json({ error: 'Message cannot be empty' });
      return;
    }

    const response = await chatService.chat(message);
    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

// GET /api/chat/history - Get conversation history
router.get('/history', (req: Request, res: Response) => {
  try {
    const history = chatService.getHistory();
    res.json({ history });
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

// DELETE /api/chat/history - Clear conversation history
router.delete('/history', (req: Request, res: Response) => {
  try {
    chatService.clearHistory();
    res.json({ message: 'History cleared' });
  } catch (error) {
    console.error('Clear history error:', error);
    res.status(500).json({ error: 'Failed to clear history' });
  }
});

// GET /api/chat/analytics - Get chat analytics
router.get('/analytics', (req: Request, res: Response) => {
  try {
    const analytics = chatService.getAnalytics();
    res.json(analytics);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

export default router;
