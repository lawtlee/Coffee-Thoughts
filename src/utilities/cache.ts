import { useContext, useCallback } from "react";
import { AppContext } from "./context";
import { retrieveAllBlogs } from "./utilities";
import { Blog } from "./types";

export function useCustomFetch(){
    const { cache } = useContext(AppContext);


    const fetchWithCache = useCallback(async(page: number): Promise<Blog[]>=>{
        const cacheKey = `pagination:${page}`
        const cacheResponse = cache?.current.get(cacheKey)

        if (cacheResponse){
            const data = JSON.parse(cacheResponse);
            return data;
        }
        
        const result = await retrieveAllBlogs(false)
        cache?.current.set(cacheKey, JSON.stringify(result))
        return result
    },[cache])

    return { fetchWithCache }
}
