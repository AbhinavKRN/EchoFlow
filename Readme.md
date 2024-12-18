# Voice Cloning Application

A web application that allows users to clone voices using AI technology. Users can upload a voice sample and generate new audio with custom text using the uploaded voice.

## Features

- Voice sample upload (supports WAV and MP3 formats)
- Text-to-speech with cloned voice
- Real-time voice processing status
- Dark/Light theme support
- Secure file storage using Supabase
- Responsive design

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios for API calls
- React Hot Toast for notifications
- Heroicons for icons
- Supabase for storage

### Backend
- Node.js
- Express.js
- Multer for file uploads
- Supabase for storage
- CORS for cross-origin requests
- Helmet for security

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or later)
- npm (v8 or later)
- A Supabase account

## Installation and Setup

1. Clone the repository
```bash
git clone https://github.com/AbhinavKRN/voice-clone-app.git
cd voice-clone-app
```

2. Install dependencies for both client and server
```bash
# Install root dependencies
npm install

# Install all dependencies (client and server)
npm run install-all
```

3. Set up environment variables

For client (.env in client directory):
```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_API_URL=http://localhost:3001
```

For server (.env in server directory):
```env
PORT=3001
NODE_ENV=development
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
CLIENT_URL=http://localhost:3000
```

4. Supabase Setup
- Create a new Supabase project
- Create two storage buckets:
  - `voice-inputs`: for uploaded voice samples
  - `voice-outputs`: for processed voice files
- Set up storage policies for public access
- Copy your project URL and keys to the environment files

## Running the Application

### Development Mode

Run both client and server concurrently:
```bash
npm run dev
```

Or run them separately:

For client:
```bash
cd client
npm start
```

For server:
```bash
cd server
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## API Endpoints

### Voice Processing
- `POST /api/voice/process`: Process voice with text
  ```json
  {
    "voicePath": "string",
    "text": "string"
  }
  ```

### Storage
- `POST /api/storage/upload`: Upload voice file
- `GET /api/storage/file/:fileId`: Get processed voice file

## Project Structure

```
voice-clone-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # Context providers
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   ├── styles/        # CSS files
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   └── package.json
└── package.json           # Root package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Error Handling

The application includes comprehensive error handling for:
- File size limits
- File type validation
- API errors
- Storage errors
- Network issues

## Security Features

- CORS protection
- Helmet security headers
- Rate limiting
- File type validation
- Maximum file size restrictions
- Secure storage policies

## Testing

Run tests for both client and server:
```bash
# Run client tests
cd client && npm test

# Run server tests
cd server && npm test
```

## Deployment

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `cd client && npm run build`
   - Output directory: `client/build`
   - Add environment variables

### Backend (Railway/Heroku)
1. Configure deployment platform
2. Add environment variables
3. Deploy server directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Supabase](https://supabase.io/) for storage solution
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the frontend framework
- [Express](https://expressjs.com/) for the backend framework

## Support

For support, email abhinavv2005@gmail.com or open an issue in the repository.