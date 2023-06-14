import React from 'react';
import { options } from '../api/tmdb';

interface RequestProps {
  url: string;
  options: typeof options;
}

export function useFetch() {
  const [data, setData] = React.useState<unknown | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({ url, options }: RequestProps) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) {
        throw new Error(
          `Error - ${
            json['status_message'] || json.errors[0] || 'Failed to fetch'
          }`,
        );
      }
      return { response, json };
    } catch (error) {
      json = null;
      if (error instanceof Error) setError(error.message);
      return { response, json };
    } finally {
      setData(json);
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
}
