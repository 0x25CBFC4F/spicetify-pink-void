const fs = require("fs");
const path = require("path");

const themeName = "p1nk v01d";
const themeDir = path.join(process.env.APPDATA, "spicetify", "Themes", themeName);
const srcDir = path.join(__dirname, "..");
const files = ["color.ini", "user.css"];

fs.mkdirSync(themeDir, { recursive: true });

for (const file of files) {
  const src = path.join(srcDir, file);
  const dest = path.join(themeDir, file);
  fs.copyFileSync(src, dest);
  console.log(`  ${file} -> ${dest}`);
}

console.log(`\n  Deployed to ${themeDir}`);
