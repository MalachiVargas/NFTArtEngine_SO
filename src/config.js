"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "/src/blendMode.js"));
const indexName = "SpacedOut"
const description =
  "The SpacedOut collection consists of 10000 generated astronauts crafted with love from over 210+ digitally hand drawn assets. It lives as one of the first NFTs stored on the blockchain in the Moonbeam Ecosystem.";
const baseUri = "ipfs://NewUriToReplace";

const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Aura" },
      { name: "Outfit" },
      { name: "Patch" },
      { name: "Accessory" },
      { name: "Visor" },
      { name: "Jewelry" },
      { name: "Bubble" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  indexName,
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
