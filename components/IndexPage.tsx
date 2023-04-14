import PageHead from 'components/PageHead'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { CaseFile, Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import CaseFilePreview from './CaseFilePreview'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  caseFiles: CaseFile[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, caseFiles, settings } = props

  return (
    <div className="m-auto my-32 w-10/12">
      <PageHead />

      <div className="flex w-full justify-between ">
        <h1 className="text-[42px] font-bold tracking-tighter">
          Kladno Archive
        </h1>
        <div>
          <Link href="/studio">Studio</Link>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between">
        {caseFiles.map((file) => (
          <CaseFilePreview case={file} />
        ))}
      </div>
    </div>
  )
}
