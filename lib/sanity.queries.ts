import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

// "documents": documents[]->{...},
export const caseFileFields = groq`
  _id,
  _type,
  title,
  dateIn,
  datePenalty,
  coverImage,
  "documents": documents[]->{
    ...,
    "scan": scan.asset->url,
    originalFilename},
  "personProsecuted": personProsecuted->{firstName, lastName},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "caseFile"] | order(date desc, _updatedAt desc) {
  ${caseFileFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const caseFileByIDQuery = groq`
*[_type == "caseFile" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface CaseFile {
  _id: string
  dateIn: string
  datePenalty: string
  documents: CaseFileDocument[]
  announcementsViolated: any
  personProsecuted: Person
}

export interface CaseFileDocument {
  _id: string
  scan: string
  date: string
  originalFilename: string
}

export interface Person {
  _id: string
  firstName: string
  lastName: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
