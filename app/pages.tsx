import { JSX } from "@emotion/react/jsx-runtime";
import { Page } from "./interfaces";

const pages: Record<string, Page> = {
    home: {
        heading: "",
        component: Home,
    },
    servers: {
        heading: "",
        component: Servers,
    },
    config: {
        heading: "",
        component: Config,
    },
    proxy: {
        heading: "",
        component: Proxy,
    },
    loader: {
        heading: "",
        component: Loader,
    }
};
export default pages;

export function Home(): JSX.Element {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            flexDirection: "column",
            gap: "10px"
        }}>
            home
        </div>
    );
}
export function Servers(): JSX.Element {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            flexDirection: "column",
            gap: "10px"
        }}>
            servers
        </div>
    );
}
export function Config(): JSX.Element {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            flexDirection: "column",
            gap: "10px"
        }}>
            config
        </div>
    );
}
export function Proxy(): JSX.Element {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            flexDirection: "column",
            gap: "10px"
        }}>
            proxy
        </div>
    );
}
export function Loader(): JSX.Element {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            flexDirection: "column",
            gap: "10px"
        }}>
            loader :3
        </div>
    );
}