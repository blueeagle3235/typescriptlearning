export function RandomRange(min: number, max: number): number {
    return Math.floor((Math.random() * (max + min)) - min);
}

export function RandomColor(includeAlpha: boolean = false): string {
    let color: string = "rgba(";
    color += RandomRange(0, 255) + ",";
    color += RandomRange(0, 255) + ",";
    color += RandomRange(0, 255) + ",";
    color += includeAlpha ? RandomRange(0, 255) + ")" : "1)";

    return color;
}