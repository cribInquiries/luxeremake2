// lib/appwrite/getAppwriteConfig.ts
import { unstable_noStore as noStore } from "next/cache"

export function getAppwriteConfig() {
  // Prevent static caching
  noStore()

  const endpointUrl = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT
  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE
  const articlesCollectionId = process.env.NEXT_PUBLIC_APPWRITE_ARTICLE_COLLECTION

  if (!endpointUrl || !projectId || !databaseId || !articlesCollectionId) {
    throw new Error("One or more required Appwrite environment variables are missing.")
  }

  return {
    endpointUrl,
    projectId,
    databaseId,
    articlesCollectionId,
  }
}

export function getAppwriteServerConfig() {
  noStore()

  const config = getAppwriteConfig()
  const apiKey = process.env.APPWRITE_API_KEY // No NEXT_PUBLIC_ prefix - server only

  if (!apiKey) {
    throw new Error("APPWRITE_API_KEY environment variable is missing.")
  }

  return {
    ...config,
    apiKey,
  }
}
