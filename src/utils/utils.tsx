export const captalize = (str: string) => str.replace(/^\w/, (c) => c.toUpperCase());
export const celsiusToFahrenheit = (tempC?: number) => tempC ? (tempC * 9) / 5 + 32: 0;
