import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import './Dashboard.css';
import './DashboardGlobal.css';
import '../../assets/lib/owl_carousel.css';
import '../../assets/lib/bootstrap.css';
import DashboardContainer from '../DashboardContainer/DashboardContainer';
import education from './images/sex-education.webp';
import education_logo from './images/sex-education-logo.webp';
import search from './images/search.svg';
import banner from './images/banner.jpg';
import user_green from './images/user-image-green.png';

import { users } from './images/images';
import moneyHeist from './video/MoneyHeist.mp4';

function Dashboard() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [description, setDescription] = useState('A criminal mastermind goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose');
    const [_banner, setBanner] = useState(banner);
    const [title, setTitle] = useState('Money Heist')


    function setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
    }
    
    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }


    useEffect(() => {
        const token = getToken();
        
        if(token === undefined || token === null){
            
            return <Login setToken={setToken}/>
        }
        
        const script1 = document.createElement('script');

        script1.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js";
        script1.async = true;

        document.body.appendChild(script1);

        const script2 = document.createElement('script');

        script2.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.js";
        script2.async = true;

        document.body.appendChild(script2);


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
                'X-RapidAPI-Key': 'b54d762a10msh4d9ab3765bb8867p1bcc62jsne0612ccb5fc8'
            }
        };
        fetch(`https://movies-app1.p.rapidapi.com/api/movies`, options)
        .then(response => response.json())
        .then(setMovies)
        .catch(thisError => console.error(thisError));

        setLoading(true);
        document.body.removeChild(script1);
        document.body.removeChild(script2);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                document.getElementById('header').classList.add('nav__black');
                document.getElementById("hero-video").pause();
            } else {
                document.getElementById('header').classList.remove('nav__black');
                document.getElementById("hero-video").play();
            }
        });


    }, []);

    if(loading && movies.length !== 0){
        return(
            <div className='DashboardBody'>
                <main id="mainContainer">
                <div>
                <header id='header' className="d-flex space-between flex-center flex-middle">
                    <div className="nav-links d-flex flex-center flex-middle">
                        <a href="/Netlify/Dashboard">
                            <div className="header logo">
                                <svg viewBox="0 0 111 30" fill="#e50914" id="netflix-logo" width="100%" height="100%">    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path></svg>        
                            </div>
                            <h2 className="second-logo-text red-color f-s-28">N</h2>
                        </a>
                        <a href="/Netlify/Dashboard" className="nav-item home">Home</a>
                        <a href="/Netlify/Dashboard" className="nav-item">TV Show</a>
                        <a href="/Netlify/Dashboard" className="nav-item">Movies</a>
                        <a href="/Netlify/Dashboard" className="nav-item latest">Latest</a>
                        <a href="/Netlify/Dashboard" className="nav-item">My List</a>
                    </div>
                    <div className="righticons d-flex flex-end flex-middle">
                        <a href="/Netlify/Dashboard"><img src={search} alt="search icon" /></a>
    
                        <div className="dropdown">
                            <img src={user_green} alt="user profile icon" className="user-icon" />
    
                            <div className="dropdown-content">
                                <div className="profile-links">
                                    {users.map((filteredUser) => (
                                        <a href="/Netlify/Dashboard" className="profile-item d-flex flex-middle">
                                            <img src={filteredUser.url} alt="user profile icon" className="user-icon" />
                                            <span>{filteredUser.user}</span>
                                        </a>
                                    ))}
                                    
                                    <a href="/Netlify/Dashboard" className="profile-item last" >Manage Profiles</a>
                                </div>
                                <div className="line"></div>
                                <div className="links d-flex direction-column">
                                    <a href="/Netlify/Dashboard">Account</a>
                                    <a href="/Netlify/Dashboard">Help Center</a>
                                    <a href="/Netlify/Login">Sign Out of Netflix</a>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </header>
                
    
                <div className="">
                    <section id="browse-dashboard" className=" d-flex direction-column flex-start middle-align">
                        <div>
    
                            <video className="hero-background-image" id="hero-video" autoPlay={true}
                                poster={_banner} src={moneyHeist}
                                type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
    
                            <div className="shadow-layer"></div>
                        </div>
    
                        <div className="container text-container" style={{zIndex: 5}}>
                            <div className="contentlogo">
                                <h1 className="show-logo">{title}</h1>
                            </div>
                            
                            <div className="ranking d-flex m-t-20 flex-middle">
                                <svg id="top-10-badge" viewBox="0 0 28 30">
                                    <path d="M0,0 L28,0 L28,30 L0,30 L0,0 Z M2,2 L2,28 L26,28 L26,2 L2,2 Z" fill="#FFFFFF">
                                    </path>
                                    <path
                                        d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533"
                                        fill="#FFFFFF"></path>
                                    <polygon fill="#FFFFFF"
                                        points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206">
                                    </polygon>
                                    <path
                                        d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z"
                                        fill="#FFFFFF"></path>
                                    <path
                                        d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842"
                                        fill="#FFFFFF"></path>
                                    <polygon fill="#FFFFFF"
                                        points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061">
                                    </polygon>
                                </svg>
                                <span className="p-l-10">#1 in Philippines Today</span>
                            </div>
    
                            <div className="synopsis m-t-20" style={{maxWidth: '500px'}}>
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="buttons-container m-t-20">
                                <button className="play-button"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                                        </svg>
                                    </span> Play</button>
    
                                <button className="more-info-button m-t-20"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span> More Info</button>
                            </div>
                        </div>
                    </section>
                </div>
    
    
                <div className="black-background">
                    <section id="mylist" className="container">
                        <h1 className="mylist-heading">
                            My List
                        </h1>
                        <div className="mylist-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                            {
                                movies.results?.slice(0, 5).map((movie) => (
                                    <DashboardContainer key={movie._id} dashboard={movie} setDescription={setDescription} setBanner={setBanner} />
                                ))
                            }
                        </div>
                    </section>
    
                    <section id="continue-watching" className="container p-t-40">
                        <h4 className="continue-watching-heading">
                            Continue watching for Kendrick Ocampo
                        </h4>
                        <div className="continue-watching-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                            {
                                movies.results?.filter(({genres}) => {
                                    return genres?.some(e => e.name === 'Drama')
                                }).map((movie) => (
                                    <DashboardContainer dashboard={movie} setDescription={setDescription} setBanner={setBanner} setTitle={setTitle} />
                                ))
                            }
                        </div>
                    </section>
    
                    <section id="romantic" className="container p-t-40">
                        <h4 className="romantic-heading">
                            Romantic Movies
                        </h4>
                        <div className="romantic-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                            {
                                movies.results?.filter(({genres}) => {
                                    return genres?.some(e => e.name === 'Romance')
                                }).map((movie) => (
                                    <DashboardContainer dashboard={movie} setDescription={setDescription} setBanner={setBanner} setTitle={setTitle} />
                                ))
                            }
                        </div>
                    </section>
    
                    <section className="big-section d-flex flex-start container">
                        <img src={education} alt="" />
    
                        <div className="right-side">
                            <div className="contentlogo">
                                <img src={education_logo} alt="content logo"
                                    className="show-logo" />
                            </div>
    
                            <div className="ranking d-flex m-t-20 flex-middle">
                                <svg id="top-10-badge" viewBox="0 0 28 30" style={{height: '50px'}}>
                                    <path d="M0,0 L28,0 L28,30 L0,30 L0,0 Z M2,2 L2,28 L26,28 L26,2 L2,2 Z" fill="#FFFFFF">
                                    </path>
                                    <path
                                        d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533"
                                        fill="#FFFFFF"></path>
                                    <polygon fill="#FFFFFF"
                                        points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206">
                                    </polygon>
                                    <path
                                        d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z"
                                        fill="#FFFFFF"></path>
                                    <path
                                        d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842"
                                        fill="#FFFFFF"></path>
                                    <polygon fill="#FFFFFF"
                                        points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061">
                                    </polygon>
                                </svg>
                                <span className="p-l-10 f-s-24 f-w-8">#6 in Philippines Today</span>
                            </div>
    
                            <div className="synopsis m-t-20" style={{maxWidth: '500px'}}>
                                <p className="f-s-20">
                                    Sex. It's on teenage minds. It's messing with their heads. And this kid is the least
                                    likely
                                    sexpert in the schoolyard.
                                </p>
                            </div>
                            <div className="buttons-container m-t-20">
                                <button className="play-button"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
                                        </svg>
                                    </span> Play</button>
    
                                <button className="more-info-button m-t-20"><span>
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span> More Info</button>
                            </div>
                        </div>
                    </section>
    
    
                    <section id="romantic" className="container p-t-40">
                        <h4 className="romantic-heading">
                            Get In On the Action
                        </h4>
                        <div className="romantic-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                            {
                                movies.results?.filter(({genres}) => {
                                    return genres?.some(e => e.name === 'Acción')
                                }).map((movie) => (
                                    <DashboardContainer dashboard={movie} setDescription={setDescription} setBanner={setBanner} setTitle={setTitle} />
                                ))
                            }
                        </div>
                    </section>
    
                    <section id="romantic" className="container p-t-40">
                        <h4 className="romantic-heading">
                            Hollywood Action Movies
                        </h4>
                        <div className="romantic-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                            {
                                movies.results?.filter(({genres}) => {
                                    return genres?.some(e => e.name === 'Western')
                                }).map((movie) => (
                                    <DashboardContainer dashboard={movie} setDescription={setDescription} setBanner={setBanner} setTitle={setTitle} />
                                ))
                            }
                        </div>
                    </section>
    
                </div>
            </div>
                </main>
            </div>
            
        );
    }
}


export default Dashboard;