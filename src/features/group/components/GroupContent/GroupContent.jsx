import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CreatePost from './../CreatePost/index';
import PostList from './../PostList/index';
import { Grid, Container, Box, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import postApi from './../../../../api/postApi';
import PostSkeleton from './../../../../components/PostSkeleton/PostSkeleton';
import ContestList from './../ContestList/ContestList';
import eventApi from './../../../../api/eventApi';

function GroupContent(props) {

    const { id: groupId } = useParams();
    console.log(groupId);


    const [postList, setPostList] = useState([]);
    const [contestList, setContestList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListPost = async () => {
            try {
                const { data } = await postApi.getAll(groupId);
                console.log(data);
                setPostList(data.data)
            } catch (error) {
                console.log('Failed to fetch ListPost', error)
            }
            setLoading(false);
        }
        fetchListPost();
    }, [groupId])

    useEffect(() => {
        const fetchListContest = async () => {
            try {
                const { data } = await eventApi.getListContestByGroup(groupId);
                setContestList(data.data);
            } catch (error) {
                console.log('Failed to fetch list Contest', error)
            }
            setLoading(false);
        }
        fetchListContest();
    }, [groupId])

    const handleCreatePostSubmit = (values) => {
        // console.log('Post submit: ', values);
        // const newPost = {
        //     id: initPostList.lenght + 1,
        //     userName: 'Current User',
        //     avatar: 'avatar.jpg',
        //     postContent: values.postContent,
        //     postTime: 'test'
        // }
        // const newPostList = [...initPostList, newPost];
        // setPostList(newPostList);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {/* Form to create a post */}
                        <CreatePost onSubmit={handleCreatePostSubmit} />

                        {/* get List post */}

                        {loading ? <PostSkeleton /> : <PostList postList={postList} />}

                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            {loading ? <PostSkeleton /> : <ContestList contestList={contestList} />}
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default GroupContent;