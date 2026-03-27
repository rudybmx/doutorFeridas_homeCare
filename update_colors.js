const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Fix WhatsApp button to keep it green
content = content.replace(/bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg shadow-emerald-500\/30/g, 'bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg shadow-green-500/30');

// 2. Replace specific "Como funciona" steps
content = content.replace(/border-emerald-400/g, 'border-brand-200');
content = content.replace(/bg-emerald-400/g, 'bg-brand-200');
content = content.replace(/border-t-emerald-400/g, 'border-t-brand-200');
content = content.replace(/text-emerald-600/g, 'text-brand-500');

content = content.replace(/border-emerald-600/g, 'border-brand-500');
content = content.replace(/bg-emerald-600/g, 'bg-brand-500');
content = content.replace(/border-t-emerald-600/g, 'border-t-brand-500');
content = content.replace(/text-emerald-700/g, 'text-brand-700');

content = content.replace(/border-teal-800/g, 'border-brand-700');
content = content.replace(/bg-teal-800/g, 'bg-brand-700');
content = content.replace(/border-t-teal-800/g, 'border-t-brand-700');
content = content.replace(/text-teal-900/g, 'text-brand-900');

// 3. Replace all other emerald/teal with brand colors
content = content.replace(/teal-950/g, 'brand-900');
content = content.replace(/teal-900/g, 'brand-900');
content = content.replace(/teal-800/g, 'brand-700');
content = content.replace(/teal-700/g, 'brand-700');
content = content.replace(/teal-600/g, 'brand-500');
content = content.replace(/teal-500/g, 'brand-500');
content = content.replace(/teal-50/g, 'brand-50');

content = content.replace(/emerald-600/g, 'brand-500');
content = content.replace(/emerald-500/g, 'brand-500');
content = content.replace(/emerald-400/g, 'brand-200');
content = content.replace(/emerald-300/g, 'brand-200');
content = content.replace(/emerald-100/g, 'brand-50');
content = content.replace(/emerald-50/g, 'brand-50');

// 4. Replace the blue underline
content = content.replace(/text-blue-600 underline/g, 'text-brand-500 underline');

fs.writeFileSync('src/App.tsx', content);
console.log("Colors updated in App.tsx");
