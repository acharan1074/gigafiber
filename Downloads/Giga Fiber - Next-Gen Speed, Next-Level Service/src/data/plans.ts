export interface ServicePlan {
  id: string;
  name: string;
  speed: string;
  data: string;
  price: number;
  features: string[];
  popular?: boolean;
}

// BSNL FTTH Service Areas
export const serviceAreas = [
   "Andole", 
   "Annasagar",
   "Ramsanpally",
   "Kichanapally", 
   "Dakoor",
   "Sangupet", 
   	"Almaipet", 
   	"Chotakur"," JNTU–Sulthanpur"," Gounglur"," Pulkal"
," Vatpally–Gorekal"," Tekmal–Bodamatipally"
," GadiPeddapur" ," Chilipched–Chandoor" ,"Shilampally"
," Somakkapet" ," Faizabad","Siripura" ,   	"BandaPothgal"
,"Ajjamari",   	"Rangampet",   	"Dumpalakunta"];

export const companyInfo = {
name:"Giga Fiber",
tagline:"Next-Gen Speed, Next-Level Service",
partner:"🚀 High-Speed Fiber Internet Provider | BSNL Authorized Partner – BSNL FTTH (Fiber to the Home)",
description:"⚡ Speed Plans: 30 Mbps to 1 Gbps | 📞 Free Unlimited Landline Calling | 📺 IPTV Available",
phone:"9948046456",

whatsapp:"9948046456",

office:"13-83/3, BSNL Office, Opposite Joginath Road, Jogipet",

city:"Jogipet"

};

export const servicePlans = [
{
id :'rural-home',
name:'Fibre Rural Home wifi/ Ghar ka wifi',
speed:'40 Mbps',
data:'1400 GB',
price :399,
features:['40 Mbps download speed','1400 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'basic-neo',
name:'Fibre Basic Neo',
speed:'50 Mbps',
data:'3300 GB',
price :449,
features:['50 Mbps download speed','3300 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'basic',
name:'Fibre Basic',
speed:'60 Mbps',
data:'3300 GB',
price :499,
features:['60 Mbps download speed','3300 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'basic-ott',
name:'Fibre Basic OTT',
speed:'75 Mbps',
data:'4000 GB',
price :599,
features:['75 Mbps download speed','4000 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'basic-plus',
name:'Fibre Basic Plus',
speed:'100 Mbps',
data:'4000 GB',
price :599,
features:['100 Mbps download speed','4000 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'silver-jubilee',
name:'BSNL Silver Jubilee',
speed:'75 Mbps',
data:'2500 GB',
price :625,
features:['75 Mbps download speed','2500 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'basic-plus-ott',
name:'Fibre Basic Plus OTT',
speed:'100 Mbps',
data:'4000 GB',
price :699,
features:['100 Mbps download speed','4000 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','IPTV Available'],
popular: true,
},
{
id :'fibertb',
name:'FibreTB Plan',
speed:'150 Mbps',
data:'4000 GB',
price :799,
features:['150 Mbps download speed','4000 GB monthly data','Unlimited @ 10 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'value-ott',
name:'Fibre Value OTT',
speed:'125 Mbps',
data:'4000 GB',
price :799,
features:['125 Mbps download speed','4000 GB monthly data','Unlimited @ 8 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'value-plus',
name:'Fibre Values Plus',
speed:'150 Mbps',
data:'5000 GB',
price :849,
features:['150 Mbps download speed','5000 GB monthly data','Unlimited @ 10 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'rural-999',
name:'Rural Fibre 999 per 6 Months',
speed:'25 Mbps',
data:'50 GB',
price :999,
features:['25 Mbps download speed','50 GB monthly data','Unlimited @ 2 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'superstar-premium',
name:'Superstar Premium Plus',
speed:'200 Mbps',
data:'5000 GB',
price :999,
features:['200 Mbps download speed','5000 GB monthly data','Unlimited @ 10 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'home-wifi-quarterly',
name:'Home wifi/ Ghar ka wifi (Quarterly Plan)',
speed:'30 Mbps',
data:'1400 GB',
price :1197,
features:['30 Mbps download speed','1400 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'premium-plus',
name:'Fibre premium plus',
speed:'225 Mbps',
data:'6000 GB',
price :1299,
features:['225 Mbps download speed','6000 GB monthly data','Unlimited @ 15 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'premium-plus-ott',
name:'Fibre Premium Plus OTT',
speed:'250 Mbps',
data:'6000 GB',
price :1499,
features:['250 Mbps download speed','6000 GB monthly data','Unlimited @ 15 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'ultra-ott',
name:'Fibre Ultra OTT',
speed:'300 Mbps',
data:'6500 GB',
price :1799,
features:['300 Mbps download speed','6500 GB monthly data','Unlimited @ 20 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
{
id :'bharatnet-5900',
name:'Fiber 5900 BharatNet',
speed:'25 Mbps',
data:'100 GB',
price :5900,
features:['25 Mbps download speed','100 GB monthly data','Unlimited @ 2 Mbps after FUP','Unlimited landline calling','24/7 Customer Support'],
},
{
id :'bharatnet-9900',
name:'Fiber 9900 BharatNet',
speed:'40 Mbps',
data:'1200 GB',
price :9900,
features:['40 Mbps download speed','1200 GB monthly data','Unlimited @ 4 Mbps after FUP','Unlimited landline calling','IPTV Available'],
},
];
