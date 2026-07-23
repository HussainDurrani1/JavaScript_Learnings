const currDate = new Date();

const now = Date.now(); // 1783933818463

const date = new Date(now);

console.log('new Date().getTime(): ', new Date().getTime())
console.log('Date(): ', Date());
console.log('now = Date.now(): ', now);
console.log(`new Date(now): ${date}`);

console.log(now.toLocaleString());

const newNow = new Date(now);
console.log('new Date(now): ', newNow);

const day = 24 * 60 * 60 * 1000;
const tomorrow = new Date(now + day);
console.log('tomorrow: ', tomorrow);


console.log('new Date(): ', currDate);
console.log('toString(): ', currDate.toString());
console.log('${currDate}: ', `${currDate}`);
console.log('LocaleString: ', currDate.toLocaleString());
console.log('LocaleString: ', currDate.toLocaleString('en-GB'));
console.log('LocaleString: ', currDate.toLocaleString('en-GB', { hour12: true }));
console.log('LocaleTimeString: ', currDate.toLocaleTimeString());
console.log('LocaleDateString: ', currDate.toLocaleDateString());

console.log('toString().toLocaleString(): ', currDate.toString().toLocaleString());

console.log('getFullYear(): ', currDate.getFullYear());
console.log('getMonth(): ', currDate.getMonth());
console.log('getDate(): ', currDate.getDate());
console.log('getDay(): ', currDate.getDay());
console.log('getHours(): ', currDate.getHours());
console.log('getMinutes(): ', currDate.getMinutes());
console.log('getSeconds(): ', currDate.getSeconds());
console.log('getMilliseconds(): ', currDate.getMilliseconds());
console.log('getTime(): ', currDate.getTime());
console.log('getTimezoneOffset(): ', currDate.getTimezoneOffset());
console.log('toUTCString(): ', currDate.toUTCString());

const oneDay = 24 * 60 * 60 * 1000;
const tomorrow2 = new Date(currDate.getTime() + oneDay);
console.log('\ntomorrow: ', tomorrow2.toLocaleDateString());

console.log('Time Zone Offset: ', currDate.getTimezoneOffset() / -60, 'hours');
console.log('2006-02-17', new Date('2006/02/17').toString());
console.log('2006/02/17', new Date('2006-02-17').toString());

console.log(Date.parse('2006-02-17'));