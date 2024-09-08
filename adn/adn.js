// STEP 1: SPLITTING a file containing nucleotides into codons.
// 1 codon = 3 nucleotides.
// Splitting our nucleotide array into chunks / sequences of 3 letters (=codons)

// Import File System Module
const fs = require("fs");

// Read the file content synchronously
const sequence = fs.readFileSync("adn.txt", "utf8");

console.log(sequence);

function splitNucleoIntoCodons(sequence) {
  const codons = [];
  for (let i = 0; i < sequence.length; i += 3) {
    const codon = sequence.slice(i, i + 3);
    codons.push(codon);
  }
  return codons;
}
const codons = splitNucleoIntoCodons(sequence);
console.log(codons);

// STEP 2: Conversion
// Use the conversion table to translate codons into proteins.
// The aim is to replace codons (left) by a protein (right).

let codonsToProtein = {
  ATA: "I",
  ATC: "I",
  ATT: "I",
  ATG: "M",
  ACA: "T",
  ACC: "T",
  ACG: "T",
  ACT: "T",
  AAC: "N",
  AAT: "N",
  AAA: "K",
  AAG: "K",
  AGC: "S",
  AGT: "S",
  AGA: "R",
  AGG: "R",
  CTA: "L",
  CTC: "L",
  CTG: "L",
  CTT: "L",
  CCA: "P",
  CCC: "P",
  CCG: "P",
  CCT: "P",
  CAC: "H",
  CAT: "H",
  CAA: "Q",
  CAG: "Q",
  CGA: "R",
  CGC: "R",
  CGG: "R",
  CGT: "R",
  GTA: "V",
  GTC: "V",
  GTG: "V",
  GTT: "V",
  GCA: "A",
  GCC: "A",
  GCG: "A",
  GCT: "A",
  GAC: "D",
  GAT: "D",
  GAA: "E",
  GAG: "E",
  GGA: "G",
  GGC: "G",
  GGG: "G",
  GGT: "G",
  TCA: "S",
  TCC: "S",
  TCG: "S",
  TCT: "S",
  TTC: "F",
  TTT: "F",
  TTA: "L",
  TTG: "L",
  TAC: "Y",
  TAT: "Y",
  TAA: "_",
  TAG: "_",
  TGC: "C",
  TGT: "C",
  TGA: "_",
  TGG: "W",
};

function extractCodonProtein() {
  const convertedProtein = [];
  for (let i = 0; i < codons.length; i++) {
    const codon = codons[i];
    const protein = codonsToProtein[codon];
    convertedProtein.push(protein);
  }
  return convertedProtein;
}
const convertedProtein = extractCodonProtein();
console.log(convertedProtein.join(""));
