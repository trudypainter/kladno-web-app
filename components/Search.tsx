export default function SearchBar(props) {
  const { placeholder, onChange, value } = props

  const changed = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="fixed inset-x-0 top-0 flex w-full justify-center ">
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={changed}
          value={value}
          className="h-16 w-96 border-2 border-t-0 border-lightgrey bg-dark px-4 text-md text-lightgrey caret-lightgrey focus:border-white focus:outline-none "
        />
      </div>
      <div>
        <select className="h-16 w-64 border-2 border-t-0 border-l-0 border-lightgrey bg-dark px-4 text-lightgrey focus:border-white focus:outline-none ">
          <option value="red">All Objects</option>
          <option value="green">Case Files</option>
          <option value="blue">Laws</option>
          <option value="blue">Announcements</option>
          <option value="blue">Buckets</option>
        </select>
      </div>
    </div>
  )
}
