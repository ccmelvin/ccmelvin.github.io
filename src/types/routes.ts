import React from 'react';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import LiveStream from '../pages/LiveStream/LiveStream';
import Gallery from '../pages/Gallery/Gallery';
import ContactForm from '../pages/ContactForm/ContactForm';

export interface RouteConfig {
  path: string;
  exact?: boolean;
  component: React.FC;
  private?: boolean;
  redirectTo?: string;
}

export interface Routes {
  [key: string]: RouteConfig;
}

export const routes: Routes = {
  home: {
    path: '/',
    exact: true,
    component: Home,
  },
  about: {
    path: '/about',
    component: AboutMe,
  },
  liveStream: {
    path: '/live-stream',
    component: LiveStream,
  },
  gallery: {
    path: '/gallery',
    component: Gallery,
  },
  contact: {
    path: '/contact',
    component: ContactForm,
  },
  // Example of a future private route
  // dashboard: {
  //   path: '/dashboard',
  //   component: Dashboard,
  //   private: true,
  //   redirectTo: '/login',
  // },
};
