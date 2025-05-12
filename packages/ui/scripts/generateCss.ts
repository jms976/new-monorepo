import { palette } from '@common/tokens';
import fs from 'fs';
import path from 'path';

/** CSS 변수 생성 */
function generateCssVariables(palette: Record<string, Record<number, string>>): string {
  let rootVars = '';
  let themeVars = '';

  for (const [color, shades] of Object.entries(palette)) {
    for (const [shade, value] of Object.entries(shades)) {
      const varName = `--${color}-${shade}`;
      const themeVarName = `--color-${color}-${shade}`;

      rootVars += `  ${varName}: ${value};\n`;
      themeVars += `  ${themeVarName}: var(${varName});\n`;
    }
  }

  const rootSection = `:root {\n${rootVars}}\n\n`;
  const themeSection = `@theme inline {\n${themeVars}}\n`;

  return rootSection + themeSection;
}

/** 경로 및 파일 쓰기 */
const css = generateCssVariables(palette);
const outputPath = path.resolve(__dirname, '../src/styles/custom.css');

fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // 경로 없으면 생성
fs.writeFileSync(outputPath, css); // 기존 파일 덮어쓰기

console.log(`✅ globals.css regenerated at ${outputPath}`);
