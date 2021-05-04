    let NumberRow = [60, 47, 56, 31, 37, 51, 53, 58, 41, 39, 50, 41, 59, 45, 33, 47, 43, 38, 48, 47, 44, 30, 54, 42, 57, 31, 44, 47, 40, 56, 37, 47, 42, 48, 67, 37, 47, 42,];
    let NrLength =  25//NumberRow.length; //ДЛИНА МАССИВА
    let VarRange = 13.2//Math.max.apply(null,NumberRow) - Math.min.apply(null,NumberRow); //РАЗМАХ R
    let IntervalCout =  6//Math.floor(1 + 3.3*Math.log10(NrLength));  //КОЛИЧЕСТВО ИНТЕРВАЛОВ k
    let IntervalLength = VarRange/IntervalCout; //ДЛИНА ИНТЕРВАЛЛА h
    let IntervalLengthRnd = Math.ceil(IntervalLength.toFixed(2) * 10) / 10; //ОКРУГЛЕННАЯ ДЛИНА ИНТЕРВАЛА d
    AFirst = Math.min.apply(null,NumberRow)-0.5*IntervalLength;
    AFirst = AFirst.toFixed(1);
    console.log(IntervalLength);
