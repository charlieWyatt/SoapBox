import express from 'express';
import { tweetService } from '../services/tweetService';

const router = express.Router();

router.get('/', async (req, res) => {
  const tweets = await tweetService.getAllTweets();
  res.json(tweets);
});

router.get('/:id', async (req, res) => {
  const tweet = await tweetService.getTweetById(req.params.id);
  res.json(tweet);
});

router.post('/', async (req, res) => {
  const newTweet = await tweetService.createTweet(req.body);
  res.json(newTweet);
});

router.put('/:id', async (req, res) => {
  const updatedTweet = await tweetService.updateTweet(req.params.id, req.body);
  res.json(updatedTweet);
});

router.delete('/:id', async (req, res) => {
  await tweetService.deleteTweet(req.params.id);
  res.json({ message: 'Tweet deleted' });
});

export default router;