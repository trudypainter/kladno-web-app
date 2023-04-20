import type { CaseFile, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import caseFile from 'schemas/caseFile'

export default function CaseFilePreview(props: { case: CaseFile }) {
  console.log(props.case.documents)
  return (
    <div
      onClick={() => window.open(`/casefiles/${props.case._id}`)}
      className="my-4 w-64 border-2 border-gray-300 p-4 hover:cursor-pointer hover:bg-gray-50"
    >
      <p>
        {props.case.personProsecuted.firstName}{' '}
        {props.case.personProsecuted.lastName}
      </p>
      <p>ID: {props.case._id} </p>

      {props.case.documents && (
        <div className="mr-4 flex w-full flex-wrap">
          {props.case.documents.map((scan) => (
            <div className="mr-2 mt-2 h-8 w-8 bg-gray-200"> </div>
          ))}
        </div>
      )}
    </div>
  )
}
