import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

export default function InfoBox({ weatherData }) {
  if (!weatherData) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          No weather data to display.
        </Typography>
      </Box>
    );
  }

  const {
    city,
    country,
    temp,
    description,
    icon,
    feelsLike,
    humidity,
    pressure,
    wind,
  } = weatherData;

  // Use a relevant larger image URL here; you can swap it with any public image URL
  const largeImageUrl = `https://images.unsplash.com/photo-1705077689363-76d4424a13c7?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 400, borderRadius: 4, boxShadow: 6, overflow: 'hidden' }}>
        {/* Large image on top */}
        <CardMedia
          component="img"
          height="200"
          image={largeImageUrl}
          alt={`${city} weather`}
          sx={{ objectFit: 'cover' }}
        />

        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {city}, {country}
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            {/* Weather icon */}
            <CardMedia
              component="img"
              sx={{ width: 80, height: 80 }}
              image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
            <Box>
              <Typography variant="h4" fontWeight="bold">{temp}°C</Typography>
              <Typography variant="subtitle1" color="text.secondary" textTransform="capitalize">
                {description}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" mb={0.5}>
              <strong>Feels Like:</strong> {feelsLike}°C
            </Typography>
            <Typography variant="body2" mb={0.5}>
              <strong>Humidity:</strong> {humidity}%
            </Typography>
            <Typography variant="body2" mb={0.5}>
              <strong>Pressure:</strong> {pressure} hPa
            </Typography>
            <Typography variant="body2">
              <strong>Wind Speed:</strong> {wind} m/s
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
