import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

// See httsp://react-static.js.org for details
export default {
  plugins: [
    "react-static-plugin-sass",
  ],
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      template: 'src/Components/Home',
    },
    {
      path: '404',
      template: 'src/Components/404',
    }
  ],
};
