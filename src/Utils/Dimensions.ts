// module-global state go boop, nothing outside this file can access these 3.
// Could probably encapsulate this in a class
// But eh for now
// TODO: Encapsulate in class
let fieldLength: number = 0;
let fieldWidth: number = 0;
let canvasScaling: number = 0;

export function getServerReportedLength(): number {
    return fieldLength;
}

export function getServerReportedWidth(): number {
    return fieldWidth;
}

export function setServerReportedFieldLength(length: number) {
    fieldLength = length;
}

export function setServerReportedFieldWidth(width: number) {
    fieldWidth = width;
}

export function calculateScalingForFitParent(parent: HTMLElement | null): number {
    let lenghtwiseScale = getParentOrDocHeight(parent) / scaleForCanvas(fieldWidth);
    let widthwiseScale = getParentOrDocWidth(parent) / scaleForCanvas(fieldLength) ;
    return Math.min(lenghtwiseScale, widthwiseScale);
}

export function calculateCanvasSpecificScaling() {
    let lenghtwiseScale = window.devicePixelRatio * 1000 / fieldLength;
    let widthwiseScale =  window.devicePixelRatio * 500 / fieldWidth;
    canvasScaling = lenghtwiseScale >= widthwiseScale ? widthwiseScale : lenghtwiseScale;
}

export function scaleForCanvas(value: number) : number {
    return canvasScaling * value;
}

function getMaxDocumentLength(): number {
    return  Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

export function getParentOrDocWidth(parent: HTMLElement | null) : number {
    return parent?.clientWidth ?? getMaxDocumentLength();
}

function getMaxDocumentHeight(): number {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

export function getParentOrDocHeight(parent: HTMLElement | null): number {
    return parent?.clientHeight ?? getMaxDocumentHeight();
}
