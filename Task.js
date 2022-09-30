var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res = JSON.parse(request.response);
    console.log(res);
   //a. Get all the countries from the Asia continent /region using the Filter function
    var result = res.filter((ele)=>ele.region="Asia");
    console.log(result);
   //b. Get all the countries with a population of less than 2 lakhs using Filter function
   var population = res.filter((ele)=>ele.population<200000);
    console.log(population);
   //c.Print the following details name, capital, flag using forEach function
   var value = res.forEach((element) =>console.log(element.name,element.capital,element.flag));
    console.log(value);
   //d.Print the total population of countries using reduce function
   var x = res.reduce((acc,cv)=>acc+cv.population,0);
   console.log(x);
  //e.Print the country which uses US Dollars as currency.
  
  var cur =[];
  for(i=0;i<res.length;i++){
    if(res[i].currencies[0].code==="USD")
    {
        console.log("name:",res[i].name,"==>",res[i].currencies[0].code)
    }
}
};