import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = path.join(__dirname, '..', '..', 'public','html');

router.get('/', (req, res) => res.sendFile(path.join(base, 'index.html')));
router.get('/index', (req, res) => res.sendFile(path.join(base, 'index.html')));
router.get('/login', (req, res) => res.sendFile(path.join(base, 'login.html')));
router.get('/dashboard', (req, res) => res.sendFile(path.join(base, 'dashboard.html')));
router.get('/register', (req, res) => res.sendFile(path.join(base, 'register.html')));

export default router;
