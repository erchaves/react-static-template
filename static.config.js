import React from 'react';

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
