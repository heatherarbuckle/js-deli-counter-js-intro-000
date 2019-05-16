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

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    for (var i = 0; i < katzDeliLine.length; i++) {
    return `The line is currently: ${i}. ${datzDeliLine[i]}, `
    }
  } else {
    return `The line is currently empty`;
  }
}
