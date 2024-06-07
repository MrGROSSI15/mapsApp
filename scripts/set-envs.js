const { writeFileSync, mkdirSync} = require ('fs');
require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const envirenment = {
  mapbox_key : "${process.env['MAPBOX_KEY']}",
  otra: "propiedad"
}
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContent)
