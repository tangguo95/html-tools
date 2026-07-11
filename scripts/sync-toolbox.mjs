import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "toolbox.html");
const targetDir = resolve(root, "public");
const target = resolve(targetDir, "toolbox.html");

await mkdir(targetDir, { recursive: true });
await copyFile(source, target);
console.log(`Synced ${source} -> ${target}`);
