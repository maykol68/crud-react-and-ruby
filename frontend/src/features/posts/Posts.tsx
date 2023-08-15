import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPostsAsync, selectPosts } from './postSlice';
import { useDispatch } from 'react-redux';

function Posts() {
    const posts = useAppSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPostsAsync());
    }, [dispatch])

  return <div><h1>Posts</h1></div>;
}

export default Posts;