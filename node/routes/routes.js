import express from 'express';
import { createArticle, getAllArticles, getArticle, updateArticle, deleteArticle } from '../controllers/ArticleController.js';
const router = express.Router()

router.get('/', getAllArticles)
router.get('/:id', getArticle)
router.post('/', createArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)

export default router
