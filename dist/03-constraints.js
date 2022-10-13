"use strict";
function len(arg) {
    return arg.length;
}
// здесь мы ограничеваем количесто типов у generic c помощю extends
len('12');
len(['2']);
len({ length: 12 });
// len(123);
// len(true);
len({ a: 1, length: 1 });
// object
