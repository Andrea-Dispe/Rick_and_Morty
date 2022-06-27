import './Avatar.css'

const Avatar = ({image}) => {
  return (
    <div className="avatar">
      <img src={image} alt="something" />
    </div>
  );
}

export default Avatar;