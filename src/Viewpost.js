import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import Post from './Post';

const Viewpost = () => {
    const [userlist, setPosts] = useState([]);
    const [user, setUser] = useState('raj');
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
  
    //   console.log(userlist);
  return (
    
    <>
    lkjl;k
        { 
      
          
        //   <Post
          
        //    key={id} 
        //   postId={id}
        //   username={post.username}
        //   posttimestamp={post.timestamp}
          
        //   user={user} 
        //   imgurl={post.imgurl} 
        //   caption={post.caption}
        //   likeCount={post.like}
        //   />
       
      }
    </>
  )
}

export default Viewpost