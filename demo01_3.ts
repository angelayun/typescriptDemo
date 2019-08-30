enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
// 枚举是从0开始计数的而不是从1
enum REN1{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN1.yao)  //返回了妖 这个字

