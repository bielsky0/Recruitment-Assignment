import "@testing-library/jest-dom/vitest";

import "@testing-library/jest-dom";

import { vi } from "vitest";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

//@ts-ignore
global.jest = vi;
