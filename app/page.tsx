"use client";
import Image from "next/image";
import { useState } from "react";
import { Page } from "./interfaces";
import pages from "./pages";

export default function Home() {
    const [page, setPage] = useState<string>('home');

    function SideNavItem({title, icon, page}: {title: string, icon: string, page: string}) {
        return (
            <div className="sn-item" onClick={() => setPage(page)}>
                <i className={icon}></i>
                {title}
            </div>
        );
    }

    return (
        <main>
            <div className="basic nav">
                <img src="logo.png" />
                <span><b>WebMC</b> Launcher</span>
            </div>
            <div className="basic full">
                <div className="side-nav">
                    <SideNavItem title="Home" icon="fa-solid fa-home" page={'home'} />
                    <SideNavItem title="Servers" icon="fa-solid fa-server" page={'servers'} />
                    <SideNavItem title="Config" icon="fa-solid fa-gear" page={'config'} />
                    <SideNavItem title="Proxy" icon="fa-solid fa-globe-wifi" page={'proxy'} />
                    <SideNavItem title="Loader" icon="fa-solid fa-refresh" page={'loader'} />
                </div>
                <div className="main-content">
                    <b id="page-title">{pages[page].heading}</b>
                    {pages[page].component()}
                </div>
            </div>
        </main>
    );
}