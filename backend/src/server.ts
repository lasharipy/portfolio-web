import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shahid_portfolio');
    console.log(`MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error('DB Error:', error);
  }
};
connectDB();

// Models
const Project = mongoose.model('Project', new mongoose.Schema({
  title: String, description: String, image: String,
  technologies: [String], githubUrl: String, liveUrl: String,
  category: String, featured: Boolean
}, { timestamps: true }));

const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: String, email: String, subject: String, message: String, read: { type: Boolean, default: false }
}, { timestamps: true }));

// Routes
app.get('/health', (req, res) => res.json({ success: true, message: 'Server OK' }));

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json({ success: true, data: projects });
});

app.post('/api/contacts', async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({ success: true, message: 'Message sent!', data: contact });
});

app.get('/api/stats', async (req, res) => {
  res.json({
    success: true,
    data: { projectsCompleted: 25, yearsOfExperience: 3, happyClients: 18, linesOfCode: 500000 }
  });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
