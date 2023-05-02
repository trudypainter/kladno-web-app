import type { CaseFile, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import caseFile from 'schemas/caseFile'

export default function CaseFilePreview(props: { case: CaseFile }) {
  return (
    <div className="h-fit w-full rounded-b-2xl border-2 border-semi-dark p-0 hover:border-lightgrey ">
      <Link
        href={`/casefiles/${props.case._id}`}
        passHref
        className=" hover:cursor-pointer "
      >
        <img src={props.case.documents[0].scan}></img>
        <hr className="border-1 border-semi-dark "></hr>

        <p className="px-2 py-4 font-mono text-md text-white">
          {props.case.personProsecuted.firstName}{' '}
          {props.case.personProsecuted.lastName}
        </p>

        <hr className="border-1 border-semi-dark"></hr>

        <p className="px-2 py-4 font-mono text-sm text-white">
          This is where information about the case could go.
        </p>

        <hr className="border-1 border-semi-dark "></hr>

        {props.case.documents && (
          <div className="mr-4 flex w-full flex-wrap px-2 py-2 pb-4">
            {props.case.documents.map((scan) => (
              <div className="mr-2 mt-2 h-3 w-3 rounded-full bg-semi-dark">
                {' '}
              </div>
            ))}
          </div>
        )}
      </Link>
    </div>
  )
}
