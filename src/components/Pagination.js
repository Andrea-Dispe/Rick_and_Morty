import './Pagination.css'

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = []
  for (let i = 1; i <= pages; i++) {
  pageButtons.push(<button className='pagination-btn' key={i} onClick={() => goToPage(i)}>{i}</button>)
}
  return (
    <div className="pagination">
      {prevPage && (<button className='pagination-btn' onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className='pagination-btn' onClick={nextPage}>Next</button>)}
    </div>
  )
}
export default Pagination