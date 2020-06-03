## 1.引用计数
**工作原理** javascript垃圾回收机制，某个变量被赋值某个对象时，要给指向的对象的引用计数加1。当变量生命周期结束，被指向对象的引用计数要建1
**优点**
    1. 发现垃圾立即回收
    2. 最大限度减少程序暂停
**缺点**
    1. 无法回收循环引用的对象
    2. 时间开销大

## 2.标记整理算法
    1. 标记出所有需要回收的对象
    2. 把所有的对象都向一端移动
    3. 清理掉端之外的内存

## 3. V8新生代存储区垃圾回收流程
    1. 区域分为两半 一半分配内存，一半用来垃圾回收时将保留的对象复制过来
    2. 新生代对象存活一段时间会被转移到老生代
    3. 新生代 form 复制到 to ，交换空间后会释放内存

## 4. 增量标记算法
    1. 在解决标记清除的长停顿问题，很长时间都在清理垃圾停顿很长时间的情况下
    2. 工作原理： 标记，垃圾回收器识别对象并打标  清理没用的对象

## 5. 代码题1
    1. `let isLastInStock=fp.flowRight(fp.prop('in_stock'),fp.last)
        console.log(isLastInStock(cars))
        `
    2. `let lastName=fp.flowRight(fp.prop('name'),fp.first)
        console.log(lastName(cars))
        `
    3. `let averageDollarValue = fp.flowRight(_average,fp.map(fp.prop('dollar_value')))`
    4. `let _underscore=fp.replace(/\W+/g,'_')
        let sanitizeNames=fp.flowRight(fp.map(fp.flowRight(_underscore,fp.prop('name'))))
        console.log(sanitizeNames(cars))
        `