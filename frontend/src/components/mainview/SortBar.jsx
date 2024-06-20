import './SortBar.css'
import SortButton from './SortButton'

function SortBar() {

  return (
    <div className="navBar">
      <SortButton sortType="congratulations"/>
      <SortButton sortType="thanks"/>
      <SortButton sortType="inspiration"/>
    </div>
  )
}

export default SortBar
