console.log('code1');
console.time('timeout 0');
setTimeout(() => {
    console.log('setTimeout 0');
    console.timeEnd('timeout 0');
}, 0)

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
})

console.log('code3');
process.nextTick(() => {
    console.log('process.netTick');
})

for (let i = 0; i < 1000; i++) {

}