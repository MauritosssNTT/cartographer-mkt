export function number(value: number) { return new Intl.NumberFormat("en", { notation: "compact" }).format(value); }
