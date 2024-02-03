// STRİNGS-------------//


// Bir string, metin veya karakter dizisi olarak adlandırılan verileri temsil eder. JavaScript'te stringler çift tırnak ("), tek tırnak ('), veya backtick (`) içinde tanımlanabilir. 


// ?string oluşturma yöntemleri

const str1 = "new string"
const str2 = 'new string'
const değer = "merhaba"
const str3 = `new string : ${değer}`  //backtickler ile template literal (modern javascriptte bu daha iyi olur.)

const str4 = new String ("new string")
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log("🤷‍♀️😁🧿");

// !ESCAPE KARAKTER(Characters)

//

//  \escape karakterler ters slash işaretiyle kullanılır.

//   \ hemen yanındaki karakteri göz ardı edilmesini sağlar.

let metin = 'Ömer\'in kalemi' // burda kaçış karekteri olarak görevde

let path = "c:\\users\\kullanıcılar" //yanındaki slash işaretlerini kod olarak görmesin bize ters slash görsün istersem iki ters slash yine kaçış karakteri görevindedir.
console.log(path);  

const parag = "\tmerhaba chort16 sakinleri \ngününüz güzel geçsin " //new linw yani bir alt satıra geçmesi için \n yaparız . \t boşluk bırakiır
console.log(`       merhaba chort16 sakinleri 

gününüz güzel geçsin`);

console.log(parag);

// unicode karakterleri için 
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9") 


// ! STRİNG YAPISI VE İNDEXLEME

let course = "Clarusway"
console.log(course[0]);
console.log(course[2]);
console.log(course[4]);
// stringler primitive bir tür olduğu için parça olarak değiştiremezsiniz.
// immutable = not mutable
course[4]="a"  //bunu yapamayız parça olarak değiştiremeyiz.
course="Clarusway Bootcamp"
console.log(course);

for (let i=0; i<=17 ; i++){
    console.log(course[i]);
}

// !STRİNG PROPERTY AND METHODS

// property bir stringin kendi özelliğidir.//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur 

// ?lenght


console.log(course.length); //kaçtane elemandan oluştuğuu yazar.

// ?prototype      bunu çok kullanmıyoruz. her stringin bir prototype vardır kullanacağımız methodları verir.görebiliyoruz.

for(let i = 0; i<=course.length-2; i++){
console.log(course[i]);
}   

for(let i=course.length-1; i>=0; i--){
    console.log(course[i]);
}
const imoji ="❤️"
console.log(imoji.length);

// !STRİNG METHODS*****

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.
