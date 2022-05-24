var Direct;
(function (Direct) {
    Direct[Direct["Up"] = 1] = "Up";
    Direct[Direct["Down"] = 2] = "Down";
    Direct[Direct["Left"] = 3] = "Left";
    Direct[Direct["Right"] = 4] = "Right";
})(Direct || (Direct = {}));
console.log(Direct, Direct[Direct.Up]);
var Enum1;
(function (Enum1) {
    Enum1["A"] = "A";
    Enum1["B"] = "lijingmin";
    Enum1["C"] = "test";
    Enum1["D"] = "test";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.D, Enum1);
