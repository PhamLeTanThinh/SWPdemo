import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import CreatePost from '../../../group/components/CreatePost/index';
import PostSkeleton from '../../../../components/PostSkeleton/PostSkeleton';
import tradingPostApi from '../../../../api/TradingPostApi';
import TradingPostList from './../TradingPostList/TradingPostList';

TradingContent.propTypes = {

};

function TradingContent(props) {

    const { id: tradingGroupId } = useParams();
    const [listTradingPost, setListTradingPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListTradingPost = async () => {
            try {
                const { data } = await tradingPostApi.getAll(tradingGroupId);
                console.log(data);
                setListTradingPost("tradingPost: ", data.data)
            } catch (error) {
                console.log('Failed to fetch ListTradingPost', error)
            }
            setLoading(false);
        }
        fetchListTradingPost();
    }, [tradingGroupId])

    const handleCreatePostSubmit = (values) => {

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        
                    </Grid>
                    <Grid item xs={8}>
                        {/* Form to create a post */}
                        <CreatePost onSubmit={handleCreatePostSubmit} />

                        {/* get List post */}

                        {loading ? <PostSkeleton /> : <TradingPostList listTradingPost={listTradingPost} />}
                    </Grid>
                    <Grid item xs={2}>
                       
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default TradingContent;