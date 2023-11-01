import { ChakraProvider } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./style/global.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import CustomTheme from "./style/customTheme";
import NavBar from "./components/navbar";
import EntirePage from "./components/entirePage";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={CustomTheme}>
          <EntirePage>
            <NavBar />
            <Outlet />
          </EntirePage>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
