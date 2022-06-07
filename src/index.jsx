import { createRoot } from "react-dom/client";
import React from "react";
const root = createRoot(document.querySelector("#app")); // createRoot(container!) if you use TypeScript
root.render(<h1>Hola Platzi!</h1>);
