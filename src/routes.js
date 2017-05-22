import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    Widgets,
    About,
    Login,
    Survey,
    NotFound,
    Pagination,
  } from 'containers';

export default () => (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="pagination" component={Pagination}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
