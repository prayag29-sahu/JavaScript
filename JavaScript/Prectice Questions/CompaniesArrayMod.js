let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.replace("Uber","Ola");
companies.push("Amazon");
for(let i=0;i<companies.length;i++){
    console.log(companies[i]);
}