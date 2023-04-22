import type { CaseFile, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import caseFile from 'schemas/caseFile'
import { useEffect, useState } from 'react'

export default function CaseFileListSection(props: { caseFile: CaseFile }) {
  const [columnsData, setColumnsData] = useState<any[][]>([])

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
    const columns = 4 // You can change this to the desired number of columns
    const columnsHeights = new Array(columns).fill(0)
    const newColumnsData = new Array(columns).fill([]).map(() => [])

    props.caseFile.documents.forEach((image) => {
      const columnIndex = calculateColumn(columnsHeights)
      newColumnsData[columnIndex].push(image)
      columnsHeights[columnIndex] += 1 // You can use the actual image height for more accurate calculation
    })

    setColumnsData(newColumnsData)
  }, [props.caseFile.documents])

  return (
    <div className="flex ">
      <div className="w-3/12 pt-4 text-head text-lightgrey">Case Files</div>

      <div className="flex w-9/12 justify-center gap-6">
        {columnsData.map((column, columnIndex) => (
          <div key={columnIndex} className="w-1/4">
            {column.map((image) => (
              <div className="my-4">
                <img src={image.scan} className="w-full object-cover" />
                <div className="font-mono text-lightgrey">Case File</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
