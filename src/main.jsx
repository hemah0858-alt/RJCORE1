import { StartClient } from "@tanstack/react-start/client";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import { startInstance } from "./start";

hydrateRoot(
  document,
  <StrictMode>
    <StartClient startInstance={startInstance} />
  </StrictMode>,
);