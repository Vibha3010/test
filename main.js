const exec= require('child_process').exec;
const childProcess= exec('java -jar C:\\Users\\tekiz\\workspace\\Products\\branches\\secure-trace\\r1\\modules\\securetrace-analyser\\target\\securetrace-analyser-1.2.5.jar "C:\\Users\\tekiz\\Downloads\\jason.docx C:\\secure"',function(err,stdout,stderr) {
if(err) {
    console.log(err)
}
console.log(stdout)
})
