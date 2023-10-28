function newElm(name) {
 let e = document.createElement(name);
 return e;
 }

class FillDrill {
 constructor(srcCode){
 this.root = newElm("div");
 this.srcCode = srcCode;
   this.studentValues = [];
 }
 render(){
 let source = this.srcCode;
 let tvalues = this.trueValues;
 tvalues.forEach((value)=>{
 source = source.replace(/[-].*?[-]/, `<input size=${value.length-2}>`);
 });
     //source = source.replaceAll("\n", "<br>");
 this.root.innerHTML= source;
    // this.root.style.whiteSpace = "pre";
 
let inputs = this.root.querySelectorAll("input");
   for (let i=0; i<inputs.length; i++){
     inputs[i].onchange = (e)=>{
       this.studentValues[i] = e.target.value;
     }
   }
 
 return this.root;

 }
  
  readOnly(){
    let inputs = this.root.querySelectorAll("input");
    let values = this.studentValues;
    for (let i = 0; i<inputs.length; i++){
      inputs[i].value = values[i];
      inputs[i].setAttribute("readonly", true);
    }
  }
 get trueValues(){
 let source = this.srcCode;
 let values = [];
 let pattern = new RegExp("\-.*?\-", "g");
 return source.match(pattern) ;
 
 }
  
  get score(){
    let score = 0;
    let tvals = this.trueValues;
    let svals = this.studentValues;
    tvals.forEach((v, i)=>{
      let val = v.replace("-", "").replace("-", "");
      if (!svals[i]){return}
      score += (val.toLowerCase().trim()==svals[i].toLowerCase().trim())? 1 : 0;
    });
    
    return score
  }
 }

