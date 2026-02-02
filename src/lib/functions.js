export function generateID(){
    const chars = 'abcdefghijklmnopqrstuvwxyz'; 
    const r = () => chars.charAt(Math.floor(Math.random() * chars.length));
    const rNum = (n) => [...Array(n)].map(() => r()).join('');
    return `${rNum(3)}-${rNum(4)}-${rNum(3)}`;
}