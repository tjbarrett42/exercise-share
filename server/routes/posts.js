import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// Import from controllers/posts.js to keep router logic clean
router.get('/', getPosts);
router.post('/', createPost)

export default router;