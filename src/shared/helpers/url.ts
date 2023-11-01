// Function to get search parameters from the URL
export function getSearchParams(): Record<string, string | string[]> {
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    if (params[key] !== undefined) {
      if (Array.isArray(params[key])) {
        // If the key already exists in params as an array, push the value
        (params[key] as string[]).push(value);
      } else {
        // If the key exists but is not an array, convert it to an array
        params[key] = [params[key] as string, value];
      }
    } else {
      // If the key doesn't exist in params, set it as a string or an array
      params[key] = value;
    }
  });

  return params;
}

// Function to set a search parameter in the URL, allowing multiple values for the same key
export function setSearchParam(key: string, value: string): void {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has(key)) {
    // If the key already exists, append the new value to the existing values
    const existingValues = searchParams.getAll(key);
    existingValues.push(value);
    searchParams.delete(key);
    for (const val of existingValues) {
      searchParams.append(key, val);
    }
  } else {
    // If the key doesn't exist, set it with the new value
    searchParams.append(key, value);
  }

  const newUrl = `${window.location.pathname}?${searchParams.toString()}${
    window.location.hash
  }`;
  window.history.replaceState(null, "", newUrl);
}

// Function to remove a search parameter from the URL, considering multiple values for the same key
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
      // If no `value` is provided, remove the entire key
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
