"use strict";

const startBtn = document.querySelector(".start--typing");
const section1 = document.querySelector(".section--1");
const header = document.querySelector("header");
const analyzeBtn = document.querySelector(".analyze--text");
const reset = document.querySelector(".reset--btn");
const section2 = document.querySelector(".section--2");
// analyzer
const charCount = document.querySelector("#char");
const wordCount = document.querySelector("#word");
const sentenceCount = document.querySelector("#sentence");
const spaceCount = document.querySelector("#space");
const punctuationCount = document.querySelector("#punctuation");
const vowelCount = document.querySelector("#vowel");
const consonantCount = document.querySelector("#consonant");
const textArea = document.querySelector(".text_box");

// CREATE AN ARRAY
const uiValues = [
  charCount,
  wordCount,
  sentenceCount,
  spaceCount,
  punctuationCount,
  vowelCount,
  consonantCount,
];

// FUNCTIONS
const defaultVal = function () {
  uiValues.forEach((value) => {
    value.innerHTML = 0;
  });
};
defaultVal();

const findWord = function (t) {
  t = t.replace(/(^\s*)|(\s*$)/g, ""); //regex expression // removet the stating and the ending spaces in th ting
  t = t.replace(/[ ]{2,}/g, " "); //reduce multiple spaces to a single space
  t = t.replace(/\n /, "\n"); // exclude a new line with a start spacing
  // now all the words will be seperated by commas and the length of the array can be calculated
  return t.split(" ").length;

  // console.log(t.split(" ").length);
};

const findSentence = function (t) {
  const regex = /[\w|\)][.?!](\s|$)/g;
  const sCount = t.match(regex);
  return sCount ? sCount.length : 0;
};

const findPunctuation = function (t) {
  const regex = /[.,?;:!-'"(){}]/g;
  const pCount = t.match(regex);
  return pCount ? pCount.length : 0;
};

const findVowel = function (t) {
  const regex = /[aAeEiIoOuU]/g;
  const vCount = t.match(regex);
  return vCount ? vCount.length : 0;
};

const findConsonant = function (t) {
  const regex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
  const cCount = t.match(regex);
  return cCount ? cCount.length : 0;
};

// SCROLL TO SECTION 1
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

// SCROLL TO SECTION 2
analyzeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const text = textArea.value;
  if (text) {
    section2.scrollIntoView({ behavior: "smooth" });
    // console.log(text);
    charCount.innerHTML = text.length;
    wordCount.innerHTML = findWord(text);
    sentenceCount.innerHTML = findSentence(text);
    spaceCount.innerHTML = text.split(" ").length - 1;
    punctuationCount.innerHTML = findPunctuation(text);
    vowelCount.innerHTML = findVowel(text);
    consonantCount.innerHTML = findConsonant(text);
  } else {
    alert("Please type something to analyze");
  }
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
  uiValues.forEach((value) => (value.innerHTML = 0));
  textArea.value = "";
});
