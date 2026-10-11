import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../lib/theme-storage.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const api = {};
runInNewContext(outputText, { exports: api });

test("accepts saved light and dark themes", () => {
  assert.equal(api.readTheme(() => "light"), "light");
  assert.equal(api.readTheme(() => "dark"), "dark");
});
test("missing or invalid values fall back to dark", () => {
  for (const value of [null, "", "system", "unexpected-class"]) assert.equal(api.readTheme(() => value), "dark");
});
test("blocked storage does not prevent initial rendering", () => {
  assert.equal(api.readTheme(() => { throw new Error("Storage blocked"); }), "dark");
});
test("persists the chosen valid theme", () => {
  let saved;
  assert.equal(api.persistTheme(value => { saved = value; }, "light"), true);
  assert.equal(saved, "light");
});
test("write failure does not crash the theme toggle", () => {
  assert.equal(api.persistTheme(() => { throw new Error("Quota or permission"); }, "dark"), false);
});
