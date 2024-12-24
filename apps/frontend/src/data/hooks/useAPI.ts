/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

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

  const extractData = async (reposta: Response) => {
    let content;

    try {
      content = await reposta.json();
    } catch (error) {
      if (!reposta.ok) {
        throw new Error(
          `An unexpected error occurred with status ${reposta.status}.`
        );
      }
      return null;
    }
    if (!reposta.ok) throw content;
    return content;
  };

  return { httpGet, httpPost };
};
