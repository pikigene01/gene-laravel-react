import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import RouteLoading from "@/components/RouteLoading";
import Error404 from "@/components/404";
import AppProvider from "./providers/AppProvider";

const Home = React.lazy(() => import("@/pages/Home"));
const Login = React.lazy(() => import("@/pages/Login"));
const Search = React.lazy(() => import("@/pages/Search"));
const Albums = React.lazy(() => import("@/pages/Albums"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AppProvider>
          <RootLayout />
        </AppProvider>
      }
    >
      <Route
        index
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Home />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="/albums"
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Albums />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="/home/:token"
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Home />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="/artists"
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Home />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Login />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <React.Suspense fallback={<RouteLoading />}>
            <AppProvider>
              <Search />
            </AppProvider>
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <AppProvider>
            <Error404 />
          </AppProvider>
        }
      />
    </Route>
  )
);

export default router;
