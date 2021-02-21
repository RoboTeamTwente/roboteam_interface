let scaling: number;

export function setFieldLength(length: number) {
    // The width should be 0.66 * getWidth();
    // (0.66 * getWidth()) / width
    scaling = (0.66 * getWidth()) / length;
}

export function scale(value: number) : number {
    return scaling * value;
}

export function getLength(): number {
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