// Реализовать функцию, реализующую сортировку с учетом правил semver

function getValidNumber(num: number | undefined): number {
  if (num === undefined) {
    return 0;
  }
  return num;
}

export function semverSort(arr: string[]): any[] {
  const result = arr.map((el: string): number[] => el.split(".").map(Number));
  for (let i = result.length - 1; i >= 0; i -= 1) {
    result.sort((a, b) => getValidNumber(a[i]) - getValidNumber(b[i]));
  }
  return result.map((el) => String(el.join(".")));
}
