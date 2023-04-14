import { useState, useEffect } from 'react'
import { getCaseFileByID } from 'lib/sanity.client'
import { CaseFile } from 'lib/sanity.queries'
import { Head } from 'next/document'
import PageHead from './PageHead'

export interface CaseFilePageProps {
  //   caseFile: CaseFile

  id: string
}

export default function CaseFilePage({ id }: CaseFilePageProps) {
  const [caseFile, setCaseFile] = useState<CaseFile>()

  useEffect(() => {
    if (id) {
      console.log('ID BEING PASSED', id)
      // Fetch data from API
      getCaseFileByID(id).then((resp) => {
        console.log(resp)
        setCaseFile(resp)
      })
    }
  }, [id])

  return (
    <>
      <PageHead />
      {caseFile && (
        <div className="m-auto mt-24 w-10/12 bg-gray-50 p-8">
          <div className="p-4 text-3xl">
            {caseFile.personProsecuted.firstName}{' '}
            {caseFile.personProsecuted.lastName}
          </div>
          {caseFile.scans && (
            <div className="flex flex-wrap ">
              {caseFile.scans.map((scan) => (
                <div className="w-1/2 p-4">
                  <img src={scan.asset.url}></img>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
