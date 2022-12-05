import React, {useContext, useEffect} from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext)
  // if we want to use this useeffect as component did mount
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      This is About {a.state.name} and studying in class {a.state.class}
    </div>
  )
}

export default About