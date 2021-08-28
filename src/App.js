import React, {useEffect, useRef} from 'react'
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import {Grid} from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import useStyles from './styles';
import { SpeechState, useSpeechContext } from '@speechly/react-client';
import { SpeechProvider } from '@speechly/react-client';      // speechly has its own provider

const App = () => {

  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = ()=> main.current.scrollIntoView();

  useEffect(()=>{
     // for mobile devices scroll to top
      if(speechState === SpeechState.Recording) {
           executeScroll();
      }
      
  }, [speechState]);

  return (
    <div>
      <SpeechProvider appId = "4e6f1bbf-345a-4827-ad19-4d73aacac903" language = "en-US"> 
            <Grid className = {classes.grid} container spacing = {0} alignItems = "center" justifyContent = "center" style = {{ height: '90vh' }}>
                  <Grid item xs = {10} sm = {3} className = {classes.mobile}>
                        <Details title = "Income"/>
                  </Grid>
                  <Grid ref = {main} item xs = {10} sm = {4} className = {classes.main}>
                        <Main/>
                  </Grid>
                  <Grid item xs = {10} sm = {3} className = {classes.desktop}>
                        <Details title = "Income"/>
                  </Grid>
                  <Grid item xs = {10} sm = {3} className = {classes.last}> 
                        <Details title = "Expense"/>
                  </Grid>
            </Grid>
            <PushToTalkButtonContainer>
            <PushToTalkButton/>
            <ErrorPanel/>
            </PushToTalkButtonContainer>
      </SpeechProvider>
    </div>
  )
}

export default App;

