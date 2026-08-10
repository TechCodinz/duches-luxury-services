export const clients=[
{id:"DC-201",name:"Amaka O.",tier:"Royal",location:"Lagos",channel:"WhatsApp",lifetime:"$18,600",last:"Oceanview Residence",next:"Return-stay offer",vip:true},
{id:"DC-202",name:"Khalid M.",tier:"Grand Duchess",location:"Dubai",channel:"Instagram",lifetime:"$32,800",last:"Grand Duchess Experience",next:"Airport & yacht itinerary",vip:true},
{id:"DC-203",name:"Sarah W.",tier:"Private Client",location:"London",channel:"Website",lifetime:"Private sale",last:"Crown Penthouse viewing",next:"Investment follow-up",vip:true},
{id:"DC-204",name:"Chinedu E.",tier:"Lifestyle",location:"Abuja",channel:"Telegram",lifetime:"$6,200",last:"Executive stay",next:"Review request",vip:false},
];

export const invoices=[
{id:"INV-1088",client:"Khalid M.",for:"Grand Duchess deposit",amount:"$5,000",status:"Paid",due:"Aug 10"},
{id:"INV-1089",client:"Adaeze N.",for:"Lekki stay + chauffeur",amount:"$2,400",status:"Awaiting approval",due:"Aug 11"},
{id:"INV-1090",client:"Amaka O.",for:"Oceanview balance",amount:"$3,200",status:"Due",due:"Aug 13"},
];

export const calendarDays=[
{day:"Mon 10",rate:"₦450K",state:"available"},{day:"Tue 11",rate:"₦450K",state:"available"},{day:"Wed 12",rate:"₦520K",state:"hold"},{day:"Thu 13",rate:"₦520K",state:"booked"},{day:"Fri 14",rate:"₦650K",state:"booked"},{day:"Sat 15",rate:"₦650K",state:"booked"},{day:"Sun 16",rate:"₦580K",state:"available"},
{day:"Mon 17",rate:"₦450K",state:"available"},{day:"Tue 18",rate:"₦450K",state:"maintenance"},{day:"Wed 19",rate:"₦480K",state:"available"},{day:"Thu 20",rate:"₦520K",state:"available"},{day:"Fri 21",rate:"₦650K",state:"hold"},{day:"Sat 22",rate:"₦650K",state:"available"},{day:"Sun 23",rate:"₦580K",state:"available"},
];

export const articles=[
{id:"DJ-01",title:"A private guide to a refined Lagos weekend",category:"Travel",status:"Published",author:"Duches Editorial",date:"Aug 08"},
{id:"DJ-02",title:"What defines a truly exceptional residence?",category:"Property",status:"Scheduled",author:"Duches Editorial",date:"Aug 14"},
{id:"DJ-03",title:"The art of effortless private dining",category:"Lifestyle",status:"Draft",author:"Duches Editorial",date:"—"},
];

export const reviews=[
{id:"RV-88",name:"Amaka O.",rating:5,source:"Post-stay",copy:"Every detail felt considered from arrival to departure.",status:"Approved"},
{id:"RV-89",name:"Khalid M.",rating:5,source:"WhatsApp",copy:"The concierge coordination made the entire weekend effortless.",status:"Pending"},
{id:"RV-90",name:"Sarah W.",rating:5,source:"Private viewing",copy:"Professional, discreet and exceptionally well presented.",status:"Approved"},
];

export const team=[
{name:"Duches Owner",role:"Owner / Administrator",access:"Full access",state:"Active"},
{name:"Maya A.",role:"Guest Experience",access:"Bookings · Concierge · Clients",state:"Active"},
{name:"Daniel O.",role:"Content Manager",access:"Listings · Media · Journal · Social",state:"Active"},
{name:"Finance Desk",role:"Finance",access:"Invoices · Payments · Reports",state:"Invite pending"},
];

export const audit=[
{actor:"Daniel O.",action:"Updated rate",resource:"Oceanview Residence",time:"10:42 AM"},
{actor:"Duches Owner",action:"Approved payment request",resource:"INV-1088",time:"9:18 AM"},
{actor:"AI Concierge",action:"Qualified lead",resource:"DL-1048",time:"8:56 AM"},
{actor:"Maya A.",action:"Confirmed chauffeur",resource:"DR-8821",time:"Yesterday"},
{actor:"Daniel O.",action:"Scheduled campaign",resource:"Crown Penthouse",time:"Yesterday"},
];
