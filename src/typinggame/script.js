window.addEventListener('load', init);


let messagegameover;
messagegameover = "<span style='color:#ff0000'>Game over!</span>"; // store the string

let messagecorrect;
messagecorrect = "<span style='color:green'>Correct!!</span>"; 

//**************

const select = document.getElementById("language-select");
const textSpan = document.getElementById("text-span");
const valueSpan = document.getElementById("value-span");

function showTextAndValue(select, textSpan, valueSpan) {
    const option = select.options[select.selectedIndex];
    if (option) {
        textSpan.textContent = option.text;
        valueSpan.textContent = option.value;
    } else {
        // No option is selected
        textSpan.textContent = "";
        valueSpan.textContent = "";
    }
}

// Show on page load
//showTextAndValue(select, textSpan, valueSpan);
showTextAndValue(select, textSpan, valueSpan);

// Hook the `input` event
select.addEventListener("input", () => {
    // Update the contents of the elements
    showTextAndValue(select, textSpan, valueSpan);
});


// Schwierigkeitsgrad
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// Auswahl des Schwierigkeitsgrads
const currentLevel = levels.easy;

// Globale Variablen
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM-Elemente
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

var words = {
	wordslat: [
'Abies', 'Acacia', 'Acanthus', 'Accipiter', 'Acer', 'Achillea', 'Aconitum', 'Acorus', 'Acrocephalus', 'Actinidia', 'Actitis', 'Adansonia', 'Adonis', 'Aegithalos', 'Aegopodium', 'Aegypius', 'Aesculus', 'Aethusa', 'Agaricus', 'Agathis', 'Aglais', 'Ailanthus', 'Aix', 'Ajuga', 'Alauda', 'Albizia', 'Alca', 'Alcedo', 'Alchemilla', 'Alectoris', 'Alle', 'Alliaria', 'Allium', 'Alnus', 'Alopochen', 'Althaea', 'Amblyraja', 'Amomum', 'Anas', 'Anemone', 'Angelica', 'Anser', 'Anthemis', 'Anthriscus', 'Anthus', 'Apium', 'Aptenodytes', 'Apus', 'Aquila', 'Arbutus', 'Arctium', 'Arctostaphylos', 'Ardea', 'Ardeola', 'Arenaria', 'Arenga', 'Argyrosomus', 'Artemisia', 'Artocarpus', 'Asio', 'Aspidistra', 'Asplenium', 'Athene', 'Atriplex', 'Atropa', 'Auxis', 'Aythya', 'Backhousia', 'Balaenoptera', 'Bambusa', 'Bellis', 'Belone', 'Betula', 'Bolinus', 'Boops', 'Borago', 'Botaurus', 'Bothidae', 'Branta', 'Brassica', 'Brosimum', 'Bubo', 'Buccinum', 'Bucephala', 'Buddleja', 'Burhinus', 'Buteo', 'Buxus', 'Calandrella', 'Calcarius', 'Calidris', 'Callitris', 'Calonectris', 'Campanula', 'Cantharellus', 'Capparis', 'Caprimulgus', 'Capsicum', 'Carduelis', 'Carpinus', 'Carum', 'Castanea', 'Cecropia', 'Cedrus', 'Centaurea', 'Centaurium', 'Cepphus', 'Ceratonia', 'Ceratophrys', 'Cercidiphyllum', 'Cercis', 'Cercotrichas', 'Certhia', 'Cettia', 'Chaerophyllum', 'Chalcas', 'Chamaedorea', 'Chamaemelum', 'Chamaerops', 'Charadrius', 'Chelidonichthys', 'Chelidonium', 'Cherifolium', 'Chlidonias', 'Chlorophytum', 'Cichorium', 'Ciconia', 'Cicuta', 'Cinchona', 'Cinclus', 'Cinnamomum', 'Cinnamonum', 'Circaetus', 'circus', 'Cisticola', 'Citrus', 'Clamator', 'Clangula', 'Clupea', 'Clupeidae', 'Coccothraustes', 'Cocos', 'Columba', 'Conger', 'Conium', 'Convallaria', 'Convolvulus', 'Coracias', 'Coriandrum', 'Cornus', 'Corvus', 'Corylus', 'Coryphaenoides', 'Coturnix', 'Crangon', 'Crataegus', 'Crescentia', 'Crocus', 'Cryptomeria', 'Cuculus', 'Cuminum', 'Cyanopica', 'Cyclopterus', 'Cydonia', 'Cygnus', 'Cymbopogon', 'Cyprinus', 'Cystophora', 'Cytisus', 'Danaus', 'Dasyatis', 'Daucus', 'Delichon', 'Delonix', 'Deutzia', 'Dicentrarchus', 'Digitalis', 'Dracaena', 'Dryocopus', 'Dryopteris', 'Echinococcus', 'Echium', 'Egretta', 'Eira', 'Elaeagnus', 'Elanus', 'Eliomys', 'Emberiza', 'Engraulidae', 'Engraulis', 'Ensis', 'Epilobium', 'Epinephelinae', 'Epinephelus', 'Equisetum', 'Eremophila', 'Eriodendron', 'Eriophyllum', 'Erithacus', 'Erodium', 'Eruca', 'Esox', 'Eucalyptus', 'Eudyptes', 'Eupatorium', 'Euphorbia', 'Euphrasia', 'Eutrigla', 'Fagopyrum', 'Fagus', 'Falco', 'Feronia', 'Ficedula', 'Ficus', 'Filipendula', 'Foeniculum', 'Frangula', 'Fratercula', 'Fringilla', 'Fulica', 'Fulmarus', 'Fumaria', 'Gadus', 'Galanthus', 'Galeorhinus', 'Galerida', 'Galium', 'Gallinago', 'Gallinula', 'Garrulus', 'Gasterosteidae', 'Gavia', 'Gelochelidon', 'Genista', 'Geometridae', 'Ginkgo', 'Glareola', 'Glaucidium', 'Glechoma', 'Glis', 'Glycine', 'Glycymeris', 'Glycyrrhiza', 'Glyptocephalus', 'Gonepteryx', 'Grus', 'Gulo', 'Gynostemma', 'Gypaetus', 'Gyps', 'Haematopus', 'Haliaeetus', 'Haliotis', 'Hedera', 'Helichrysum', 'Helicolenus', 'Helipterium', 'Heracleum', 'Herba', 'Hexaplex', 'Hibiscus', 'Hieracium', 'Himantopus', 'Hippoglossus', 'Hippolais', 'Hippophae', 'Hirundo', 'Homarus', 'Humulus', 'Hydrobates', 'Hyla', 'Hylotelephium', 'Hypericum', 'Hyssopus', 'Ilex', 'Illicium', 'Inula', 'Iphiclides', 'Ixobrychus', 'Juglans', 'Juniperus', 'Jynx', 'Koelreuteria', 'Labrus', 'Laburnum', 'Lactarius', 'Lactuca', 'Lagetta', 'Lamium', 'Lampetra', 'Lanius', 'Lapsana', 'Larix', 'Larus', 'Laurus', 'Lavandula', 'Leopardus', 'Lepidium', 'Lepidocybium', 'Lepidorhombus', 'Leucanthemum', 'Leucoraja', 'Levisticum', 'Ligustrum', 'Limosa', 'Linum', 'Liquidambar', 'Liriodendron', 'Littorina', 'Locustella', 'Loligo', 'Lonicera', 'Lophius', 'Lotus', 'Loxia', 'Lucanus', 'Lullula', 'Lumbricidae', 'Lupinus', 'Luscinia', 'Lycopodium', 'Lymnocryptes', 'Maiorana', 'Malus', 'Malva', 'Mandrillus', 'Marmaronetta', 'martes', 'Melaleuca', 'Melanitta', 'Melanocorypha', 'Melanogrammus', 'Melarhaphe', 'Melilotus', 'Melissa', 'Melopsittacus', 'Menta', 'Mentha', 'Mergellus', 'Mergus', 'Merlangius', 'Merluccius', 'Merops', 'Mespilus', 'Meum', 'Microstomus', 'Milvus', 'Mimus', 'Molva', 'Montia', 'Monticola', 'Montifringilla', 'Moronidae', 'Morus', 'Motacilla', 'Mullus', 'Muraenidae', 'Muscicapa', 'Myiopsitta', 'Myosotis', 'Myristica', 'Myrmecophaga', 'Myrtus', 'Mytilus', 'Narcissus', 'Nasturtium', 'Necora', 'Neophron', 'Nephrops', 'Netta', 'Nigella', 'Nucella', 'Nucifraga', 'Numenius', 'Nyctibius', 'Nycticorax', 'Oceanodroma', 'Ocimum', 'Octopus', 'Oenanthe', 'Oenothera', 'Ondatra', 'Ononis', 'Opuntia', 'Origanum', 'Oriolus', 'Oryctes', 'Ostrea', 'Ostrya', 'Otis', 'Otus', 'Ovibos', 'Ovis', 'Oxydendrum', 'Oxyura', 'Paeonia', 'Pagellus', 'Pagrus', 'Pandalus', 'Pandion', 'Panurus', 'Papaver', 'Papilio', 'Parus', 'Passer', 'Pastinaca', 'Patella', 'Pecten', 'Pelophylax', 'Perdix', 'Pernis', 'Petasites', 'Petromyzontiformes', 'Petronia', 'Petroselinum', 'Peumus', 'Phalacrocorax', 'Phalaropus', 'Phasianus', 'Philadelphus', 'Philomachus', 'Phlomis', 'Phocoenidae', 'Phoenicopterus', 'Phoenicurus', 'Phoenix', 'Phylloscopus', 'pica', 'Picea', 'Picus', 'Pimenta', 'Pimpinella', 'Pinus', 'Piper', 'Plantago', 'Platalea', 'Platanus', 'Plectrophenax', 'Plegadis', 'Pleuronectes', 'Pluvialis', 'Podiceps', 'Pollachius', 'Pollicipes', 'Populus', 'Porphyrio', 'Portulaca', 'Porzana', 'Primula', 'Prunella', 'Prunus', 'Psittacula', 'Pterocarya', 'Pterocles', 'Ptyonoprogne', 'Puffinus', 'Pygoscelis', 'Pyrrhocorax', 'Pyrrhula', 'Pyrus', 'Quassia', 'Quercus', 'Raja', 'Rallus', 'Raphanus', 'Recurvirostra', 'Regulus', 'Remiz', 'Rhizoma', 'Rhus', 'Ribes', 'Ricinus', 'Riparia', 'Rissa', 'rocyon', 'Rosa', 'Rosmarinus', 'Rumex', 'Salicornia', 'Salix', 'Salmo', 'Salvia', 'Sambucus', 'Sapindus', 'Saponaria', 'Sardina', 'Satureja', 'Saxicola', 'Schinus', 'Scolopax', 'Scomber', 'Scophthalmus', 'Scyliorhinus', 'Securigera', 'Semen', 'Sempervivum', 'Senecio', 'Sequoiadendron', 'Serenoa', 'Serinus', 'Sesamum', 'Silene', 'Sitta', 'Smilax', 'Solanum', 'Solea', 'Solidago', 'Somateria', 'Sophora', 'Sorbus', 'Sparisoma', 'Sparus', 'Sphyrna', 'Spondyliosoma', 'Sprattus', 'Squalus', 'Stachys', 'Steganopus', 'Stellaria', 'Stercorarius', 'Sterna', 'Streptopelia', 'Strix', 'Sturnus', 'Styrax', 'Suricata', 'Swietania', 'Sylvia', 'Symphytum', 'Syncerus', 'Syringa', 'Tachybaptus', 'Tadorna', 'Taeniopygia', 'Tamarindus', 'Tanacetum', 'Tectona', 'Terminalia', 'Tetrao', 'Tetrax', 'Thuja', 'Thunnus', 'Thymus', 'Tichodroma', 'Tilia', 'Trachurus', 'Tremarctos', 'Trifolium', 'Trillium', 'Tringa', 'Trisopterus', 'Troglodytes', 'Tropaeolum', 'Turdus', 'Turnix', 'Tussilago', 'Tyto', 'Ulmus', 'Upupa', 'Uria', 'Vaccinium', 'Valeriana', 'Vanellus', 'Vanessa', 'Vanilla', 'Veneridae', 'Venus', 'Verbascum', 'Verbena', 'Veronica', 'Vicia', 'Viola', 'Vipera', 'Viscum', 'Vitex', 'Vitis', 'Vulpes', 'Xiphias', 'Zanthoxylum', 'Zenaida', 'Ziziphus'
],

   wordsbulg: [
'прехвъркващите', 'приправел', 'отърчаване', 'домъквали', 'оглозгваща', 'надирате', 'соляща', 'запрашвахте', 'рехабилитират', 'опридащ', 'хуквай', 'подплатили', 'дълбаелият', 'архимандрити', 'бедило', 'наемодателки', 'формообразуваната', 'инквизиционна', 'устискащо', 'разгорещяваният', 'полягваният', 'захабилата', 'минералогическата', 'впрягащо', 'пооткрехващото', 'пробутваща', 'свираните', 'намацвало', 'изчисляемата'
],

   wordsgreek: [
'οικείος', 'πρόοδος', 'ειδήσεις', 'ιστορίας', 'δεύτερος', 'ισολογισμός', 'ιστορίας', 'δεύτερος', 'ισολογισμός', 'παύσης', 'πρέπει', 'πείρας', 'παππούς', 'πλοηγός', 'προτροπή', 'παπάς', 'αξιόπιστος', 'περισσότερα', 'απαραίτητος', 'πληκτρολόγιο', 'τεστ', 'διότι', 'πλήκτρα', 'επιστολή', 'συγγραφεύς', 'σύνταξη', 'τεστ', 'ελευθερία', 'τυπογραφία', 'απαραίτητος', 'δακτυλογραφία', 'ώρα', 'μήλα', 'τώρα', 'μελωδία', 'μισθωτής', 'θεωρώ', 'ωραίος', 'γράμμα', 'κρέμα', 'βάση', 'νέος', 'άννα', 'βαίνω', 'βωμός', 'βλέμμα', 'ναυτιλία', 'βιβλιοθήκη', 'βιβλιοθήκη', 'μαυροπίνακας', 'βιβλιοπωλείο', 'βιβλιοθήκη', 'μαυροπίνακας', 'βιβλιοπωλείο', 'ψωμί', 'ψύξη', 'ψέμα', 'ύψος', 'ψηλορείτης', 'υψόμετρο', 'ψωμί', 'ψύξη', 'ψέμα', 'ύψος', 'ψηλορείτης', 'υψόμετρο', 'ψιθύρισμα', 'υψώνω', 'ψαλίδι', 'ψάρι', 'ψηφοδέλτια', 'ψιθύρισμα', 'υψώνω', 'ψαλίδι', 'ψάρι', 'ψηφοδέλτια', 'χρήσιμος', 'χρειάζομαι', 'σχολή', 'ψυχίατρος', 'χρήσιμος', 'χρειάζομαι', 'σχολή', 'ψυχίατρος', 'διαφωνώ'
],

   wordsrussian: [
'пропажа', 'подпол', 'рыло', 'лорд', 'вар', 'флора', 'пожар', 'форвард', 'фавор', 'доллар', 'форвард', 'плодовод', 'опара', 'провод', 'аврора', 'жопа', 'лорд', 'парад', 'порыв', 'порог', 'глажка', 'голодовка', 'подлог', 'волк', 'аккорд', 'выкопка', 'прожгла', 'прыг', 'аквадаг', 'пожгла', 'кол', 'поправка', 'галка', 'галлов', 'каков', 'лодка', 'профорг', 'копров', 'вышла', 'паша', 'шарж', 'углу', 'полкруга', 'кувалда', 'укупорка', 'купаж', 'порука', 'полушка', 'выплыву', 'кушак', 'радужка', 'ожгу', 'гложу', 'полуовал', 'выкуп', 'вурдалак', 'форшлаг', 'щуп', 'ловцов', 'цуг', 'цыц', 'рыща', 'цыпка', 'пращур', 'укрощу', 'пуща', 'цацка', 'пощада', 'вдовцов', 'укрощу', 'огурцов', 'царап', 'цацка', 'цок', 'глупцов', 'вдовцов', 'цыпка', 'цыпка', 'воплощу', 'шаговый', 'зайцу', 'пыжовый', 'какой', 'лавровый', 'зайцы', 'горазд', 'гораздо', 'зазор', 'шаговый', 'грузовой', 'увоз', 'луговой', 'зайцы', 'дворцовый', 'полувзвод', 'каравай', 'опухлый', 'пухлый', 'хорда', 'хлопок', 'хлороз', 'уху', 'продух', 'хохла', 'хруп', 'эпоха', 'холщовый', 'роздыху', 'уход', 'халвовый', 'хлопковый', 'пух', 'роздыху', 'холуй', 'паховый', 'холуй', 'храп', 'полдома', 'выпь', 'помол', 'майка', 'подгруздь', 'крайком', 'пампа', 'волдырь', 'мороз', 'вуалька', 'эльф', 'млад', 'мазок', 'мальва', 'полдома', 'фольговый', 'мор', 'ломка', 'падаль', 'храм', 'камзол', 'араб', 'складка', 'осыпь', 'волопас', 'бой', 'сагайдак', 'духоборка', 'мольба', 'сухарь', 'сыр', 'облый', 'вспышка', 'сброд', 'улыбка', 'бобра', 'умбра', 'зуб', 'забудь', 'колосс', 'подопрусь', 'парчой', 'хрюшка', 'ворочу', 'обобью', 'бочка', 'шлюз', 'чадра', 'обочлась', 'колючка', 'парчою', 'закучу', 'взлохмачусь', 'шлюзовой', 'дача', 'вольюсь', 'купюра', 'пасюк', 'качка', 'кавычка', 'соболёк', 'прожёгся', 'пляска', 'заклёклый', 'язь', 'взошёл', 'попёр', 'кляп', 'вопьёшься', 'скрёбся', 'язёвый', 'попячу', 'марьяж', 'горяч', 'валуях', 'впёрся', 'побрякушка', 'погрызёшь', 'бобёр', 'запрём', 'обожжёшь', 'хозяйка', 'грязь', 'взобьёшь', 'ожжёмся', 'поймёшь', 'гусляр', 'сгрызём', 'прялка', 'чёл', 'обопрёшь', 'склёпка', 'окромя', 'займём', 'корявый', 'запряжка', 'ухажёр', 'подзарядка', 'вопьёшься', 'поём', 'впрямую', 'подсядь', 'воробьём', 'выпрячься', 'яблочко', 'коряга', 'обовьёмся', 'Абрам', 'Прасковья', 'Прасковья', 'Оскар', 'Лёша', 'Ромка', 'Васька', 'Ирка', 'Валя', 'Элла', 'Люба', 'Паша', 'Вася', 'Маруся', 'Боря', 'Фома', 'Сашка', 'Оскар', 'Вова', 'Паллада', 'Лёвка', 'Васька', 'Валя', 'Карл', 'Клара', 'Жора', 'Вовочка', 'Гошка', 'Лёвка', 'Ксюшка', 'Магда', 'Юра', 'Уралмаш', 'Карл', 'Абрам', 'Марфа', 'Оскар', 'Паша', 'Юлька', 'Уралмаш', 'Иуда', 'Софья', 'Марк', 'Надька', 'Карл', 'Исаак', 'Аглая', 'Пашка', 'Лука', 'Софья', 'Алёша', 'Абрам', 'Ермолай', 'Ксюха', 'Алёша', 'Вова', 'Абрам', 'Лазарь', 'Ксюха', 'Икар', 'Якоб', 'Маруська', 'Вася', 'Ксюха', 'Надька', 'Алёха'
]
}


