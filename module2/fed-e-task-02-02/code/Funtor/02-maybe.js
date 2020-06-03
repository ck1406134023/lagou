// MayBe 函子
class MayBe{
    static of (value){
        return new Maybe(value)
    }
    constructor(value){
        this._vaule=value
    }
    map(fn){
        return this.isNothing()?MayBe.of(null):Maybe.of(fn(this._vaule))
    }

    isNothing() {
        return this._value === undefined || this._value === null
    }
}

let r=Maybe.of('Hello World')
    .map(x=>x.toUpperCase())

console.log(r)