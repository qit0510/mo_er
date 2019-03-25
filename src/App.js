import React, {Component} from 'react';
import store from './store/index';
import {Provider} from 'react-redux';
import history from './history';
import {Route, Switch, Router} from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import MainFooter from './components/footer/MainFooter';
import HomePage from './pages/index/index';
import Details from './pages/details/details';
import ArtList from './pages/artisan/artisan';
import TagArtList from './pages/tagArtisan/tagArtisan';
import Login from './components/Login/LoginPage';
import Register from './components/Login/Register';
import ArtCreate from './pages/articleCreate/ArticleCreate';
import ArticleEdit from './pages/articleEdit/ArticleEdit';
import Article from './pages/artisan/artisan';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: '',
      tags: ''
    }
  }
  componentDidMount() {
    axios.get('/api/parent').then((res) => {
      this.setState({columns: res.data});
    }).catch((errors) => {
      console.log(errors)
    });
    axios.get('/api/tag').then((res) => {
      this.setState({tags: res.data});
    }).catch((errors) => {
      console.log(errors)
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/" render={() => {
              return (
                <div className="App">
                  <MainHeader/>
                  <div style={{marginTop:33}}>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/details/:id" component={Details}/>
                    <Route exact path="/artlist" component={ArtList}/>
                    <Route exact path="/artcreate" component={ArtCreate}/>
                    <Route exact path="/article/:id/edit" component={ArticleEdit}/>
                    <Route exact path="/communication" component={HomePage}/>
                    {
                      this.state.columns && this.state.columns.map((item) => {
                        if (item.column.length !== 0) {
                          return (
                            item.column.map((children) => {
                              return (
                                <Route key={'children' + children.id} exact path={"/" + item.remark + "/" + children.remark} component={Article}/>
                              );
                            })
                          )
                        } else {
                          return (
                            <Route key={item.id} exact path={"/" + item.remark} component={Article}/>
                          );
                        }
                      })
                    };
                    {
                      this.state.tags && this.state.tags.map((item) => {
                        return (
                          <Route key={item.id} exact path={'/tag/' + item.remark} component={TagArtList}/>
                        )
                      })
                    }
                  </div>
                  <MainFooter/>
                </div>
              );
            }}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

