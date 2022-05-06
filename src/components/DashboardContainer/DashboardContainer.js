import React from 'react'
import './DashboardContainer.css'
import '../../assets/lib/owl_carousel.css';
import '../../assets/lib/bootstrap.css';



const DashboardContainer = (props) => {

  const {description, setDescription} = props;
  const {_banner, setBanner} = props;
  const {title, setTitle} = props;
  

  return (
    <div className="video">
      <video className="mylist-img p-r-10 p-t-10 video-item"
          poster={props.dashboard.image} src="../images/tv-show/videos/Never Have I Ever - Official Trailer - Netflix_2.mp4"
          type="video/mp4">
          Your browser does not support the video tag.
      </video>

      <div className="video-description d-flex flex-end direction-column">
          <div className="play-button" onClick={() => {
            setDescription(props.dashboard.description);
            setBanner(props.dashboard.image);
            setTitle(props.dashboard.titleOriginal);
            }}>
              <svg viewBox="0 0 24 24">
                  <path d="M6 4l15 8-15 8z" fill="black"></path>
              </svg>
          </div>
          <div>
              <h4 className="heading f-w-8 text-shadow">
              {props.dashboard.titleOriginal}
              </h4>
          </div>
          <div className="info d-flex flex-middle flex-no-wrap">
              <p className="rated text-shadow"><strong>{props.dashboard.rating}</strong></p>
              <p className="season-count text-shadow">{props.dashboard.year}</p>
          </div>
          <div className="genere d-flex flex-no-wrap text-shadow">
            {props.dashboard.genres.map((item) => (
              <p>
                #{item.name}
              </p>
            ))}

          </div>
      </div>
    </div>
  )
}

export default DashboardContainer
