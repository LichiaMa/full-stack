export class MyVue {
  constructor(options) {
    this.$options = options || {};
    this.$data = options.data || {};

    Object.keys(this.$data).forEach(key=>{
      Object.defineProperty(this,key,{
        configurable: false,
        enumerable: true,
        get() {
          return this.$data[key]
        },
        set(newVal) {
          this.$data[key] = newVal;
        }
      })
    })
  }

  
}

