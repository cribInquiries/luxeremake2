"use server"

import { Client, Databases, Query } from "node-appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"

export async function getAllArticles(limit = 10, offset = 0) {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(process.env.APPWRITE_API_KEY!)

  const databases = new Databases(client)

  try {
    const res = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.articlesCollectionId, [
      Query.orderDesc("$createdAt"),
      Query.limit(limit),
      Query.offset(offset),
    ])

    return { success: true, data: res.documents, total: res.total }
  } catch (error) {
    console.error("Error fetching articles:", error)
    return { success: false, error: "Could not fetch articles." }
  }
}
