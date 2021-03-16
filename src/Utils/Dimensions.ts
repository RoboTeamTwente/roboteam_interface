// module-global state go boop, nothing outside this file can access these 3.
// Could probably encapsulate this in a class
// But eh for now
// TODO: Encapsulate in class
let fieldLength: number;
let fieldWidth: number;
let scaling: number = 0;

export function setFieldLength(length: number) {
    fieldLength = length;
}

export function setFieldWidth(width: number) {
    fieldWidth = width;
}

export function calculateScaling(length: number, width: number) {
    setFieldLength(length);
    setFieldWidth(width);
    let tentativeScaling = 0.66 * getLength() / fieldLength;
    if ((tentativeScaling * fieldWidth) <= (0.9 * getWidth())) {
        scaling = tentativeScaling;
    } else {
        scaling = 0.9 * getWidth() / fieldWidth;
    }
}

export function scale(value: number) : number {
    return scaling * value;
}

export function getLength() : number {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

export function getWidth(): number {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}