// Spielstart
function init() {
  // Zahl in Sekunden anzeigen
  seconds.innerHTML = currentLevel;  
  // Lade Wörter aus Array
  showWord(select); //anpassen
  // Worteingabe prüfen
  wordInput.addEventListener('input', startGame);
  // Countdown Sekunden
  setInterval(countdown, 1000);
  // Spielstatus
  setInterval(checkStatus,50);
} 

// Wortgleichheit prüfen
function startGame() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(select); //so lassen
    wordInput.value = '';
    score++;
  }
  // wenn score <0, dann 0
  if(score === -1 ) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
  
}

// prüfen ob Wörter gleich
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = messagecorrect;
    return true;
  } else {
    message.innerHTML = ' ';
    return false;
  }
}



// zufällige Wortanzeige
function showWord(select) {
	
   var seleclang = document.getElementById("value-span").innerHTML; 
   
 

  // zufälliges Array für Index
  const randIndex = Math.floor(Math.random() * words[seleclang].length); //anpassen
  // zufälliges Wort
  currentWord.innerHTML = words[seleclang][randIndex]; //anpassen
}

// timer
function countdown() {
  // prüfen, ob Zeit abgelaufen
  if(time > 0) {
    // abnehmend
    time--;
  } else if(time === 0) {
    // Spielende
    isPlaying = false;
  } 
  // Restzeit
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if(!isPlaying && time === 0) {
    //message.innerHTML = 'Game Over!!!';
	message.innerHTML = messagegameover;
    score = -1;
  }
}
