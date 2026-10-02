import {
  PestService,
  HowItWorksStep,
  ServiceArea,
  TestimonialPlaceholder,
} from "../types";

// ------------------------------------------------------
// Company information
// ------------------------------------------------------

export const COMPANY_PHONE_PRIMARY = "+251 974 401 344";
export const COMPANY_PHONE_SECONDARY = "+251 926 691 542";

export const COMPANY_EMAIL = "agumasmaseresha@gmail.com";

export const COMPANY_LOCATION_AM = "ባሕር ዳር እና አካባቢዋ";
export const COMPANY_LOCATION_EN = "Bahir Dar and surrounding areas";

export const COMPANY_LOCATION = COMPANY_LOCATION_AM;

// Kept as empty values for compatibility with any existing imports.
// No operating hours are displayed on the website.
export const COMPANY_HOURS_AM = "";
export const COMPANY_HOURS_EN = "";
export const COMPANY_HOURS = "";

// ------------------------------------------------------
// Pest control services
// ------------------------------------------------------

export const PEST_SERVICES: PestService[] = [
  {
    id: "insect-control",
    nameAm: "የነፍሳት ቁጥጥር",
    nameEn: "Insect Control",

    taglineAm: "የተለያዩ ነፍሳትን መቆጣጠር",
    taglineEn: "Control of common household and facility insects",

    shortDescriptionAm:
      "በቤቶች፣ በሆቴሎች፣ በቢሮዎች እና በሌሎች ተቋማት የሚታዩ የተለያዩ ነፍሳትን ለመቆጣጠር የሚደረግ የተባይ ቁጥጥር አገልግሎት።",
    shortDescriptionEn:
      "Pest control treatment for common insects found in homes, hotels, offices, shops, and other facilities.",

    fullDescriptionAm:
      "የነፍሳት ቁጥጥር አገልግሎታችን በቦታው የሚታዩትን ነፍሳት በመለየት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል። አገልግሎቱ ለመኖሪያ ቤቶች፣ ሆቴሎች፣ ፔንሲዮኖች፣ ሆስፒታሎች፣ ክሊኒኮች፣ ሱቆች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች እና ሌሎች ተቋማት ይሰጣል።",
    fullDescriptionEn:
      "Our insect control service addresses common insect problems by identifying the pest and applying an appropriate control approach. Services are available for homes, hotels, pensions, hospitals, clinics, shops, factories, universities, companies, and other facilities.",

    commonSignsAm: [
      "በቤት ወይም በሥራ ቦታ ነፍሳት በተደጋጋሚ መታየት",
      "በግድግዳ፣ በወለል ወይም በጨለማ ቦታዎች ነፍሳት መገኘት",
      "በምግብ ማከማቻ ወይም በእርጥበት ቦታዎች የነፍሳት እንቅስቃሴ",
    ],

    commonSignsEn: [
      "Repeated insect activity around a property",
      "Insects appearing around walls, floors, or hidden areas",
      "Insect activity around food storage or damp areas",
    ],

    targetAreasInHomeAm: [
      "የመኖሪያ ቤቶች",
      "ሆቴሎች እና ፔንሲዮኖች",
      "ሆስፒታሎች እና ክሊኒኮች",
      "ሱቆች፣ ቢሮዎች እና ሌሎች ተቋማት",
    ],

    targetAreasInHomeEn: [
      "Homes and residences",
      "Hotels and pensions",
      "Hospitals and clinics",
      "Shops, offices, and other facilities",
    ],

    treatmentApproachAm: [
      "የተባዩን አይነት እና የሚገኝበትን ቦታ መለየት",
      "ተስማሚ የቁጥጥር ዘዴ መምረጥ",
      "የሚፈለገውን የርጭት ወይም የቁጥጥር ስራ ማከናወን",
      "ከህክምናው በኋላ የደህንነት መመሪያ መስጠት",
    ],

    treatmentApproachEn: [
      "Identify the pest and affected areas",
      "Select an appropriate control approach",
      "Carry out the required treatment or spraying",
      "Provide relevant post-treatment safety guidance",
    ],

    homeownerPrepTipsAm: [
      "የሚታከሙ ቦታዎችን በተቻለ መጠን ክፍት ማድረግ",
      "ምግብ እና የምግብ ዕቃዎችን መሸፈን",
      "ባለሙያው የሚሰጠውን የቅድመ ዝግጅት መመሪያ መከተል",
    ],

    homeownerPrepTipsEn: [
      "Keep treatment areas accessible",
      "Cover food and food-contact items",
      "Follow the preparation instructions provided by the service team",
    ],

    safetyNotesAm:
      "የሚደረገው ርጭት እና የተባይ ቁጥጥር በባለሙያ መመሪያ መሰረት ይከናወናል። ህፃናትን፣ የቤት እንስሳትን እና ሌሎች ሰዎችን በህክምናው ወቅት ከሚታከመው ቦታ ማራቅ ይገባል።",

    safetyNotesEn:
      "Treatment and spraying are carried out according to the appropriate service instructions. Children, pets, and other people should be kept away from treated areas during application and until the service team advises that it is safe to return.",

    badgeAm: "የተባይ ቁጥጥር",
    badgeEn: "Pest Control",

    image:
      "https://images.pexels.com/photos/4098923/pexels-photo-4098923.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "rodent-control",
    nameAm: "የአይጥ ቁጥጥር",
    nameEn: "Rat & Rodent Control",

    taglineAm: "አይጦችን እና ተመሳሳይ አይጥ ዝርያዎችን መቆጣጠር",
    taglineEn: "Control of rats and other rodents",

    shortDescriptionAm:
      "በቤቶች፣ በሱቆች፣ በመጋዘኖች፣ በሆቴሎች እና በሌሎች ቦታዎች የሚከሰቱ የአይጥ ችግሮችን ለመቆጣጠር የሚደረግ አገልግሎት።",
    shortDescriptionEn:
      "Rodent control for homes, shops, storage areas, hotels, companies, and other facilities.",

    fullDescriptionAm:
      "የአይጥ ቁጥጥር አገልግሎት የአይጥ መግቢያ ቦታዎችን፣ የሚታዩበትን ቦታ እና የችግሩን መጠን በመመልከት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Rodent control focuses on identifying signs of rats or other rodents, locating likely entry or activity areas, and applying an appropriate control approach for the property.",

    commonSignsAm: [
      "የአይጥ ፍግ መታየት",
      "በምግብ ወይም በእቃዎች ላይ የመንከስ ምልክቶች",
      "በሌሊት የአይጥ እንቅስቃሴ ድምፅ",
      "በግድግዳ ወይም በእቃ መጋዘን አካባቢ የአይጥ መንገድ ምልክቶች",
    ],

    commonSignsEn: [
      "Rodent droppings",
      "Gnaw marks on food or materials",
      "Sounds of rodent activity, especially at night",
      "Rodent movement or entry signs around walls and storage areas",
    ],

    targetAreasInHomeAm: [
      "መጋዘኖች እና የምግብ ማከማቻዎች",
      "የኩሽና አካባቢ",
      "የግድግዳ እና የበር ክፍተቶች",
      "የውጭ ግቢ እና የቆሻሻ አካባቢዎች",
    ],

    targetAreasInHomeEn: [
      "Storage and food areas",
      "Kitchen areas",
      "Wall and door gaps",
      "Outdoor compounds and waste areas",
    ],

    treatmentApproachAm: [
      "የአይጥ እንቅስቃሴ ቦታዎችን መለየት",
      "የመግቢያ እና የመደበቂያ ቦታዎችን መመርመር",
      "ተስማሚ የአይጥ ቁጥጥር ዘዴ መተግበር",
      "የድጋሚ መግባት እድልን ለመቀነስ ምክር መስጠት",
    ],

    treatmentApproachEn: [
      "Identify areas of rodent activity",
      "Inspect likely entry and hiding areas",
      "Apply an appropriate rodent-control method",
      "Provide guidance to reduce future entry",
    ],

    homeownerPrepTipsAm: [
      "ምግብን በተዘጋ እቃ ውስጥ ማስቀመጥ",
      "የቆሻሻ መያዣዎችን በደንብ መዝጋት",
      "የአይጥ ምልክቶች የታዩባቸውን ቦታዎች ለባለሙያው ማሳየት",
    ],

    homeownerPrepTipsEn: [
      "Keep food in sealed containers",
      "Keep waste containers properly closed",
      "Point out areas where rodent activity has been noticed",
    ],

    safetyNotesAm:
      "የአይጥ ቁጥጥር ምርቶች እና ዘዴዎች ህፃናት እና የቤት እንስሳት እንዳይደርሱባቸው በጥንቃቄ መተግበር አለባቸው።",

    safetyNotesEn:
      "Rodent-control products and methods should be applied carefully and kept inaccessible to children and pets.",

    badgeAm: "አይጥ ቁጥጥር",
    badgeEn: "Rodent Control",

    image:
      "https://images.pexels.com/photos/14595471/pexels-photo-14595471.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "cockroach-control",
    nameAm: "የበረሮ ቁጥጥር",
    nameEn: "Cockroach Control",

    taglineAm: "በረሮዎችን ከቤት እና ከሥራ ቦታ መቆጣጠር",
    taglineEn: "Control cockroaches in homes and facilities",

    shortDescriptionAm:
      "በኩሽና፣ በመጋዘን፣ በመታጠቢያ ቤት እና በሌሎች ቦታዎች የሚታዩ በረሮዎችን ለመቆጣጠር የሚደረግ ህክምና።",
    shortDescriptionEn:
      "Cockroach treatment for kitchens, storage areas, bathrooms, shops, hotels, and other facilities.",

    fullDescriptionAm:
      "የበረሮ ቁጥጥር አገልግሎት በረሮዎች የሚታዩበትን ቦታ በመለየት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Cockroach control focuses on areas where cockroaches are active, including kitchens, storage areas, bathrooms, shops, hotels, and other facilities.",

    commonSignsAm: [
      "በሌሊት በረሮዎች መታየት",
      "በካቢኔ ወይም በመጋዘን ውስጥ የበረሮ ፍግ መታየት",
      "በጨለማ እና እርጥበት ቦታዎች የበረሮ እንቅስቃሴ",
    ],

    commonSignsEn: [
      "Cockroaches appearing at night",
      "Cockroach droppings around cabinets or storage areas",
      "Cockroach activity in dark or damp areas",
    ],

    targetAreasInHomeAm: ["ኩሽና", "መጋዘን", "መታጠቢያ ቤት", "የቆሻሻ እና የፍሳሽ አካባቢዎች"],

    targetAreasInHomeEn: [
      "Kitchens",
      "Storage areas",
      "Bathrooms",
      "Waste and drainage areas",
    ],

    treatmentApproachAm: [
      "የበረሮ እንቅስቃሴ ቦታዎችን መለየት",
      "ተስማሚ የቁጥጥር ምርት ወይም ዘዴ መጠቀም",
      "በሚያስፈልግባቸው ቦታዎች ርጭት ማድረግ",
      "የንጽህና እና የመከላከያ ምክር መስጠት",
    ],

    treatmentApproachEn: [
      "Identify cockroach activity areas",
      "Use an appropriate control method",
      "Apply treatment where required",
      "Provide practical prevention guidance",
    ],

    homeownerPrepTipsAm: [
      "የምግብ እቃዎችን መሸፈን",
      "የኩሽና ጠረጴዛዎችን እና ወለሎችን ማጽዳት",
      "ለህክምናው የሚያስፈልጉ ቦታዎችን ክፍት ማድረግ",
    ],

    homeownerPrepTipsEn: [
      "Cover food and food-contact items",
      "Clean kitchen surfaces and floors",
      "Keep relevant treatment areas accessible",
    ],

    safetyNotesAm:
      "በርጭት ወይም በሌላ የቁጥጥር ስራ ወቅት ሰዎችን እና እንስሳትን ከሚታከመው ቦታ ማራቅ ይገባል።",

    safetyNotesEn:
      "People and pets should be kept away from treatment areas during application and until the service team provides appropriate return instructions.",

    badgeAm: "በረሮ ቁጥጥር",
    badgeEn: "Cockroach Control",

    image:
      "https://images.pexels.com/photos/11362659/pexels-photo-11362659.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "termite-control",
    nameAm: "የምስጥ ቁጥጥር",
    nameEn: "Termite Control",

    taglineAm: "የምስጥ ጉዳትን መቆጣጠር",
    taglineEn: "Control termite activity and damage",

    shortDescriptionAm:
      "በእንጨት እቃዎች፣ በበሮች፣ በግንባታ ክፍሎች እና በሌሎች ቦታዎች የሚከሰትን የምስጥ ችግር ለመቆጣጠር የሚደረግ አገልግሎት።",
    shortDescriptionEn:
      "Termite control for wooden structures, doors, building areas, and other affected locations.",

    fullDescriptionAm:
      "ምስጥ በእንጨት እና በግንባታ ክፍሎች ላይ ጉዳት ሊያደርስ ይችላል። የምስጥ ቁጥጥር አገልግሎቱ የተጎዱ ቦታዎችን በመለየት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Termites can damage wooden structures and other building components. Our termite control service focuses on identifying affected areas and applying an appropriate treatment approach.",

    commonSignsAm: [
      "በእንጨት ወይም በግድግዳ አካባቢ የምስጥ ምልክቶች",
      "የተበላሸ ወይም የተቦረቦረ እንጨት",
      "የምስጥ ክንፎች መገኘት",
      "የአፈር መንገድ ወይም ቱቦ መታየት",
    ],

    commonSignsEn: [
      "Visible termite activity around wood or walls",
      "Damaged or hollow wooden materials",
      "Discarded termite wings",
      "Mud tubes or shelter tubes",
    ],

    targetAreasInHomeAm: [
      "የእንጨት በሮች እና መስኮቶች",
      "የእንጨት ወለሎች",
      "የጣሪያ እና የግንባታ እንጨት",
      "በእንጨት ዙሪያ ያሉ ቦታዎች",
    ],

    targetAreasInHomeEn: [
      "Wooden doors and windows",
      "Wooden floors",
      "Roof and structural timber",
      "Areas surrounding affected wood",
    ],

    treatmentApproachAm: [
      "የምስጥ ምልክቶችን መለየት",
      "የተጎዱ እንጨቶችን መመርመር",
      "ተስማሚ የምስጥ ቁጥጥር ህክምና መተግበር",
      "ተጨማሪ ጉዳትን ለመቀነስ ምክር መስጠት",
    ],

    treatmentApproachEn: [
      "Identify termite activity",
      "Inspect affected wooden structures",
      "Apply an appropriate termite-control treatment",
      "Provide practical prevention guidance",
    ],

    homeownerPrepTipsAm: [
      "የምስጥ ምልክት የታየባቸውን ቦታዎች ለባለሙያው ማሳየት",
      "በተጎዱ ቦታዎች ፊት ለፊት ያሉ እቃዎችን ማራቅ",
      "የሚታከሙ ቦታዎችን በቀላሉ ሊደረስባቸው ማድረግ",
    ],

    homeownerPrepTipsEn: [
      "Point out areas where termite activity has been noticed",
      "Move items away from affected areas",
      "Keep treatment areas accessible",
    ],

    safetyNotesAm: "የምስጥ ቁጥጥር ምርቶች በባለሙያ መመሪያ መሰረት መተግበር አለባቸው።",

    safetyNotesEn:
      "Termite-control products should be applied according to the appropriate product and service instructions.",

    badgeAm: "ምስጥ ቁጥጥር",
    badgeEn: "Termite Control",

    image:
      "https://images.pexels.com/photos/12895278/pexels-photo-12895278.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "bed-bug-control",
    nameAm: "የነቀዝ ቁጥጥር",
    nameEn: "Bedbug Control",

    taglineAm: "ነቀዞችን ከመኝታ እና ከሌሎች ቦታዎች መቆጣጠር",
    taglineEn: "Control bedbugs in bedrooms and affected areas",

    shortDescriptionAm:
      "በአልጋ፣ በፍራሽ፣ በሶፋ እና በሌሎች መደበቂያ ቦታዎች የሚገኙ ነቀዞችን ለመቆጣጠር የሚደረግ አገልግሎት።",
    shortDescriptionEn:
      "Bedbug control for mattresses, beds, sofas, bedrooms, hotels, pensions, and other affected areas.",

    fullDescriptionAm:
      "የነቀዝ ቁጥጥር አገልግሎት ነቀዞች ሊደበቁባቸው የሚችሉ እንደ ፍራሽ፣ አልጋ፣ ሶፋ እና የግድግዳ ክፍተቶች ያሉ ቦታዎችን በመመርመር ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Bedbug control focuses on areas where bedbugs may hide, including mattresses, bed frames, sofas, cracks, and other affected areas.",

    commonSignsAm: [
      "በእንቅልፍ ጊዜ የሚያሳክኩ ንክሻዎች",
      "በአንሶላ ወይም በፍራሽ ላይ ጥቃቅን ነጠብጣቦች",
      "በፍራሽ ጠርዝ እና በአልጋ መገጣጠሚያዎች ነቀዝ መታየት",
    ],

    commonSignsEn: [
      "Itchy bites after sleeping",
      "Small marks or spots on bedding or mattresses",
      "Bedbugs around mattress seams or bed-frame joints",
    ],

    targetAreasInHomeAm: [
      "ፍራሽ እና የአልጋ መገጣጠሚያዎች",
      "ሶፋዎች እና መቀመጫዎች",
      "የግድግዳ ስንጥቆች",
      "የመኝታ ክፍሎች",
    ],

    targetAreasInHomeEn: [
      "Mattresses and bed-frame joints",
      "Sofas and seating areas",
      "Wall cracks and gaps",
      "Bedrooms and sleeping areas",
    ],

    treatmentApproachAm: [
      "የነቀዝ ምልክቶች ያሉባቸውን ቦታዎች መመርመር",
      "በተጎዱ ቦታዎች ላይ ተስማሚ ህክምና መተግበር",
      "በመደበቂያ ክፍተቶች ላይ ትኩረት መስጠት",
      "ከህክምናው በኋላ የጥንቃቄ መመሪያ መስጠት",
    ],

    treatmentApproachEn: [
      "Inspect areas showing signs of bedbug activity",
      "Apply an appropriate treatment to affected areas",
      "Focus on likely hiding places and gaps",
      "Provide post-treatment guidance",
    ],

    homeownerPrepTipsAm: [
      "አንሶላዎችን እና የአልጋ ልብሶችን ማስወገድ",
      "በአልጋ ዙሪያ ያሉ እቃዎችን ማራቅ",
      "ባለሙያው በቀላሉ እንዲመረምር ቦታውን ክፍት ማድረግ",
    ],

    homeownerPrepTipsEn: [
      "Remove bed linens before treatment",
      "Clear items around beds",
      "Keep affected areas accessible for inspection",
    ],

    safetyNotesAm:
      "ከህክምናው በኋላ ወደ ቦታው መመለስ የሚቻለው በባለሙያው የሚሰጠውን መመሪያ ከተከተሉ በኋላ ነው።",

    safetyNotesEn:
      "Return to treated areas according to the service team’s post-treatment instructions.",

    badgeAm: "ነቀዝ ቁጥጥር",
    badgeEn: "Bedbug Control",

    image: "https://d2ta0juqk2obq6.cloudfront.net/dict/neqezi.jpg",
  },

  {
    id: "ant-control",
    nameAm: "የጉንዳን ቁጥጥር",
    nameEn: "Ant Control",

    taglineAm: "የጉንዳን መንገዶችን እና መደበቂያ ቦታዎችን መቆጣጠር",
    taglineEn: "Control ant activity and entry points",

    shortDescriptionAm:
      "በኩሽና፣ በመመገቢያ ቦታዎች፣ በግቢ እና በሌሎች ቦታዎች የሚታዩ ጉንዳኖችን ለመቆጣጠር የሚደረግ አገልግሎት።",
    shortDescriptionEn:
      "Ant control for kitchens, food areas, compounds, shops, workplaces, and other facilities.",

    fullDescriptionAm:
      "የጉንዳን ቁጥጥር የጉንዳኖችን እንቅስቃሴ፣ የመግቢያ ቦታዎች እና የሚሰበሰቡባቸውን ቦታዎች በመለየት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Ant control identifies active trails, entry points, and areas where ants gather, followed by an appropriate control approach.",

    commonSignsAm: [
      "በኩሽና ወይም በግድግዳ ላይ የጉንዳን ረድፍ",
      "በምግብ ዙሪያ ብዙ ጉንዳኖች መሰብሰብ",
      "በበር ወይም በግድግዳ ክፍተት የጉንዳን መግቢያ",
    ],

    commonSignsEn: [
      "Ant trails around kitchens or walls",
      "Large numbers of ants around food",
      "Ant entry points around doors or wall gaps",
    ],

    targetAreasInHomeAm: [
      "ኩሽና እና የምግብ ማከማቻ",
      "የበር እና መስኮት ክፍተቶች",
      "የግቢ እና የውጭ አካባቢዎች",
    ],

    targetAreasInHomeEn: [
      "Kitchens and food-storage areas",
      "Door and window gaps",
      "Compound and outdoor areas",
    ],

    treatmentApproachAm: [
      "የጉንዳን እንቅስቃሴ መለየት",
      "የመግቢያ ቦታዎችን መመርመር",
      "ተስማሚ የጉንዳን ቁጥጥር ዘዴ መተግበር",
      "የመከላከያ ምክር መስጠት",
    ],

    treatmentApproachEn: [
      "Identify active ant trails",
      "Inspect likely entry points",
      "Apply an appropriate ant-control method",
      "Provide practical prevention guidance",
    ],

    homeownerPrepTipsAm: [
      "ምግብን በተዘጋ እቃ ውስጥ ማስቀመጥ",
      "የምግብ ፍርፋሪዎችን ማጽዳት",
      "የጉንዳን መንገዶች የሚታዩበትን ቦታ ለባለሙያው ማሳየት",
    ],

    homeownerPrepTipsEn: [
      "Store food in sealed containers",
      "Clean up food crumbs and spills",
      "Point out visible ant trails to the service team",
    ],

    safetyNotesAm: "የጉንዳን ቁጥጥር ምርቶች በባለሙያ መመሪያ መሰረት መተግበር አለባቸው።",

    safetyNotesEn:
      "Ant-control products should be applied according to the appropriate service instructions.",

    badgeAm: "ጉንዳን ቁጥጥር",
    badgeEn: "Ant Control",

    image:
      "https://images.pexels.com/photos/11997005/pexels-photo-11997005.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "spider-control",
    nameAm: "የሸረሪት ቁጥጥር",
    nameEn: "Spider Control",

    taglineAm: "ሸረሪቶችን እና የሸረሪት ድሮችን መቆጣጠር",
    taglineEn: "Control spiders and spider activity",

    shortDescriptionAm:
      "በቤቶች፣ በሆቴሎች፣ በመጋዘኖች እና በሌሎች ተቋማት የሚታዩ ሸረሪቶችን ለመቆጣጠር የሚደረግ አገልግሎት።",
    shortDescriptionEn:
      "Spider control for homes, hotels, storage areas, companies, and other facilities.",

    fullDescriptionAm:
      "የሸረሪት ቁጥጥር ሸረሪቶች የሚታዩባቸውን ቦታዎች እና የሚሰሩባቸውን ድሮች በመለየት ተስማሚ የቁጥጥር ዘዴ እንዲተገበር ያግዛል።",
    fullDescriptionEn:
      "Spider control focuses on areas where spiders and webs are commonly found and applies an appropriate pest-control approach.",

    commonSignsAm: [
      "በጣሪያ ማዕዘናት የሸረሪት ድር መታየት",
      "በጨለማ እና በተደበቁ ቦታዎች ሸረሪቶች መገኘት",
      "በመጋዘን ወይም በግቢ ውስጥ ተደጋጋሚ የሸረሪት እንቅስቃሴ",
    ],

    commonSignsEn: [
      "Spider webs in ceiling corners",
      "Spiders appearing in dark or hidden areas",
      "Repeated spider activity around storage or outdoor areas",
    ],

    targetAreasInHomeAm: [
      "የጣሪያ ማዕዘናት",
      "መጋዘኖች",
      "የበር እና መስኮት አካባቢዎች",
      "የውጭ ግቢ",
    ],

    targetAreasInHomeEn: [
      "Ceiling corners",
      "Storage areas",
      "Door and window areas",
      "Outdoor compounds",
    ],

    treatmentApproachAm: [
      "የሸረሪት እንቅስቃሴ ቦታዎችን መለየት",
      "የሸረሪት ድሮችን ማስወገድ",
      "ተስማሚ የቁጥጥር ህክምና መተግበር",
      "የመከላከያ ምክር መስጠት",
    ],

    treatmentApproachEn: [
      "Identify spider activity areas",
      "Remove visible spider webs where appropriate",
      "Apply an appropriate pest-control treatment",
      "Provide prevention guidance",
    ],

    homeownerPrepTipsAm: [
      "የሚታከሙ ቦታዎችን ክፍት ማድረግ",
      "የተደረጉ እቃዎችን ከግድግዳ ማራቅ",
      "የሸረሪት እንቅስቃሴ የሚታይበትን ቦታ ማሳወቅ",
    ],

    homeownerPrepTipsEn: [
      "Keep treatment areas accessible",
      "Move stored items away from walls where possible",
      "Point out areas with repeated spider activity",
    ],

    safetyNotesAm: "የሚደረገው ህክምና በባለሙያ መመሪያ መሰረት መከናወን አለበት።",

    safetyNotesEn:
      "Treatment should be carried out according to the appropriate service and product instructions.",

    badgeAm: "ሸረሪት ቁጥጥር",
    badgeEn: "Spider Control",

    image:
      "https://images.pexels.com/photos/27419744/pexels-photo-27419744.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    id: "chemical-spraying",
    nameAm: "የኬሚካል ርጭት",
    nameEn: "Chemical Spraying",

    taglineAm: "ለተባይ ቁጥጥር የሚደረግ ሙያዊ ርጭት",
    taglineEn: "Professional chemical spraying for pest control",

    shortDescriptionAm:
      "ለተባይ ቁጥጥር የሚያስፈልገውን ርጭት በተገቢው ቦታ እና በጥንቃቄ ለማከናወን የሚሰጥ አገልግሎት።",
    shortDescriptionEn:
      "Professional spraying service for pest-control treatments in residential, commercial, and institutional spaces.",

    fullDescriptionAm:
      "የኬሚካል ርጭት አገልግሎት የተባይ ችግሩን እና የሚታከመውን ቦታ መሰረት በማድረግ ተስማሚ የርጭት ስራ ለማከናወን ይሰጣል። አገልግሎቱ በቤቶች፣ ሆቴሎች፣ ፔንሲዮኖች፣ ሆስፒታሎች፣ ክሊኒኮች፣ ሱቆች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች እና ኩባንያዎች ሊተገበር ይችላል።",
    fullDescriptionEn:
      "Chemical spraying is provided according to the pest problem and treatment area. The service can be used for homes, hotels, pensions, hospitals, clinics, shops, factories, universities, companies, and other facilities.",

    commonSignsAm: [
      "የተባይ ችግር በተደጋጋሚ መከሰት",
      "በቦታው ላይ ብዙ የተባይ እንቅስቃሴ መኖር",
      "የተባይ ቁጥጥር ርጭት አስፈላጊ መሆን",
    ],

    commonSignsEn: [
      "Recurring pest activity",
      "High levels of pest activity in an area",
      "A need for professional pest-control spraying",
    ],

    targetAreasInHomeAm: [
      "መኖሪያ ቤቶች",
      "ሆቴሎች እና ፔንሲዮኖች",
      "ሆስፒታሎች እና ክሊኒኮች",
      "ሱቆች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች እና ኩባንያዎች",
    ],

    targetAreasInHomeEn: [
      "Homes and residences",
      "Hotels and pensions",
      "Hospitals and clinics",
      "Shops, factories, universities, and companies",
    ],

    treatmentApproachAm: [
      "የተባይ ችግሩን እና የሚታከመውን ቦታ መለየት",
      "ተስማሚ የርጭት ዘዴ መምረጥ",
      "ርጭቱን በጥንቃቄ ማከናወን",
      "ከርጭቱ በኋላ የደህንነት መመሪያ መስጠት",
    ],

    treatmentApproachEn: [
      "Identify the pest problem and treatment area",
      "Select the appropriate spraying approach",
      "Carry out the spraying carefully",
      "Provide post-treatment safety instructions",
    ],

    homeownerPrepTipsAm: [
      "ምግብን እና የምግብ ዕቃዎችን መሸፈን",
      "የሚታከመውን ቦታ በተቻለ መጠን ክፍት ማድረግ",
      "በርጭቱ ጊዜ የባለሙያውን መመሪያ መከተል",
    ],

    homeownerPrepTipsEn: [
      "Cover food and food-contact items",
      "Keep treatment areas accessible",
      "Follow the service team’s preparation instructions",
    ],

    safetyNotesAm:
      "በርጭት ወቅት ሰዎችን፣ ህፃናትን እና የቤት እንስሳትን ከሚታከመው ቦታ ማራቅ እና ከህክምናው በኋላ የባለሙያውን የመመለሻ መመሪያ መከተል ይገባል።",

    safetyNotesEn:
      "People, children, and pets should be kept away during spraying, and the service team’s instructions about returning to the treated area should be followed.",

    badgeAm: "ሙያዊ ርጭት",
    badgeEn: "Professional Spraying",

    image:
      "https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

// ------------------------------------------------------
// How the service works
// ------------------------------------------------------

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    titleAm: "1. ይደውሉልን",
    titleEn: "1. Call Us",

    subtitleAm: "የተባይ ችግርዎን በስልክ ያሳውቁን",
    subtitleEn: "Tell us about your pest problem",

    descriptionAm: "በቀጥታ በስልክ በመደወል ስለሚያጋጥምዎት የተባይ ችግር ያሳውቁን።",

    descriptionEn:
      "Call us directly and tell us about the pest problem you are experiencing.",

    detailPointsAm: [
      "የተባዩን አይነት ይግለጹ",
      "የሚገኝበትን ቦታ ያሳውቁን",
      "ስለሚፈልጉት አገልግሎት ይጠይቁ",
    ],

    detailPointsEn: [
      "Tell us what type of pest you are dealing with",
      "Tell us where the problem is located",
      "Ask about the service you need",
    ],
  },

  {
    stepNumber: 2,
    titleAm: "2. ችግሩን ያስረዱን",
    titleEn: "2. Describe the Problem",

    subtitleAm: "የተባዩን አይነት እና ያለበትን ቦታ ይንገሩን",
    subtitleEn: "Explain the pest and affected area",

    descriptionAm:
      "የተባዩን አይነት እና ችግሩ የተከሰተበትን ቦታ በመግለጽ ለእርስዎ የሚስማማውን አገልግሎት እንዲያገኙ ያግዙን።",

    descriptionEn:
      "Describe the pest and affected area so we can understand the service you need.",

    detailPointsAm: [
      "ቤት፣ ሆቴል፣ ሆስፒታል፣ ሱቅ ወይም ሌላ ተቋም መሆኑን ይግለጹ",
      "የተባዩን አይነት ይግለጹ",
      "ችግሩ የታየበትን ቦታ ያሳውቁ",
    ],

    detailPointsEn: [
      "Tell us whether it is a home, hotel, hospital, shop, or other facility",
      "Describe the pest",
      "Tell us where the problem has been noticed",
    ],
  },

  {
    stepNumber: 3,
    titleAm: "3. አገልግሎቱን ያግኙ",
    titleEn: "3. Get the Service",

    subtitleAm: "ተስማሚውን የተባይ ቁጥጥር አገልግሎት ያግኙ",
    subtitleEn: "Receive the appropriate pest-control service",

    descriptionAm:
      "ከተባዩ አይነት እና ከቦታው ሁኔታ ጋር የሚስማማው የተባይ ቁጥጥር ወይም የኬሚካል ርጭት አገልግሎት ይሰጣል።",

    descriptionEn:
      "The appropriate pest-control or chemical-spraying service is provided according to the pest problem and treatment area.",

    detailPointsAm: [
      "የተባዩን ችግር መሰረት ያደረገ አገልግሎት",
      "ተገቢውን የርጭት ወይም የቁጥጥር ዘዴ መጠቀም",
      "የደህንነት መመሪያን መከተል",
    ],

    detailPointsEn: [
      "Service based on the pest problem",
      "Appropriate spraying or control method",
      "Relevant safety instructions",
    ],
  },

  {
    stepNumber: 4,
    titleAm: "4. የተባይ ችግሩን ይቆጣጠሩ",
    titleEn: "4. Control the Pest Problem",

    subtitleAm: "ከህክምናው በኋላ የተሰጠውን መመሪያ ይከተሉ",
    subtitleEn: "Follow the post-treatment guidance",

    descriptionAm: "ከአገልግሎቱ በኋላ የተሰጡዎትን የደህንነት እና የመከላከያ ምክሮች ይከተሉ።",

    descriptionEn:
      "After treatment, follow the safety and prevention guidance provided for the treated area.",

    detailPointsAm: [
      "የደህንነት መመሪያውን ይከተሉ",
      "የታከመውን ቦታ በተገቢው መልኩ ይጠቀሙ",
      "የተባይ ችግር እንደገና ከታየ ያሳውቁን",
    ],

    detailPointsEn: [
      "Follow the safety instructions",
      "Use the treated area according to the guidance provided",
      "Contact us again if the pest problem returns",
    ],
  },
];

// ------------------------------------------------------
// Service areas
// ------------------------------------------------------

// Kept empty so existing imports do not break.
// The website should describe the service area generally as
// Bahir Dar and surrounding areas rather than listing kebeles.
export const SERVICE_AREAS: ServiceArea[] = [];

// ------------------------------------------------------
// Testimonials
// ------------------------------------------------------

// No testimonials are displayed until the client provides real
// customer testimonials.
export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [];
