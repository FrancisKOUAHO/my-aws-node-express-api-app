import { Router } from 'express'
import { getPosts, createPost, getPost, deletePost } from '../controllers/post.controller'

const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)

export default router;
