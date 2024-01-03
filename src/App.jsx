import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import View from "./pages/View";
import Dealers from "./pages/Dealers";
import Ambassador from "./pages/Ambassador";
import Warranty from "./pages/Warranty";
import SalesRep from "./pages/SalesRep";
import DealerDetails from "./pages/DealerDetails";
import Editor from "./pages/Editor";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/add",
    element: (
      <Layout>
        <Add />
      </Layout>
    ),
  },
  {
    path: "/view",
    element: (
      <Layout>
        <View />
      </Layout>
    ),
  },

  {
    path: "/dealers",
    element: (
      <Layout>
        <Dealers />
      </Layout>
    ),
  },
  {
    path: "/ambassador",
    element: (
      <Layout>
        <Ambassador />
      </Layout>
    ),
  },
  {
    path: "/warranty",
    element: (
      <Layout>
        <Warranty />
      </Layout>
    ),
  },
  {
    path: "/salesrep",
    element: (
      <Layout>
        <SalesRep />
      </Layout>
    ),
  },
  {
    path: "/dealerdetails",
    element: (
      <Layout>
        <DealerDetails />
      </Layout>
    ),
  },
  {
    path: "/editor",
    element: <Editor />,
  },
];

const App = () => {
  return (
    <Router>
      <Routes >
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
