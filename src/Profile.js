import React, { useEffect, useState } from 'react'
import './profile.css'
import { db, auth } from "./firebase";
import { Route, Routes, Switch, Link } from 'react-router-dom'
// import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { type } from '@testing-library/user-event/dist/type';
import Post from './Post';

const Profile = () => {

    const [user, setUser] = useState('raj');
    const [posts, setPosts] = useState([]);
    var [postcount, setpostcount] = useState(0)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, [])
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // if user has logged in...
                setUser(authUser);


            } else {
                setUser(null);
            }

        })

        return () => {
            unsubscribe();
        }
    }, []);
    
  

        const postcountfn=()=>{
            posts.map(({ id, post }) => {
                if(user.displayName === post.username){
                    postcount++;
                    ;}
                })
                
        }
        postcountfn()
    return (

        <>

            <div className="container">

                <div className="top">
                    <h3 username>{user.displayName}</h3>
                </div>
                <div className="profile__header">
                    <div className="profile__pic__div">
                        <img className='profile__pic' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Profle pic" />
                    </div>
                    <div className="followers">
                        <div className="follower">
                            <h3>{postcount}</h3>
                            <p>Posts</p>
                        </div>

                        <div className="follower">
                            <h3>345</h3>
                            <p>Fowlloers</p>
                        </div>


                        <div className="follower">
                            <h3>316</h3>
                            <p>Following</p>
                        </div>
                    </div>

                </div>
                <div className="name">{user.displayName}</div>
                <div className="bio">
                    ➡Traveller||Programmer
                    <br></br>
                    ➡Music Lover
                    <br />
                    ➡Wish Me On 16 August🎂
                </div>
                <div className="posts__in__profile">
                    {

                        posts.map(({ id, post }) => {
                            // if(post.username===user.displayName){


                            return (

                                <>


                                    {

                                        user.displayName == post.username ? (
                                          
                                            
                                            < div className="post__icon"> 
                                    {/* { setpostcount(postcount+1)} */}

                                     <img className='post__icon__img' src={post.imgurl} alt="post" /> 

                                </div>
                            ):(
                    <div className="">

                    </div>
                    )
                                }


                </>
                )
                        // }
                        })
                    }




                {/* { posts.forEach(post => {
                console.log(post.post.imgurl);
            })} */}

            </div>

        </div>
            
        </>
    )
}

export default Profile