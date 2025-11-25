"use server"

import { Client, Databases } from "node-appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"

export async function getArticle(id: string) {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.apiKey)

  const databases = new Databases(client)

  try {
    const document = await databases.getDocument(appwriteConfig.databaseId, appwriteConfig.articlesCollectionId, id)
    return { success: true, data: document }
  } catch (error) {
    console.error("Error fetching article with getDocument:", error)
    return { success: false, error: "Failed to fetch article." }
  }
}
