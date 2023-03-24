const number=[1,2,3,4,5];
let sathish=number.reduce(function(a,b)
{
	return (a+b*2);
},10);
console.log(sathish);