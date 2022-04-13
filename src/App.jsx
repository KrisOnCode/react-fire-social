import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './components/user/Home'
import EditProfile from './components/user/EditProfile'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/ui/Navbar'
import Post from './components/post/Post'


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/edit-profile">
              {!user && <Redirect to="/login" />}
              {user && <EditProfile />}
            </Route>
            <Route path="/posts/:id">
                {!user && <Redirect to="/login" />}
                {user && <Post />}
            </Route>



            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <LogIn />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <SignUp />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App