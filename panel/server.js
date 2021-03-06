const write = require('./writeFS.js');
const { spawn } = require('child_process');
const child = spawn('dir', {shell: true});

child.stdout.on('data', (data) => {
  write(data)
  console.log(`stdout: ${data}`);
});
  
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
  
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


