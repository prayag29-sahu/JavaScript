let price = [250,645,300,900,50];
for(let i=0;i<price.length;i++){
    price[i]=price[i]-((price[i]*10)/100);
}
for(let i=0;i<price.length;i++){
    console.log(price[i]);
}
/**
225
580.5
270
810
45
 */