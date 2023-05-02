import type { CaseFile, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import caseFile from 'schemas/caseFile'

export default function LawPreview(props: { law: any }) {
  console.log(props.law)
  return (
    <div className="h-fit w-full rounded-b-2xl border-2 border-semi-dark p-0 hover:border-lightgrey ">
      <Link
        href={`/casefiles/${props.law._id}`}
        passHref
        className=" hover:cursor-pointer "
      >
        <p className="px-2 py-4 font-mono text-md text-white">
          Law {props.law.title.split('-')[2]},{props.law.title.split('-')[1]}
        </p>
        <hr className="border-1 border-semi-dark"></hr>

        <p className="px-2 py-4 font-mono text-sm text-white">
          Additional information about the law could go here.
        </p>
      </Link>
    </div>
  )
}
