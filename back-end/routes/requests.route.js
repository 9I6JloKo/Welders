import express from 'express';
import { createRequest, getRequests, getRequest, changeReuqestStatus }
    from '../controllers/requests.controller.js';

const router = express.Router();
router.get('/', getRequests);
router.get('/:id', getRequest);
router.post('/', createRequest);
router.put('/:id', changeReuqestStatus);

export default router;