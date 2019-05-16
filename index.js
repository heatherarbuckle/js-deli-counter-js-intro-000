function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    var custName = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${custName}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

var line = [];

function currentLine(katzDeliLine) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i}. ${katzDeliLine[i]}`);
    }
    if (katzDeliLine.length > 1) {
      return `The line is currently: ${line}`
    } else {
    return `The line is currently empty.`;
  }
}
