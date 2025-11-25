export interface Article {
  $id: string
  $createdAt: string
  $updatedAt: string
  title: string
  content: string
  author?: string
  excerpt?: string
  imageUrl?: string
  slug?: string
  published?: boolean
  tags?: string[]
}
