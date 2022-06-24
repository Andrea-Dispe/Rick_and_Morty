import Card from "../components/Card"

const Home = ({ characters }) => {

  return (
    <>
      <div className="cards-wrapper">
        {characters && characters.length > 0 ?
          characters.map(char => {
            return (
              <Card character={char} key={char.id}/>
            )
          }) : 'There are no characters that match the query'}


      </div>
    </>
  );
}

export default Home;