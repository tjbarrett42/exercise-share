import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';
import Footer from '../Footer/Footer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [ search, setSearch ] = useState('');
  const [ tags, setTags ] = useState([]);
  const navigate = useNavigate();
  // const [ likeFilterId, setLikeFilterOn ] = useState('');
  // const [ likeFilterOn, setLikeFilterId ] = useState(false);

  const searchPost = () => {
    if(search.trim() || tags){
      dispatch(getPostsBySearch({ search, tags: tags.join(',')}));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',') || 'none'}`);
      
      // TODO: Implement filtering by like ID
      // dispatch(getPostsBySearch({ search, tags: tags.join(','), likeFilterId }));
      // navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}&likeFilterId=${likeFilterId}`);
      // console.log('search query: ', search, ' tag query: ', tags, ' likeFilterId: ', likeFilterId);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
        searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
  
  // TODO: Implement filtering by like ID
  // const handleLikeFilter = (prevLikeFilterOn) => {
  //   if (likeFilterOn) {
  //     setLikeFilterOn(false);
  //     setLikeFilterId(null);
  //   } else {
  //     setLikeFilterOn(true);
  //     setLikeFilterId(user?.result?.googleId);
  //   }
  //   console.log('user info', user?.result?.googleId);
  // };
  
  return (
    <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField name="search" variant="outlined" label="Search Exercises" onKeyPress={handleKeyPress} fullWidth value={search} onChange={(e) => setSearch(e.target.value)}/>
                <ChipInput
                  style={{ margin: '10px 0'}}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                {/* TODO: Implement like filter checkbox/toggle <Checkbox onClick={handleLikeFilter} label="My Likes Only"></Checkbox> */}
                <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                <Button component={Link} to="/" variant="outlined" color="primary" size="small" fullWidth>Clear search</Button>
              </AppBar>
              
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} elevation={6}>
                  <Pagination page={page}/>
                </Paper>
              )}
              
            </Grid>
          </Grid>
          <Footer/>
        </Container>
        
        
      </Grow>
  );
}

export default Home