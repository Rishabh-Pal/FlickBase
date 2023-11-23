import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loader from './utils/loader';
import MainLayout from './hoc/mainLayout';
import AuthGuard from './hoc/authGuard';

import { useDispatch, useSelector } from 'react-redux';
import { isAuthUser } from './store/actions/users_actions';

import Home from './components/home';
import Header from './components/navigation/header';
import Auth from './components/auth';
import Dashboard from './components/dashboard';
import Profile from './components/dashboard/profile';
import Articles from './components/dashboard/articles';
import AddArticle from './components/dashboard/articles/add';
import EditArticle from './components/dashboard/articles/edit';
import Article from './components/articles/article';

const Routers = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(isAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <MainLayout>
          <Routes>
            <Route
              path="/dashboard/articles/edit/:id"
              element={<AuthGuard component={EditArticle} isPrivate={true} />}
            />
            <Route
              path="/dashboard/articles/add"
              element={<AuthGuard component={AddArticle} isPrivate={true} />}
            />
            <Route
              path="/dashboard/articles"
              element={<AuthGuard component={Articles} isPrivate={true} />}
            />
            <Route
              path="/dashboard/profile"
              element={<AuthGuard component={Profile} isPrivate={true} />}
            />
            <Route
              path="/dashboard"
              element={<AuthGuard component={Dashboard} isPrivate={true} />}
            />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      )}
    </BrowserRouter>
  );
};

export default Routers;
