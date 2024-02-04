import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './index';
import { fetchfromAPI } from '../utils/fetchFormApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();
    console.log("inputValue", searchTerm);
    useEffect(()=> {
        fetchfromAPI(`/search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items));
    }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search Result for:{searchTerm} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed;
