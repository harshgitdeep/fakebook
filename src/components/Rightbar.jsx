import FriendRequest from "./subcomponents/FriendRequest";
import Friends from "./subcomponents/Friends";
import Sponsor from "./subcomponents/Sponsor";

export default function RightBar(){
    return (
        <nav className="right-bar">
            <div>
                <div className="rightbar-title">
                    <p>Sponsored</p>
                </div>
                <Sponsor link={"https://accurategraphics.netlify.app/"} image={"images/ad1.png"} title={"Best Graphic Designers in town"} desc={"accurategraphics.com"}/>

                <Sponsor link={"https://harshgitdeep.netlify.app/"} image={"images/ad2.png"} title={"Visit portfolio website"} desc={"harshgitdeep.com"}/>
            </div>
            <div className="div-friend">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req">
                        <p>Friend Request</p>
                        <small><a href="#!">See all</a></small>
                    </div>
                </div>
                <FriendRequest image={"images/c1.jpeg"} name={"Facebook User"} ago={"6d"}/>
            </div>

            <div className="div">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req contact-title">
                        <p>Contacts</p>
                        <img src="images/dotmen.png" alt=""/>
                    </div>
                </div>
                <Friends image={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Rahul Singh"}/>
                <Friends image={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Amit Patel"}/>
                <Friends image={"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Sonia Sharma"}/>
                <Friends image={"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Ravi Kumar"}/>
                <Friends image={"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Suresh Gupta"}/>
                <Friends image={"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Anjali Malhotra"}/>
                <Friends image={"https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Kumar Choudhary"}/>
                <Friends image={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Priya Verma"}/>
                <Friends image={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Raj Singhania"}/>
                <Friends image={"https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Deepak Joshi"}/>
                <Friends image={"https://plus.unsplash.com/premium_photo-1687832783320-35671afbf484?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Pooja Khanna"}/>



                <div className="div">
                    <div className="rightbar-title">
                        <div className=" flex-row friend-req contact-title">
                            <p>Group conversations</p>
                        </div>
                    </div>
                    <Friends image={"images/c11.png"} name={"Freecodecamp"}/>
                    <Friends image={"https://avatars.githubusercontent.com/u/11613311?v=4"} name={"Chai aur Code"}/>
                    <Friends image={"images/accurategraphicslogo.ico"} name={"Accurate Graphics"}/>
                    <Friends image={"https://www.developmentaid.org/files/organizationLogos/chitkara-university-47016.jpg"} name={"Chitkara University"}/>
                    
                </div>
            </div>
        </nav>
    )
}
