import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { CaseFile, Post, Settings } from 'lib/sanity.queries'
import CaseFilePreview from './CaseFilePreview'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  caseFiles: CaseFile[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, caseFiles, settings } = props
  const [heroPost, ...morePosts] = caseFiles || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          <div className="flex w-full flex-wrap justify-between">
            {caseFiles.map((file) => (
              <CaseFilePreview case={file} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}
