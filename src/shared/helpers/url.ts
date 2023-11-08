// Function to get search parameters from the URL
export function getSearchParams(): Record<string, string | string[]> {
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    if (params[key] !== undefined) {
      if (Array.isArray(params[key])) {
        (params[key] as string[]).push(value);
      } else {
        params[key] = [params[key] as string, value];
      }
    } else {
      params[key] = value;
    }
  });

  return params;
}

export function setSearchParam(key: string, value: string): void {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has(key)) {
    const existingValues = searchParams.getAll(key);
    existingValues.push(value);
    searchParams.delete(key);
    for (const val of existingValues) {
      searchParams.append(key, val);
    }
  } else {
    searchParams.append(key, value);
  }

  const newUrl = `${window.location.pathname}?${searchParams.toString()}${
    window.location.hash
  }`;
  window.history.replaceState(null, "", newUrl);
}

export function removeSearchParam(key: string, value?: string): void {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has(key)) {
    if (value) {
      const existingValues = searchParams.getAll(key);
      const index = existingValues.indexOf(value);

      if (index !== -1) {
        existingValues.splice(index, 1);
        searchParams.delete(key);

        for (const val of existingValues) {
          searchParams.append(key, val);
        }
      }
    } else {
      searchParams.delete(key);
    }

    const newUrl = `${window.location.pathname}?${searchParams.toString()}${
      window.location.hash
    }`;
    window.history.replaceState(null, "", newUrl);
  }
}

export const handleQueryParamArray = (
  param: string | string[],
): string[] | [] => (Array.isArray(param) ? param : param ? [param] : []);

export const prepareQueryParam = (param: string | string[]): string =>
  (Array.isArray(param) ? param[0] : param) ?? "";
