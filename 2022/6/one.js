const { fetchTextDataFromDay } = require('../utils/loadInputStr');

const markerConst = 4;

const getMarkerIndex = (stream) => {
  const buffer = [stream[0]];
  for (let i = 1; i < stream.length; i++) {
    const char = stream[i];
    const charBufferInd = buffer.indexOf(char);
    if (buffer.indexOf(char) > -1) {
      buffer.splice(0, charBufferInd + 1);
    }
    buffer.push(char);
    if (buffer.length === markerConst) return i + 1;
  }
};

const printMarkerFromStream = async () => {
  const dataStream = await fetchTextDataFromDay(6);

  console.log(getMarkerIndex(dataStream));
};

printMarkerFromStream();
