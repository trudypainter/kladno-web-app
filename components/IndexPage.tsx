import PageHead from 'components/PageHead'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { CaseFile, Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'

import CaseFilePreview from './CaseFilePreview'
import KladnoHeader from './KladnoHeader'
import SearchBar from './Search'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  caseFiles: CaseFile[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, caseFiles, settings } = props

  return (
    <div className="bg-dark p-4">
      <PageHead />

      <KladnoHeader />
      <SearchBar />

      <div className="flex w-full flex-wrap justify-between">
        {caseFiles.map((file) => (
          <CaseFilePreview case={file} />
        ))}
      </div>
    </div>
  )
}
