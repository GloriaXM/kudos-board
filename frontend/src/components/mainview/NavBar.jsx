import './NavBar.css'
import SortButton from './SortButton'

function NavBar() {

  return (
    <div className="navBar">
      <SortButton sortType="congratulations"/>
      <SortButton sortType="thanks"/>
      <SortButton sortType="inspiration"/>
    </div>
  )
}

export default NavBar
