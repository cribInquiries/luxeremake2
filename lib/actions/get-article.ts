// Stub function - returns empty data to prevent server action JSON errors
export async function getArticle(id: string) {
  return {
    success: false,
    error: "Articles service is currently unavailable",
    data: null,
  }
}
