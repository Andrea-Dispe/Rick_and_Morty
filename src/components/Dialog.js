import { useState, useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import './Dialog.css'

const DialogModal = ({ isOpened, onClose, info }) => {
  const ref = useRef(null);
  const episodesApiUrl = 'https://rickandmortyapi.com/api/episode'
  const [loading, setLoading] = useState(true)
  const [episodes, setEpisodes] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState()
  const [pages, setPages] = useState()

  useEffect(() => {
    // open modal logic
    if (isOpened) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
    setLoading(true);

    // fetch episodes
    const fetchFirstPageEpisode = async () => {
      const name = info.name.split(' ')[0]
      try {
        const res = await fetch(`${episodesApiUrl}?name=${name}`);
        const data = await res.json();
        if (data.results) {
          setEpisodes(data.results)
        }
        if (data.info && data.info.pages > 1) {
          setNextPageUrl(data.info.next)
          setPages(data.info.pages)
        }
        setLoading(false);

      } catch (error) {
        console.error('error: ', error);
      }
    }
    if (isOpened) {
      fetchFirstPageEpisode();
    }
  }, [isOpened]);


  useEffect(() => {
    setLoading(true);
    const fetchMorePagesEpisodes = async () => {
      for (let i = 1; i < pages; i++) {
        const res = await fetch(`${nextPageUrl}`);
        const moreData = await res.json();
        setEpisodes(prev => [...prev, ...moreData.results])
        if (moreData.info.next) {
          setNextPageUrl(moreData.info.next)
        }
        setLoading(false);
      }
    }
    fetchMorePagesEpisodes()
  }, [nextPageUrl])

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog ref={ref} onCancel={onClose} className="dialog" onClick={onClose}>
      <div onClick={preventAutoClose}>
        <h3>{info.name}</h3>
        <div className="close-dialog-wrapper">
          <RiCloseCircleLine className="btn-close-dialog" onClick={onClose} />
        </div>
        <div className="card-info">
          <div>Gender: {info.gender}</div>
          <div>Location: {info.location.name}</div>
          <div>Origin: {info.origin.name}</div>
          <div>Status: {info.status}</div>
          <div>Specie: {info.species}</div>
        </div>
        <h3>List of Episodes:</h3>
        {loading ? 'Loading' :
          <ul>
            {episodes.map(ep => {
              return (
                <li key={ep.id}>{ep.episode} - {ep.name}</li>
              )
            })}
          </ul>
        }
      </div>
    </dialog>
  );
};

export default DialogModal;


