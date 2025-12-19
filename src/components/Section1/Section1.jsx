
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {  

  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content users={props.user}/>
    </div>
  )
}

export default Section1