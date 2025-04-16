import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Paper
} from '@mui/material';
import './AuthComponent.css'; // For any custom CSS if needed

const AuthComponent = () => {
  const [authMethod, setAuthMethod] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [oauthCredentials, setOauthCredentials] = useState({
    username: '',
    password: ''
  });
  const [jwtCredentials, setJwtCredentials] = useState({
    username: '',
    password: '',
    algorithm: 'HS256'
  });

  const handleAuthMethodChange = (event) => {
    setAuthMethod(event.target.value);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleOauthChange = (event) => {
    const { name, value } = event.target;
    setOauthCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJwtChange = (event) => {
    const { name, value } = event.target;
    setJwtCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on auth method
    console.log({
      authMethod,
      apiKey,
      oauthCredentials,
      jwtCredentials
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Paper elevation={3} className="w-full max-w-md p-6">
        <Typography variant="h5" component="h1" className="text-center mb-6">
          Authentication
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-4">
            <InputLabel id="auth-method-label">Authentication Method</InputLabel>
            <Select
              labelId="auth-method-label"
              id="auth-method"
              value={authMethod}
              label="Authentication Method"
              onChange={handleAuthMethodChange}
            >
              <MenuItem value="">Select a method</MenuItem>
              <MenuItem value="apiKey">API Key</MenuItem>
              <MenuItem value="oauth">OAuth</MenuItem>
              <MenuItem value="jwt">JWT</MenuItem>
            </Select>
          </FormControl>

          {/* API Key Fields */}
          {authMethod === 'apiKey' && (
            <Box className="mb-4">
              <TextField
                fullWidth
                label="API Key"
                variant="outlined"
                value={apiKey}
                onChange={handleApiKeyChange}
                className="mb-4"
              />
            </Box>
          )}

          {/* OAuth Fields */}
          {authMethod === 'oauth' && (
            <Box className="mb-4">
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={oauthCredentials.username}
                onChange={handleOauthChange}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={oauthCredentials.password}
                onChange={handleOauthChange}
              />
            </Box>
          )}

          {/* JWT Fields */}
          {authMethod === 'jwt' && (
            <Box className="mb-4">
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={jwtCredentials.username}
                onChange={handleJwtChange}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={jwtCredentials.password}
                onChange={handleJwtChange}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Algorithm"
                variant="outlined"
                name="algorithm"
                value={jwtCredentials.algorithm}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          )}

          {authMethod && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              Authenticate
            </Button>
          )}
        </form>
      </Paper>
    </div>
  );
};

export default AuthComponent;
