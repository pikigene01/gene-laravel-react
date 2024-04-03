import { RouterProvider } from "react-router-dom";
import router from "./router";
import AppProvider from "./providers/AppProvider";
import ToastNotifications from "@/components/ToastNotifications";

function App() {
  return (
    <div className="block relative">
      <AppProvider>
        <RouterProvider router={router} />
        <ToastNotifications />
      </AppProvider>
    </div>
  );
}

export default App;
