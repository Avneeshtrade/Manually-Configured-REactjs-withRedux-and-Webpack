// interface IProp {
//     num1 :number;
//     num2 :number;
// };
// export class Statistic{
//     private num1:number;num2:number;
//     constructor(props:IProp){
//         this.num1 = props.num1;
//         this.num2 = props.num2;
//     }
//     sum():number
//     {
//         return this.num1+this.num2;
//     }
// } 
// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//     };
//   }

   
//   function second() {
//     console.log("second(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("second(): called");
//     };
//   }
   
// export class ExampleClass {
//     @first()
//     @second()
//     method() {}
//   }
// //{Statistic,ExampleClass};

const complexObject = [
    {
        a:{b:[1,2],c:"hello"},
        d:[{
            e:"nothing to worry"
        }],
        f:"he",
        g:{
            h:[1,2]
        }
    },
    {
        a:{b:[1,2],c:"hello"},
        d:[{
            e:"nothing to worry"
        }],
        f:"he",
        g:{
            h:[1,2]
        }
    }
]
lst = []
const getMundane = (data) =>{
    if(data){
        if(typeof(data) === "object"){
            if(Array.isArray(data)){
                
                data.forEach(d=>{
                    if(getMundane(d)){
                        lst.push(getMundane(d));
                    }
                   
                });
                
            }
            else{
                
                Object.keys(data).forEach(y=>{
                    if(getMundane(data[`${y}`])){
                        lst.push(getMundane(data[`${y}`]));
                    }
                    else{
                        lst.push(y);
                    }
                        
                    });
                
            }
        }
        else{
            return data  
        }
    }
}
getMundane(complexObject)
console.log("output : ",lst)
