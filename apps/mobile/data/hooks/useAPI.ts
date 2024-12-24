import { useCallback } from "react";

const urlBase = process.env.EXPO_PUBLIC_API_IOS_URL;

export const useAPI = () => {
  const httpGet = useCallback(async (path: string) => {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const urlFull = `${urlBase}${uri}`;

    const response = await fetch(urlFull);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async (path: string, body?: any) => {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const urlFull = `${urlBase}${uri}`;

    const response = await fetch(urlFull, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extractData(response);
  }, []);

  const extractData = (response: Response) => {
    let content: any;

    try {
      content = response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `An unexpected error occurred with status ${response.status}.`
        );
      }
      return null;
    }
    if (!response.ok) throw content;
    return content;
  };

  return { httpGet, httpPost };
};
