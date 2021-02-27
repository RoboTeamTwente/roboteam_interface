
export function hostnamePortPairToWSURL(host: string, port: number | string, path: string): string {
    return "ws://" + host + ":" + port + "/" + path;
}