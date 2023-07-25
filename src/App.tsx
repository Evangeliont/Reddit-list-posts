import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useToken } from './hooks/useToken';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ModalPost } from './shared/ModalPost';
import { NotFound } from './shared/NotFound';

function AppComponent() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useToken();

  if (!mounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

function AppRouter() {
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="auth" element={<Navigate to="/posts" replace />} />
          <Route path="404" element={<NotFound />} />
          <Route path="posts" element={<CardsList />}>
            <Route path=":id" element={<ModalPost />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
