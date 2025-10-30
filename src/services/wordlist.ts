import { Word } from '../types';

export const wordList: Word[] = [
  // Existing Words
  {
    word: "Apfel",
    article: "der",
    translations: { en: "apple", tr: "elma" },
    sentences: {
      nominativ: { de: "Der Apfel ist rot.", en: "The apple is red.", tr: "Elma kırmızıdır." },
      akkusativ: { de: "Ich esse den Apfel.", en: "I am eating the apple.", tr: "Elmayı yiyorum." },
    },
  },
  {
    word: "Adresse",
    article: "die",
    translations: { en: "address", tr: "adres" },
    sentences: {
      nominativ: { de: "Die Adresse ist lang.", en: "The address is long.", tr: "Adres uzun." },
      akkusativ: { de: "Können Sie mir die Adresse geben?", en: "Can you give me the address?", tr: "Bana adresi verebilir misiniz?" },
    },
  },
  {
    word: "Auto",
    article: "das",
    translations: { en: "car", tr: "araba" },
    sentences: {
      nominativ: { de: "Das Auto ist neu.", en: "The car is new.", tr: "Araba yeni." },
      akkusativ: { de: "Er kauft das Auto.", en: "He is buying the car.", tr: "O, arabayı satın alıyor." },
    },
  },
  {
    word: "Bahnhof",
    article: "der",
    translations: { en: "train station", tr: "tren istasyonu" },
    sentences: {
      nominativ: { de: "Der Bahnhof ist groß.", en: "The train station is big.", tr: "Tren istasyonu büyük." },
      akkusativ: { de: "Wir suchen den Bahnhof.", en: "We are looking for the train station.", tr: "Tren istasyonunu arıyoruz." },
    },
  },
  {
    word: "Blume",
    article: "die",
    translations: { en: "flower", tr: "çiçek" },
    sentences: {
      nominativ: { de: "Die Blume riecht gut.", en: "The flower smells good.", tr: "Çiçek güzel kokuyor." },
      akkusativ: { de: "Ich sehe die Blume.", en: "I see the flower.", tr: "Çiçeği görüyorum." },
    },
  },
  {
    word: "Buch",
    article: "das",
    translations: { en: "book", tr: "kitap" },
    sentences: {
      nominativ: { de: "Das Buch ist interessant.", en: "The book is interesting.", tr: "Kitap ilginç." },
      akkusativ: { de: "Sie liest das Buch.", en: "She is reading the book.", tr: "O, kitabı okuyor." },
    },
  },
  {
    word: "Tisch",
    article: "der",
    translations: { en: "table", tr: "masa" },
    sentences: {
      nominativ: { de: "Der Tisch ist aus Holz.", en: "The table is made of wood.", tr: "Masa ahşaptan yapılmıştır." },
      akkusativ: { de: "Er stellt die Vase auf den Tisch.", en: "He places the vase on the table.", tr: "Vazoyu masanın üzerine koyuyor." },
    },
  },
  {
    word: "Lampe",
    article: "die",
    translations: { en: "lamp", tr: "lamba" },
    sentences: {
      nominativ: { de: "Die Lampe ist hell.", en: "The lamp is bright.", tr: "Lamba parlak." },
      akkusativ: { de: "Ich schalte die Lampe an.", en: "I am turning on the lamp.", tr: "Lambayı açıyorum." },
    },
  },
  // Newly Added Words from PDF (A-Z)
  {
    word: "Abfahrt",
    article: "die",
    translations: { en: "departure", tr: "kalkış" },
    sentences: {
      nominativ: { de: "Die Abfahrt ist um 10 Uhr.", en: "The departure is at 10 o'clock.", tr: "Kalkış saat 10'da." },
      akkusativ: { de: "Wir müssen die Abfahrt auf dem Plan finden.", en: "We have to find the departure on the schedule.", tr: "Kalkışı programda bulmalıyız." },
    },
  },
  {
    word: "Absender",
    article: "der",
    translations: { en: "sender", tr: "gönderen" },
    sentences: {
      nominativ: { de: "Der Absender steht auf dem Briefumschlag.", en: "The sender is on the envelope.", tr: "Gönderen zarfın üzerinde yazıyor." },
      akkusativ: { de: "Ich kann den Absender nicht lesen.", en: "I cannot read the sender.", tr: "Göndereni okuyamıyorum." },
    },
  },
  {
    word: "Ansage",
    article: "die",
    translations: { en: "announcement", tr: "anons" },
    sentences: {
      nominativ: { de: "Die Ansage am Bahnhof war undeutlich.", en: "The announcement at the station was unclear.", tr: "İstasyondaki anons belirsizdi." },
      akkusativ: { de: "Hören Sie die Ansage genau an.", en: "Listen to the announcement carefully.", tr: "Anonsu dikkatle dinleyin." },
    },
  },
  {
    word: "Anschluss",
    article: "der",
    translations: { en: "connection", tr: "bağlantı / aktarma" },
    sentences: {
      nominativ: { de: "Der Anschluss nach Hamburg hat Verspätung.", en: "The connection to Hamburg is delayed.", tr: "Hamburg aktarması gecikti." },
      akkusativ: { de: "Ich brauche einen Internet-Anschluss.", en: "I need an internet connection.", tr: "İnternet bağlantısına ihtiyacım var." },
    },
  },
  {
    word: "Antwort",
    article: "die",
    translations: { en: "answer", tr: "cevap" },
    sentences: {
      nominativ: { de: "Die Antwort ist richtig.", en: "The answer is correct.", tr: "Cevap doğru." },
      akkusativ: { de: "Ich warte auf eine Antwort.", en: "I am waiting for an answer.", tr: "Bir cevap bekliyorum." },
    },
  },
  {
    word: "Anzeige",
    article: "die",
    translations: { en: "advertisement", tr: "ilan" },
    sentences: {
      nominativ: { de: "Die Anzeige in der Zeitung war interessant.", en: "The advertisement in the newspaper was interesting.", tr: "Gazetedeki ilan ilginçti." },
      akkusativ: { de: "Ich habe eine Anzeige für die Wohnung gesehen.", en: "I saw an advertisement for the apartment.", tr: "Daire için bir ilan gördüm." },
    },
  },
  {
    word: "Apartment",
    article: "das",
    translations: { en: "apartment", tr: "apartman dairesi" },
    sentences: {
      nominativ: { de: "Das Apartment ist modern eingerichtet.", en: "The apartment is modernly furnished.", tr: "Daire modern bir şekilde döşenmiş." },
      akkusativ: { de: "Wir mieten ein Apartment für den Urlaub.", en: "We are renting an apartment for the vacation.", tr: "Tatil için bir daire kiralıyoruz." },
    },
  },
  {
    word: "Appetit",
    article: "der",
    translations: { en: "appetite", tr: "iştah" },
    sentences: {
      nominativ: { de: "Der Appetit kommt beim Essen.", en: "Appetite comes with eating.", tr: "İştah yemekle birlikte gelir." },
      akkusativ: { de: "Ich habe heute keinen Appetit.", en: "I have no appetite today.", tr: "Bugün iştahım yok." },
    },
  },
  {
    word: "Arbeit",
    article: "die",
    translations: { en: "work / job", tr: "iş" },
    sentences: {
      nominativ: { de: "Die Arbeit macht Spaß.", en: "The work is fun.", tr: "İş eğlenceli." },
      akkusativ: { de: "Er sucht eine neue Arbeit.", en: "He is looking for a new job.", tr: "Yeni bir iş arıyor." },
    },
  },
  {
    word: "Arbeitsplatz",
    article: "der",
    translations: { en: "workplace", tr: "iş yeri" },
    sentences: {
      nominativ: { de: "Mein Arbeitsplatz ist in der Nähe.", en: "My workplace is nearby.", tr: "İş yerim yakınlarda." },
      akkusativ: { de: "Ich fahre mit dem Bus zum Arbeitsplatz.", en: "I take the bus to the workplace.", tr: "İş yerine otobüsle gidiyorum." },
    },
  },
  {
    word: "Arm",
    article: "der",
    translations: { en: "arm", tr: "kol" },
    sentences: {
      nominativ: { de: "Mein rechter Arm tut weh.", en: "My right arm hurts.", tr: "Sağ kolum ağrıyor." },
      akkusativ: { de: "Er hat sich den Arm gebrochen.", en: "He broke his arm.", tr: "Kolunu kırdı." },
    },
  },
  {
    word: "Arzt",
    article: "der",
    translations: { en: "doctor", tr: "doktor" },
    sentences: {
      nominativ: { de: "Der Arzt ist sehr freundlich.", en: "The doctor is very friendly.", tr: "Doktor çok cana yakın." },
      akkusativ: { de: "Ich muss einen Arzt aufsuchen.", en: "I have to see a doctor.", tr: "Bir doktora görünmeliyim." },
    },
  },
  {
    word: "Aufgabe",
    article: "die",
    translations: { en: "task / exercise", tr: "görev / alıştırma" },
    sentences: {
      nominativ: { de: "Die Aufgabe ist schwierig.", en: "The task is difficult.", tr: "Görev zor." },
      akkusativ: { de: "Machen Sie bitte die Aufgabe.", en: "Please do the exercise.", tr: "Lütfen alıştırmayı yapın." },
    },
  },
  {
    word: "Aufzug",
    article: "der",
    translations: { en: "elevator", tr: "asansör" },
    sentences: {
      nominativ: { de: "Der Aufzug ist kaputt.", en: "The elevator is broken.", tr: "Asansör bozuk." },
      akkusativ: { de: "Wir nehmen den Aufzug.", en: "We are taking the elevator.", tr: "Asansöre biniyoruz." },
    },
  },
  {
    word: "Auge",
    article: "das",
    translations: { en: "eye", tr: "göz" },
    sentences: {
      nominativ: { de: "Sein linkes Auge ist blau.", en: "His left eye is blue.", tr: "Onun sol gözü mavi." },
      akkusativ: { de: "Sie hat schöne Augen.", en: "She has beautiful eyes.", tr: "Onun güzel gözleri var." },
    },
  },
  {
    word: "Ausflug",
    article: "der",
    translations: { en: "trip / excursion", tr: "gezi" },
    sentences: {
      nominativ: { de: "Der Ausflug war toll.", en: "The trip was great.", tr: "Gezi harikaydı." },
      akkusativ: { de: "Wir machen einen Ausflug.", en: "We are going on a trip.", tr: "Bir gezi yapıyoruz." },
    },
  },
  {
    word: "Ausgang",
    article: "der",
    translations: { en: "exit", tr: "çıkış" },
    sentences: {
      nominativ: { de: "Der Ausgang ist dort drüben.", en: "The exit is over there.", tr: "Çıkış orada." },
      akkusativ: { de: "Ich finde den Ausgang nicht.", en: "I can't find the exit.", tr: "Çıkışı bulamıyorum." },
    },
  },
  {
    word: "Auskunft",
    article: "die",
    translations: { en: "information", tr: "bilgi / danışma" },
    sentences: {
      nominativ: { de: "Die Auskunft ist kostenlos.", en: "The information is free.", tr: "Bilgi ücretsizdir." },
      akkusativ: { de: "Ich brauche eine Auskunft.", en: "I need some information.", tr: "Bilgiye ihtiyacım var." },
    },
  },
  {
    word: "Ausland",
    article: "das",
    translations: { en: "abroad", tr: "yurt dışı" },
    sentences: {
      nominativ: { de: "Das Ausland ist interessant.", en: "Foreign countries are interesting.", tr: "Yurt dışı ilginçtir." },
      akkusativ: { de: "Er reist oft ins Ausland.", en: "He often travels abroad.", tr: "Sık sık yurt dışına seyahat eder." },
    },
  },
  {
    word: "Ausländer",
    article: "der",
    translations: { en: "foreigner", tr: "yabancı" },
    sentences: {
      nominativ: { de: "Der Ausländer spricht gut Deutsch.", en: "The foreigner speaks German well.", tr: "Yabancı iyi Almanca konuşuyor." },
      akkusativ: { de: "Sie hat einen Ausländer geheiratet.", en: "She married a foreigner.", tr: "Bir yabancıyla evlendi." },
    },
  },
  {
    word: "Aussage",
    article: "die",
    translations: { en: "statement", tr: "ifade" },
    sentences: {
      nominativ: { de: "Die Aussage ist klar.", en: "The statement is clear.", tr: "İfade açık." },
      akkusativ: { de: "Er hat eine falsche Aussage gemacht.", en: "He made a false statement.", tr: "Yanlış bir ifade verdi." },
    },
  },
  {
    word: "Ausweis",
    article: "der",
    translations: { en: "ID card", tr: "kimlik" },
    sentences: {
      nominativ: { de: "Mein Ausweis ist abgelaufen.", en: "My ID card has expired.", tr: "Kimliğimin süresi doldu." },
      akkusativ: { de: "Zeigen Sie bitte Ihren Ausweis.", en: "Please show your ID card.", tr: "Lütfen kimliğinizi gösterin." },
    },
  },
  {
    word: "Autobahn",
    article: "die",
    translations: { en: "highway", tr: "otoyol" },
    sentences: {
      nominativ: { de: "Die Autobahn ist frei.", en: "The highway is clear.", tr: "Otoyol açık." },
      akkusativ: { de: "Wir fahren auf die Autobahn.", en: "We are getting on the highway.", tr: "Otoyola giriyoruz." },
    },
  },
  {
    word: "Automat",
    article: "der",
    translations: { en: "vending machine", tr: "otomat" },
    sentences: {
      nominativ: { de: "Der Automat funktioniert nicht.", en: "The vending machine is not working.", tr: "Otomat çalışmıyor." },
      akkusativ: { de: "Ich hole ein Ticket am Automaten.", en: "I am getting a ticket from the machine.", tr: "Otomattan bilet alıyorum." },
    },
  },
  {
    word: "Baby",
    article: "das",
    translations: { en: "baby", tr: "bebek" },
    sentences: {
      nominativ: { de: "Das Baby ist süß.", en: "The baby is cute.", tr: "Bebek tatlı." },
      akkusativ: { de: "Sie sehen das Baby.", en: "They see the baby.", tr: "Bebeği görüyorlar." },
    },
  },
  {
    word: "Bäckerei",
    article: "die",
    translations: { en: "bakery", tr: "fırın" },
    sentences: {
      nominativ: { de: "Die Bäckerei öffnet früh.", en: "The bakery opens early.", tr: "Fırın erken açılıyor." },
      akkusativ: { de: "Ich gehe zur Bäckerei.", en: "I am going to the bakery.", tr: "Fırına gidiyorum." },
    },
  },
  {
    word: "Bad",
    article: "das",
    translations: { en: "bathroom / bath", tr: "banyo" },
    sentences: {
      nominativ: { de: "Das Bad ist sauber.", en: "The bathroom is clean.", tr: "Banyo temiz." },
      akkusativ: { de: "Ich nehme ein Bad.", en: "I am taking a bath.", tr: "Banyo yapıyorum." },
    },
  },
  {
    word: "Bahn",
    article: "die",
    translations: { en: "train / railway", tr: "tren / demiryolu" },
    sentences: {
      nominativ: { de: "Die Bahn kommt pünktlich.", en: "The train arrives on time.", tr: "Tren zamanında geliyor." },
      akkusativ: { de: "Ich nehme die nächste Bahn.", en: "I'll take the next train.", tr: "Bir sonraki trene bineceğim." },
    },
  },
  {
    word: "Bahnsteig",
    article: "der",
    translations: { en: "platform", tr: "peron" },
    sentences: {
      nominativ: { de: "Der Bahnsteig ist voll.", en: "The platform is full.", tr: "Peron kalabalık." },
      akkusativ: { de: "Wir warten auf dem Bahnsteig.", en: "We are waiting on the platform.", tr: "Peronda bekliyoruz." },
    },
  },
  {
    word: "Balkon",
    article: "der",
    translations: { en: "balcony", tr: "balkon" },
    sentences: {
      nominativ: { de: "Der Balkon hat eine schöne Aussicht.", en: "The balcony has a nice view.", tr: "Balkonun güzel bir manzarası var." },
      akkusativ: { de: "Die Wohnung hat einen Balkon.", en: "The apartment has a balcony.", tr: "Dairenin bir balkonu var." },
    },
  },
  {
    word: "Banane",
    article: "die",
    translations: { en: "banana", tr: "muz" },
    sentences: {
      nominativ: { de: "Die Banane ist gelb.", en: "The banana is yellow.", tr: "Muz sarıdır." },
      akkusativ: { de: "Das Kind isst eine Banane.", en: "The child is eating a banana.", tr: "Çocuk muz yiyor." },
    },
  },
  {
    word: "Bank",
    article: "die",
    translations: { en: "bank / bench", tr: "banka / bank" },
    sentences: {
      nominativ: { de: "Die Bank im Park ist frei.", en: "The bench in the park is free.", tr: "Parktaki bank boş." },
      akkusativ: { de: "Ich gehe zur Bank, um Geld abzuheben.", en: "I'm going to the bank to withdraw money.", tr: "Para çekmek için bankaya gidiyorum." },
    },
  },
  {
    word: "Bauch",
    article: "der",
    translations: { en: "belly / stomach", tr: "karın" },
    sentences: {
      nominativ: { de: "Mein Bauch tut weh.", en: "My stomach hurts.", tr: "Karnım ağrıyor." },
      akkusativ: { de: "Das Baby hat einen runden Bauch.", en: "The baby has a round belly.", tr: "Bebeğin yuvarlak bir karnı var." },
    },
  },
  {
    word: "Baum",
    article: "der",
    translations: { en: "tree", tr: "ağaç" },
    sentences: {
      nominativ: { de: "Der Baum ist sehr alt.", en: "The tree is very old.", tr: "Ağaç çok yaşlı." },
      akkusativ: { de: "Wir pflanzen einen Baum.", en: "We are planting a tree.", tr: "Bir ağaç dikiyoruz." },
    },
  },
  {
    word: "Beamte",
    article: "der",
    translations: { en: "civil servant / official", tr: "memur" },
    sentences: {
      nominativ: { de: "Der Beamte am Schalter war sehr nett.", en: "The official at the counter was very nice.", tr: "Gişedeki memur çok nazikti." },
      akkusativ: { de: "Sie müssen mit dem Beamten sprechen.", en: "You have to speak with the official.", tr: "Memurla konuşmanız gerekiyor." },
    },
  },
  {
    word: "Bein",
    article: "das",
    translations: { en: "leg", tr: "bacak" },
    sentences: {
      nominativ: { de: "Sein linkes Bein ist verletzt.", en: "His left leg is injured.", tr: "Sol bacağı yaralı." },
      akkusativ: { de: "Der Hund hat kurze Beine.", en: "The dog has short legs.", tr: "Köpeğin kısa bacakları var." },
    },
  },
  {
    word: "Beispiel",
    article: "das",
    translations: { en: "example", tr: "örnek" },
    sentences: {
      nominativ: { de: "Das ist ein gutes Beispiel.", en: "That is a good example.", tr: "Bu iyi bir örnek." },
      akkusativ: { de: "Kannst du mir ein Beispiel geben?", en: "Can you give me an example?", tr: "Bana bir örnek verebilir misin?" },
    },
  },
  {
    word: "Bekannte",
    article: "der",
    translations: { en: "acquaintance", tr: "tanıdık" },
    sentences: {
      nominativ: { de: "Ein Bekannter von mir wohnt hier.", en: "An acquaintance of mine lives here.", tr: "Bir tanıdığım burada yaşıyor." },
      akkusativ: { de: "Ich habe einen Bekannten getroffen.", en: "I met an acquaintance.", tr: "Bir tanıdıkla karşılaştım." },
    },
  },
  {
    word: "Beruf",
    article: "der",
    translations: { en: "profession / job", tr: "meslek" },
    sentences: {
      nominativ: { de: "Sein Beruf ist interessant.", en: "His profession is interesting.", tr: "Onun mesleği ilginç." },
      akkusativ: { de: "Welchen Beruf haben Sie?", en: "What is your profession?", tr: "Mesleğiniz nedir?" },
    },
  },
  {
    word: "Bett",
    article: "das",
    translations: { en: "bed", tr: "yatak" },
    sentences: {
      nominativ: { de: "Das Bett ist bequem.", en: "The bed is comfortable.", tr: "Yatak rahat." },
      akkusativ: { de: "Die Kinder gehen ins Bett.", en: "The children are going to bed.", tr: "Çocuklar yatağa gidiyor." },
    },
  },
  {
    word: "Bier",
    article: "das",
    translations: { en: "beer", tr: "bira" },
    sentences: {
      nominativ: { de: "Das Bier ist kalt.", en: "The beer is cold.", tr: "Bira soğuk." },
      akkusativ: { de: "Ich trinke ein Bier.", en: "I am drinking a beer.", tr: "Bir bira içiyorum." },
    },
  },
  {
    word: "Bild",
    article: "das",
    translations: { en: "picture / photo", tr: "resim / fotoğraf" },
    sentences: {
      nominativ: { de: "Das Bild hängt an der Wand.", en: "The picture is hanging on the wall.", tr: "Resim duvarda asılı." },
      akkusativ: { de: "Er malt ein schönes Bild.", en: "He is painting a beautiful picture.", tr: "Güzel bir resim yapıyor." },
    },
  },
  {
    word: "Birne",
    article: "die",
    translations: { en: "pear", tr: "armut" },
    sentences: {
      nominativ: { de: "Die Birne ist saftig.", en: "The pear is juicy.", tr: "Armut sulu." },
      akkusativ: { de: "Ich esse eine Birne.", en: "I am eating a pear.", tr: "Bir armut yiyorum." },
    },
  },
  {
    word: "Bleistift",
    article: "der",
    translations: { en: "pencil", tr: "kurşun kalem" },
    sentences: {
      nominativ: { de: "Der Bleistift ist spitz.", en: "The pencil is sharp.", tr: "Kalem sivri." },
      akkusativ: { de: "Ich brauche einen Bleistift.", en: "I need a pencil.", tr: "Bir kurşun kaleme ihtiyacım var." },
    },
  },
  {
    word: "Blick",
    article: "der",
    translations: { en: "view / glance", tr: "manzara / bakış" },
    sentences: {
      nominativ: { de: "Der Blick aus dem Fenster ist herrlich.", en: "The view from the window is wonderful.", tr: "Pencereden manzara harika." },
      akkusativ: { de: "Sie wirft ihm einen kurzen Blick zu.", en: "She gives him a quick glance.", tr: "Ona kısa bir bakış atıyor." },
    },
  },
  {
    word: "Bogen",
    article: "der",
    translations: { en: "sheet (of paper) / arch", tr: "kağıt / yay" },
    sentences: {
      nominativ: { de: "Der Bogen Papier ist leer.", en: "The sheet of paper is empty.", tr: "Kağıt boş." },
      akkusativ: { de: "Bitte füllen Sie den Bogen aus.", en: "Please fill out the sheet.", tr: "Lütfen kağıdı doldurun." },
    },
  },
  {
    word: "Brief",
    article: "der",
    translations: { en: "letter", tr: "mektup" },
    sentences: {
      nominativ: { de: "Der Brief ist für dich.", en: "The letter is for you.", tr: "Mektup senin için." },
      akkusativ: { de: "Ich schreibe einen Brief.", en: "I am writing a letter.", tr: "Bir mektup yazıyorum." },
    },
  },
  {
    word: "Briefmarke",
    article: "die",
    translations: { en: "stamp", tr: "pul" },
    sentences: {
      nominativ: { de: "Die Briefmarke ist selten.", en: "The stamp is rare.", tr: "Pul nadir." },
      akkusativ: { de: "Ich kaufe eine Briefmarke.", en: "I am buying a stamp.", tr: "Bir pul alıyorum." },
    },
  },
  {
    word: "Brot",
    article: "das",
    translations: { en: "bread", tr: "ekmek" },
    sentences: {
      nominativ: { de: "Das Brot ist frisch.", en: "The bread is fresh.", tr: "Ekmek taze." },
      akkusativ: { de: "Ich esse ein Stück Brot.", en: "I am eating a piece of bread.", tr: "Bir dilim ekmek yiyorum." },
    },
  },
  {
    word: "Brötchen",
    article: "das",
    translations: { en: "bread roll", tr: "küçük ekmek" },
    sentences: {
      nominativ: { de: "Das Brötchen ist knusprig.", en: "The bread roll is crispy.", tr: "Ekmek çıtır." },
      akkusativ: { de: "Ich hätte gern ein Brötchen.", en: "I would like a bread roll.", tr: "Bir küçük ekmek alabilir miyim." },
    },
  },
  {
    word: "Bruder",
    article: "der",
    translations: { en: "brother", tr: "erkek kardeş" },
    sentences: {
      nominativ: { de: "Mein Bruder ist älter als ich.", en: "My brother is older than me.", tr: "Kardeşim benden büyük." },
      akkusativ: { de: "Ich besuche meinen Bruder.", en: "I am visiting my brother.", tr: "Kardeşimi ziyaret ediyorum." },
    },
  },
  {
    word: "Buchstabe",
    article: "der",
    translations: { en: "letter (of alphabet)", tr: "harf" },
    sentences: {
      nominativ: { de: "Der Buchstabe A ist der erste im Alphabet.", en: "The letter A is the first in the alphabet.", tr: "A harfi alfabenin ilk harfidir." },
      akkusativ: { de: "Ich kann diesen Buchstaben nicht lesen.", en: "I cannot read this letter.", tr: "Bu harfi okuyamıyorum." },
    },
  },
  {
    word: "Bus",
    article: "der",
    translations: { en: "bus", tr: "otobüs" },
    sentences: {
      nominativ: { de: "Der Bus kommt gleich.", en: "The bus is coming soon.", tr: "Otobüs birazdan gelecek." },
      akkusativ: { de: "Wir nehmen den Bus.", en: "We are taking the bus.", tr: "Otobüse biniyoruz." },
    },
  },
  {
    word: "Butter",
    article: "die",
    translations: { en: "butter", tr: "tereyağı" },
    sentences: {
      nominativ: { de: "Die Butter ist im Kühlschrank.", en: "The butter is in the fridge.", tr: "Tereyağı buzdolabında." },
      akkusativ: { de: "Ich brauche Butter für den Kuchen.", en: "I need butter for the cake.", tr: "Kek için tereyağına ihtiyacım var." },
    },
  },
  {
    word: "Café",
    article: "das",
    translations: { en: "café", tr: "kafe" },
    sentences: {
      nominativ: { de: "Das Café ist sehr gemütlich.", en: "The café is very cozy.", tr: "Kafe çok rahat." },
      akkusativ: { de: "Wir gehen in ein Café.", en: "We are going to a café.", tr: "Bir kafeye gidiyoruz." },
    },
  },
  {
    word: "CD",
    article: "die",
    translations: { en: "CD", tr: "CD" },
    sentences: {
      nominativ: { de: "Die CD ist zerkratzt.", en: "The CD is scratched.", tr: "CD çizik." },
      akkusativ: { de: "Ich höre eine CD.", en: "I am listening to a CD.", tr: "Bir CD dinliyorum." },
    },
  },
  {
    word: "Chef",
    article: "der",
    translations: { en: "boss", tr: "patron / şef" },
    sentences: {
      nominativ: { de: "Der Chef ist heute nicht im Büro.", en: "The boss is not in the office today.", tr: "Patron bugün ofiste değil." },
      akkusativ: { de: "Ich muss mit dem Chef sprechen.", en: "I have to talk to the boss.", tr: "Patronla konuşmam lazım." },
    },
  },
  {
    word: "Computer",
    article: "der",
    translations: { en: "computer", tr: "bilgisayar" },
    sentences: {
      nominativ: { de: "Der Computer ist neu.", en: "The computer is new.", tr: "Bilgisayar yeni." },
      akkusativ: { de: "Er benutzt den Computer.", en: "He uses the computer.", tr: "Bilgisayarı kullanıyor." },
    },
  },
  {
    word: "Dame",
    article: "die",
    translations: { en: "lady", tr: "hanımefendi" },
    sentences: {
      nominativ: { de: "Die alte Dame ist sehr nett.", en: "The old lady is very nice.", tr: "Yaşlı hanımefendi çok nazik." },
      akkusativ: { de: "Er hilft der alten Dame.", en: "He helps the old lady.", tr: "Yaşlı hanımefendiye yardım ediyor." },
    },
  },
  {
    word: "Dank",
    article: "der",
    translations: { en: "thanks", tr: "teşekkür" },
    sentences: {
      nominativ: { de: "Mein Dank gilt allen Helfern.", en: "My thanks go to all the helpers.", tr: "Teşekkürlerim tüm yardımcılara." },
      akkusativ: { de: "Haben Sie vielen Dank!", en: "Thank you very much!", tr: "Çok teşekkür ederim!" },
    },
  },
  {
    word: "Datum",
    article: "das",
    translations: { en: "date", tr: "tarih" },
    sentences: {
      nominativ: { de: "Das Datum ist wichtig.", en: "The date is important.", tr: "Tarih önemli." },
      akkusativ: { de: "Schreiben Sie das Datum.", en: "Write the date.", tr: "Tarihi yazın." },
    },
  },
  {
    word: "Disco",
    article: "die",
    translations: { en: "disco", tr: "disko" },
    sentences: {
      nominativ: { de: "Die Disco ist laut.", en: "The disco is loud.", tr: "Disko gürültülü." },
      akkusativ: { de: "Wir gehen am Samstag in die Disco.", en: "We are going to the disco on Saturday.", tr: "Cumartesi günü diskoya gidiyoruz." },
    },
  },
  {
    word: "Doktor",
    article: "der",
    translations: { en: "doctor", tr: "doktor" },
    sentences: {
      nominativ: { de: "Der Doktor hat heute Sprechstunde.", en: "The doctor has consultation hours today.", tr: "Doktorun bugün muayene saatleri var." },
      akkusativ: { de: "Wir müssen zum Doktor gehen.", en: "We have to go to the doctor.", tr: "Doktora gitmemiz gerekiyor." },
    },
  },
  {
    word: "Doppelzimmer",
    article: "das",
    translations: { en: "double room", tr: "çift kişilik oda" },
    sentences: {
      nominativ: { de: "Das Doppelzimmer hat einen Balkon.", en: "The double room has a balcony.", tr: "Çift kişilik odanın bir balkonu var." },
      akkusativ: { de: "Wir möchten ein Doppelzimmer buchen.", en: "We would like to book a double room.", tr: "Çift kişilik bir oda ayırtmak istiyoruz." },
    },
  },
  {
    word: "Dorf",
    article: "das",
    translations: { en: "village", tr: "köy" },
    sentences: {
      nominativ: { de: "Das Dorf liegt in den Bergen.", en: "The village is in the mountains.", tr: "Köy dağlarda yer alıyor." },
      akkusativ: { de: "Sie besucht ihre Großeltern im Dorf.", en: "She is visiting her grandparents in the village.", tr: "Köydeki büyükannesini ve büyükbabasını ziyaret ediyor." },
    },
  },
  {
    word: "Drucker",
    article: "der",
    translations: { en: "printer", tr: "yazıcı" },
    sentences: {
      nominativ: { de: "Der Drucker ist kaputt.", en: "The printer is broken.", tr: "Yazıcı bozuk." },
      akkusativ: { de: "Ich brauche einen neuen Drucker.", en: "I need a new printer.", tr: "Yeni bir yazıcıya ihtiyacım var." },
    },
  },
  {
    word: "Durchsage",
    article: "die",
    translations: { en: "announcement", tr: "anons" },
    sentences: {
      nominativ: { de: "Eine Durchsage kommt aus dem Lautsprecher.", en: "An announcement is coming from the loudspeaker.", tr: "Hoparlörden bir anons geliyor." },
      akkusativ: { de: "Ich habe die Durchsage nicht verstanden.", en: "I didn't understand the announcement.", tr: "Anonsu anlamadım." },
    },
  },
  {
    word: "Durst",
    article: "der",
    translations: { en: "thirst", tr: "susamışlık" },
    sentences: {
      nominativ: { de: "Der Durst ist ein starkes Gefühl.", en: "Thirst is a strong feeling.", tr: "Susamışlık güçlü bir histir." },
      akkusativ: { de: "Ich habe großen Durst.", en: "I am very thirsty.", tr: "Çok susadım." },
    },
  },
  {
    word: "Dusche",
    article: "die",
    translations: { en: "shower", tr: "duş" },
    sentences: {
      nominativ: { de: "Die Dusche ist im Badezimmer.", en: "The shower is in the bathroom.", tr: "Duş banyoda." },
      akkusativ: { de: "Unsere Wohnung hat nur eine Dusche.", en: "Our apartment only has a shower.", tr: "Dairemizde sadece duş var." },
    },
  },
  {
    word: "Ecke",
    article: "die",
    translations: { en: "corner", tr: "köşe" },
    sentences: {
      nominativ: { de: "Die Ecke ist schmutzig.", en: "The corner is dirty.", tr: "Köşe kirli." },
      akkusativ: { de: "Stell den Stuhl in die Ecke.", en: "Put the chair in the corner.", tr: "Sandalyeyi köşeye koy." },
    },
  },
  {
    word: "Ehefrau",
    article: "die",
    translations: { en: "wife", tr: "eş (kadın)" },
    sentences: {
      nominativ: { de: "Meine Ehefrau ist Ärztin.", en: "My wife is a doctor.", tr: "Eşim doktor." },
      akkusativ: { de: "Er liebt seine Ehefrau sehr.", en: "He loves his wife very much.", tr: "Eşini çok seviyor." },
    },
  },
  {
    word: "Ehemann",
    article: "der",
    translations: { en: "husband", tr: "eş (erkek)" },
    sentences: {
      nominativ: { de: "Ihr Ehemann arbeitet im Ausland.", en: "Her husband works abroad.", tr: "Eşi yurt dışında çalışıyor." },
      akkusativ: { de: "Sie vermisst ihren Ehemann.", en: "She misses her husband.", tr: "Eşini özlüyor." },
    },
  },
  {
    word: "Ei",
    article: "das",
    translations: { en: "egg", tr: "yumurta" },
    sentences: {
      nominativ: { de: "Das Ei ist frisch.", en: "The egg is fresh.", tr: "Yumurta taze." },
      akkusativ: { de: "Ich möchte ein Ei.", en: "I would like an egg.", tr: "Bir yumurta istiyorum." },
    },
  },
  {
    word: "Eingang",
    article: "der",
    translations: { en: "entrance", tr: "giriş" },
    sentences: {
      nominativ: { de: "Der Eingang ist auf der anderen Seite.", en: "The entrance is on the other side.", tr: "Giriş diğer tarafta." },
      akkusativ: { de: "Wir suchen den Eingang.", en: "We are looking for the entrance.", tr: "Girişi arıyoruz." },
    },
  },
  {
    word: "Einladung",
    article: "die",
    translations: { en: "invitation", tr: "davet" },
    sentences: {
      nominativ: { de: "Die Einladung kam per Post.", en: "The invitation came by mail.", tr: "Davetiye postayla geldi." },
      akkusativ: { de: "Danke für die Einladung!", en: "Thanks for the invitation!", tr: "Davet için teşekkürler!" },
    },
  },
  {
    word: "Eintritt",
    article: "der",
    translations: { en: "admission / entry", tr: "giriş ücreti" },
    sentences: {
      nominativ: { de: "Der Eintritt ist frei.", en: "Admission is free.", tr: "Giriş ücretsiz." },
      akkusativ: { de: "Wir müssen den Eintritt bezahlen.", en: "We have to pay the admission fee.", tr: "Giriş ücretini ödemek zorundayız." },
    },
  },
  {
    word: "Einzelzimmer",
    article: "das",
    translations: { en: "single room", tr: "tek kişilik oda" },
    sentences: {
      nominativ: { de: "Das Einzelzimmer ist klein aber fein.", en: "The single room is small but nice.", tr: "Tek kişilik oda küçük ama güzel." },
      akkusativ: { de: "Ich habe ein Einzelzimmer reserviert.", en: "I have reserved a single room.", tr: "Tek kişilik bir oda ayırttım." },
    },
  },
  {
    word: "E-Mail",
    article: "die",
    translations: { en: "e-mail", tr: "e-posta" },
    sentences: {
      nominativ: { de: "Eine E-Mail ist angekommen.", en: "An e-mail has arrived.", tr: "Bir e-posta geldi." },
      akkusativ: { de: "Ich schreibe dir eine E-Mail.", en: "I am writing you an e-mail.", tr: "Sana bir e-posta yazıyorum." },
    },
  },
  {
    word: "Empfänger",
    article: "der",
    translations: { en: "recipient", tr: "alıcı" },
    sentences: {
      nominativ: { de: "Der Empfänger war nicht zu Hause.", en: "The recipient was not at home.", tr: "Alıcı evde değildi." },
      akkusativ: { de: "Bitte schreiben Sie den Namen des Empfängers.", en: "Please write the recipient's name.", tr: "Lütfen alıcının adını yazın." },
    },
  },
  {
    word: "Ende",
    article: "das",
    translations: { en: "end", tr: "son" },
    sentences: {
      nominativ: { de: "Das Ende des Films war traurig.", en: "The end of the movie was sad.", tr: "Filmin sonu üzücüydü." },
      akkusativ: { de: "Wir sehen das Ende des Tunnels.", en: "We see the end of the tunnel.", tr: "Tünelin sonunu görüyoruz." },
    },
  },
  {
    word: "Entschuldigung",
    article: "die",
    translations: { en: "apology / excuse", tr: "özür / mazeret" },
    sentences: {
      nominativ: { de: "Eine Entschuldigung ist angebracht.", en: "An apology is appropriate.", tr: "Bir özür yerinde olur." },
      akkusativ: { de: "Ich bitte um Entschuldigung.", en: "I apologize.", tr: "Özür dilerim." },
    },
  },
  {
    word: "Ergebnis",
    article: "das",
    translations: { en: "result", tr: "sonuç" },
    sentences: {
      nominativ: { de: "Das Ergebnis ist positiv.", en: "The result is positive.", tr: "Sonuç pozitif." },
      akkusativ: { de: "Wir warten auf das Ergebnis.", en: "We are waiting for the result.", tr: "Sonucu bekliyoruz." },
    },
  },
  {
    word: "Erwachsene",
    article: "der",
    translations: { en: "adult", tr: "yetişkin" },
    sentences: {
      nominativ: { de: "Der Erwachsene zahlt mehr.", en: "The adult pays more.", tr: "Yetişkin daha fazla öder." },
      akkusativ: { de: "Dieser Film ist nur für Erwachsene.", en: "This movie is only for adults.", tr: "Bu film sadece yetişkinler içindir." },
    },
  },
  {
    word: "Essen",
    article: "das",
    translations: { en: "food / meal", tr: "yemek" },
    sentences: {
      nominativ: { de: "Das Essen ist fertig.", en: "The food is ready.", tr: "Yemek hazır." },
      akkusativ: { de: "Ich bestelle das Essen.", en: "I am ordering the food.", tr: "Yemeği sipariş ediyorum." },
    },
  },
  {
    word: "Fahrer",
    article: "der",
    translations: { en: "driver", tr: "şoför" },
    sentences: {
      nominativ: { de: "Der Fahrer wartet im Auto.", en: "The driver is waiting in the car.", tr: "Şoför arabada bekliyor." },
      akkusativ: { de: "Fragen Sie den Fahrer.", en: "Ask the driver.", tr: "Şoföre sorun." },
    },
  },
  {
    word: "Fahrkarte",
    article: "die",
    translations: { en: "ticket", tr: "bilet" },
    sentences: {
      nominativ: { de: "Die Fahrkarte ist teuer.", en: "The ticket is expensive.", tr: "Bilet pahalı." },
      akkusativ: { de: "Ich habe die Fahrkarte verloren.", en: "I lost the ticket.", tr: "Bileti kaybettim." },
    },
  },
  {
    word: "Fahrrad",
    article: "das",
    translations: { en: "bicycle", tr: "bisiklet" },
    sentences: {
      nominativ: { de: "Mein Fahrrad ist kaputt.", en: "My bicycle is broken.", tr: "Bisikletim bozuk." },
      akkusativ: { de: "Er repariert das Fahrrad.", en: "He is repairing the bicycle.", tr: "Bisikleti tamir ediyor." },
    },
  },
  {
    word: "Familie",
    article: "die",
    translations: { en: "family", tr: "aile" },
    sentences: {
      nominativ: { de: "Meine Familie ist groß.", en: "My family is big.", tr: "Ailem büyük." },
      akkusativ: { de: "Ich liebe meine Familie.", en: "I love my family.", tr: "Ailemi seviyorum." },
    },
  },
  {
    word: "Familienname",
    article: "der",
    translations: { en: "last name / surname", tr: "soyadı" },
    sentences: {
      nominativ: { de: "Sein Familienname ist Müller.", en: "His last name is Müller.", tr: "Soyadı Müller." },
      akkusativ: { de: "Wie ist Ihr Familienname?", en: "What is your last name?", tr: "Soyadınız nedir?" },
    },
  },
  {
    word: "Familienstand",
    article: "der",
    translations: { en: "marital status", tr: "medeni hal" },
    sentences: {
      nominativ: { de: "Der Familienstand ist ledig.", en: "The marital status is single.", tr: "Medeni hali bekar." },
      akkusativ: { de: "Geben Sie bitte Ihren Familienstand an.", en: "Please state your marital status.", tr: "Lütfen medeni halinizi belirtin." },
    },
  },
  {
    word: "Farbe",
    article: "die",
    translations: { en: "color", tr: "renk" },
    sentences: {
      nominativ: { de: "Die Farbe Blau gefällt mir.", en: "I like the color blue.", tr: "Mavi rengini seviyorum." },
      akkusativ: { de: "Welche Farbe möchten Sie?", en: "Which color would you like?", tr: "Hangi rengi istersiniz?" },
    },
  },
  {
    word: "Fax",
    article: "das",
    translations: { en: "fax", tr: "faks" },
    sentences: {
      nominativ: { de: "Das Fax ist angekommen.", en: "The fax has arrived.", tr: "Faks geldi." },
      akkusativ: { de: "Bitte schicken Sie mir ein Fax.", en: "Please send me a fax.", tr: "Lütfen bana bir faks gönderin." },
    },
  },
  {
    word: "Fehler",
    article: "der",
    translations: { en: "mistake / error", tr: "hata" },
    sentences: {
      nominativ: { de: "Der Fehler ist nicht schlimm.", en: "The mistake is not bad.", tr: "Hata kötü değil." },
      akkusativ: { de: "Ich habe einen Fehler gemacht.", en: "I made a mistake.", tr: "Bir hata yaptım." },
    },
  },
  {
    word: "Feuer",
    article: "das",
    translations: { en: "fire / light", tr: "ateş / çakmak" },
    sentences: {
      nominativ: { de: "Das Feuer im Kamin ist warm.", en: "The fire in the fireplace is warm.", tr: "Şöminedeki ateş sıcak." },
      akkusativ: { de: "Haben Sie Feuer?", en: "Do you have a light?", tr: "Ateşiniz var mı?" },
    },
  },
  {
    word: "Fieber",
    article: "das",
    translations: { en: "fever", tr: "ateş" },
    sentences: {
      nominativ: { de: "Das Fieber ist gesunken.", en: "The fever has gone down.", tr: "Ateş düştü." },
      akkusativ: { de: "Das Kind hat hohes Fieber.", en: "The child has a high fever.", tr: "Çocuğun yüksek ateşi var." },
    },
  },
  {
    word: "Film",
    article: "der",
    translations: { en: "movie / film", tr: "film" },
    sentences: {
      nominativ: { de: "Der Film beginnt um 20 Uhr.", en: "The movie starts at 8 PM.", tr: "Film saat 20'de başlıyor." },
      akkusativ: { de: "Wir schauen einen Film.", en: "We are watching a movie.", tr: "Bir film izliyoruz." },
    },
  },
  {
    word: "Firma",
    article: "die",
    translations: { en: "company", tr: "şirket / firma" },
    sentences: {
      nominativ: { de: "Die Firma hat viele Mitarbeiter.", en: "The company has many employees.", tr: "Şirketin çok sayıda çalışanı var." },
      akkusativ: { de: "Er arbeitet für eine große Firma.", en: "He works for a big company.", tr: "Büyük bir şirket için çalışıyor." },
    },
  },
  {
    word: "Fisch",
    article: "der",
    translations: { en: "fish", tr: "balık" },
    sentences: {
      nominativ: { de: "Der Fisch schmeckt gut.", en: "The fish tastes good.", tr: "Balık lezzetli." },
      akkusativ: { de: "Ich esse gern Fisch.", en: "I like to eat fish.", tr: "Balık yemeyi severim." },
    },
  },
  {
    word: "Flasche",
    article: "die",
    translations: { en: "bottle", tr: "şişe" },
    sentences: {
      nominativ: { de: "Die Flasche ist leer.", en: "The bottle is empty.", tr: "Şişe boş." },
      akkusativ: { de: "Ich kaufe eine Flasche Wasser.", en: "I am buying a bottle of water.", tr: "Bir şişe su alıyorum." },
    },
  },
  {
    word: "Fleisch",
    article: "das",
    translations: { en: "meat", tr: "et" },
    sentences: {
      nominativ: { de: "Das Fleisch ist zart.", en: "The meat is tender.", tr: "Et yumuşak." },
      akkusativ: { de: "Er isst kein Fleisch.", en: "He doesn't eat meat.", tr: "Et yemiyor." },
    },
  },
  {
    word: "Abflug",
    article: "der",
    translations: { en: "departure (flight)", tr: "uçuş kalkışı" },
    sentences: {
      nominativ: { de: "Der Abflug ist verspätet.", en: "The departure is delayed.", tr: "Kalkış gecikti." },
      akkusativ: { de: "Wir müssen den Abflug auf der Tafel prüfen.", en: "We have to check the departure on the board.", tr: "Kalkışı panodan kontrol etmeliyiz." },
    },
  },
  {
    word: "Flughafen",
    article: "der",
    translations: { en: "airport", tr: "havaalanı" },
    sentences: {
      nominativ: { de: "Der Flughafen ist sehr modern.", en: "The airport is very modern.", tr: "Havaalanı çok modern." },
      akkusativ: { de: "Ich fahre zum Flughafen.", en: "I am driving to the airport.", tr: "Havaalanına gidiyorum." },
    },
  },
  {
    word: "Flugzeug",
    article: "das",
    translations: { en: "airplane", tr: "uçak" },
    sentences: {
      nominativ: { de: "Das Flugzeug startet pünktlich.", en: "The airplane is taking off on time.", tr: "Uçak zamanında kalkıyor." },
      akkusativ: { de: "Ich sehe ein Flugzeug am Himmel.", en: "I see an airplane in the sky.", tr: "Gökyüzünde bir uçak görüyorum." },
    },
  },
  {
    word: "Formular",
    article: "das",
    translations: { en: "form", tr: "form" },
    sentences: {
      nominativ: { de: "Das Formular ist kompliziert.", en: "The form is complicated.", tr: "Form karmaşık." },
      akkusativ: { de: "Bitte füllen Sie das Formular aus.", en: "Please fill out the form.", tr: "Lütfen formu doldurun." },
    },
  },
  {
    word: "Foto",
    article: "das",
    translations: { en: "photo", tr: "fotoğraf" },
    sentences: {
      nominativ: { de: "Das Foto ist schön.", en: "The photo is beautiful.", tr: "Fotoğraf güzel." },
      akkusativ: { de: "Kann ich ein Foto machen?", en: "Can I take a photo?", tr: "Bir fotoğraf çekebilir miyim?" },
    },
  },
  {
    word: "Frage",
    article: "die",
    translations: { en: "question", tr: "soru" },
    sentences: {
      nominativ: { de: "Die Frage ist einfach.", en: "The question is simple.", tr: "Soru basit." },
      akkusativ: { de: "Ich habe eine Frage.", en: "I have a question.", tr: "Bir sorum var." },
    },
  },
  {
    word: "Frau",
    article: "die",
    translations: { en: "woman / Mrs.", tr: "kadın / Bayan" },
    sentences: {
      nominativ: { de: "Die Frau liest ein Buch.", en: "The woman is reading a book.", tr: "Kadın bir kitap okuyor." },
      akkusativ: { de: "Ich kenne die Frau nicht.", en: "I don't know the woman.", tr: "Kadını tanımıyorum." },
    },
  },
  {
    word: "Freizeit",
    article: "die",
    translations: { en: "free time / leisure", tr: "boş zaman" },
    sentences: {
      nominativ: { de: "Meine Freizeit ist mir wichtig.", en: "My free time is important to me.", tr: "Boş zamanım benim için önemli." },
      akkusativ: { de: "Was machst du in deiner Freizeit?", en: "What do you do in your free time?", tr: "Boş zamanlarında ne yaparsın?" },
    },
  },
  {
    word: "Freund",
    article: "der",
    translations: { en: "friend (male)", tr: "arkadaş (erkek)" },
    sentences: {
      nominativ: { de: "Mein Freund kommt aus Berlin.", en: "My friend is from Berlin.", tr: "Arkadaşım Berlinli." },
      akkusativ: { de: "Ich treffe heute einen Freund.", en: "I am meeting a friend today.", tr: "Bugün bir arkadaşımla buluşuyorum." },
    },
  },
  {
    word: "Frühstück",
    article: "das",
    translations: { en: "breakfast", tr: "kahvaltı" },
    sentences: {
      nominativ: { de: "Das Frühstück ist die wichtigste Mahlzeit.", en: "Breakfast is the most important meal.", tr: "Kahvaltı en önemli öğündür." },
      akkusativ: { de: "Wir essen zusammen Frühstück.", en: "We are eating breakfast together.", tr: "Birlikte kahvaltı yapıyoruz." },
    },
  },
  {
    word: "Führung",
    article: "die",
    translations: { en: "guided tour", tr: "rehberli tur" },
    sentences: {
      nominativ: { de: "Die Führung beginnt um 14 Uhr.", en: "The guided tour starts at 2 PM.", tr: "Rehberli tur saat 14'te başlıyor." },
      akkusativ: { de: "Wir machen eine Führung durch das Schloss.", en: "We are taking a guided tour of the castle.", tr: "Şatoda rehberli bir tur yapıyoruz." },
    },
  },
  {
    word: "Fuß",
    article: "der",
    translations: { en: "foot", tr: "ayak" },
    sentences: {
      nominativ: { de: "Mein linker Fuß schmerzt.", en: "My left foot hurts.", tr: "Sol ayağım ağrıyor." },
      akkusativ: { de: "Er hat sich den Fuß verletzt.", en: "He injured his foot.", tr: "Ayağını incitti." },
    },
  },
  {
    word: "Fußball",
    article: "der",
    translations: { en: "football / soccer", tr: "futbol" },
    sentences: {
      nominativ: { de: "Fußball ist ein beliebter Sport.", en: "Football is a popular sport.", tr: "Futbol popüler bir spordur." },
      akkusativ: { de: "Die Kinder spielen Fußball.", en: "The children are playing football.", tr: "Çocuklar futbol oynuyor." },
    },
  },
  {
    word: "Garten",
    article: "der",
    translations: { en: "garden", tr: "bahçe" },
    sentences: {
      nominativ: { de: "Der Garten ist voller Blumen.", en: "The garden is full of flowers.", tr: "Bahçe çiçeklerle dolu." },
      akkusativ: { de: "Wir haben einen großen Garten.", en: "We have a big garden.", tr: "Büyük bir bahçemiz var." },
    },
  },
  {
    word: "Gast",
    article: "der",
    translations: { en: "guest", tr: "misafir" },
    sentences: {
      nominativ: { de: "Der Gast ist zufrieden.", en: "The guest is satisfied.", tr: "Misafir memnun." },
      akkusativ: { de: "Wir erwarten einen Gast.", en: "We are expecting a guest.", tr: "Bir misafir bekliyoruz." },
    },
  },
  {
    word: "Geburtsjahr",
    article: "das",
    translations: { en: "year of birth", tr: "doğum yılı" },
    sentences: {
      nominativ: { de: "Sein Geburtsjahr ist 1990.", en: "His year of birth is 1990.", tr: "Doğum yılı 1990." },
      akkusativ: { de: "Bitte geben Sie Ihr Geburtsjahr an.", en: "Please enter your year of birth.", tr: "Lütfen doğum yılınızı belirtin." },
    },
  },
  {
    word: "Geburtsort",
    article: "der",
    translations: { en: "place of birth", tr: "doğum yeri" },
    sentences: {
      nominativ: { de: "Mein Geburtsort ist eine kleine Stadt.", en: "My place of birth is a small town.", tr: "Doğum yerim küçük bir kasaba." },
      akkusativ: { de: "Was ist Ihr Geburtsort?", en: "What is your place of birth?", tr: "Doğum yeriniz neresi?" },
    },
  },
  {
    word: "Geburtstag",
    article: "der",
    translations: { en: "birthday", tr: "doğum günü" },
    sentences: {
      nominativ: { de: "Mein Geburtstag ist im Sommer.", en: "My birthday is in the summer.", tr: "Doğum günüm yazın." },
      akkusativ: { de: "Wir feiern seinen Geburtstag.", en: "We are celebrating his birthday.", tr: "Onun doğum gününü kutluyoruz." },
    },
  },
  {
    word: "Geld",
    article: "das",
    translations: { en: "money", tr: "para" },
    sentences: {
      nominativ: { de: "Das Geld ist auf dem Tisch.", en: "The money is on the table.", tr: "Para masanın üzerinde." },
      akkusativ: { de: "Hast du Geld?", en: "Do you have money?", tr: "Paran var mı?" },
    },
  },
  {
    word: "Gemüse",
    article: "das",
    translations: { en: "vegetables", tr: "sebze" },
    sentences: {
      nominativ: { de: "Das Gemüse ist frisch.", en: "The vegetables are fresh.", tr: "Sebzeler taze." },
      akkusativ: { de: "Wir kaufen Gemüse auf dem Markt.", en: "We buy vegetables at the market.", tr: "Pazardan sebze alıyoruz." },
    },
  },
  {
    word: "Gepäck",
    article: "das",
    translations: { en: "luggage", tr: "bagaj" },
    sentences: {
      nominativ: { de: "Mein Gepäck ist zu schwer.", en: "My luggage is too heavy.", tr: "Bagajım çok ağır." },
      akkusativ: { de: "Ich gebe mein Gepäck am Schalter ab.", en: "I am checking in my luggage at the counter.", tr: "Bagajımı gişede teslim ediyorum." },
    },
  },
  {
    word: "Geschäft",
    article: "das",
    translations: { en: "store / shop", tr: "dükkan / mağaza" },
    sentences: {
      nominativ: { de: "Das Geschäft schließt um 18 Uhr.", en: "The store closes at 6 PM.", tr: "Dükkan saat 18'de kapanıyor." },
      akkusativ: { de: "Sie eröffnet ein neues Geschäft.", en: "She is opening a new store.", tr: "Yeni bir dükkan açıyor." },
    },
  },
  {
    word: "Geschenk",
    article: "das",
    translations: { en: "gift / present", tr: "hediye" },
    sentences: {
      nominativ: { de: "Das Geschenk ist für dich.", en: "The gift is for you.", tr: "Hediye senin için." },
      akkusativ: { de: "Ich habe ein Geschenk bekommen.", en: "I received a gift.", tr: "Bir hediye aldım." },
    },
  },
  {
    word: "Gespräch",
    article: "das",
    translations: { en: "conversation", tr: "konuşma / sohbet" },
    sentences: {
      nominativ: { de: "Das Gespräch war sehr interessant.", en: "The conversation was very interesting.", tr: "Konuşma çok ilginçti." },
      akkusativ: { de: "Wir führen ein langes Gespräch.", en: "We are having a long conversation.", tr: "Uzun bir konuşma yapıyoruz." },
    },
  },
  {
    word: "Getränk",
    article: "das",
    translations: { en: "drink / beverage", tr: "içecek" },
    sentences: {
      nominativ: { de: "Mein Lieblingsgetränk ist Wasser.", en: "My favorite drink is water.", tr: "En sevdiğim içecek su." },
      akkusativ: { de: "Möchten Sie ein Getränk bestellen?", en: "Would you like to order a drink?", tr: "Bir içecek sipariş etmek ister misiniz?" },
    },
  },
  {
    word: "Gewicht",
    article: "das",
    translations: { en: "weight", tr: "ağırlık / kilo" },
    sentences: {
      nominativ: { de: "Das Gewicht ist zu hoch.", en: "The weight is too high.", tr: "Ağırlık çok fazla." },
      akkusativ: { de: "Ich muss mein Gewicht reduzieren.", en: "I have to reduce my weight.", tr: "Kilomu azaltmam gerekiyor." },
    },
  },
  {
    word: "Glas",
    article: "das",
    translations: { en: "glass", tr: "bardak / cam" },
    sentences: {
      nominativ: { de: "Das Glas ist halb voll.", en: "The glass is half full.", tr: "Bardak yarı dolu." },
      akkusativ: { de: "Ich trinke ein Glas Wasser.", en: "I am drinking a glass of water.", tr: "Bir bardak su içiyorum." },
    },
  },
  {
    word: "Gleis",
    article: "das",
    translations: { en: "track / platform", tr: "peron / ray" },
    sentences: {
      nominativ: { de: "Das Gleis 5 ist dort drüben.", en: "Track 5 is over there.", tr: "Peron 5 orada." },
      akkusativ: { de: "Der Zug fährt von Gleis 3 ab.", en: "The train departs from track 3.", tr: "Tren 3. perondan kalkıyor." },
    },
  },
  {
    word: "Glück",
    article: "das",
    translations: { en: "luck / happiness", tr: "şans / mutluluk" },
    sentences: {
      nominativ: { de: "Glück ist ein schönes Gefühl.", en: "Happiness is a beautiful feeling.", tr: "Mutluluk güzel bir duygudur." },
      akkusativ: { de: "Ich wünsche dir viel Glück.", en: "I wish you good luck.", tr: "Sana bol şans dilerim." },
    },
  },
  {
    word: "Glückwunsch",
    article: "der",
    translations: { en: "congratulation", tr: "tebrik" },
    sentences: {
      nominativ: { de: "Ein herzlicher Glückwunsch kommt von uns allen.", en: "A warm congratulation comes from all of us.", tr: "Hepimizden sıcak bir tebrik geliyor." },
      akkusativ: { de: "Herzlichen Glückwunsch zum Geburtstag!", en: "Happy birthday!", tr: "Doğum günün kutlu olsun!" },
    },
  },
  {
    word: "Grad",
    article: "der",
    translations: { en: "degree", tr: "derece" },
    sentences: {
      nominativ: { de: "Ein Grad ist nicht viel.", en: "One degree is not much.", tr: "Bir derece çok değil." },
      akkusativ: { de: "Heute haben wir 30 Grad.", en: "Today it is 30 degrees.", tr: "Bugün hava 30 derece." },
    },
  },
  {
    word: "Größe",
    article: "die",
    translations: { en: "size / height", tr: "beden / boy" },
    sentences: {
      nominativ: { de: "Die Größe passt perfekt.", en: "The size fits perfectly.", tr: "Beden tam uyuyor." },
      akkusativ: { de: "Welche Größe tragen Sie?", en: "What size do you wear?", tr: "Hangi bedeni giyiyorsunuz?" },
    },
  },
  {
    word: "Großmutter",
    article: "die",
    translations: { en: "grandmother", tr: "büyükanne" },
    sentences: {
      nominativ: { de: "Meine Großmutter ist 80 Jahre alt.", en: "My grandmother is 80 years old.", tr: "Büyükannem 80 yaşında." },
      akkusativ: { de: "Ich besuche meine Großmutter.", en: "I am visiting my grandmother.", tr: "Büyükannemi ziyaret ediyorum." },
    },
  },
  {
    word: "Großvater",
    article: "der",
    translations: { en: "grandfather", tr: "büyükbaba" },
    sentences: {
      nominativ: { de: "Mein Großvater erzählt gerne Geschichten.", en: "My grandfather likes to tell stories.", tr: "Büyükbabam hikaye anlatmayı sever." },
      akkusativ: { de: "Ich rufe meinen Großvater an.", en: "I am calling my grandfather.", tr: "Büyükbabamı arıyorum." },
    },
  },
  {
    word: "Gruppe",
    article: "die",
    translations: { en: "group", tr: "grup" },
    sentences: {
      nominativ: { de: "Die Gruppe wartet auf den Bus.", en: "The group is waiting for the bus.", tr: "Grup otobüsü bekliyor." },
      akkusativ: { de: "Wir bilden eine kleine Gruppe.", en: "We are forming a small group.", tr: "Küçük bir grup oluşturuyoruz." },
    },
  },
  {
    word: "Gruß",
    article: "der",
    translations: { en: "greeting", tr: "selam" },
    sentences: {
      nominativ: { de: "Ein freundlicher Gruß ist immer schön.", en: "A friendly greeting is always nice.", tr: "Dostça bir selam her zaman güzeldir." },
      akkusativ: { de: "Bitte richte ihm einen schönen Gruß aus.", en: "Please give him my best regards.", tr: "Lütfen ona selamlarımı ilet." },
    },
  },
  {
    word: "Haar",
    article: "das",
    translations: { en: "hair", tr: "saç" },
    sentences: {
      nominativ: { de: "Ihr Haar ist lang und blond.", en: "Her hair is long and blond.", tr: "Saçları uzun ve sarı." },
      akkusativ: { de: "Sie hat schöne Haare.", en: "She has beautiful hair.", tr: "Onun güzel saçları var." },
    },
  },
  {
    word: "Hähnchen",
    article: "das",
    translations: { en: "chicken", tr: "tavuk" },
    sentences: {
      nominativ: { de: "Das Hähnchen ist im Ofen.", en: "The chicken is in the oven.", tr: "Tavuk fırında." },
      akkusativ: { de: "Ich esse ein Hähnchen mit Pommes.", en: "I'm eating a chicken with fries.", tr: "Patates kızartmalı tavuk yiyorum." },
    },
  },
  {
    word: "Halbpension",
    article: "die",
    translations: { en: "half board", tr: "yarım pansiyon" },
    sentences: {
      nominativ: { de: "Die Halbpension beinhaltet Frühstück und Abendessen.", en: "Half board includes breakfast and dinner.", tr: "Yarım pansiyon kahvaltı ve akşam yemeğini içerir." },
      akkusativ: { de: "Wir haben das Hotel mit Halbpension gebucht.", en: "We booked the hotel with half board.", tr: "Oteli yarım pansiyon olarak ayırttık." },
    },
  },
  {
    word: "Halle",
    article: "die",
    translations: { en: "hall", tr: "salon / hol" },
    sentences: {
      nominativ: { de: "Die Halle ist sehr groß.", en: "The hall is very large.", tr: "Salon çok büyük." },
      akkusativ: { de: "Wir treffen uns in der Halle B.", en: "We are meeting in hall B.", tr: "B salonunda buluşuyoruz." },
    },
  },
  {
    word: "Haltestelle",
    article: "die",
    translations: { en: "bus stop", tr: "durak" },
    sentences: {
      nominativ: { de: "Die nächste Haltestelle ist in 50 Metern.", en: "The next stop is in 50 meters.", tr: "Bir sonraki durak 50 metre ileride." },
      akkusativ: { de: "Ich warte an der Haltestelle.", en: "I am waiting at the bus stop.", tr: "Durakta bekliyorum." },
    },
  },
  {
    word: "Hand",
    article: "die",
    translations: { en: "hand", tr: "el" },
    sentences: {
      nominativ: { de: "Meine linke Hand ist kalt.", en: "My left hand is cold.", tr: "Sol elim soğuk." },
      akkusativ: { de: "Gib mir bitte deine Hand.", en: "Please give me your hand.", tr: "Lütfen bana elini ver." },
    },
  },
  {
    word: "Handy",
    article: "das",
    translations: { en: "mobile phone", tr: "cep telefonu" },
    sentences: {
      nominativ: { de: "Mein Handy ist neu.", en: "My mobile phone is new.", tr: "Cep telefonum yeni." },
      akkusativ: { de: "Ich habe mein Handy verloren.", en: "I lost my mobile phone.", tr: "Cep telefonumu kaybettim." },
    },
  },
  {
    word: "Haus",
    article: "das",
    translations: { en: "house", tr: "ev" },
    sentences: {
      nominativ: { de: "Das Haus hat einen Garten.", en: "The house has a garden.", tr: "Evin bir bahçesi var." },
      akkusativ: { de: "Wir kaufen ein Haus.", en: "We are buying a house.", tr: "Bir ev alıyoruz." },
    },
  },
  {
    word: "Hausaufgabe",
    article: "die",
    translations: { en: "homework", tr: "ev ödevi" },
    sentences: {
      nominativ: { de: "Die Hausaufgabe für heute ist schwer.", en: "Today's homework is difficult.", tr: "Bugünün ev ödevi zor." },
      akkusativ: { de: "Ich mache meine Hausaufgaben.", en: "I am doing my homework.", tr: "Ev ödevimi yapıyorum." },
    },
  },
  {
    word: "Hausfrau",
    article: "die",
    translations: { en: "housewife", tr: "ev hanımı" },
    sentences: {
      nominativ: { de: "Die Hausfrau kümmert sich um die Kinder.", en: "The housewife takes care of the children.", tr: "Ev hanımı çocuklarla ilgileniyor." },
      akkusativ: { de: "Meine Mutter ist Hausfrau.", en: "My mother is a housewife.", tr: "Annem ev hanımı." },
    },
  },
  {
    word: "Hausmann",
    article: "der",
    translations: { en: "househusband", tr: "ev erkeği" },
    sentences: {
      nominativ: { de: "Der Hausmann kocht das Mittagessen.", en: "The househusband cooks lunch.", tr: "Ev erkeği öğle yemeğini pişiriyor." },
      akkusativ: { de: "Immer mehr Väter werden Hausmann.", en: "More and more fathers are becoming househusbands.", tr: "Giderek daha fazla baba ev erkeği oluyor." },
    },
  },
  {
    word: "Heimat",
    article: "die",
    translations: { en: "homeland / home", tr: "memleket / vatan" },
    sentences: {
      nominativ: { de: "Meine Heimat ist die Türkei.", en: "My homeland is Turkey.", tr: "Memleketim Türkiye." },
      akkusativ: { de: "Er vermisst seine Heimat.", en: "He misses his homeland.", tr: "Memleketini özlüyor." },
    },
  },
  {
    word: "Herd",
    article: "der",
    translations: { en: "stove / cooker", tr: "ocak" },
    sentences: {
      nominativ: { de: "Der Herd ist noch heiß.", en: "The stove is still hot.", tr: "Ocak hala sıcak." },
      akkusativ: { de: "Stell den Topf auf den Herd.", en: "Put the pot on the stove.", tr: "Tencereyi ocağa koy." },
    },
  },
  {
    word: "Herr",
    article: "der",
    translations: { en: "Mr. / gentleman", tr: "Bay / beyefendi" },
    sentences: {
      nominativ: { de: "Der Herr an der Rezeption kann Ihnen helfen.", en: "The gentleman at the reception can help you.", tr: "Resepsiyondaki beyefendi size yardımcı olabilir." },
      akkusativ: { de: "Ich möchte Herrn Schmidt sprechen.", en: "I would like to speak to Mr. Schmidt.", tr: "Bay Schmidt ile konuşmak istiyorum." },
    },
  },
  {
    word: "Hilfe",
    article: "die",
    translations: { en: "help", tr: "yardım" },
    sentences: {
      nominativ: { de: "Die Hilfe kam schnell.", en: "The help came quickly.", tr: "Yardım çabuk geldi." },
      akkusativ: { de: "Brauchen Sie Hilfe?", en: "Do you need help?", tr: "Yardıma ihtiyacınız var mı?" },
    },
  },
  {
    word: "Hobby",
    article: "das",
    translations: { en: "hobby", tr: "hobi" },
    sentences: {
      nominativ: { de: "Mein Hobby ist Fotografieren.", en: "My hobby is photography.", tr: "Hobim fotoğrafçılık." },
      akkusativ: { de: "Welche Hobbys hast du?", en: "What hobbies do you have?", tr: "Ne gibi hobilerin var?" },
    },
  },
  {
    word: "Hochzeit",
    article: "die",
    translations: { en: "wedding", tr: "düğün" },
    sentences: {
      nominativ: { de: "Die Hochzeit findet im Sommer statt.", en: "The wedding takes place in the summer.", tr: "Düğün yazın gerçekleşecek." },
      akkusativ: { de: "Wir sind zu einer Hochzeit eingeladen.", en: "We are invited to a wedding.", tr: "Bir düğüne davetliyiz." },
    },
  },
  {
    word: "Hotel",
    article: "das",
    translations: { en: "hotel", tr: "otel" },
    sentences: {
      nominativ: { de: "Das Hotel ist teuer.", en: "The hotel is expensive.", tr: "Otel pahalı." },
      akkusativ: { de: "Wir suchen ein Hotel.", en: "We are looking for a hotel.", tr: "Bir otel arıyoruz." },
    },
  },
  {
    word: "Hund",
    article: "der",
    translations: { en: "dog", tr: "köpek" },
    sentences: {
      nominativ: { de: "Der Hund bellt.", en: "The dog is barking.", tr: "Köpek havlıyor." },
      akkusativ: { de: "Ich sehe den Hund.", en: "I see the dog.", tr: "Köpeği görüyorum." },
    },
  },
  {
    word: "Hunger",
    article: "der",
    translations: { en: "hunger", tr: "açlık" },
    sentences: {
      nominativ: { de: "Der Hunger ist der beste Koch.", en: "Hunger is the best cook.", tr: "Açlık en iyi aşçıdır." },
      akkusativ: { de: "Ich habe großen Hunger.", en: "I am very hungry.", tr: "Çok açım." },
    },
  },
  {
    word: "Information",
    article: "die",
    translations: { en: "information", tr: "bilgi" },
    sentences: {
      nominativ: { de: "Die Information ist wichtig.", en: "The information is important.", tr: "Bilgi önemli." },
      akkusativ: { de: "Ich brauche eine Information.", en: "I need a piece of information.", tr: "Bir bilgiye ihtiyacım var." },
    },
  },
  {
    word: "Internet",
    article: "das",
    translations: { en: "internet", tr: "internet" },
    sentences: {
      nominativ: { de: "Das Internet ist heute langsam.", en: "The internet is slow today.", tr: "İnternet bugün yavaş." },
      akkusativ: { de: "Er surft den ganzen Tag im Internet.", en: "He surfs the internet all day.", tr: "Bütün gün internette geziniyor." },
    },
  },
  {
    word: "Jacke",
    article: "die",
    translations: { en: "jacket", tr: "ceket" },
    sentences: {
      nominativ: { de: "Die Jacke ist warm.", en: "The jacket is warm.", tr: "Ceket sıcak." },
      akkusativ: { de: "Er trägt eine Jacke.", en: "He is wearing a jacket.", tr: "Bir ceket giyiyor." },
    },
  },
  {
    word: "Job",
    article: "der",
    translations: { en: "job", tr: "iş" },
    sentences: {
      nominativ: { de: "Sein neuer Job ist in Hamburg.", en: "His new job is in Hamburg.", tr: "Yeni işi Hamburg'da." },
      akkusativ: { de: "Sie hat einen guten Job gefunden.", en: "She found a good job.", tr: "İyi bir iş buldu." },
    },
  },
  {
    word: "Jugendliche",
    article: "der",
    translations: { en: "adolescent / youth", tr: "genç" },
    sentences: {
      nominativ: { de: "Der Jugendliche hört laute Musik.", en: "The adolescent is listening to loud music.", tr: "Genç yüksek sesle müzik dinliyor." },
      akkusativ: { de: "Ich sehe eine Gruppe von Jugendlichen.", en: "I see a group of youths.", tr: "Bir grup genç görüyorum." },
    },
  },
  {
    word: "Junge",
    article: "der",
    translations: { en: "boy", tr: "oğlan çocuğu" },
    sentences: {
      nominativ: { de: "Der Junge spielt im Garten.", en: "The boy is playing in the garden.", tr: "Oğlan bahçede oynuyor." },
      akkusativ: { de: "Kennen Sie den Jungen dort?", en: "Do you know that boy over there?", tr: "Oradaki çocuğu tanıyor musunuz?" },
    },
  },
  {
    word: "Kaffee",
    article: "der",
    translations: { en: "coffee", tr: "kahve" },
    sentences: {
      nominativ: { de: "Der Kaffee ist heiß.", en: "The coffee is hot.", tr: "Kahve sıcak." },
      akkusativ: { de: "Ich trinke einen Kaffee.", en: "I am drinking a coffee.", tr: "Bir kahve içiyorum." },
    },
  },
  {
    word: "Karte",
    article: "die",
    translations: { en: "card / map / ticket", tr: "kart / harita / bilet" },
    sentences: {
      nominativ: { de: "Die Karte liegt auf dem Tisch.", en: "The map is on the table.", tr: "Harita masanın üzerinde." },
      akkusativ: { de: "Ich kaufe eine Karte für das Konzert.", en: "I am buying a ticket for the concert.", tr: "Konser için bir bilet alıyorum." },
    },
  },
  {
    word: "Kartoffel",
    article: "die",
    translations: { en: "potato", tr: "patates" },
    sentences: {
      nominativ: { de: "Die Kartoffel ist eine wichtige Nahrungsquelle.", en: "The potato is an important food source.", tr: "Patates önemli bir besin kaynağıdır." },
      akkusativ: { de: "Wir essen Kartoffeln zum Abendessen.", en: "We are eating potatoes for dinner.", tr: "Akşam yemeğinde patates yiyoruz." },
    },
  },
  {
    word: "Kasse",
    article: "die",
    translations: { en: "cash register / checkout", tr: "kasa" },
    sentences: {
      nominativ: { de: "Die Kasse ist geschlossen.", en: "The cash register is closed.", tr: "Kasa kapalı." },
      akkusativ: { de: "Bitte bezahlen Sie an der Kasse.", en: "Please pay at the checkout.", tr: "Lütfen kasada ödeme yapın." },
    },
  },
  {
    word: "Kind",
    article: "das",
    translations: { en: "child", tr: "çocuk" },
    sentences: {
      nominativ: { de: "Das Kind spielt.", en: "The child is playing.", tr: "Çocuk oynuyor." },
      akkusativ: { de: "Sie hat ein Kind.", en: "She has a child.", tr: "Onun bir çocuğu var." },
    },
  },
  {
    word: "Kindergarten",
    article: "der",
    translations: { en: "kindergarten", tr: "anaokulu" },
    sentences: {
      nominativ: { de: "Der Kindergarten ist um die Ecke.", en: "The kindergarten is around the corner.", tr: "Anaokulu köşede." },
      akkusativ: { de: "Meine Tochter geht in den Kindergarten.", en: "My daughter goes to kindergarten.", tr: "Kızım anaokuluna gidiyor." },
    },
  },
  {
    word: "Kino",
    article: "das",
    translations: { en: "cinema / movie theater", tr: "sinema" },
    sentences: {
      nominativ: { de: "Das Kino zeigt einen neuen Film.", en: "The cinema is showing a new movie.", tr: "Sinema yeni bir film gösteriyor." },
      akkusativ: { de: "Wir gehen heute Abend ins Kino.", en: "We are going to the cinema tonight.", tr: "Bu akşam sinemaya gidiyoruz." },
    },
  },
  {
    word: "Kiosk",
    article: "der",
    translations: { en: "kiosk", tr: "büfe" },
    sentences: {
      nominativ: { de: "Der Kiosk verkauft Zeitungen und Getränke.", en: "The kiosk sells newspapers and drinks.", tr: "Büfe gazete ve içecek satıyor." },
      akkusativ: { de: "Ich kaufe mir am Kiosk eine Zeitschrift.", en: "I am buying a magazine at the kiosk.", tr: "Büfeden bir dergi alıyorum." },
    },
  },
  {
    word: "Klasse",
    article: "die",
    translations: { en: "class / grade", tr: "sınıf" },
    sentences: {
      nominativ: { de: "Die Klasse macht einen Ausflug.", en: "The class is going on a trip.", tr: "Sınıf geziye gidiyor." },
      akkusativ: { de: "Er geht in die fünfte Klasse.", en: "He is in the fifth grade.", tr: "Beşinci sınıfa gidiyor." },
    },
  },
  {
    word: "Kleidung",
    article: "die",
    translations: { en: "clothing", tr: "giyim / kıyafet" },
    sentences: {
      nominativ: { de: "Die Kleidung ist im Schrank.", en: "The clothing is in the closet.", tr: "Kıyafetler dolapta." },
      akkusativ: { de: "Ich muss neue Kleidung kaufen.", en: "I have to buy new clothes.", tr: "Yeni kıyafet almam gerekiyor." },
    },
  },
  {
    word: "Koffer",
    article: "der",
    translations: { en: "suitcase", tr: "bavul" },
    sentences: {
      nominativ: { de: "Der Koffer ist schwer.", en: "The suitcase is heavy.", tr: "Bavul ağır." },
      akkusativ: { de: "Ich packe den Koffer.", en: "I am packing the suitcase.", tr: "Bavulu hazırlıyorum." },
    },
  },
  {
    word: "Kollege",
    article: "der",
    translations: { en: "colleague (male)", tr: "meslektaş (erkek)" },
    sentences: {
      nominativ: { de: "Mein Kollege ist sehr hilfsbereit.", en: "My colleague is very helpful.", tr: "Meslektaşım çok yardımsever." },
      akkusativ: { de: "Ich frage meinen Kollegen um Rat.", en: "I am asking my colleague for advice.", tr: "Meslektaşıma danışıyorum." },
    },
  },
  {
    word: "Konto",
    article: "das",
    translations: { en: "account (bank)", tr: "hesap (banka)" },
    sentences: {
      nominativ: { de: "Das Konto ist leer.", en: "The account is empty.", tr: "Hesap boş." },
      akkusativ: { de: "Ich möchte ein Konto eröffnen.", en: "I would like to open an account.", tr: "Bir hesap açmak istiyorum." },
    },
  },
  {
    word: "Kopf",
    article: "der",
    translations: { en: "head", tr: "kafa / baş" },
    sentences: {
      nominativ: { de: "Mein Kopf tut weh.", en: "My head hurts.", tr: "Başım ağrıyor." },
      akkusativ: { de: "Er schüttelt den Kopf.", en: "He is shaking his head.", tr: "Başını sallıyor." },
    },
  },
  {
    word: "Küche",
    article: "die",
    translations: { en: "kitchen", tr: "mutfak" },
    sentences: {
      nominativ: { de: "Die Küche ist modern.", en: "The kitchen is modern.", tr: "Mutfak modern." },
      akkusativ: { de: "Wir gehen in die Küche.", en: "We are going into the kitchen.", tr: "Mutfağa gidiyoruz." },
    },
  },
  {
    word: "Kuchen",
    article: "der",
    translations: { en: "cake", tr: "kek / pasta" },
    sentences: {
      nominativ: { de: "Der Kuchen schmeckt lecker.", en: "The cake tastes delicious.", tr: "Pasta lezzetli." },
      akkusativ: { de: "Ich backe einen Kuchen.", en: "I am baking a cake.", tr: "Bir kek yapıyorum." },
    },
  },
  {
    word: "Kugelschreiber",
    article: "der",
    translations: { en: "ballpoint pen", tr: "tükenmez kalem" },
    sentences: {
      nominativ: { de: "Der Kugelschreiber schreibt nicht mehr.", en: "The pen doesn't write anymore.", tr: "Tükenmez kalem artık yazmıyor." },
      akkusativ: { de: "Hast du einen Kugelschreiber für mich?", en: "Do you have a pen for me?", tr: "Benim için bir tükenmez kalemin var mı?" },
    },
  },
  {
    word: "Kühlschrank",
    article: "der",
    translations: { en: "refrigerator", tr: "buzdolabı" },
    sentences: {
      nominativ: { de: "Der Kühlschrank ist voll.", en: "The refrigerator is full.", tr: "Buzdolabı dolu." },
      akkusativ: { de: "Stell die Milch in den Kühlschrank.", en: "Put the milk in the refrigerator.", tr: "Sütü buzdolabına koy." },
    },
  },
  {
    word: "Kunde",
    article: "der",
    translations: { en: "customer (male)", tr: "müşteri (erkek)" },
    sentences: {
      nominativ: { de: "Der Kunde ist König.", en: "The customer is king.", tr: "Müşteri kraldır." },
      akkusativ: { de: "Der Verkäufer bedient den Kunden.", en: "The salesperson is serving the customer.", tr: "Satıcı müşteriye hizmet ediyor." },
    },
  },
  {
    word: "Kurs",
    article: "der",
    translations: { en: "course", tr: "kurs" },
    sentences: {
      nominativ: { de: "Der Deutschkurs beginnt morgen.", en: "The German course starts tomorrow.", tr: "Almanca kursu yarın başlıyor." },
      akkusativ: { de: "Ich besuche einen Sprachkurs.", en: "I am attending a language course.", tr: "Bir dil kursuna gidiyorum." },
    },
  },
  {
    word: "Laden",
    article: "der",
    translations: { en: "shop / store", tr: "dükkan" },
    sentences: {
      nominativ: { de: "Der Laden ist bis 20 Uhr geöffnet.", en: "The shop is open until 8 PM.", tr: "Dükkan saat 20'ye kadar açık." },
      akkusativ: { de: "Ich gehe in den Laden, um Brot zu kaufen.", en: "I'm going to the store to buy bread.", tr: "Ekmek almak için dükkana gidiyorum." },
    },
  },
  {
    word: "Land",
    article: "das",
    translations: { en: "country / land", tr: "ülke / kırsal" },
    sentences: {
      nominativ: { de: "Deutschland ist ein schönes Land.", en: "Germany is a beautiful country.", tr: "Almanya güzel bir ülke." },
      akkusativ: { de: "Wir fahren aufs Land.", en: "We are driving to the countryside.", tr: "Kırsala gidiyoruz." },
    },
  },
  {
    word: "Leben",
    article: "das",
    translations: { en: "life", tr: "hayat / yaşam" },
    sentences: {
      nominativ: { de: "Das Leben in der Stadt ist teuer.", en: "Life in the city is expensive.", tr: "Şehirde yaşam pahalı." },
      akkusativ: { de: "Sie genießt ihr Leben.", en: "She enjoys her life.", tr: "Hayatının tadını çıkarıyor." },
    },
  },
  {
    word: "Lehrer",
    article: "der",
    translations: { en: "teacher (male)", tr: "öğretmen (erkek)" },
    sentences: {
      nominativ: { de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar.", tr: "Öğretmen dilbilgisini açıklıyor." },
      akkusativ: { de: "Die Schüler fragen den Lehrer.", en: "The students ask the teacher.", tr: "Öğrenciler öğretmene soruyor." },
    },
  },
  {
    word: "Licht",
    article: "das",
    translations: { en: "light", tr: "ışık" },
    sentences: {
      nominativ: { de: "Das Licht ist sehr hell.", en: "The light is very bright.", tr: "Işık çok parlak." },
      akkusativ: { de: "Mach bitte das Licht an.", en: "Please turn on the light.", tr: "Lütfen ışığı aç." },
    },
  },
  {
    word: "Lied",
    article: "das",
    translations: { en: "song", tr: "şarkı" },
    sentences: {
      nominativ: { de: "Das Lied ist sehr bekannt.", en: "The song is very famous.", tr: "Şarkı çok biliniyor." },
      akkusativ: { de: "Wir singen ein Lied zusammen.", en: "We are singing a song together.", tr: "Birlikte bir şarkı söylüyoruz." },
    },
  },
  {
    word: "Lkw",
    article: "der",
    translations: { en: "truck", tr: "kamyon" },
    sentences: {
      nominativ: { de: "Der Lkw ist sehr groß.", en: "The truck is very big.", tr: "Kamyon çok büyük." },
      akkusativ: { de: "Der Fahrer fährt den Lkw.", en: "The driver is driving the truck.", tr: "Şoför kamyonu sürüyor." },
    },
  },
  {
    word: "Lokal",
    article: "das",
    translations: { en: "pub / restaurant", tr: "lokal / restoran" },
    sentences: {
      nominativ: { de: "Das Lokal ist immer voll.", en: "The pub is always full.", tr: "Lokal her zaman dolu." },
      akkusativ: { de: "Wir suchen ein gemütliches Lokal.", en: "We are looking for a cozy restaurant.", tr: "Rahat bir restoran arıyoruz." },
    },
  },
  {
    word: "Lösung",
    article: "die",
    translations: { en: "solution", tr: "çözüm" },
    sentences: {
      nominativ: { de: "Die Lösung ist einfach.", en: "The solution is simple.", tr: "Çözüm basit." },
      akkusativ: { de: "Ich habe die Lösung gefunden.", en: "I have found the solution.", tr: "Çözümü buldum." },
    },
  },
  {
    word: "Mädchen",
    article: "das",
    translations: { en: "girl", tr: "kız çocuğu" },
    sentences: {
      nominativ: { de: "Das Mädchen spielt mit einer Puppe.", en: "The girl is playing with a doll.", tr: "Kız bir bebekle oynuyor." },
      akkusativ: { de: "Sie haben ein Mädchen adoptiert.", en: "They adopted a girl.", tr: "Bir kız evlat edindiler." },
    },
  },
  {
    word: "Mann",
    article: "der",
    translations: { en: "man", tr: "adam" },
    sentences: {
      nominativ: { de: "Der Mann ist groß.", en: "The man is tall.", tr: "Adam uzun boylu." },
      akkusativ: { de: "Ich kenne den Mann.", en: "I know the man.", tr: "Adamı tanıyorum." },
    },
  },
  {
    word: "Maschine",
    article: "die",
    translations: { en: "machine", tr: "makine" },
    sentences: {
      nominativ: { de: "Die Maschine funktioniert gut.", en: "The machine works well.", tr: "Makine iyi çalışıyor." },
      akkusativ: { de: "Er repariert die alte Maschine.", en: "He is repairing the old machine.", tr: "Eski makineyi tamir ediyor." },
    },
  },
  {
    word: "Meer",
    article: "das",
    translations: { en: "sea", tr: "deniz" },
    sentences: {
      nominativ: { de: "Das Meer ist heute ruhig.", en: "The sea is calm today.", tr: "Deniz bugün sakin." },
      akkusativ: { de: "Wir fahren im Sommer ans Meer.", en: "We are going to the sea in the summer.", tr: "Yazın denize gidiyoruz." },
    },
  },
  {
    word: "Mensch",
    article: "der",
    translations: { en: "person / human being", tr: "insan" },
    sentences: {
      nominativ: { de: "Der Mensch lernt sein Leben lang.", en: "A person learns throughout their life.", tr: "İnsan hayatı boyunca öğrenir." },
      akkusativ: { de: "Ich habe noch nie so einen netten Menschen getroffen.", en: "I have never met such a nice person.", tr: "Hiç bu kadar nazik bir insanla tanışmadım." },
    },
  },
  {
    word: "Miete",
    article: "die",
    translations: { en: "rent", tr: "kira" },
    sentences: {
      nominativ: { de: "Die Miete ist sehr hoch.", en: "The rent is very high.", tr: "Kira çok yüksek." },
      akkusativ: { de: "Ich muss die Miete bezahlen.", en: "I have to pay the rent.", tr: "Kirayı ödemem gerekiyor." },
    },
  },
  {
    word: "Milch",
    article: "die",
    translations: { en: "milk", tr: "süt" },
    sentences: {
      nominativ: { de: "Die Milch ist kalt.", en: "The milk is cold.", tr: "Süt soğuk." },
      akkusativ: { de: "Ich kaufe die Milch.", en: "I am buying the milk.", tr: "Sütü alıyorum." },
    },
  },
  {
    word: "Mitte",
    article: "die",
    translations: { en: "middle / center", tr: "orta" },
    sentences: {
      nominativ: { de: "Die Mitte des Raumes ist leer.", en: "The middle of the room is empty.", tr: "Odanın ortası boş." },
      akkusativ: { de: "Stell den Tisch in die Mitte.", en: "Put the table in the middle.", tr: "Masayı ortaya koy." },
    },
  },
  {
    word: "Moment",
    article: "der",
    translations: { en: "moment", tr: "an" },
    sentences: {
      nominativ: { de: "Der richtige Moment wird kommen.", en: "The right moment will come.", tr: "Doğru an gelecek." },
      akkusativ: { de: "Warten Sie einen Moment, bitte.", en: "Wait a moment, please.", tr: "Biraz bekleyin, lütfen." },
    },
  },
  {
    word: "Mund",
    article: "der",
    translations: { en: "mouth", tr: "ağız" },
    sentences: {
      nominativ: { de: "Sein Mund ist geschlossen.", en: "His mouth is closed.", tr: "Ağzı kapalı." },
      akkusativ: { de: "Bitte öffnen Sie den Mund.", en: "Please open your mouth.", tr: "Lütfen ağzınızı açın." },
    },
  },
  {
    word: "Mutter",
    article: "die",
    translations: { en: "mother", tr: "anne" },
    sentences: {
      nominativ: { de: "Meine Mutter kocht.", en: "My mother is cooking.", tr: "Annem yemek yapıyor." },
      akkusativ: { de: "Ich rufe meine Mutter an.", en: "I am calling my mother.", tr: "Annemi arıyorum." },
    },
  },
  {
    word: "Name",
    article: "der",
    translations: { en: "name", tr: "isim" },
    sentences: {
      nominativ: { de: "Sein Name ist lang.", en: "His name is long.", tr: "Onun adı uzun." },
      akkusativ: { de: "Ich habe seinen Namen vergessen.", en: "I forgot his name.", tr: "Onun adını unuttum." },
    },
  },
  {
    word: "Nummer",
    article: "die",
    translations: { en: "number", tr: "numara" },
    sentences: {
      nominativ: { de: "Die Hausnummer ist 23.", en: "The house number is 23.", tr: "Ev numarası 23." },
      akkusativ: { de: "Können Sie mir Ihre Nummer geben?", en: "Can you give me your number?", tr: "Bana numaranızı verebilir misiniz?" },
    },
  },
  {
    word: "Obst",
    article: "das",
    translations: { en: "fruit", tr: "meyve" },
    sentences: {
      nominativ: { de: "Das Obst ist reif.", en: "The fruit is ripe.", tr: "Meyve olgun." },
      akkusativ: { de: "Ich esse jeden Tag Obst.", en: "I eat fruit every day.", tr: "Her gün meyve yerim." },
    },
  },
  {
    word: "Öl",
    article: "das",
    translations: { en: "oil", tr: "yağ" },
    sentences: {
      nominativ: { de: "Das Öl ist heiß.", en: "The oil is hot.", tr: "Yağ sıcak." },
      akkusativ: { de: "Wir brauchen Öl für den Salat.", en: "We need oil for the salad.", tr: "Salata için yağa ihtiyacımız var." },
    },
  },
  {
    word: "Oma",
    article: "die",
    translations: { en: "grandma", tr: "büyükanne / nine" },
    sentences: {
      nominativ: { de: "Meine Oma bäckt den besten Kuchen.", en: "My grandma bakes the best cake.", tr: "Büyükannem en iyi keki yapar." },
      akkusativ: { de: "Am Wochenende besuche ich meine Oma.", en: "I am visiting my grandma on the weekend.", tr: "Hafta sonu büyükannemi ziyaret ediyorum." },
    },
  },
  {
    word: "Opa",
    article: "der",
    translations: { en: "grandpa", tr: "büyükbaba / dede" },
    sentences: {
      nominativ: { de: "Mein Opa geht jeden Tag spazieren.", en: "My grandpa goes for a walk every day.", tr: "Büyükbabam her gün yürüyüşe çıkar." },
      akkusativ: { de: "Ich helfe meinem Opa im Garten.", en: "I am helping my grandpa in the garden.", tr: "Büyükbabama bahçede yardım ediyorum." },
    },
  },
  {
    word: "Ordnung",
    article: "die",
    translations: { en: "order", tr: "düzen" },
    sentences: {
      nominativ: { de: "Die Ordnung in diesem Zimmer ist perfekt.", en: "The order in this room is perfect.", tr: "Bu odadaki düzen mükemmel." },
      akkusativ: { de: "Bitte bringen Sie alles in Ordnung.", en: "Please put everything in order.", tr: "Lütfen her şeyi düzene sokun." },
    },
  },
  {
    word: "Ort",
    article: "der",
    translations: { en: "place / town", tr: "yer / kasaba" },
    sentences: {
      nominativ: { de: "Der Ort ist sehr malerisch.", en: "The town is very picturesque.", tr: "Kasaba çok pitoresk." },
      akkusativ: { de: "Wir suchen einen ruhigen Ort.", en: "We are looking for a quiet place.", tr: "Sakin bir yer arıyoruz." },
    },
  },
  {
    word: "Papier",
    article: "das",
    translations: { en: "paper", tr: "kağıt" },
    sentences: {
      nominativ: { de: "Das Papier ist weiß.", en: "The paper is white.", tr: "Kağıt beyaz." },
      akkusativ: { de: "Ich brauche ein Blatt Papier.", en: "I need a sheet of paper.", tr: "Bir yaprak kağıda ihtiyacım var." },
    },
  },
  {
    word: "Partner",
    article: "der",
    translations: { en: "partner (male)", tr: "partner (erkek)" },
    sentences: {
      nominativ: { de: "Mein Partner unterstützt mich immer.", en: "My partner always supports me.", tr: "Partnerim beni her zaman destekler." },
      akkusativ: { de: "Sie sucht einen neuen Partner.", en: "She is looking for a new partner.", tr: "Yeni bir partner arıyor." },
    },
  },
  {
    word: "Party",
    article: "die",
    translations: { en: "party", tr: "parti" },
    sentences: {
      nominativ: { de: "Die Party war ein großer Erfolg.", en: "The party was a great success.", tr: "Parti büyük bir başarıydı." },
      akkusativ: { de: "Wir organisieren eine Party.", en: "We are organizing a party.", tr: "Bir parti düzenliyoruz." },
    },
  },
  {
    word: "Pass",
    article: "der",
    translations: { en: "passport", tr: "pasaport" },
    sentences: {
      nominativ: { de: "Mein Pass ist noch gültig.", en: "My passport is still valid.", tr: "Pasaportum hala geçerli." },
      akkusativ: { de: "Ich muss meinen Pass erneuern lassen.", en: "I have to get my passport renewed.", tr: "Pasaportumu yeniletmem gerekiyor." },
    },
  },
  {
    word: "Pause",
    article: "die",
    translations: { en: "break", tr: "mola" },
    sentences: {
      nominativ: { de: "Die Pause dauert 15 Minuten.", en: "The break lasts 15 minutes.", tr: "Mola 15 dakika sürüyor." },
      akkusativ: { de: "Lass uns eine Pause machen.", en: "Let's take a break.", tr: "Hadi bir mola verelim." },
    },
  },
  {
    word: "Plan",
    article: "der",
    translations: { en: "plan / map", tr: "plan / harita" },
    sentences: {
      nominativ: { de: "Der Plan ist gut, aber schwer umzusetzen.", en: "The plan is good, but difficult to implement.", tr: "Plan iyi, ama uygulaması zor." },
      akkusativ: { de: "Ich brauche einen Stadtplan.", en: "I need a city map.", tr: "Bir şehir haritasına ihtiyacım var." },
    },
  },
  {
    word: "Platz",
    article: "der",
    translations: { en: "place / seat / square", tr: "yer / koltuk / meydan" },
    sentences: {
      nominativ: { de: "Dieser Platz ist reserviert.", en: "This seat is reserved.", tr: "Bu koltuk rezerve edilmiş." },
      akkusativ: { de: "Bitte nehmen Sie Platz.", en: "Please take a seat.", tr: "Lütfen oturun." },
    },
  },
  {
    word: "Polizei",
    article: "die",
    translations: { en: "police", tr: "polis" },
    sentences: {
      nominativ: { de: "Die Polizei ist schon da.", en: "The police are already here.", tr: "Polis zaten burada." },
      akkusativ: { de: "Rufen Sie die Polizei!", en: "Call the police!", tr: "Polisi arayın!" },
    },
  },
  {
    word: "Post",
    article: "die",
    translations: { en: "post office / mail", tr: "postane / posta" },
    sentences: {
      nominativ: { de: "Die Post kommt um 11 Uhr.", en: "The mail arrives at 11 o'clock.", tr: "Posta saat 11'de geliyor." },
      akkusativ: { de: "Ich bringe den Brief zur Post.", en: "I'm taking the letter to the post office.", tr: "Mektubu postaneye götürüyorum." },
    },
  },
  {
    word: "Postleitzahl",
    article: "die",
    translations: { en: "postal code", tr: "posta kodu" },
    sentences: {
      nominativ: { de: "Die Postleitzahl ist fünfstellig.", en: "The postal code has five digits.", tr: "Posta kodu beş hanelidir." },
      akkusativ: { de: "Wie ist Ihre Postleitzahl?", en: "What is your postal code?", tr: "Posta kodunuz nedir?" },
    },
  },
  {
    word: "Praktikum",
    article: "das",
    translations: { en: "internship", tr: "staj" },
    sentences: {
      nominativ: { de: "Das Praktikum dauert drei Monate.", en: "The internship lasts three months.", tr: "Staj üç ay sürüyor." },
      akkusativ: { de: "Sie macht ein Praktikum bei einer großen Firma.", en: "She is doing an internship at a large company.", tr: "Büyük bir firmada staj yapıyor." },
    },
  },
  {
    word: "Praxis",
    article: "die",
    translations: { en: "doctor's office / practice", tr: "muayenehane" },
    sentences: {
      nominativ: { de: "Die Praxis ist ab acht Uhr geöffnet.", en: "The doctor's office is open from eight o'clock.", tr: "Muayenehane saat sekizden itibaren açık." },
      akkusativ: { de: "Ich gehe morgen zur Praxis.", en: "I am going to the doctor's office tomorrow.", tr: "Yarın muayenehaneye gideceğim." },
    },
  },
  {
    word: "Preis",
    article: "der",
    translations: { en: "price", tr: "fiyat" },
    sentences: {
      nominativ: { de: "Der Preis ist mir zu hoch.", en: "The price is too high for me.", tr: "Fiyat bana göre çok yüksek." },
      akkusativ: { de: "Können Sie mir den Preis sagen?", en: "Can you tell me the price?", tr: "Bana fiyatı söyleyebilir misiniz?" },
    },
  },
  {
    word: "Problem",
    article: "das",
    translations: { en: "problem", tr: "sorun / problem" },
    sentences: {
      nominativ: { de: "Das ist kein Problem.", en: "That is not a problem.", tr: "Bu bir sorun değil." },
      akkusativ: { de: "Wir haben ein Problem.", en: "We have a problem.", tr: "Bir sorunumuz var." },
    },
  },
  {
    word: "Prospekt",
    article: "der",
    translations: { en: "brochure", tr: "broşür" },
    sentences: {
      nominativ: { de: "Der Prospekt liegt auf dem Tisch.", en: "The brochure is on the table.", tr: "Broşür masanın üzerinde." },
      akkusativ: { de: "Ich lese den Prospekt.", en: "I am reading the brochure.", tr: "Broşürü okuyorum." },
    },
  },
  {
    word: "Prüfung",
    article: "die",
    translations: { en: "exam / test", tr: "sınav" },
    sentences: {
      nominativ: { de: "Die Prüfung war sehr schwer.", en: "The exam was very difficult.", tr: "Sınav çok zordu." },
      akkusativ: { de: "Ich habe die Prüfung bestanden.", en: "I passed the exam.", tr: "Sınavı geçtim." },
    },
  },
  {
    word: "Raum",
    article: "der",
    translations: { en: "room / space", tr: "oda / alan" },
    sentences: {
      nominativ: { de: "Der Raum ist hell und freundlich.", en: "The room is bright and friendly.", tr: "Oda aydınlık ve samimi." },
      akkusativ: { de: "Wir brauchen mehr Raum.", en: "We need more space.", tr: "Daha fazla alana ihtiyacımız var." },
    },
  },
  {
    word: "Rechnung",
    article: "die",
    translations: { en: "bill / invoice", tr: "fatura / hesap" },
    sentences: {
      nominativ: { de: "Die Rechnung ist hoch.", en: "The bill is high.", tr: "Fatura yüksek." },
      akkusativ: { de: "Bitte bringen Sie die Rechnung.", en: "Please bring the bill.", tr: "Lütfen hesabı getirin." },
    },
  },
  {
    word: "Regen",
    article: "der",
    translations: { en: "rain", tr: "yağmur" },
    sentences: {
      nominativ: { de: "Der Regen hört nicht auf.", en: "The rain doesn't stop.", tr: "Yağmur durmuyor." },
      akkusativ: { de: "Ich mag den Geruch von Regen.", en: "I like the smell of rain.", tr: "Yağmur kokusunu seviyorum." },
    },
  },
  {
    word: "Reis",
    article: "der",
    translations: { en: "rice", tr: "pirinç / pilav" },
    sentences: {
      nominativ: { de: "Der Reis ist fertig gekocht.", en: "The rice is cooked.", tr: "Pilav pişti." },
      akkusativ: { de: "Zum Hähnchen essen wir Reis.", en: "We eat rice with the chicken.", tr: "Tavukla birlikte pilav yiyoruz." },
    },
  },
  {
    word: "Reise",
    article: "die",
    translations: { en: "journey / trip", tr: "seyahat / gezi" },
    sentences: {
      nominativ: { de: "Die Reise war lang und anstrengend.", en: "The journey was long and tiring.", tr: "Seyahat uzun ve yorucuydu." },
      akkusativ: { de: "Wir planen eine Reise nach Italien.", en: "We are planning a trip to Italy.", tr: "İtalya'ya bir seyahat planlıyoruz." },
    },
  },
  {
    word: "Reisebüro",
    article: "das",
    translations: { en: "travel agency", tr: "seyahat acentesi" },
    sentences: {
      nominativ: { de: "Das Reisebüro ist in der Stadtmitte.", en: "The travel agency is in the city center.", tr: "Seyahat acentesi şehir merkezinde." },
      akkusativ: { de: "Ich gehe ins Reisebüro, um einen Flug zu buchen.", en: "I am going to the travel agency to book a flight.", tr: "Uçak bileti almak için seyahat acentesine gidiyorum." },
    },
  },
  {
    word: "Reiseführer",
    article: "der",
    translations: { en: "travel guide / tour guide", tr: "seyahat rehberi / tur rehberi" },
    sentences: {
      nominativ: { de: "Der Reiseführer kennt die Stadt sehr gut.", en: "The tour guide knows the city very well.", tr: "Tur rehberi şehri çok iyi tanıyor." },
      akkusativ: { de: "Ich kaufe einen Reiseführer für Paris.", en: "I am buying a travel guide for Paris.", tr: "Paris için bir seyahat rehberi alıyorum." },
    },
  },
  {
    word: "Reparatur",
    article: "die",
    translations: { en: "repair", tr: "tamir" },
    sentences: {
      nominativ: { de: "Die Reparatur dauert zwei Tage.", en: "The repair will take two days.", tr: "Tamir iki gün sürecek." },
      akkusativ: { de: "Das Auto braucht eine Reparatur.", en: "The car needs a repair.", tr: "Arabanın tamire ihtiyacı var." },
    },
  },
  {
    word: "Restaurant",
    article: "das",
    translations: { en: "restaurant", tr: "restoran" },
    sentences: {
      nominativ: { de: "Das Restaurant ist für seine gute Küche bekannt.", en: "The restaurant is known for its good cuisine.", tr: "Restoran iyi mutfağıyla tanınır." },
      akkusativ: { de: "Am Abend gehen wir in ein Restaurant.", en: "In the evening we are going to a restaurant.", tr: "Akşam bir restorana gidiyoruz." },
    },
  },
  {
    word: "Rezeption",
    article: "die",
    translations: { en: "reception desk", tr: "resepsiyon" },
    sentences: {
      nominativ: { de: "Die Rezeption ist 24 Stunden besetzt.", en: "The reception desk is staffed 24 hours.", tr: "Resepsiyon 24 saat açıktır." },
      akkusativ: { de: "Bitte geben Sie den Schlüssel an der Rezeption ab.", en: "Please leave the key at the reception desk.", tr: "Lütfen anahtarı resepsiyona bırakın." },
    },
  },
  {
    word: "Saft",
    article: "der",
    translations: { en: "juice", tr: "meyve suyu" },
    sentences: {
      nominativ: { de: "Der Orangensaft ist frisch gepresst.", en: "The orange juice is freshly squeezed.", tr: "Portakal suyu taze sıkılmış." },
      akkusativ: { de: "Ich trinke gern einen Apfelsaft.", en: "I like to drink an apple juice.", tr: "Elma suyu içmeyi severim." },
    },
  },
  {
    word: "Salat",
    article: "der",
    translations: { en: "salad", tr: "salata" },
    sentences: {
      nominativ: { de: "Der Salat ist gesund.", en: "The salad is healthy.", tr: "Salata sağlıklıdır." },
      akkusativ: { de: "Ich bestelle einen gemischten Salat.", en: "I am ordering a mixed salad.", tr: "Karışık bir salata sipariş ediyorum." },
    },
  },
  {
    word: "Salz",
    article: "das",
    translations: { en: "salt", tr: "tuz" },
    sentences: {
      nominativ: { de: "Das Salz steht auf dem Tisch.", en: "The salt is on the table.", tr: "Tuz masanın üzerinde." },
      akkusativ: { de: "Gib mir bitte das Salz.", en: "Please pass me the salt.", tr: "Lütfen bana tuzu uzat." },
    },
  },
  {
    word: "Satz",
    article: "der",
    translations: { en: "sentence", tr: "cümle" },
    sentences: {
      nominativ: { de: "Der Satz ist grammatikalisch korrekt.", en: "The sentence is grammatically correct.", tr: "Cümle dilbilgisi açısından doğru." },
      akkusativ: { de: "Bitte schreiben Sie einen ganzen Satz.", en: "Please write a complete sentence.", tr: "Lütfen tam bir cümle yazın." },
    },
  },
  {
    word: "S-Bahn",
    article: "die",
    translations: { en: "suburban train", tr: "banliyö treni" },
    sentences: {
      nominativ: { de: "Die S-Bahn fährt alle 10 Minuten.", en: "The suburban train runs every 10 minutes.", tr: "Banliyö treni her 10 dakikada bir çalışır." },
      akkusativ: { de: "Wir nehmen die S-Bahn zum Flughafen.", en: "We are taking the suburban train to the airport.", tr: "Havaalanına banliyö treniyle gidiyoruz." },
    },
  },
  {
    word: "Schalter",
    article: "der",
    translations: { en: "counter / switch", tr: "gişe / şalter" },
    sentences: {
      nominativ: { de: "Der Schalter 3 ist geöffnet.", en: "Counter 3 is open.", tr: "3 numaralı gişe açık." },
      akkusativ: { de: "Gehen Sie bitte zum Schalter.", en: "Please go to the counter.", tr: "Lütfen gişeye gidin." },
    },
  },
  {
    word: "Schild",
    article: "das",
    translations: { en: "sign", tr: "tabela / levha" },
    sentences: {
      nominativ: { de: "Das Schild zeigt den Weg.", en: "The sign shows the way.", tr: "Tabela yolu gösteriyor." },
      akkusativ: { de: "Haben Sie das Schild nicht gesehen?", en: "Didn't you see the sign?", tr: "Tabelayı görmediniz mi?" },
    },
  },
  {
    word: "Schinken",
    article: "der",
    translations: { en: "ham", tr: "jambon" },
    sentences: {
      nominativ: { de: "Der Schinken ist sehr lecker.", en: "The ham is very tasty.", tr: "Jambon çok lezzetli." },
      akkusativ: { de: "Ich möchte ein Brötchen mit Schinken.", en: "I would like a roll with ham.", tr: "Jambonlu bir ekmek istiyorum." },
    },
  },
  {
    word: "Schluss",
    article: "der",
    translations: { en: "end / conclusion", tr: "son" },
    sentences: {
      nominativ: { de: "Der Schluss des Buches ist überraschend.", en: "The end of the book is surprising.", tr: "Kitabın sonu şaşırtıcı." },
      akkusativ: { de: "Wir müssen jetzt Schluss machen.", en: "We have to end now.", tr: "Şimdi bitirmek zorundayız." },
    },
  },
  {
    word: "Schlüssel",
    article: "der",
    translations: { en: "key", tr: "anahtar" },
    sentences: {
      nominativ: { de: "Der Schlüssel ist weg.", en: "The key is gone.", tr: "Anahtar kayıp." },
      akkusativ: { de: "Ich suche den Schlüssel.", en: "I am looking for the key.", tr: "Anahtarı arıyorum." },
    },
  },
  {
    word: "Schrank",
    article: "der",
    translations: { en: "cupboard / wardrobe", tr: "dolap" },
    sentences: {
      nominativ: { de: "Der Schrank steht im Schlafzimmer.", en: "The wardrobe is in the bedroom.", tr: "Dolap yatak odasında duruyor." },
      akkusativ: { de: "Wir kaufen einen neuen Schrank.", en: "We are buying a new cupboard.", tr: "Yeni bir dolap alıyoruz." },
    },
  },
  {
    word: "Schuh",
    article: "der",
    translations: { en: "shoe", tr: "ayakkabı" },
    sentences: {
      nominativ: { de: "Der Schuh passt nicht.", en: "The shoe doesn't fit.", tr: "Ayakkabı uymuyor." },
      akkusativ: { de: "Ich habe meinen Schuh verloren.", en: "I have lost my shoe.", tr: "Ayakkabımı kaybettim." },
    },
  },
  {
    word: "Schule",
    article: "die",
    translations: { en: "school", tr: "okul" },
    sentences: {
      nominativ: { de: "Die Schule beginnt um acht.", en: "School starts at eight.", tr: "Okul sekizde başlıyor." },
      akkusativ: { de: "Die Kinder gehen in die Schule.", en: "The children go to school.", tr: "Çocuklar okula gidiyor." },
    },
  },
  {
    word: "Schüler",
    article: "der",
    translations: { en: "pupil / student (male)", tr: "öğrenci (erkek)" },
    sentences: {
      nominativ: { de: "Der Schüler ist sehr fleißig.", en: "The student is very diligent.", tr: "Öğrenci çok çalışkan." },
      akkusativ: { de: "Der Lehrer lobt den Schüler.", en: "The teacher praises the student.", tr: "Öğretmen öğrenciyi övüyor." },
    },
  },
  {
    word: "Schwester",
    article: "die",
    translations: { en: "sister", tr: "kız kardeş" },
    sentences: {
      nominativ: { de: "Meine Schwester wohnt in Berlin.", en: "My sister lives in Berlin.", tr: "Kız kardeşim Berlin'de yaşıyor." },
      akkusativ: { de: "Ich habe eine ältere Schwester.", en: "I have an older sister.", tr: "Bir ablam var." },
    },
  },
  {
    word: "Schwimmbad",
    article: "das",
    translations: { en: "swimming pool", tr: "yüzme havuzu" },
    sentences: {
      nominativ: { de: "Das Schwimmbad ist im Sommer geöffnet.", en: "The swimming pool is open in the summer.", tr: "Yüzme havuzu yazın açık." },
      akkusativ: { de: "Wir gehen morgen ins Schwimmbad.", en: "We are going to the swimming pool tomorrow.", tr: "Yarın yüzme havuzuna gidiyoruz." },
    },
  },
  {
    word: "See",
    article: "der",
    translations: { en: "lake", tr: "göl" },
    sentences: {
      nominativ: { de: "Der See ist sehr tief.", en: "The lake is very deep.", tr: "Göl çok derin." },
      akkusativ: { de: "Wir fahren am Wochenende an den See.", en: "We are going to the lake on the weekend.", tr: "Hafta sonu göle gidiyoruz." },
    },
  },
  {
    word: "Sehenswürdigkeit",
    article: "die",
    translations: { en: "sight / tourist attraction", tr: "görülecek yer" },
    sentences: {
      nominativ: { de: "Diese Sehenswürdigkeit ist weltberühmt.", en: "This sight is world-famous.", tr: "Bu görülecek yer dünyaca ünlüdür." },
      akkusativ: { de: "Wir besuchen eine Sehenswürdigkeit.", en: "We are visiting a tourist attraction.", tr: "Görülecek bir yeri ziyaret ediyoruz." },
    },
  },
  {
    word: "Sofa",
    article: "das",
    translations: { en: "sofa", tr: "kanepe" },
    sentences: {
      nominativ: { de: "Das Sofa ist sehr bequem.", en: "The sofa is very comfortable.", tr: "Kanepe çok rahat." },
      akkusativ: { de: "Wir kaufen ein neues Sofa.", en: "We are buying a new sofa.", tr: "Yeni bir kanepe alıyoruz." },
    },
  },
  {
    word: "Sohn",
    article: "der",
    translations: { en: "son", tr: "oğul" },
    sentences: {
      nominativ: { de: "Mein Sohn ist Student.", en: "My son is a student.", tr: "Oğlum öğrenci." },
      akkusativ: { de: "Ich besuche meinen Sohn.", en: "I am visiting my son.", tr: "Oğlumu ziyaret ediyorum." },
    },
  },
  {
    word: "Sonne",
    article: "die",
    translations: { en: "sun", tr: "güneş" },
    sentences: {
      nominativ: { de: "Die Sonne scheint heute.", en: "The sun is shining today.", tr: "Bugün güneş parlıyor." },
      akkusativ: { de: "Ich genieße die Sonne.", en: "I am enjoying the sun.", tr: "Güneşin tadını çıkarıyorum." },
    },
  },
  {
    word: "Speisekarte",
    article: "die",
    translations: { en: "menu", tr: "menü" },
    sentences: {
      nominativ: { de: "Die Speisekarte bietet viele Gerichte.", en: "The menu offers many dishes.", tr: "Menü birçok yemek sunuyor." },
      akkusativ: { de: "Können Sie mir bitte die Speisekarte bringen?", en: "Could you please bring me the menu?", tr: "Lütfen bana menüyü getirir misiniz?" },
    },
  },
  {
    word: "Sport",
    article: "der",
    translations: { en: "sport", tr: "spor" },
    sentences: {
      nominativ: { de: "Sport ist gesund.", en: "Sport is healthy.", tr: "Spor sağlıklıdır." },
      akkusativ: { de: "Ich mache gerne Sport.", en: "I like to do sports.", tr: "Spor yapmayı severim." },
    },
  },
  {
    word: "Sprache",
    article: "die",
    translations: { en: "language", tr: "dil" },
    sentences: {
      nominativ: { de: "Deutsch ist eine schwere Sprache.", en: "German is a difficult language.", tr: "Almanca zor bir dildir." },
      akkusativ: { de: "Ich lerne eine neue Sprache.", en: "I am learning a new language.", tr: "Yeni bir dil öğreniyorum." },
    },
  },
  {
    word: "Stadt",
    article: "die",
    translations: { en: "city", tr: "şehir" },
    sentences: {
      nominativ: { de: "Die Stadt ist sehr alt.", en: "The city is very old.", tr: "Şehir çok eski." },
      akkusativ: { de: "Wir besichtigen die Stadt.", en: "We are visiting the city.", tr: "Şehri geziyoruz." },
    },
  },
  {
    word: "Stelle",
    article: "die",
    translations: { en: "position / job / place", tr: "iş / pozisyon / yer" },
    sentences: {
      nominativ: { de: "Die Stelle ist noch frei.", en: "The position is still available.", tr: "Pozisyon hala açık." },
      akkusativ: { de: "Er sucht eine neue Stelle.", en: "He is looking for a new job.", tr: "Yeni bir iş arıyor." },
    },
  },
  {
    word: "Stock",
    article: "der",
    translations: { en: "floor / level", tr: "kat" },
    sentences: {
      nominativ: { de: "Der erste Stock ist über dem Erdgeschoss.", en: "The first floor is above the ground floor.", tr: "Birinci kat zemin katın üzerindedir." },
      akkusativ: { de: "Wir wohnen im dritten Stock.", en: "We live on the third floor.", tr: "Üçüncü katta oturuyoruz." },
    },
  },
  {
    word: "Straße",
    article: "die",
    translations: { en: "street", tr: "cadde / sokak" },
    sentences: {
      nominativ: { de: "Diese Straße ist breit.", en: "This street is wide.", tr: "Bu cadde geniş." },
      akkusativ: { de: "Überqueren Sie die Straße.", en: "Cross the street.", tr: "Caddeden karşıya geçin." },
    },
  },
  {
    word: "Straßenbahn",
    article: "die",
    translations: { en: "tram", tr: "tramvay" },
    sentences: {
      nominativ: { de: "Die Straßenbahn kommt.", en: "The tram is coming.", tr: "Tramvay geliyor." },
      akkusativ: { de: "Ich nehme die Straßenbahn.", en: "I am taking the tram.", tr: "Tramvaya biniyorum." },
    },
  },
  {
    word: "Student",
    article: "der",
    translations: { en: "student (male)", tr: "öğrenci (üniversite, erkek)" },
    sentences: {
      nominativ: { de: "Der Student lernt für die Prüfung.", en: "The student is studying for the exam.", tr: "Öğrenci sınav için çalışıyor." },
      akkusativ: { de: "Ich kenne den Studenten aus dem Kurs.", en: "I know the student from the course.", tr: "Öğrenciyi kurstan tanıyorum." },
    },
  },
  {
    word: "Stunde",
    article: "die",
    translations: { en: "hour", tr: "saat" },
    sentences: {
      nominativ: { de: "Eine Stunde hat 60 Minuten.", en: "An hour has 60 minutes.", tr: "Bir saat 60 dakikadır." },
      akkusativ: { de: "Ich warte seit einer Stunde.", en: "I have been waiting for an hour.", tr: "Bir saattir bekliyorum." },
    },
  },
  {
    word: "Tasche",
    article: "die",
    translations: { en: "bag / pocket", tr: "çanta / cep" },
    sentences: {
      nominativ: { de: "Die Tasche ist sehr schwer.", en: "The bag is very heavy.", tr: "Çanta çok ağır." },
      akkusativ: { de: "Ich habe meinen Schlüssel in der Tasche.", en: "I have my key in my pocket.", tr: "Anahtarım cebimde." },
    },
  },
  {
    word: "Taxi",
    article: "das",
    translations: { en: "taxi", tr: "taksi" },
    sentences: {
      nominativ: { de: "Das Taxi kommt.", en: "The taxi is coming.", tr: "Taksi geliyor." },
      akkusativ: { de: "Wir nehmen ein Taxi.", en: "We are taking a taxi.", tr: "Bir taksiye biniyoruz." },
    },
  },
  {
    word: "Tee",
    article: "der",
    translations: { en: "tea", tr: "çay" },
    sentences: {
      nominativ: { de: "Der Tee ist heiß.", en: "The tea is hot.", tr: "Çay sıcak." },
      akkusativ: { de: "Möchtest du einen Tee?", en: "Would you like a tea?", tr: "Bir çay ister misin?" },
    },
  },
  {
    word: "Teil",
    article: "der",
    translations: { en: "part", tr: "kısım / parça" },
    sentences: {
      nominativ: { de: "Der erste Teil des Films war langweilig.", en: "The first part of the movie was boring.", tr: "Filmin ilk kısmı sıkıcıydı." },
      akkusativ: { de: "Ich habe nur einen Teil der Aufgabe verstanden.", en: "I only understood part of the task.", tr: "Görevin sadece bir kısmını anladım." },
    },
  },
  {
    word: "Telefon",
    article: "das",
    translations: { en: "telephone", tr: "telefon" },
    sentences: {
      nominativ: { de: "Das Telefon klingelt.", en: "The telephone is ringing.", tr: "Telefon çalıyor." },
      akkusativ: { de: "Kann ich das Telefon benutzen?", en: "Can I use the telephone?", tr: "Telefonu kullanabilir miyim?" },
    },
  },
  {
    word: "Termin",
    article: "der",
    translations: { en: "appointment", tr: "randevu" },
    sentences: {
      nominativ: { de: "Der Termin ist um 10 Uhr.", en: "The appointment is at 10 o'clock.", tr: "Randevu saat 10'da." },
      akkusativ: { de: "Ich habe einen Termin.", en: "I have an appointment.", tr: "Bir randevum var." },
    },
  },
  {
    word: "Test",
    article: "der",
    translations: { en: "test", tr: "test" },
    sentences: {
      nominativ: { de: "Der Test war einfach.", en: "The test was easy.", tr: "Test kolaydı." },
      akkusativ: { de: "Wir schreiben heute einen Test.", en: "We are writing a test today.", tr: "Bugün bir test yazıyoruz." },
    },
  },
  {
    word: "Text",
    article: "der",
    translations: { en: "text", tr: "metin" },
    sentences: {
      nominativ: { de: "Der Text ist schwer zu verstehen.", en: "The text is difficult to understand.", tr: "Metni anlamak zor." },
      akkusativ: { de: "Bitte lesen Sie den Text.", en: "Please read the text.", tr: "Lütfen metni okuyun." },
    },
  },
  {
    word: "Thema",
    article: "das",
    translations: { en: "topic / theme", tr: "konu" },
    sentences: {
      nominativ: { de: "Das Thema der Diskussion ist interessant.", en: "The topic of the discussion is interesting.", tr: "Tartışmanın konusu ilginç." },
      akkusativ: { de: "Wir haben ein neues Thema im Unterricht.", en: "We have a new topic in class.", tr: "Derste yeni bir konumuz var." },
    },
  },
  {
    word: "Ticket",
    article: "das",
    translations: { en: "ticket", tr: "bilet" },
    sentences: {
      nominativ: { de: "Das Ticket ist für die erste Klasse.", en: "The ticket is for the first class.", tr: "Bilet birinci sınıf için." },
      akkusativ: { de: "Ich muss noch ein Ticket kaufen.", en: "I still have to buy a ticket.", tr: "Hala bir bilet almam gerekiyor." },
    },
  },
  {
    word: "Tochter",
    article: "die",
    translations: { en: "daughter", tr: "kız evlat" },
    sentences: {
      nominativ: { de: "Meine Tochter studiert Medizin.", en: "My daughter is studying medicine.", tr: "Kızım tıp okuyor." },
      akkusativ: { de: "Er besucht seine Tochter in Hamburg.", en: "He is visiting his daughter in Hamburg.", tr: "Hamburg'daki kızını ziyaret ediyor." },
    },
  },
  {
    word: "Toilette",
    article: "die",
    translations: { en: "toilet", tr: "tuvalet" },
    sentences: {
      nominativ: { de: "Die Toilette ist besetzt.", en: "The toilet is occupied.", tr: "Tuvalet meşgul." },
      akkusativ: { de: "Wo finde ich die Toilette?", en: "Where can I find the toilet?", tr: "Tuvaleti nerede bulabilirim?" },
    },
  },
  {
    word: "Tomate",
    article: "die",
    translations: { en: "tomato", tr: "domates" },
    sentences: {
      nominativ: { de: "Die Tomate ist rot und saftig.", en: "The tomato is red and juicy.", tr: "Domates kırmızı ve sulu." },
      akkusativ: { de: "Ich esse eine Tomate.", en: "I am eating a tomato.", tr: "Bir domates yiyorum." },
    },
  },
  {
    word: "Treppe",
    article: "die",
    translations: { en: "stairs", tr: "merdiven" },
    sentences: {
      nominativ: { de: "Die Treppe ist steil.", en: "The stairs are steep.", tr: "Merdiven dik." },
      akkusativ: { de: "Nehmen Sie die Treppe, nicht den Aufzug.", en: "Take the stairs, not the elevator.", tr: "Asansörü değil, merdiveni kullanın." },
    },
  },
  {
    word: "Unterricht",
    article: "der",
    translations: { en: "lesson / class", tr: "ders" },
    sentences: {
      nominativ: { de: "Der Unterricht fängt um 9 Uhr an.", en: "The class starts at 9 o'clock.", tr: "Ders saat 9'da başlıyor." },
      akkusativ: { de: "Wir haben heute Nachmittag Unterricht.", en: "We have class this afternoon.", tr: "Bu öğleden sonra dersimiz var." },
    },
  },
  {
    word: "Unterschrift",
    article: "die",
    translations: { en: "signature", tr: "imza" },
    sentences: {
      nominativ: { de: "Die Unterschrift ist unleserlich.", en: "The signature is illegible.", tr: "İmza okunaksız." },
      akkusativ: { de: "Bitte setzen Sie Ihre Unterschrift hier.", en: "Please put your signature here.", tr: "Lütfen imzanızı buraya atın." },
    },
  },
  {
    word: "Urlaub",
    article: "der",
    translations: { en: "vacation / holiday", tr: "tatil" },
    sentences: {
      nominativ: { de: "Der Urlaub war schön.", en: "The vacation was nice.", tr: "Tatil güzeldi." },
      akkusativ: { de: "Wir planen den Urlaub.", en: "We are planning the vacation.", tr: "Tatili planlıyoruz." },
    },
  },
  {
    word: "Vater",
    article: "der",
    translations: { en: "father", tr: "baba" },
    sentences: {
      nominativ: { de: "Mein Vater ist Lehrer.", en: "My father is a teacher.", tr: "Babam öğretmen." },
      akkusativ: { de: "Ich frage meinen Vater.", en: "I am asking my father.", tr: "Babama soruyorum." },
    },
  },
  {
    word: "Verein",
    article: "der",
    translations: { en: "club / association", tr: "kulüp / dernek" },
    sentences: {
      nominativ: { de: "Der Verein hat viele Mitglieder.", en: "The club has many members.", tr: "Kulübün çok sayıda üyesi var." },
      akkusativ: { de: "Er ist in einem Sportverein.", en: "He is in a sports club.", tr: "Bir spor kulübünde." },
    },
  },
  {
    word: "Verkäufer",
    article: "der",
    translations: { en: "salesperson (male)", tr: "satıcı (erkek)" },
    sentences: {
      nominativ: { de: "Der Verkäufer ist sehr freundlich.", en: "The salesperson is very friendly.", tr: "Satıcı çok cana yakın." },
      akkusativ: { de: "Fragen Sie den Verkäufer.", en: "Ask the salesperson.", tr: "Satıcıya sorun." },
    },
  },
  {
    word: "Vermieter",
    article: "der",
    translations: { en: "landlord", tr: "ev sahibi" },
    sentences: {
      nominativ: { de: "Der Vermieter wohnt im selben Haus.", en: "The landlord lives in the same house.", tr: "Ev sahibi aynı evde yaşıyor." },
      akkusativ: { de: "Ich muss mit dem Vermieter sprechen.", en: "I have to speak with the landlord.", tr: "Ev sahibiyle konuşmam gerekiyor." },
    },
  },
  {
    word: "Verwandte",
    article: "der",
    translations: { en: "relative", tr: "akraba" },
    sentences: {
      nominativ: { de: "Ein Verwandter aus Amerika kommt zu Besuch.", en: "A relative from America is coming to visit.", tr: "Amerika'dan bir akraba ziyarete geliyor." },
      akkusativ: { de: "Wir besuchen unsere Verwandten.", en: "We are visiting our relatives.", tr: "Akrabalarımızı ziyaret ediyoruz." },
    },
  },
  {
    word: "Vorname",
    article: "der",
    translations: { en: "first name", tr: "isim / ad" },
    sentences: {
      nominativ: { de: "Mein Vorname ist Thomas.", en: "My first name is Thomas.", tr: "Benim adım Thomas." },
      akkusativ: { de: "Wie ist Ihr Vorname?", en: "What is your first name?", tr: "Adınız nedir?" },
    },
  },
  {
    word: "Vorsicht",
    article: "die",
    translations: { en: "caution / care", tr: "dikkat" },
    sentences: {
      nominativ: { de: "Vorsicht ist geboten.", en: "Caution is advised.", tr: "Dikkatli olunması tavsiye edilir." },
      akkusativ: { de: "Fahren Sie mit Vorsicht!", en: "Drive with care!", tr: "Dikkatli sürün!" },
    },
  },
  {
    word: "Vorwahl",
    article: "die",
    translations: { en: "area code", tr: "alan kodu" },
    sentences: {
      nominativ: { de: "Die Vorwahl für Berlin ist 030.", en: "The area code for Berlin is 030.", tr: "Berlin için alan kodu 030'dur." },
      akkusativ: { de: "Ich kenne die Vorwahl nicht.", en: "I don't know the area code.", tr: "Alan kodunu bilmiyorum." },
    },
  },
  {
    word: "Wasser",
    article: "das",
    translations: { en: "water", tr: "su" },
    sentences: {
      nominativ: { de: "Das Wasser ist kalt.", en: "The water is cold.", tr: "Su soğuk." },
      akkusativ: { de: "Ich trinke ein Glas Wasser.", en: "I am drinking a glass of water.", tr: "Bir bardak su içiyorum." },
    },
  },
  {
    word: "Wein",
    article: "der",
    translations: { en: "wine", tr: "şarap" },
    sentences: {
      nominativ: { de: "Der Wein kommt aus Frankreich.", en: "The wine comes from France.", tr: "Şarap Fransa'dan geliyor." },
      akkusativ: { de: "Möchten Sie ein Glas Wein?", en: "Would you like a glass of wine?", tr: "Bir kadeh şarap ister misiniz?" },
    },
  },
  {
    word: "Welt",
    article: "die",
    translations: { en: "world", tr: "dünya" },
    sentences: {
      nominativ: { de: "Die Welt ist groß.", en: "The world is big.", tr: "Dünya büyük." },
      akkusativ: { de: "Er reist um die Welt.", en: "He is traveling around the world.", tr: "Dünyayı dolaşıyor." },
    },
  },
  {
    word: "Wetter",
    article: "das",
    translations: { en: "weather", tr: "hava durumu" },
    sentences: {
      nominativ: { de: "Das Wetter ist heute schön.", en: "The weather is nice today.", tr: "Bugün hava güzel." },
      akkusativ: { de: "Wir hatten schlechtes Wetter im Urlaub.", en: "We had bad weather on vacation.", tr: "Tatilde kötü hava vardı." },
    },
  },
  {
    word: "Wind",
    article: "der",
    translations: { en: "wind", tr: "rüzgar" },
    sentences: {
      nominativ: { de: "Der Wind ist heute stark.", en: "The wind is strong today.", tr: "Bugün rüzgar kuvvetli." },
      akkusativ: { de: "Ich spüre den kalten Wind.", en: "I feel the cold wind.", tr: "Soğuk rüzgarı hissediyorum." },
    },
  },
  {
    word: "Wohnung",
    article: "die",
    translations: { en: "apartment", tr: "daire" },
    sentences: {
      nominativ: { de: "Die Wohnung ist gemütlich.", en: "The apartment is cozy.", tr: "Daire rahat." },
      akkusativ: { de: "Wir suchen eine Wohnung.", en: "We are looking for an apartment.", tr: "Bir daire arıyoruz." },
    },
  },
  {
    word: "Wort",
    article: "das",
    translations: { en: "word", tr: "kelime" },
    sentences: {
      nominativ: { de: "Das Wort ist schwer auszusprechen.", en: "The word is difficult to pronounce.", tr: "Kelimeyi telaffuz etmek zor." },
      akkusativ: { de: "Ich kenne dieses Wort nicht.", en: "I don't know this word.", tr: "Bu kelimeyi bilmiyorum." },
    },
  },
  {
    word: "Zeit",
    article: "die",
    translations: { en: "time", tr: "zaman" },
    sentences: {
      nominativ: { de: "Die Zeit vergeht schnell.", en: "Time passes quickly.", tr: "Zaman çabuk geçiyor." },
      akkusativ: { de: "Hast du Zeit?", en: "Do you have time?", tr: "Zamanın var mı?" },
    },
  },
  {
    word: "Zeitung",
    article: "die",
    translations: { en: "newspaper", tr: "gazete" },
    sentences: {
      nominativ: { de: "Die Zeitung liegt auf dem Küchentisch.", en: "The newspaper is on the kitchen table.", tr: "Gazete mutfak masasının üzerinde." },
      akkusativ: { de: "Ich lese jeden Morgen die Zeitung.", en: "I read the newspaper every morning.", tr: "Her sabah gazete okurum." },
    },
  },
  {
    word: "Zigarette",
    article: "die",
    translations: { en: "cigarette", tr: "sigara" },
    sentences: {
      nominativ: { de: "Eine Zigarette liegt auf dem Boden.", en: "A cigarette is lying on the floor.", tr: "Yerde bir sigara var." },
      akkusativ: { de: "Er raucht eine Zigarette.", en: "He is smoking a cigarette.", tr: "Bir sigara içiyor." },
    },
  },
  {
    word: "Zimmer",
    article: "das",
    translations: { en: "room", tr: "oda" },
    sentences: {
      nominativ: { de: "Das Zimmer ist groß.", en: "The room is big.", tr: "Oda büyük." },
      akkusativ: { de: "Ich buche ein Zimmer.", en: "I am booking a room.", tr: "Bir oda ayırtıyorum." },
    },
  },
  {
    word: "Zoll",
    article: "der",
    translations: { en: "customs", tr: "gümrük" },
    sentences: {
      nominativ: { de: "Der Zoll kontrolliert das Gepäck.", en: "The customs control the luggage.", tr: "Gümrük bagajı kontrol ediyor." },
      akkusativ: { de: "Wir müssen durch den Zoll.", en: "We have to go through customs.", tr: "Gümrükten geçmek zorundayız." },
    },
  },
  {
    word: "Zug",
    article: "der",
    translations: { en: "train", tr: "tren" },
    sentences: {
      nominativ: { de: "Der Zug hat Verspätung.", en: "The train is delayed.", tr: "Tren rötar yaptı." },
      akkusativ: { de: "Wir nehmen den nächsten Zug.", en: "We are taking the next train.", tr: "Bir sonraki trene bineceğiz." },
    },
  },
];