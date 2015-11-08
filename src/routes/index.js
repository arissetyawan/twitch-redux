import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import GamesView              from 'views/GamesView';
import ChannelView              from 'views/ChannelView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='games' component={GamesView} />
    <Route path='channels/:channelName' component={ChannelView} />
  </Route>
);
