"use strict";
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
console.log(REN.yao); //返回了2，这是索引index，跟数组很想。
// 枚举是从0开始计数的而不是从1
var REN1;
(function (REN1) {
    REN1["nan"] = "\u7537";
    REN1["nv"] = "\u5973";
    REN1["yao"] = "\u5996";
})(REN1 || (REN1 = {}));
console.log(REN1.yao); //返回了妖 这个字
