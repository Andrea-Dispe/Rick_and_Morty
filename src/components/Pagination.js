import { useContext, useEffect, useState} from 'react'
import { PaginationContext } from '../contexts/PaginationContext'
import './Pagination.css'


const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  const { pageNumber } = useContext(PaginationContext);
  const [buttons, setButtons] = useState([]);

  let pageButtons = []
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button className='pagination-btn' key={i} dataid={i} onClick={() => goToPage(i)}>{i}</button>)
  }

  useEffect(() => {
    const unfileteredButtons = pageButtons.filter(button => {
      console.log('button.props.dataid <= pageNumber + 3: ', button.props.dataid <= pageNumber + 2);
      return button.props.dataid > (pageNumber - 3) && button.props.dataid <= (pageNumber + 2)
    })
    setButtons(unfileteredButtons)
  }, [pageNumber])


  return (
    <div className="pagination">
      {prevPage && (<button className='pagination-btn' onClick={prevPage}>Previous</button>)}
      {buttons}
      {nextPage && (<button className='pagination-btn' onClick={nextPage}>Next</button>)}
    </div>
  )
}
export default Pagination