var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false ' + (true && false));
console.log('true || false ' + (true || false));
console.log('!true ' + (!true));

console.log('typof num: ', typeof num);
console.log('typof Packt: ', typeof 'Packt');
console.log('typof true: ', typeof true);
console.log('typof [1,2,3]: ', typeof [1,2,3]);
console.log('typof {name: Pedro}: ', typeof{name:'Pedro'});