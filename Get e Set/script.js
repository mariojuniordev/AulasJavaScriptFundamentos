var _b = 5;

var myObj = {
  a: 2,
  get b(){
    return _b;
  },
  set b(value){
    if(value % 2 === 0){
      _b = value * 2;
    }

  }
}