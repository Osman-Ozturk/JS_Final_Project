import Kopfhörer from "./Kopfhörer.js";
import Laptop from "./Laptop.js";
import Maus from "./Maus.js";

const kopfhörer1 = new Kopfhörer("OneOdio", 24.08, "Rot", true, false );
const kopfhörer2 = new Kopfhörer("Samsung", 71, "Graphite", true, true );
const kopfhörer3 = new Kopfhörer("Sony", 29.99, "Weiß", true, true );
const kopfhörer4 = new Kopfhörer("Generic", 25.99, "Black", true, true );
const kopfhörer5 = new Kopfhörer("HUAWEI", 86.16, "Orange", true, false );


const kopfhörerProdukts = [kopfhörer1,kopfhörer2,kopfhörer3,kopfhörer4,kopfhörer5];

const laptop1 = new Laptop("HP",429,"Black","4Y2B4EA","Windows 11","8 GB","17 Zoll");
const laptop2 = new Laptop("Lenovo",879,"Iron grey","Lenovo V17","Windows 11 Pro","16 GB"," Display 17,3");
const laptop3 = new Laptop("Acer",599,"Black","A317-52-59DN","Windows 11","8 GB","17,3 FHD Display");
const laptop4 = new Laptop("Apple",990.99,"Gold","Neues Apple MacBook Air mit Apple M1 Chip","MacOS Big Sur","8 GB","13 zoll Retina Display");
const laptop5 = new Laptop("Dell",795,"Platinum Silver","Inspiron 15 5518","Windows 10","8 GB","15.6 Zoll FHD");
const laptopProdukts = [laptop1,laptop2,laptop3,laptop4,laptop5];


const maus1 = new Maus("LODVIE", 10, "Black", "Optisch" );
const maus2 = new Maus("PASONOMI", 16.34, "Green", "Optisch" );
const maus3 = new Maus("Inphic", 15.59, "Black", "Optisch" );
const maus4 = new Maus("TedGem", 12.99, "Rot", "Optisch" );
const maus5 = new Maus("FTS - NOTEBOOK OPTIONS", 32.99, "Rot", "Track On" );

const mausProdukts = [maus1,maus2,maus3,maus4,maus5];

export {laptopProdukts,kopfhörerProdukts,mausProdukts}

