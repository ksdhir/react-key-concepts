import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Form from '../components/activity-10-2/Form/Form'

const Activity102 = function () {
  const { state } = useLocation()

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>{state.pageName}</h1>
      <p>{state.description}</p>
      {/* container */}
      <section>
        <Form />;
      </section>
    </div>
  )
}

export default Activity102
