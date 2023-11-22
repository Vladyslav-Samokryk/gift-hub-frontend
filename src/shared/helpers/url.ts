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

export function setSearchParam(
  key: string,
  value: string,
  multiple: boolean,
): string {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has(key)) {
    const existingValues = searchParams.getAll(key);
    searchParams.delete(key);

    if (multiple) {
      if (!existingValues.includes(value)) {
        existingValues.push(value);
      }

      for (const val of existingValues) {
        searchParams.append(key, val);
      }
    } else {
      searchParams.append(key, value);
    }
  } else {
    searchParams.append(key, value);
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function removeSearchParam(key: string, value?: string): string {
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
  }
  return `${window.location.pathname}?${searchParams.toString()}`;
}

export const handleQueryParamArray = (
  param: string | string[],
): string[] | [] => (Array.isArray(param) ? param : param ? [param] : []);

export const prepareQueryParam = (param: string | string[]): string =>
  (Array.isArray(param) ? param[0] : param) ?? "";
