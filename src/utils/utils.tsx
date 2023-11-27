export const captalize = (str: string) => str.replace(/^\w/, (c) => c.toUpperCase());
export const celsiusToFahrenheit = (tempC?: number) => (tempC ? (tempC * 9) / 5 + 32 : 0);
export const mpsToMph = (speedMps?: number): number => (speedMps ? speedMps * 2.23694 : 0);
