import { themeClass } from "@pkg/a";
import { createRoot } from "react-dom/client";
import { Pages } from "./pages";

document.getElementsByTagName("body")[0].classList.add(themeClass);

const root = createRoot(document.getElementById("root")!);

root.render(<Pages />);
