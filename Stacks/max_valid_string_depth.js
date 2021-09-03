depth = (s) => {
  const len = s.length;
  if(len === 0 || len === 1){
    return 0;
  }
  if(!s.includes("(") && !s.includes(")")){
    return 0;
  }
  var i = 0, a = [], r = [];
  while(i != len){
      if(s.charAt(i) === "("){
        a.push("(");
      } else if(s.charAt(i) === ")"){
        r.push(a.length)
        a.pop();
      }
      i++;
  }
  return Math.max(...r)
}

console.log(depth("1*2"))