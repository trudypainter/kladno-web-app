import Link from 'next/link'

export default function KladnoHeader(props) {
  return (
    <>
      <div className="flex w-full justify-between ">
        <h1 className="font-head font-sans text-head font-semibold text-lightgrey">
          Kladno Archive
        </h1>
        <div className="flex space-x-2">
          <p className="text-white">ENG</p>
          <p className="text-semi-dark">CZE</p>
          <p className="text-semi-dark">GER</p>
        </div>
      </div>
      <p className="mb-32 mt-8 w-1/2 text-head leading-tight text-semi-dark">
        Welcome to the Kladno Archive. <br></br>A collaborative online archive
        developed by the Masaryk Institute and Archive of the Czech Academy of
        Sciences in Prague, the Czech National Archives, and the Kladno Museum.
        and the Massachussets Institute of Technology.
      </p>
    </>
  )
}
