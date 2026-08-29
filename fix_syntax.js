const fs = require('fs');
let text = fs.readFileSync('src/data/blog.ts', 'utf8');
text = text.replace(/  }\r?\n\r?\n  },\r?\n  \{/g, '  },\n  {');
fs.writeFileSync('src/data/blog.ts', text, 'utf8');
console.log("Syntax fixed!");
