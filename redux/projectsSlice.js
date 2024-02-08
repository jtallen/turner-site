import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: [
    {
      title: 'Sludge Snap',
      imgUrl: '/sludge-snap-wireframe.png',
      gitHubUrl: 'https://github.com/jtallen/sludge-snap',
      siteUrl: 'https://sludge-snap-web-app.vercel.app/',
      description:
        'A mobile-first web app that uses realtime image recognition and machine learning in order to provide actionable information to sanitation workers in the field.',
    },
    {
      title: 'Portfolio Site',
      imgUrl: '/turner-site-screenshot.png',
      gitHubUrl: 'https://github.com/jtallen/turner-site',
      siteUrl: 'https://www.turnerallen.dev/',
      description:
        'My personal site, created to help me become a better React Developer and have fun playing around with different libraries.',
    },
  ],
  reducers: {},
});

export default projectsSlice.reducer;
