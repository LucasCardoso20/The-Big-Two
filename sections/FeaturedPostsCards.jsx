import React, { useState, useEffect } from 'react';
import { PostCard } from '../components';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const FeaturedPostsCards = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
  
    useEffect(() => {
      getFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
      });
    }, []);

    return(
        <div>
            {dataLoaded && featuredPosts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    )
}

export default FeaturedPostsCards;