# Afriva Backend - Railway Deployment

## 🚀 Railway Deployment Guide

### Prerequisites
- Railway account
- MongoDB database (MongoDB Atlas recommended)
- Environment variables configured

### Environment Variables Required

Set these in your Railway project:

#### Required:
- `MONGO_URL` - MongoDB connection string
- `TOKEN_SECRET` - Secret key for JWT tokens
- `HMAC_VERIFICATION_CODE_SECRET` - Secret key for HMAC verification codes
- `NODE_CODE_SENDING_EMAIL_ADDRESS` - Gmail address for sending emails
- `NODE_CODE_SENDING_EMAIL_PASSWORD` - Gmail app password

#### Optional:
- `PORT` - Server port (Railway sets this automatically)
- `NODE_ENV` - Environment (set to 'production')
- `FRONTEND_URL` - Your frontend domain for CORS

### Deployment Steps

1. **Connect your GitHub repository to Railway**
2. **Set environment variables** in Railway dashboard
3. **Deploy** - Railway will automatically run `npm install` and `npm start`

### Health Check

The server provides a health check endpoint at `/` that returns:
```json
{
  "message": "Hello from the server"
}
```

### API Endpoints

- **Auth**: `/api/auth/*`
- **Products**: `/api/products/*`
- **Health Check**: `/`

### Troubleshooting

1. **Database Connection Failed**
   - Check `MONGO_URL` is correct
   - Ensure MongoDB Atlas IP whitelist includes Railway IPs

2. **CORS Errors**
   - Set `FRONTEND_URL` to your frontend domain
   - Check browser console for specific errors

3. **Email Not Sending**
   - Verify Gmail credentials
   - Check if 2FA is enabled (use app password)

### Local Development

```bash
cd backend
npm install
npm run dev
```

### Production Commands

```bash
npm start          # Start production server
npm run populate-db # Populate database with sample data
```
