
// Check if the parent project has a package.json file with a script by this name.
// If it does, execute the script.

const path = require('path')
const { execSync } = require('child_process')
const parentProject = require('read-pkg-up').sync({cwd: path.join(process.cwd(), '..')})
const scriptName = 'postinstall-package-postinstall-test'

if (
  parentProject && 
  parentProject.packageJson && 
  parentProject.packageJson.scripts && 
  parentProject.packageJson.scripts[scriptName]
) {
  console.log(`npm run ${scriptName}`)
  const result = execSync(`npm run ${scriptName}`, { cwd: path.dirname(parentProject.path) })
  console.log(result.toString())
}