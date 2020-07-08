import React, { Component } from 'react';
// eslint-disable-next-line
import Layout from './component/Layout/Layout';
// eslint-disable-next-line
import BurgerBuilder from './container/BurgerBuilder(Card)/BurgerBuilder(card)';

import NavBar from './container/NavBar/NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './container/Component/home';
import Post from './container/Component/post';

 
class App extends Component {
  render()
  {
    return (
      <BrowserRouter>
          
          <div>
                <NavBar/>
                
                  <Switch>
                        <Route  path="/:post_id" component={Post}/>
                        < Route exact path="/" component={Home}/>
                  </Switch>
          {/* <Layout>
            <BurgerBuilder/>
          </Layout> */}

          </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
