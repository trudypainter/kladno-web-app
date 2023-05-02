import PageHead from 'components/PageHead'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { CaseFile, Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import CaseFilePreview from './CaseFilePreview'
import KladnoHeader from './KladnoHeader'
import SearchBar from './Search'
import AnnouncementPreview from './AnnouncementPreview'
import LawPreview from './LawPreview'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  caseFiles: CaseFile[]
  settings: Settings
  announcements: any[]
  laws: any[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, caseFiles, settings, laws, announcements } = props

  const [columnsData, setColumnsData] = useState<any[][]>([])

  const [allElms, setAllElms] = useState<any[]>([])

  const calculateColumn = (columnsHeights: number[]): number => {
    let shortestColumnIndex = 0
    let minHeight = columnsHeights[0]

    for (let i = 1; i < columnsHeights.length; i++) {
      if (columnsHeights[i] < minHeight) {
        minHeight = columnsHeights[i]
        shortestColumnIndex = i
      }
    }

    return shortestColumnIndex
  }

  useEffect(() => {
    const allFiles = caseFiles.concat(laws).concat(announcements)
    // randomize order of all files
    allFiles.sort(() => Math.random() - 0.5)

    setAllElms(allFiles)
  }, [caseFiles, laws, announcements])

  useEffect(() => {
    const columns = 5 // You can change this to the desired number of columns
    const columnsHeights = new Array(columns).fill(0)
    const newColumnsData = new Array(columns).fill([]).map(() => [])

    allElms.forEach((image) => {
      const columnIndex = calculateColumn(columnsHeights)
      newColumnsData[columnIndex].push(image)
      columnsHeights[columnIndex] += 1 // You can use the actual image height for more accurate calculation
    })

    setColumnsData(newColumnsData)
  }, [allElms])

  return (
    <div className="bg-dark p-4">
      <PageHead />

      <KladnoHeader />
      <SearchBar />

      <div className="flex w-full justify-center gap-6">
        {columnsData.map((column, columnIndex) => (
          <div key={columnIndex} className="w-1/5 ">
            {column.map((file) => (
              <>
                {file._type === 'caseFile' && (
                  <div className="my-4 w-full ">
                    <CaseFilePreview case={file} />
                  </div>
                )}
                {file._type === 'announcement' && (
                  <div className="my-4 w-full ">
                    <AnnouncementPreview announcement={file} />
                  </div>
                )}
                {file._type === 'law' && (
                  <div className="my-4 w-full ">
                    <LawPreview law={file} />
                  </div>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
