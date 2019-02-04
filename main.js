// var target= require('vibhavashistha');
// target.start(function(o){
//     var s = o.new('nodeExample'); //instantiate StringBuffer. 
//     s.displayInformation();  // append hello       // dlrow ollew
//     console.log('->',s); // [function body]
//   })


const exec= require('child_process').exec;
const childProcess= exec('java -jar C:\\Users\\tekiz\\nodeHttp\\securetrace-analyser-1.2.5.jar "C:\\Users\\tekiz\\nodeHttp\\Jason_Engle.pdf C:\\Users\\tekiz\\nodeHttp"',function(err,stdout,stderr) {
if(err) {
    console.log(err)
}
console.log(stdout)
})
