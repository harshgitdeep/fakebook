import { useState } from "react";
import NewsfeedHeader from "./subcomponents/NewsfeedHeader";
import PhotoPost from "./subcomponents/PhotoPost";
import VideoPost from "./subcomponents/VideoPost";

export default function Newsfeed(){
    const kodeGo = "Tickets available on book my show!"
    const steveharvey = "I've been called the “Hardest working Man in Hollywood” but did you know I am also the smartest? All thanks to @woodoku #smartestmanintheworldoku"

    const portfolio = "@harshgitdeep | Portfolio<br></br>🚀 Techstacks I use recently : HTML, CSS, JavaScript, React, Vite, Tailwind, Bootstrap, Postman, Npm.<br></br>All of my projects are here.<br></br>Link : <a className='portfolio' href='https://harshgitdeep.netlify.app/' target='_blank'>https://harshgitdeep.netlify.app/</a>"

    const [newPost, setNewPost] = useState([])

    function setPost(post){
        setNewPost(prevPost => [...prevPost, post])
    }
    return (
        <main className="flex-column main">
            <NewsfeedHeader setPost={setPost}/>

            <VideoPost dp={"images/steveharvey.png"} name={"iamsteveharveytv"} ago={"Sep 29"} desc={steveharvey} post={"images/steveharvey.mp4"} likes={"3K"} comments={45} shares={30} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"images/hrithik.png"} name={"Hrithik Roshan"} ago={"35m"} desc={""} post={"https://m.media-amazon.com/images/M/MV5BZjkwN2Q5Y2QtMmE2MC00NzlkLTg2NzQtYjVjYjVmNjE2ZTNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"} likes={"47.6K"} comments={500} shares={723} reactType={"images/react.png"}/>

            <PhotoPost dp={"images/sartaj.png"} name={"satindersartaajfans"} ago={"Sponsored"} desc={kodeGo} post={"https://i.ibb.co/zm090zZ/Screenshot-2024-02-11-205934.png"} likes={"2.5K"} comments={9} shares={4} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"images/harsh.png"} name={"Harshdeep Singh"} ago={"1d"} desc={portfolio} likes={567} comments={27} shares={6} reactType={"images/react2.png"} border={false} html={true}/>

            <PhotoPost dp={"images/bbc-news.png "} name={"BBC NEWS"} ago={"1h"} desc={"It turns out that clownfish count each other's stripes to spot their friends - and to chase away their rivals too.Researchers in Japan have found that the fish recognise their friends or enemies by counting the number of white stripes on their bodies.Clownfish were happy to share their home with fish that had a different number of stripes to themselves - but clownfish with the same number of stripes got chased away.Tap the link in @BBCNews's bio to find out why scientists think this happens."} post={"images/news-img.jpg"} likes={"1.1K"} comments={9} shares={8} reactType={"images/react.png"} border={true}/>
        </main>

    )
}
