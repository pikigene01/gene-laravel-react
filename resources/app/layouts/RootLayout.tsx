import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout(props: { children?: ReactNode }) {
  return (
    <main className="p-4">
      <section className="vbox">
        <Header />
        <section>
          <section className="hbox stretch">
            <Sidebar />
            {props.children}

            <Outlet />
          </section>
        </section>
      </section>
    </main>
  );
}
