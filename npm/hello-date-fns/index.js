// index.js (CommonJS)
const { format, addDays, formatDistanceToNow } = require('date-fns');

const now = new Date();
console.log('Hello — the current date/time is:', format(now, 'yyyy-MM-dd HH:mm:ss'));

const inThreeDays = addDays(now, 3);
console.log('Three days from now:', format(inThreeDays, 'yyyy-MM-dd'));

console.log('Human-friendly:', formatDistanceToNow(inThreeDays, { addSuffix: true }));

