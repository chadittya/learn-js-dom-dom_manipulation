// MANIPULASI ELEMENT
// 1. element innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Galih Arizza</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

// 2. element Style
// const judul = document.querySelector("h1#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// 3. getAttribute, setAttribute, removeAttribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "galih");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");

// 4. claslist
// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("label");
// p2.classList.toggle("label");

// MANIPULASI NODE
// buat elemet baru
const pbaru = document.createElement("p");
// buat node text
const textPBaru = document.createTextNode("Paragraf Baru dari Javascript");
// simpan tulisan kedalam element
pbaru.appendChild(textPBaru);
// simpan pbaru di section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pbaru); //simpan dikahir dari element

const lBaru = document.createElement("li");
const textLBaru = document.createTextNode("item baru dari javascript");
lBaru.appendChild(textLBaru);
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("section#b ul li:nth-child(2)");
ul.insertBefore(lBaru, li2);

// removechild
const aLink = document.querySelector("section#a a");
sectionA.removeChild(aLink);

// replace
const sectionB = document.getElementById("b");
const p4 = sectionB.getElementsByTagName("p")[0];
const tagP4Baru = document.createElement("h2");
const textP4Baru = document.createTextNode("Judul Baru");
tagP4Baru.appendChild(textP4Baru);
// p4.replaceWith(tagP4Baru); //bisa ini
sectionB.replaceChild(tagP4Baru, p4);
